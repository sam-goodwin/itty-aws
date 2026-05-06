import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { filescreate } from "../src/operations/filescreate.ts";
import { filesuploaded } from "../src/operations/filesuploaded.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("filesuploaded", () => {
  it(
    "completes a file upload after PUTting the bytes to the presigned URL",
    { timeout: 60_000 },
    async () => {
      const size = 1024;
      const created = await runEffect(
        filescreate({
          name: `distilled-polar-filesuploaded-${testRunId}.bin`,
          mime_type: "application/octet-stream",
          size,
          service: "downloadable",
          upload: {
            parts: [
              {
                number: 1,
                chunk_start: 0,
                chunk_end: size - 1,
              },
            ],
          },
        }),
      );

      const part = created.upload.parts[0]!;
      const body = new Uint8Array(size);
      const putResponse = await fetch(part.url, {
        method: "PUT",
        body,
        headers: part.headers ?? {},
      });
      expect(putResponse.ok).toBe(true);
      const rawEtag = putResponse.headers.get("etag") ?? "";
      const etag = rawEtag.replace(/^"|"$/g, "");
      expect(etag.length).toBeGreaterThan(0);

      const result = await runEffect(
        filesuploaded({
          id: created.id,
          path: created.upload.path,
          parts: [
            {
              number: part.number,
              checksum_etag: etag,
              checksum_sha256_base64: null,
            },
          ],
        }),
      );

      expect(result.id).toBe(created.id);
      expect(result.is_uploaded).toBe(true);
      expect(result.name).toBe(
        `distilled-polar-filesuploaded-${testRunId}.bin`,
      );
      expect(result.size).toBe(size);
      expect(result.service).toBe("downloadable");
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.size_readable).toBe("string");
    },
  );

  it(
    "returns RequestValidationError for a non-existent file id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        filesuploaded({
          id: "00000000-0000-0000-0000-000000000000",
          path: "downloadable/00000000-0000-0000-0000-000000000000",
          parts: [
            {
              number: 1,
              checksum_etag: "deadbeef",
              checksum_sha256_base64: null,
            },
          ],
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "returns UnprocessableEntity for a malformed file id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        filesuploaded({
          id: "not-a-valid-uuid",
          path: "downloadable/whatever",
          parts: [
            {
              number: 1,
              checksum_etag: "deadbeef",
              checksum_sha256_base64: null,
            },
          ],
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "returns RequestValidationError when completing an upload with mismatched parts",
    { timeout: 30_000 },
    async () => {
      const created = await runEffect(
        filescreate({
          name: `distilled-polar-filesuploaded-forbidden-${testRunId}.bin`,
          mime_type: "application/octet-stream",
          size: 1024,
          service: "downloadable",
          upload: {
            parts: [
              {
                number: 1,
                chunk_start: 0,
                chunk_end: 1023,
              },
            ],
          },
        }),
      );

      const error = await runEffect(
        filesuploaded({
          id: created.id,
          path: created.upload.path,
          parts: [
            {
              number: 1,
              checksum_etag: "not-a-real-etag",
              checksum_sha256_base64: null,
            },
          ],
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
