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

describeLive("customersget", () => {
  it("fetches a customer by id", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const customerIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const email = testEmail(`distilled-polar-cg-${testRunId}`);
          const name = `distilled-polar-cg-${testRunId}`;

          const created = yield* customerscreate({
            email,
            name,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(customerIdRef, created.id);

          const fetched = yield* customersget({ id: created.id });
          expect(fetched.id).toBe(created.id);
          expect(fetched.email).toBe(email);
          expect(fetched.name).toBe(name);
          expect(fetched.type).toBe("individual");
          expect(fetched.organization_id).toBe(created.organization_id);
          expect(fetched.metadata.test_run_id).toBe(testRunId);
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
        customersget({
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
        customersget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
