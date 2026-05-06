import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { memberscreateMember } from "../src/operations/memberscreateMember.ts";
import { membersdeleteMember } from "../src/operations/membersdeleteMember.ts";
import { membersupdateMemberByExternalId } from "../src/operations/membersupdateMemberByExternalId.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("membersupdateMemberByExternalId", () => {
  it(
    "renames an existing member by external_id",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const customerIdRef = yield* Ref.make<string | null>(null);
          const memberIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const customer = yield* customerscreate({
              type: "team",
              email: testEmail(`distilled-polar-mumbe-team-${testRunId}`),
              name: `distilled-polar-mumbe-team-${testRunId}`,
              metadata: { test_run_id: testRunId },
            });
            yield* Ref.set(customerIdRef, customer.id);

            const memberExternalId = `mumbe-ext-${testRunId}`;
            const originalName = `distilled-polar-mumbe-${testRunId}`;
            const created = yield* memberscreateMember({
              customer_id: customer.id,
              email: testEmail(`distilled-polar-mumbe-${testRunId}`),
              name: originalName,
              external_id: memberExternalId,
              role: "member",
            });
            yield* Ref.set(memberIdRef, created.id);

            const renamed = `distilled-polar-mumbe-renamed-${testRunId}`;
            const updated = yield* membersupdateMemberByExternalId({
              external_id: memberExternalId,
              customer_id: customer.id,
              name: renamed,
              role: "billing_manager",
            });

            expect(updated.id).toBe(created.id);
            expect(updated.customer_id).toBe(customer.id);
            expect(updated.external_id).toBe(memberExternalId);
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
    "returns PolarRequestValidationError for a non-existent member external_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        membersupdateMemberByExternalId({
          external_id: `nonexistent-${testRunId}`,
          customer_id: "00000000-0000-0000-0000-000000000000",
          name: `distilled-polar-mumbe-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects an oversized external_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        membersupdateMemberByExternalId({
          external_id: "x".repeat(1024),
          customer_id: "00000000-0000-0000-0000-000000000000",
          name: `distilled-polar-mumbe-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
