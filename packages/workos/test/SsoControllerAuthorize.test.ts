import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { SsoControllerAuthorize } from "../src/operations/SsoControllerAuthorize.ts";
import { runEffect, testRunId } from "./setup.ts";

const clientId = process.env.WORKOS_CLIENT_ID ?? `client_test_${testRunId}`;

describe("SsoControllerAuthorize", () => {
  it(
    "initiates the SSO flow and returns an authorization url",
    async () => {
      const result = await runEffect(
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
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when client_id is empty",
    async () => {
      const error = await runEffect(
        SsoControllerAuthorize({
          client_id: "",
          redirect_uri: "https://example.com/callback",
          response_type: "code",
          provider: "GoogleOAuth",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
