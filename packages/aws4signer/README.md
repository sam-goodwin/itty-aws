# @distilled.cloud/aws4signer

Effect-native AWS Signature Version 4 (SigV4) signer. It signs requests in the `Authorization` header or presigns them into the query string.

Use it to call any S3-compatible API (Cloudflare R2, MinIO, Backblaze B2, ...) without the full `@distilled.cloud/aws` SDK. Its only dependencies are `@distilled.cloud/core` (for crypto) and `effect`. `@distilled.cloud/aws` uses this package and re-exports it as `@distilled.cloud/aws/SigV4`.

## Installation

```bash
npm install @distilled.cloud/aws4signer effect
```

## Presign a Cloudflare R2 upload URL

```typescript
import * as SigV4 from "@distilled.cloud/aws4signer";
import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";

const presignPut = (accountId: string, bucket: string, key: string) =>
  Effect.gen(function* () {
    const url = new URL(`https://${accountId}.r2.cloudflarestorage.com/${bucket}/${key}`);
    url.searchParams.set("X-Amz-Expires", "900");
    const signed = yield* SigV4.sign({
      method: "PUT",
      url: url.toString(),
      accessKeyId: process.env.R2_ACCESS_KEY_ID!,
      secretAccessKey: Redacted.make(process.env.R2_SECRET_ACCESS_KEY!),
      service: "s3",
      region: "auto",
      signQuery: true,
    });
    return signed.url;
  });

Effect.runPromise(presignPut("<account-id>", "uploads", "avatar.png")).then(console.log);
```

## Sign a request

```typescript
const signed = yield* SigV4.sign({
  method: "GET",
  url: `https://${accountId}.r2.cloudflarestorage.com/${bucket}/${key}`,
  accessKeyId,
  secretAccessKey,
  service: "s3",
  region: "auto",
});
const response = yield* Effect.promise(() =>
  fetch(signed.url, { method: signed.method, headers: signed.headers }),
);
```

`sign` fails with a typed `SigningError`: `InvalidSigningUrl`, `InvalidSigningHeaders`, or `CryptoError`.
