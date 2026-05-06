import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { memberscreateMember } from "../src/operations/memberscreateMember.ts";
import { membersdeleteMember } from "../src/operations/membersdeleteMember.ts";
import { membersgetMember } from "../src/operations/membersgetMember.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("membersdeleteMember", () => {
  it("deletes an existing member", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const customerIdRef = yield* Ref.make<string | null>(null);
        const memberIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const customer = yield* customerscreate({
            type: "team",
            email: testEmail(`distilled-polar-mdm-team-${testRunId}`),
            name: `distilled-polar-mdm-team-${testRunId}`,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(customerIdRef, customer.id);

          const created = yield* memberscreateMember({
            customer_id: customer.id,
            email: testEmail(`distilled-polar-mdm-${testRunId}`),
            name: `distilled-polar-mdm-${testRunId}`,
            role: "member",
          });
          yield* Ref.set(memberIdRef, created.id);

          const result = yield* membersdeleteMember({ id: created.id });
          expect(result).toBeUndefined();

          // Clear ref so cleanup doesn't double-delete and assert subsequent
          // get fails with NotFound.
          yield* Ref.set(memberIdRef, null);

          const lookupError = yield* membersgetMember({
            id: created.id,
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
                yield* customersdelete({ id: customerId }).pipe(Effect.ignore);
              }
            }),
          ),
        );
      }),
    );
  });

  it(
    "returns NotFound for a non-existent member id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        membersdeleteMember({
          id: "00000000-0000-0000-0000-000000000000",
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
        membersdeleteMember({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
