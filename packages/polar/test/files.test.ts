import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { filescreate } from "../src/operations/filescreate.ts";
import { filesdelete } from "../src/operations/filesdelete.ts";
import { fileslist } from "../src/operations/fileslist.ts";
import { filesupdate } from "../src/operations/filesupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Files", () => {
  it(
    "creates, lists, updates, and deletes a file record",
    { timeout: 60_000 },
    async () => {
      const name = `distilled-file-${testRunId}.txt`;
      const updatedName = `distilled-file-${testRunId}-updated.txt`;

      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* filescreate({
            organization_id: organizationId,
            name,
            mime_type: "text/plain",
            size: 12,
            service: "downloadable",
            upload: {
              parts: [
                {
                  number: 1,
                  chunk_start: 0,
                  chunk_end: 12,
                },
              ],
            },
            version: "1.0.0",
          });

          return yield* Effect.gen(function* () {
            const listed = yield* fileslist({
              organization_id: organizationId,
              limit: 1,
            });
            const updated = yield* filesupdate({
              id: created.id,
              name: updatedName,
              version: "1.0.1",
            });
            const deleted = yield* filesdelete({ id: created.id });

            return { created, listed, updated, deleted };
          }).pipe(
            Effect.ensuring(filesdelete({ id: created.id }).pipe(Effect.ignore)),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.name).toBe(name);
      expect(result.created.service).toBe("downloadable");
      expect(result.created.is_uploaded).toBe(false);
      expect(result.created.upload.parts.length).toBe(1);

      expect(result.listed.pagination.max_page).toBeGreaterThanOrEqual(0);
      expect(result.updated.id).toBe(result.created.id);
      expect(result.updated.name).toBe(updatedName);
      expect(result.updated.version).toBe("1.0.1");
      expect(result.deleted).toBeUndefined();
    },
  );

  it(
    "fails with NotFound for a missing file",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        filesdelete({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
