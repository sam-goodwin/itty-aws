import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customersgetExternal } from "../src/operations/customersgetExternal.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customersgetExternal", () => {
  it("fetches a customer by external_id", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const customerIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const externalId = `ext-${testRunId}`;
          const email = testEmail(`distilled-polar-cge-${testRunId}`);
          const name = `distilled-polar-cge-${testRunId}`;

          const created = yield* customerscreate({
            email,
            name,
            external_id: externalId,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(customerIdRef, created.id);

          const fetched = yield* customersgetExternal({
            external_id: externalId,
          });
          expect(fetched.id).toBe(created.id);
          expect(fetched.external_id).toBe(externalId);
          expect(fetched.email).toBe(email);
          expect(fetched.name).toBe(name);
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
    "returns NotFound for a non-existent external_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customersgetExternal({
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
        customersgetExternal({
          external_id: "x".repeat(1024),
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
