import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerscreate", () => {
  it("creates an individual customer", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const customerIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const email = testEmail(`distilled-polar-cc-${testRunId}`);
          const name = `distilled-polar-cc-${testRunId}`;

          const created = yield* customerscreate({
            email,
            name,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(customerIdRef, created.id);

          expect(typeof created.id).toBe("string");
          expect(created.email).toBe(email);
          expect(created.name).toBe(name);
          expect(created.type).toBe("individual");
          expect(typeof created.organization_id).toBe("string");
          expect(typeof created.email_verified).toBe("boolean");
          expect(created.metadata.test_run_id).toBe(testRunId);
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
    "rejects a malformed email with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerscreate({
          email: "not-an-email",
          name: `distilled-polar-cc-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
