import * as Effect from "effect/Effect";
import * as Layer from "effect/Layer";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import * as R2 from "./packages/cloudflare/src/services/r2.ts";
import * as User from "./packages/cloudflare/src/services/user.ts";
import {
  Credentials,
  fromApiToken,
  type OAuthCredentials,
} from "./packages/cloudflare/src/credentials.ts";
import { AwsClient } from "aws4fetch";
import * as crypto from "node:crypto";
import * as fs from "node:fs";
import * as path from "node:path";
import * as readline from "node:readline/promises";

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

const ACCOUNT_ID = "3a00d2d136f0e066b8e6761b6cff4895";
const BUCKET_NAME = `playground-test-${globalThis.crypto.randomUUID().slice(0, 8)}`;
const R2_ENDPOINT = `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`;

const oauthCredentials: OAuthCredentials = {
  type: "oauth",
  accessToken: Redacted.make(
    "o5SqjJ5rozKCAwktsJ2R7mHVjcaSgCic2rclhZJ9EoQ.lEelornofLrRPkI_La5QYXvzIwzMQID2jVP-yCOyamM",
  ),
  refreshToken: Redacted.make(
    "qsoEk5HpeuzAbaYi0UNaHmqyzVnobmMIqR7oW8r4K_0._jtuKFpIJVaOobzAcvlCiWNL2xTsoTIfTRxbumbHDJg",
  ),
  expiresAt: 1775955136998,
  apiBaseUrl: "https://api.cloudflare.com/client/v4",
};

// ---------------------------------------------------------------------------
// Layers
// ---------------------------------------------------------------------------

const CredentialsLayer = Layer.succeed(
  Credentials,
  Effect.succeed(oauthCredentials),
);

const MainLayer = Layer.mergeAll(CredentialsLayer, FetchHttpClient.layer);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const waitForInput = (prompt: string): Effect.Effect<string> =>
  Effect.promise(async () => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const answer = await rl.question(prompt);
    rl.close();
    return answer;
  });

const logError = (label: string, err: unknown) => {
  console.error(`❌ ${label} failed:`, JSON.stringify(err, null, 2));
};

// ---------------------------------------------------------------------------
// Main program
// ---------------------------------------------------------------------------

