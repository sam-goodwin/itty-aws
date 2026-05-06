import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { filescreate } from "../src/operations/filescreate.ts";
import { filesdelete } from "../src/operations/filesdelete.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("filesdelete", () => {
  it("deletes an existing file", { timeout: 30_000 }, async () => {
    const created = await runEffect(
      filescreate({
        name: `distilled-polar-filesdelete-${testRunId}.bin`,
        mime_type: "application/octet-stream",
        size: 256,
        service: "downloadable",
        upload: {
          parts: [
            {
              number: 1,
              chunk_start: 0,
              chunk_end: 255,
            },
          ],
        },
      }),
    );

    const result = await runEffect(filesdelete({ id: created.id }));
    expect(result).toBeUndefined();

    const error = await runEffect(
      filesdelete({ id: created.id }).pipe(Effect.flip),
    );
    expect(error._tag).toBe("ResourceNotFound");
  });

  it(
    "returns NotFound for a non-existent file id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        filesdelete({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "returns UnprocessableEntity for a malformed file id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        filesdelete({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "returns Forbidden when deleting a file outside the caller's organization",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        filesdelete({
          id: "11111111-1111-1111-1111-111111111111",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
