import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customersgetStateExternal } from "../src/operations/customersgetStateExternal.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customersgetStateExternal", () => {
  it(
    "fetches a customer's state by external_id",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const customerIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const externalId = `ext-cgse-${testRunId}`;
            const email = testEmail(`distilled-polar-cgse-${testRunId}`);
            const name = `distilled-polar-cgse-${testRunId}`;

            const created = yield* customerscreate({
              email,
              name,
              external_id: externalId,
              metadata: { test_run_id: testRunId },
            });
            yield* Ref.set(customerIdRef, created.id);

            const state = yield* customersgetStateExternal({
              external_id: externalId,
            });
            expect(state.id).toBe(created.id);
            expect(state.external_id).toBe(externalId);
            expect(state.email).toBe(email);
            expect(state.name).toBe(name);
            expect(state.organization_id).toBe(created.organization_id);
            expect(Array.isArray(state.active_subscriptions)).toBe(true);
            expect(Array.isArray(state.granted_benefits)).toBe(true);
            expect(Array.isArray(state.active_meters)).toBe(true);
            expect(state.active_subscriptions.length).toBe(0);
            expect(state.granted_benefits.length).toBe(0);
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
        customersgetStateExternal({
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
        customersgetStateExternal({
          external_id: "x".repeat(1024),
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
