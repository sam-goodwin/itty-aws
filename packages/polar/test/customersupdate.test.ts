import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { customersupdate } from "../src/operations/customersupdate.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customersupdate", () => {
  it("renames an existing customer", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const customerIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const email = testEmail(`distilled-polar-cu-${testRunId}`);
          const originalName = `distilled-polar-cu-${testRunId}`;

          const created = yield* customerscreate({
            email,
            name: originalName,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(customerIdRef, created.id);

          const renamed = `distilled-polar-cu-renamed-${testRunId}`;
          const updated = yield* customersupdate({
            id: created.id,
            name: renamed,
            metadata: { test_run_id: testRunId, updated: "yes" },
          });

          expect(updated.id).toBe(created.id);
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
        customersupdate({
          id: "00000000-0000-0000-0000-000000000000",
          name: `distilled-polar-cu-missing-${testRunId}`,
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
        customersupdate({
          id: "not-a-valid-uuid",
          name: `distilled-polar-cu-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
