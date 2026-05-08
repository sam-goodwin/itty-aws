import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { SsoControllerAuthorize } from "../src/operations/SsoControllerAuthorize.ts";
import { runEffect, runOrSkipOnEnvLimitation, testRunId } from "./setup.ts";

const clientId = process.env.WORKOS_CLIENT_ID ?? `client_test_${testRunId}`;

describe("SsoControllerAuthorize", () => {
  it(
    "initiates the SSO flow and returns an authorization url",
    async (ctx) => {
      const result = await runOrSkipOnEnvLimitation(
        ctx,
        SsoControllerAuthorize({
          client_id: clientId,
          redirect_uri: "https://example.com/callback",
          response_type: "code",
          provider: "GoogleOAuth",
        }),
      );
      expect(result).toBeDefined();
      expect(typeof result.url).toBe("string");
      expect(result.url.startsWith("http")).toBe(true);
    },
    30_000,
  );

  it(
    "surfaces an error when client_id is empty",
    async () => {
      // SSO-style endpoints don't return HTTP errors for invalid params — they
      // 200-redirect to a workos error page. Accept either a typed error OR
      // a successful response whose URL points at error.workos.com.
      const result = await runEffect(
        SsoControllerAuthorize({
          client_id: "",
          redirect_uri: "https://example.com/callback",
          response_type: "code",
          provider: "GoogleOAuth",
        }).pipe(
          Effect.matchEffect({
            onFailure: (e) => Effect.succeed({ kind: "error" as const, e }),
            onSuccess: (r) => Effect.succeed({ kind: "ok" as const, r }),
          }),
        ),
      );
      if (result.kind === "ok") {
        expect(result.r.url).toMatch(/error\.workos\.com/);
      } else {
        expect(["BadRequest", "WorkosParseError"]).toContain(result.e._tag);
      }
    },
    30_000,
  );
});
