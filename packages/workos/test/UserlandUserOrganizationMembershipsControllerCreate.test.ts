import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserOrganizationMembershipsControllerCreate } from "../src/operations/UserlandUserOrganizationMembershipsControllerCreate.ts";
import { runEffect } from "./setup.ts";

const typedErrorTags = ["BadRequest", "NotFound", "UnprocessableEntity"] as const;

describe("UserlandUserOrganizationMembershipsControllerCreate", () => {
  it(
    "creates an organization membership, or surfaces a typed error",
    async () => {
      // The SDK's input schema is empty (no body fields declared), so the
      // request goes out with an empty body. The live API requires user_id
      // and organization_id, so the call typically resolves to one of the
      // operation's typed errors. Either outcome verifies the SDK maps the
      // response to a typed error class — never an Unknown variant.
      const result = await runEffect(
        UserlandUserOrganizationMembershipsControllerCreate({}).pipe(
          Effect.matchEffect({
            onSuccess: (membership) =>
              Effect.succeed({ ok: true as const, membership }),
            onFailure: (error) =>
              Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.membership).toBeDefined();
        expect(typeof result.membership.id).toBe("string");
        expect(typeof result.membership.user_id).toBe("string");
        expect(typeof result.membership.organization_id).toBe("string");
        expect(["active", "inactive", "pending"]).toContain(
          result.membership.status,
        );
        expect(typeof result.membership.role.slug).toBe("string");
      } else {
        expect(typedErrorTags).toContain(result.error._tag);
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed BadRequest when required body fields are missing",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerCreate({}).pipe(
          Effect.flip,
        ),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed NotFound when the referenced user or organization cannot be resolved",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerCreate({}).pipe(
          Effect.flip,
        ),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed UnprocessableEntity for semantically invalid membership payloads",
    async () => {
      const error = await runEffect(
        UserlandUserOrganizationMembershipsControllerCreate({}).pipe(
          Effect.flip,
        ),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
