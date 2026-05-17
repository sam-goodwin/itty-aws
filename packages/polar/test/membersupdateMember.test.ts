import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { memberscreateMember } from "../src/operations/memberscreateMember.ts";
import { membersdeleteMember } from "../src/operations/membersdeleteMember.ts";
import { membersupdateMember } from "../src/operations/membersupdateMember.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("membersupdateMember", () => {
  it(
    "renames an existing member and updates role",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const customerIdRef = yield* Ref.make<string | null>(null);
          const memberIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const customer = yield* customerscreate({
              type: "team",
              email: testEmail(`distilled-polar-mum-team-${testRunId}`),
              name: `distilled-polar-mum-team-${testRunId}`,
              metadata: { test_run_id: testRunId },
            });
            yield* Ref.set(customerIdRef, customer.id);

            const originalName = `distilled-polar-mum-${testRunId}`;
            const created = yield* memberscreateMember({
              customer_id: customer.id,
              email: testEmail(`distilled-polar-mum-${testRunId}`),
              name: originalName,
              role: "member",
            });
            yield* Ref.set(memberIdRef, created.id);

            const renamed = `distilled-polar-mum-renamed-${testRunId}`;
            const updated = yield* membersupdateMember({
              id: created.id,
              name: renamed,
              role: "billing_manager",
            });

            expect(updated.id).toBe(created.id);
            expect(updated.customer_id).toBe(customer.id);
            expect(updated.name).toBe(renamed);
            expect(updated.role).toBe("billing_manager");
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const memberId = yield* Ref.get(memberIdRef);
                if (memberId !== null) {
                  yield* membersdeleteMember({ id: memberId }).pipe(
                    Effect.ignore,
                  );
                }
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
    "returns NotFound for a non-existent member id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        membersupdateMember({
          id: "00000000-0000-0000-0000-000000000000",
          name: `distilled-polar-mum-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed member id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        membersupdateMember({
          id: "not-a-valid-uuid",
          name: `distilled-polar-mum-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