const program = Effect.gen(function* () {
  // 1. Find R2 permission group
  console.log("\n🔍 Fetching permission groups...\n");
  const permGroups = yield* User.listTokenPermissionGroups({}).pipe(
    Effect.tapError((err) => Effect.sync(() => logError("listTokenPermissionGroups", err))),
  );
  const r2WriteGroup = permGroups.result.find(
    (g) => g.name === "Workers R2 Storage Write",
  );
  if (!r2WriteGroup?.id) throw new Error("R2 Storage Write permission group not found");
  console.log(`Using: "${r2WriteGroup.name}" (${r2WriteGroup.id})`);

  // 2. Create R2 API token
  console.log("\n🔑 Creating R2 API token...\n");
  const token = yield* User.createToken({
    name: `playground-r2-token-${Date.now()}`,
    policies: [
      {
        effect: "allow",
        permissionGroups: [{ id: r2WriteGroup.id }],
        resources: { [`com.cloudflare.api.account.${ACCOUNT_ID}`]: "*" },
      },
    ],
  }).pipe(
    Effect.tapError((err) => Effect.sync(() => logError("createToken", err))),
  );
  console.log(`✅ Token created!`);
  console.log(`   Name: ${token.name}`);
  console.log(`   ID:   ${token.id}`);

  const r2TokenLayer = Layer.mergeAll(
    fromApiToken({ apiToken: token.value! }),
    FetchHttpClient.layer,
  );

  // 3. Create R2 bucket
  console.log(`\n🪣 Creating R2 bucket "${BUCKET_NAME}"...\n`);
  yield* R2.createBucket({ accountId: ACCOUNT_ID, name: BUCKET_NAME }).pipe(
    Effect.tapError((err) => Effect.sync(() => logError("createBucket", err))),
  );
  console.log(`✅ Bucket created! Name: ${BUCKET_NAME}`);

  // 4. Get temporary credentials
  console.log("\n🔐 Creating temporary R2 credentials (waiting 5s for propagation)...\n");
  yield* Effect.sleep("5 seconds");

  const createTempCreds = R2.createTemporaryCredential({
    accountId: ACCOUNT_ID,
    bucket: BUCKET_NAME,
    parentAccessKeyId: token.id!,
    permission: "object-read-write",
    ttlSeconds: 900,
  }).pipe(
    Effect.provide(r2TokenLayer),
    Effect.tapError((err) => Effect.sync(() => logError("createTemporaryCredential", err))),
  );

  const tempCreds = yield* createTempCreds.pipe(
    Effect.catch(() =>
      Effect.gen(function* () {
        console.log("   Retrying in 5s...");
        yield* Effect.sleep("5 seconds");
        return yield* createTempCreds;
      }),
    ),
  );
  console.log("✅ Temporary credentials created!");

  // 5. Create S3 client with temp credentials
  const s3 = new AwsClient({
    accessKeyId: tempCreds.accessKeyId!,
    secretAccessKey: tempCreds.secretAccessKey!,
    sessionToken: tempCreds.sessionToken!,
    service: "s3",
    region: "auto",
  });

  // 6. Generate presigned PUT URL and upload README.md
  const objectKey = "README.md";
  const objectUrl = `${R2_ENDPOINT}/${BUCKET_NAME}/${objectKey}`;

  console.log(`\n📝 Generating presigned PUT URL for "${objectKey}"...\n`);
  const presignedPut = yield* Effect.promise(() =>
    s3.sign(objectUrl, { method: "PUT", aws: { signQuery: true } }),
  );
  console.log(`Presigned URL: ${presignedPut.url.toString().slice(0, 100)}...`);

  console.log(`\n📤 Uploading README.md via presigned URL...\n`);
  const readmeContent = fs.readFileSync(path.resolve(import.meta.dir, "README.md"));
  console.log(`   File size: ${readmeContent.length} bytes`);

  const uploadRes = yield* Effect.promise(() =>
    fetch(presignedPut.url, { method: "PUT", body: readmeContent }),
  );
  if (uploadRes.ok) {
    console.log(`✅ Upload successful! Status: ${uploadRes.status}`);
  } else {
    const body = yield* Effect.promise(() => uploadRes.text());
    console.error(`❌ Upload failed! Status: ${uploadRes.status}`);
    console.error(body);
    throw new Error(`Upload failed: ${uploadRes.status}`);
  }

  // 7. Verify by downloading via presigned GET
  console.log(`\n🔗 Verifying upload with presigned GET...\n`);
  const presignedGet = yield* Effect.promise(() =>
    s3.sign(objectUrl, { method: "GET", aws: { signQuery: true } }),
  );
  const getRes = yield* Effect.promise(() => fetch(presignedGet.url));
  const downloaded = yield* Effect.promise(() => getRes.text());
  console.log(`✅ Verified! Downloaded ${downloaded.length} bytes`);
  console.log(`   First 100 chars: ${downloaded.slice(0, 100)}...`);
  console.log(`\n🔗 Presigned GET URL:\n${presignedGet.url.toString()}`);

  // 8. Wait for user input
//   yield* waitForInput("\n⏳ Press Enter to clean up...");

  // 9. Cleanup - delete object then bucket
  console.log(`\n🗑️  Deleting object "${objectKey}"...`);
  const presignedDel = yield* Effect.promise(() =>
    s3.sign(objectUrl, { method: "DELETE", aws: { signQuery: true } }),
  );
  console.log(`   DELETE URL: ${presignedDel.url.toString().slice(0, 100)}...`);
  const delRes = yield* Effect.promise(() =>
    fetch(presignedDel.url, { method: "DELETE" }),
  );
  console.log(`   DELETE response status: ${delRes.status}`);
  if (!delRes.ok) {
    const body = yield* Effect.promise(() => delRes.text());
    console.error(`❌ Delete object failed! Status: ${delRes.status}`, body);
  } else {
    console.log("✅ Object deleted!");
  }

  console.log(`\n🗑️  Deleting bucket "${BUCKET_NAME}"...`);
  yield* R2.deleteBucket({ accountId: ACCOUNT_ID, bucketName: BUCKET_NAME }).pipe(
    Effect.tapError((err) => Effect.sync(() => logError("deleteBucket", err))),
  );
  console.log("✅ Bucket deleted!");

  console.log(`\n🗑️  Disabling API token...`);
  const updateResult = yield* User.updateToken({
    tokenId: token.id!,
    name: token.name!,
    policies: [],
    status: "disabled",
  }).pipe(
    Effect.catch((err) => {
      logError("updateToken", err);
      return Effect.succeed(null);
    }),
  );
  console.log("Update result:", JSON.stringify(updateResult, null, 2));
  console.log("✅ Done!\n");
});

// ---------------------------------------------------------------------------
// Run
// ---------------------------------------------------------------------------

Effect.runPromise(program.pipe(Effect.provide(MainLayer))).catch((err) => {
  console.error("❌ Unhandled error:");
  console.error(typeof err === "object" ? JSON.stringify(err, null, 2) : err);
  if (err instanceof Error) console.error(err.stack);
  process.exit(1);
});
