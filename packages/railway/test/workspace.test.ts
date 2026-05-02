import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { workspace } from "../src/operations/workspace.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("workspace", () => {
  it("happy path - returns workspace details for the authenticated token's workspace", async () => {
    const result = await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        if (!workspaceId) {
          throw new Error("test setup: authenticated token has no workspaces");
        }
        return yield* workspace({ workspaceId });
      }),
    );

    expect(typeof result.id).toBe("string");
    expect(typeof result.name).toBe("string");
    expect(typeof result.createdAt).toBe("string");
    expect(typeof result.updatedAt).toBe("string");
    expect(typeof result.adoptionLevel).toBe("number");
    expect(typeof result.has2FAEnforcement).toBe("boolean");
    expect(typeof result.hasAutomaticDiagnosis).toBe("boolean");
    expect(typeof result.hasGuardrailsAccess).toBe("boolean");
    expect(typeof result.hasSAML).toBe("boolean");
    expect(typeof result.redactedDueTo2FAPending).toBe("boolean");
    expect(["FREE", "HOBBY", "PRO"]).toContain(result.plan);
    expect(["FREE", "TEAM", "USER"]).toContain(result.subscriptionModel);

    expect(Array.isArray(result.adoptionHistory)).toBe(true);
    expect(Array.isArray(result.members)).toBe(true);
    expect(Array.isArray(result.referredUsers)).toBe(true);
    expect(Array.isArray(result.usersWithout2FA)).toBe(true);

    // customer is a non-null struct
    expect(typeof result.customer.id).toBe("string");
    expect(typeof result.customer.stripeCustomerId).toBe("string");
    expect(typeof result.customer.appliedCredits).toBe("number");
    expect(typeof result.customer.creditBalance).toBe("number");
    expect(typeof result.customer.currentUsage).toBe("number");
    expect(typeof result.customer.hasExhaustedFreePlan).toBe("boolean");
    expect(typeof result.customer.isPrepaying).toBe("boolean");
    expect(typeof result.customer.isTrialing).toBe("boolean");
    expect(typeof result.customer.isUsageSubscriber).toBe("boolean");
    expect(typeof result.customer.isWithdrawingToCredits).toBe("boolean");
    expect(typeof result.customer.remainingUsageCreditBalance).toBe("number");
    expect(typeof result.customer.trialDaysRemaining).toBe("number");
    expect(["ACTIVE", "CANCELLED", "INACTIVE", "PAST_DUE", "UNPAID"]).toContain(
      result.customer.state,
    );
    expect(typeof result.customer.billingPeriod.start).toBe("string");
    expect(typeof result.customer.billingPeriod.end).toBe("string");
    expect(Array.isArray(result.customer.invoices)).toBe(true);
    expect(Array.isArray(result.customer.subscriptions)).toBe(true);
    expect(Array.isArray(result.customer.supportedWithdrawalPlatforms)).toBe(
      true,
    );
    expect(Array.isArray(result.customer.taxIds)).toBe(true);

    // members entries have typed role enum
    for (const m of result.members) {
      expect(typeof m.id).toBe("string");
      expect(typeof m.email).toBe("string");
      expect(["ADMIN", "MEMBER", "VIEWER"]).toContain(m.role);
    }

    // team is NullOr - only check shape if present
    if (result.team !== null) {
      expect(typeof result.team.id).toBe("string");
      expect(typeof result.team.name).toBe("string");
      expect(typeof result.team.createdAt).toBe("string");
      expect(typeof result.team.updatedAt).toBe("string");
    }

    // partnerProfile is NullOr
    if (result.partnerProfile !== null) {
      expect([
        "BASIC_PARTNER",
        "LIMITED_PARTNER",
        "TEMPLATE_MAINTAINER",
      ]).toContain(result.partnerProfile.type);
    }

    // supportTierOverride is NullOr
    if (result.supportTierOverride !== null) {
      expect(["BUSINESS_CLASS", "BUSINESS_CLASS_TRIAL"]).toContain(
        result.supportTierOverride,
      );
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      workspace({ workspaceId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent workspace id", async () => {
    const error = await runEffect(
      workspace({ workspaceId: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
