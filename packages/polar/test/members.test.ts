import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { memberscreateMember } from "../src/operations/memberscreateMember.ts";
import { membersdeleteMember } from "../src/operations/membersdeleteMember.ts";
import { membersdeleteMemberByExternalId } from "../src/operations/membersdeleteMemberByExternalId.ts";
import { membersgetMember } from "../src/operations/membersgetMember.ts";
import { membersgetMemberByExternalId } from "../src/operations/membersgetMemberByExternalId.ts";
import { memberslistMembers } from "../src/operations/memberslistMembers.ts";
import { membersupdateMember } from "../src/operations/membersupdateMember.ts";
import { membersupdateMemberByExternalId } from "../src/operations/membersupdateMemberByExternalId.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;
const missingId = "00000000-0000-4000-8000-000000000000";

describeLive("Members", () => {
  it(
    "lists members and maps missing member operations to typed errors",
    { timeout: 60_000 },
    async () => {
      const externalId = `distilled-member-${testRunId}`;
      const [
        listed,
        createError,
        getError,
        updateError,
        deleteError,
        getExternalError,
        updateExternalError,
        deleteExternalError,
      ] = await Promise.all([
        runEffect(memberslistMembers({ limit: 10 })),
        runEffect(
          memberscreateMember({
            customer_id: missingId,
            email: `distilled.member.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`,
            role: "member",
          }).pipe(Effect.flip),
        ),
        runEffect(membersgetMember({ id: missingId }).pipe(Effect.flip)),
        runEffect(
          membersupdateMember({
            id: missingId,
            role: "member",
          }).pipe(Effect.flip),
        ),
        runEffect(membersdeleteMember({ id: missingId }).pipe(Effect.flip)),
        runEffect(
          membersgetMemberByExternalId({
            external_id: externalId,
            customer_id: missingId,
          }).pipe(Effect.flip),
        ),
        runEffect(
          membersupdateMemberByExternalId({
            external_id: externalId,
            customer_id: missingId,
            role: "member",
          }).pipe(Effect.flip),
        ),
        runEffect(
          membersdeleteMemberByExternalId({
            external_id: externalId,
            customer_id: missingId,
          }).pipe(Effect.flip),
        ),
      ]);

      expect(Array.isArray(listed.items)).toBe(true);
      expect(createError._tag).toBe("NotFound");
      expect(getError._tag).toBe("NotFound");
      expect(updateError._tag).toBe("NotFound");
      expect(deleteError._tag).toBe("NotFound");
      expect(getExternalError._tag).toBe("NotFound");
      expect(updateExternalError._tag).toBe("UnprocessableEntity");
      expect(deleteExternalError._tag).toBe("UnprocessableEntity");
    },
  );
});
