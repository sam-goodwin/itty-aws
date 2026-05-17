import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customersupdateExternal } from "../src/operations/customersupdateExternal.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customersupdateExternal", () => {
  it(
    "renames an existing customer by external_id",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const customerIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const externalId = `ext-cue-${testRunId}`;
            const email = testEmail(`distilled-polar-cue-${testRunId}`);
            const originalName = `distilled-polar-cue-${testRunId}`;

            const created = yield* customerscreate({
              email,
              name: originalName,
              external_id: externalId,
              metadata: { test_run_id: testRunId },
            });
            yield* Ref.set(customerIdRef, created.id);

            const renamed = `distilled-polar-cue-renamed-${testRunId}`;
            const updated = yield* customersupdateExternal({
              external_id: externalId,
              name: renamed,
              metadata: { test_run_id: testRunId, updated: "yes" },
            });

            expect(updated.id).toBe(created.id);
            expect(updated.external_id).toBe(externalId);
            expect(updated.name).toBe(renamed);
            expect(updated.email).toBe(email);
            expect(updated.organization_id).toBe(created.organization_id);
            expect(updated.metadata.test_run_id).toBe(testRunId);
            expect(updated.metadata.updated).toBe("yes");
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const customerId = yield* Ref.get(customerIdRef);
                if (customerId !== null) {
                  yield* customersdelete({ id: customerId }).pipe(
                    Effect.ignore,
                  );
                }
              }),
            ),
          );
        }),
      );
    },
  );

  it(
    "returns NotFound for a non-existent external_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customersupdateExternal({
          external_id: `nonexistent-${testRunId}`,
          name: `distilled-polar-cue-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects an oversized external_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customersupdateExternal({
          external_id: "x".repeat(1024),
          name: `distilled-polar-cue-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
