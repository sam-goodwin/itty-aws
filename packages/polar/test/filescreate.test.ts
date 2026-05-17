import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { filescreate } from "../src/operations/filescreate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("filescreate", () => {
  it("creates a downloadable file upload", { timeout: 30_000 }, async () => {
    const result = await runEffect(
      filescreate({
        name: `distilled-polar-filescreate-${testRunId}.bin`,
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

    expect(typeof result.id).toBe("string");
    expect(result.id.length).toBeGreaterThan(0);
    expect(result.name).toBe(`distilled-polar-filescreate-${testRunId}.bin`);
    expect(result.mime_type).toBe("application/octet-stream");
    expect(result.size).toBe(1024);
    expect(result.service).toBe("downloadable");
    expect(typeof result.organization_id).toBe("string");
    expect(typeof result.path).toBe("string");
    expect(typeof result.size_readable).toBe("string");
    expect(typeof result.upload.id).toBe("string");
    expect(typeof result.upload.path).toBe("string");
    expect(Array.isArray(result.upload.parts)).toBe(true);
    expect(result.upload.parts.length).toBe(1);
    const part = result.upload.parts[0]!;
    expect(part.number).toBe(1);
    expect(part.chunk_start).toBe(0);
    expect(part.chunk_end).toBe(1023);
    expect(typeof part.url).toBe("string");
    expect(typeof part.expires_at).toBe("string");
  });

  it(
    "rejects an invalid size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        filescreate({
          name: `distilled-polar-filescreate-bad-${testRunId}.bin`,
          mime_type: "application/octet-stream",
          size: -1,
          service: "downloadable",
          upload: {
            parts: [
              {
                number: 1,
                chunk_start: 0,
                chunk_end: 0,
              },
            ],
          },
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
