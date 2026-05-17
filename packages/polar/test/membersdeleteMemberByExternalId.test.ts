import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { memberscreateMember } from "../src/operations/memberscreateMember.ts";
import { membersdeleteMember } from "../src/operations/membersdeleteMember.ts";
import { membersdeleteMemberByExternalId } from "../src/operations/membersdeleteMemberByExternalId.ts";
import { membersgetMemberByExternalId } from "../src/operations/membersgetMemberByExternalId.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("membersdeleteMemberByExternalId", () => {
  it(
    "deletes an existing member by external_id",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const customerIdRef = yield* Ref.make<string | null>(null);
          const memberIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const customer = yield* customerscreate({
              type: "team",
              email: testEmail(`distilled-polar-mdmbe-team-${testRunId}`),
              name: `distilled-polar-mdmbe-team-${testRunId}`,
              metadata: { test_run_id: testRunId },
            });
            yield* Ref.set(customerIdRef, customer.id);

            const memberExternalId = `mdmbe-ext-${testRunId}`;
            const created = yield* memberscreateMember({
              customer_id: customer.id,
              email: testEmail(`distilled-polar-mdmbe-${testRunId}`),
              name: `distilled-polar-mdmbe-${testRunId}`,
              external_id: memberExternalId,
              role: "member",
            });
            yield* Ref.set(memberIdRef, created.id);

            const result = yield* membersdeleteMemberByExternalId({
              external_id: memberExternalId,
              customer_id: customer.id,
            });
            expect(result).toBeUndefined();

            // Clear member ref so cleanup doesn't double-delete and assert
            // subsequent get fails.
            yield* Ref.set(memberIdRef, null);

            const lookupError = yield* membersgetMemberByExternalId({
              external_id: memberExternalId,
              customer_id: customer.id,
            }).pipe(Effect.flip);
            expect(lookupError._tag).toBe("ResourceNotFound");
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
    "returns NotFound for a non-existent member external_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        membersdeleteMemberByExternalId({
          external_id: `nonexistent-${testRunId}`,
          customer_id: "00000000-0000-0000-0000-000000000000",
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
        membersdeleteMemberByExternalId({
          external_id: "x".repeat(1024),
          customer_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
