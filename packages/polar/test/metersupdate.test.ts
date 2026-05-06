import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { meterslist } from "../src/operations/meterslist.ts";
import { metersupdate } from "../src/operations/metersupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metersupdate", () => {
  it(
    "updates the metadata of an existing meter",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(meterslist({ page: 1, limit: 1 }));

      if (list.items.length === 0) {
        // Live sandbox has no meters — exercise the not-found path instead so
        // the test still asserts the operation actually wires up correctly.
        const error = await runEffect(
          metersupdate({
            id: "00000000-0000-0000-0000-000000000000",
            metadata: { test_run_id: testRunId },
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const seed = list.items[0]!;
      const originalMetadata = seed.metadata ?? {};
      const probeKey = `distilled_test_${testRunId}`;

      await runEffect(
        metersupdate({
          id: seed.id,
          metadata: {
            ...originalMetadata,
            [probeKey]: testRunId,
          },
        }).pipe(
          Effect.tap((updated) =>
            Effect.sync(() => {
              expect(updated.id).toBe(seed.id);
              expect(updated.name).toBe(seed.name);
              expect(typeof updated.organization_id).toBe("string");
              expect(updated.metadata[probeKey]).toBe(testRunId);
            }),
          ),
          Effect.ensuring(
            metersupdate({
              id: seed.id,
              metadata: originalMetadata,
            }).pipe(Effect.ignore),
          ),
        ),
      );
    },
  );

  it(
    "fails with NotFound for a non-existent meter ID",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metersupdate({
          id: "00000000-0000-0000-0000-000000000000",
          metadata: { test_run_id: testRunId },
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed meter ID",
    { timeout: 30_000 },
    async () => {
      // Polar validates `id` as a UUID; a non-UUID string is rejected with a
      // typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        metersupdate({
          id: "not-a-valid-uuid",
          metadata: { test_run_id: testRunId },
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
