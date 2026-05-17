import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customersdeleteExternal } from "../src/operations/customersdeleteExternal.ts";
import { customersgetExternal } from "../src/operations/customersgetExternal.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customersdeleteExternal", () => {
  it(
    "deletes an existing customer by external_id",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const customerIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const externalId = `ext-cde-${testRunId}`;
            const created = yield* customerscreate({
              email: testEmail(`distilled-polar-cde-${testRunId}`),
              name: `distilled-polar-cde-${testRunId}`,
              external_id: externalId,
              metadata: { test_run_id: testRunId },
            });
            yield* Ref.set(customerIdRef, created.id);

            const result = yield* customersdeleteExternal({
              external_id: externalId,
            });
            expect(result).toBeUndefined();

            // Clear ref so cleanup hook doesn't double-delete and assert the
            // subsequent get fails with NotFound.
            yield* Ref.set(customerIdRef, null);

            const lookupError = yield* customersgetExternal({
              external_id: externalId,
            }).pipe(Effect.flip);
            expect(lookupError._tag).toBe("ResourceNotFound");
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
        customersdeleteExternal({
          external_id: `nonexistent-${testRunId}`,
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
        customersdeleteExternal({
          external_id: "x".repeat(1024),
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
