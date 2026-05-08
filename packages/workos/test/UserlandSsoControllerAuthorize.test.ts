import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandSsoControllerAuthorize } from "../src/operations/UserlandSsoControllerAuthorize.ts";
import { runEffect, runOrSkipOnEnvLimitation, testRunId } from "./setup.ts";

const clientId = process.env.WORKOS_CLIENT_ID ?? `client_test_${testRunId}`;

describe("UserlandSsoControllerAuthorize", () => {
  it(
    "initiates the user management authorization flow",
    async (ctx) => {
      // The endpoint normally responds with a redirect; the SDK's output
      // schema is Void, so a successful call simply resolves without error.
      const result = await runOrSkipOnEnvLimitation(
        ctx,
        UserlandSsoControllerAuthorize({
          client_id: clientId,
          redirect_uri: "https://example.com/callback",
          response_type: "code",
          provider: "authkit",
          state: `state_${testRunId}`,
        }),
      );
      expect(result).toBeUndefined();
    },
    30_000,
  );

  it(
    "tolerates an empty client_id",
    async () => {
      // Userland SSO authorize is a redirect endpoint with a Void response —
      // WorkOS surfaces invalid params via the redirect itself, not a typed
      // HTTP error. Accept either a typed error or a successful Void result.
      const result = await runEffect(
        UserlandSsoControllerAuthorize({
          client_id: "",
          redirect_uri: "https://example.com/callback",
          response_type: "code",
          provider: "authkit",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ kind: "error" as const, e }),
            onSuccess: () => Effect.succeed({ kind: "ok" as const }),
          }),
        ),
      );
      if (result.kind === "error") {
        expect(["BadRequest", "WorkosParseError"]).toContain(result.e._tag);
      }
    },
    30_000,
  );

  it(
    "tolerates a malformed redirect_uri",
    async () => {
      const result = await runEffect(
        UserlandSsoControllerAuthorize({
          client_id: clientId,
          redirect_uri: "not a url",
          response_type: "code",
          provider: "authkit",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ kind: "error" as const, e }),
            onSuccess: () => Effect.succeed({ kind: "ok" as const }),
          }),
        ),
      );
      if (result.kind === "error") {
        expect(["BadRequest", "WorkosParseError"]).toContain(result.e._tag);
      }
    },
    30_000,
  );
});
