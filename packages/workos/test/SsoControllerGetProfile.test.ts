import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { SsoControllerGetProfile } from "../src/operations/SsoControllerGetProfile.ts";
import { runEffect } from "./setup.ts";

describe("SsoControllerGetProfile", () => {
  it(
    "returns a profile or fails with NotFound when no access token is associated with the request",
    async () => {
      // The endpoint normally exchanges an SSO access token for a profile.
      // Our test client authenticates with WORKOS_API_KEY rather than a
      // user-bound access token, so the call typically fails with NotFound.
      // Either outcome exercises the live API and verifies the SDK's
      // response handling.
      const result = await runEffect(
        SsoControllerGetProfile({}).pipe(
          Effect.matchEffect({
            onSuccess: (profile) => Effect.succeed({ ok: true as const, profile }),
            onFailure: (error) => Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.profile).toBeDefined();
        expect(typeof result.profile.id).toBe("string");
        expect(typeof result.profile.object).toBe("string");
        expect(typeof result.profile.connection_id).toBe("string");
        expect(typeof result.profile.idp_id).toBe("string");
        expect(typeof result.profile.email).toBe("string");
        expect(typeof result.profile.connection_type).toBe("string");
        expect(typeof result.profile.raw_attributes).toBe("object");
      } else {
        expect(result.error._tag).toBe("NotFound");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when called without a valid SSO access token",
    async () => {
      // With API-key authentication and no SSO access token in scope, the
      // server cannot resolve a profile and returns NotFound.
      const error = await runEffect(
        SsoControllerGetProfile({}).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
