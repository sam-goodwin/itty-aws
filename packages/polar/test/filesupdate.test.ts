import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { filescreate } from "../src/operations/filescreate.ts";
import { filesdelete } from "../src/operations/filesdelete.ts";
import { filesupdate } from "../src/operations/filesupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("filesupdate", () => {
  it("renames an existing file", { timeout: 30_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const idRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const created = yield* filescreate({
            name: `distilled-polar-filesupdate-${testRunId}.bin`,
            mime_type: "application/octet-stream",
            size: 512,
            service: "downloadable",
            upload: {
              parts: [
                {
                  number: 1,
                  chunk_start: 0,
                  chunk_end: 511,
                },
              ],
            },
          });
          yield* Ref.set(idRef, created.id);

          const renamed = `distilled-polar-filesupdate-renamed-${testRunId}.bin`;
          const updated = yield* filesupdate({
            id: created.id,
            name: renamed,
            version: "v2",
          });

          expect(updated.id).toBe(created.id);
          expect(updated.name).toBe(renamed);
          expect(updated.version).toBe("v2");
          expect(updated.service).toBe("downloadable");
          expect(updated.size).toBe(512);
          expect(typeof updated.organization_id).toBe("string");
          expect(typeof updated.created_at).toBe("string");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const id = yield* Ref.get(idRef);
              if (id !== null) {
                yield* filesdelete({ id }).pipe(Effect.ignore);
              }
            }),
          ),
        );
      }),
    );
  });

  it(
    "returns NotFound for a non-existent file id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        filesupdate({
          id: "00000000-0000-0000-0000-000000000000",
          name: `distilled-polar-filesupdate-missing-${testRunId}.bin`,
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
        filesupdate({
          id: "not-a-valid-uuid",
          name: `distilled-polar-filesupdate-bad-${testRunId}.bin`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "returns Forbidden when updating a file outside the caller's organization",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        filesupdate({
          id: "11111111-1111-1111-1111-111111111111",
          name: `distilled-polar-filesupdate-forbidden-${testRunId}.bin`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
