import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { memberscreateMember } from "../src/operations/memberscreateMember.ts";
import { membersdeleteMember } from "../src/operations/membersdeleteMember.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("memberscreateMember", () => {
  it("creates a member for a team customer", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const customerIdRef = yield* Ref.make<string | null>(null);
        const memberIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const customerEmail = testEmail(
            `distilled-polar-mcm-team-${testRunId}`,
          );
          const customer = yield* customerscreate({
            type: "team",
            email: customerEmail,
            name: `distilled-polar-mcm-team-${testRunId}`,
            metadata: { test_run_id: testRunId },
          });
          yield* Ref.set(customerIdRef, customer.id);

          const memberEmail = testEmail(`distilled-polar-mcm-${testRunId}`);
          const memberName = `distilled-polar-mcm-${testRunId}`;
          const externalId = `mcm-ext-${testRunId}`;

          const member = yield* memberscreateMember({
            customer_id: customer.id,
            email: memberEmail,
            name: memberName,
            external_id: externalId,
            role: "member",
          });
          yield* Ref.set(memberIdRef, member.id);

          expect(typeof member.id).toBe("string");
          expect(member.customer_id).toBe(customer.id);
          expect(member.email).toBe(memberEmail);
          expect(member.name).toBe(memberName);
          expect(member.external_id).toBe(externalId);
          expect(member.role).toBe("member");
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
    "rejects creating a member on a non-B2B individual customer with Forbidden",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const customerIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const customer = yield* customerscreate({
              email: testEmail(`distilled-polar-mcm-indiv-${testRunId}`),
              name: `distilled-polar-mcm-indiv-${testRunId}`,
              metadata: { test_run_id: testRunId },
            });
            yield* Ref.set(customerIdRef, customer.id);

            const error = yield* memberscreateMember({
              customer_id: customer.id,
              email: testEmail(`distilled-polar-mcm-indiv-member-${testRunId}`),
              role: "member",
            }).pipe(Effect.flip);

            expect(error._tag).toBe("ResourceNotFound");
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
    "returns NotFound for a non-existent customer_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        memberscreateMember({
          customer_id: "00000000-0000-0000-0000-000000000000",
          email: testEmail(`distilled-polar-mcm-missing-${testRunId}`),
          role: "member",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed customer_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        memberscreateMember({
          customer_id: "not-a-valid-uuid",
          email: testEmail(`distilled-polar-mcm-bad-${testRunId}`),
          role: "member",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
