import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customersgetState } from "../src/operations/customersgetState.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customersgetState", () => {
  it("fetches a customer's state by id", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const customerIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const email = testEmail(`distilled-polar-cgs-${testRunId}`);
          const name = `distilled-polar-cgs-${testRunId}`;

          const created = yield* customerscreate({
            email,
            name,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(customerIdRef, created.id);

          const state = yield* customersgetState({ id: created.id });
          expect(state.id).toBe(created.id);
          expect(state.email).toBe(email);
          expect(state.name).toBe(name);
          expect(state.organization_id).toBe(created.organization_id);
          expect(Array.isArray(state.active_subscriptions)).toBe(true);
          expect(Array.isArray(state.granted_benefits)).toBe(true);
          expect(Array.isArray(state.active_meters)).toBe(true);
          // A freshly-created customer has no subscriptions or benefits
          expect(state.active_subscriptions.length).toBe(0);
          expect(state.granted_benefits.length).toBe(0);
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
        customersgetState({
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
        customersgetState({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
