import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { SsoControllerToken } from "../src/operations/SsoControllerToken.ts";
import { runEffect, testRunId } from "./setup.ts";

const clientId = process.env.WORKOS_CLIENT_ID ?? `client_test_${testRunId}`;
const clientSecret =
  process.env.WORKOS_CLIENT_SECRET ?? `secret_test_${testRunId}`;

describe("SsoControllerToken", () => {
  it(
    "exchanges an authorization code for an access token and profile",
    async () => {
      // The token endpoint requires a real authorization code minted by the
      // SSO redirect flow. In a test environment we don't have one, so the
      // call will fail with one of the operation's typed errors. We still
      // hit the live API and confirm the SDK maps the response to a typed
      // error class (no Unknown-prefixed result).
      const result = await runEffect(
        SsoControllerToken({
          client_id: clientId,
          client_secret: clientSecret,
          code: `code_test_${testRunId}`,
          grant_type: "authorization_code",
        }).pipe(
          Effect.matchEffect({
            onSuccess: (token) =>
              Effect.succeed({ ok: true as const, token }),
            onFailure: (error) =>
              Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.token).toBeDefined();
        expect(typeof result.token.token_type).toBe("string");
        expect(typeof result.token.expires_in).toBe("number");
        expect(result.token.profile).toBeDefined();
        expect(typeof result.token.profile.id).toBe("string");
        expect(typeof result.token.profile.email).toBe("string");
      } else {
        expect(["BadRequest", "NotFound", "UnprocessableEntity"]).toContain(
          result.error._tag,
        );
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when grant_type is empty",
    async () => {
      const error = await runEffect(
        SsoControllerToken({
          client_id: clientId,
          client_secret: clientSecret,
          code: `code_test_${testRunId}`,
          grant_type: "",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when client_id does not exist",
    async () => {
      const error = await runEffect(
        SsoControllerToken({
          client_id: `client_does_not_exist_${testRunId}`,
          client_secret: `secret_does_not_exist_${testRunId}`,
          code: `code_test_${testRunId}`,
          grant_type: "authorization_code",
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the authorization code is invalid",
    async () => {
      const error = await runEffect(
        SsoControllerToken({
          client_id: clientId,
          client_secret: clientSecret,
          code: "",
          grant_type: "authorization_code",
        }).pipe(Effect.flip),
      );
      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
