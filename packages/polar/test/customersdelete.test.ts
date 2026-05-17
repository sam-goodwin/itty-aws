import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customersget } from "../src/operations/customersget.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customersdelete", () => {
  it("deletes an existing customer", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const customerIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const created = yield* customerscreate({
            email: testEmail(`distilled-polar-cd-${testRunId}`),
            name: `distilled-polar-cd-${testRunId}`,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(customerIdRef, created.id);

          const result = yield* customersdelete({ id: created.id });
          expect(result).toBeUndefined();

          // Clear ref so cleanup hook doesn't double-delete and assert the
          // subsequent get fails with NotFound.
          yield* Ref.set(customerIdRef, null);

          const lookupError = yield* customersget({
            id: created.id,
          }).pipe(Effect.flip);
          expect(lookupError._tag).toBe("ResourceNotFound");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const customerId = yield* Ref.get(customerIdRef);
              if (customerId !== null) {
                yield* customersdelete({ id: customerId }).pipe(Effect.ignore);
              }
            }),
          ),
        );
      }),
    );
  });

  it(
    "returns NotFound for a non-existent customer id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customersdelete({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed customer id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customersdelete({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
