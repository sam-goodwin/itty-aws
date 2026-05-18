import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { deleteFileFromHash } from "../src/operations/deleteFileFromHash.ts";
import { getProjectVersions } from "../src/operations/getProjectVersions.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// Truly destructive: provide a sha1 hash whose underlying file the caller
// owns and is OK losing — once removed it is gone.
const DELETABLE_FILE_HASH = process.env.MODRINTH_TEST_DELETABLE_FILE_SHA1;

// Layer with no API key so we can deterministically trigger 401 even when
// MODRINTH_API_KEY is set in the environment.
const NoAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: undefined,
    apiBaseUrl: DEFAULT_API_BASE_URL,
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

describe("deleteFileFromHash", () => {
  it.skipIf(!DELETABLE_FILE_HASH)(
    "deletes a file the caller owns by sha1 hash",
    async () => {
      // DELETE /version_file/{hash}?algorithm=sha1 returns 204. The hash
      // pointed at by the env var is consumed by this run; the caller is
      // expected to provide a freshly-uploaded file's hash each time.
      const hash = DELETABLE_FILE_HASH as string;
      await runEffect(deleteFileFromHash({ hash, algorithm: "sha1" }));
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a hash that does not match any file",
    async () => {
      // A 40-character hex string is shaped like a sha1 hash but with the
      // testRunId baked in is guaranteed not to match any uploaded file;
      // Modrinth returns 404 for it.
      const hash = "0".repeat(32) + testRunId;
      const error = await runEffect(
        deleteFileFromHash({ hash, algorithm: "sha1" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // DELETE /version_file/{hash} requires auth. We pull a real sha1 hash
    // from the public `sodium` project so the path resolves and Modrinth
    // reaches the auth check, which returns 401 with no API key.
    const versions = await runEffect(
      getProjectVersions({
        id_or_slug: "sodium",
        include_changelog: false,
      }),
    );
    expect(versions.length).toBeGreaterThan(0);
    const sha1 = versions[0]!.files[0]!.hashes.sha1;
    expect(typeof sha1).toBe("string");

    const error = await Effect.runPromise(
      deleteFileFromHash({ hash: sha1 as string, algorithm: "sha1" }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
