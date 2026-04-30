import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandSsoControllerAuthorize } from "../src/operations/UserlandSsoControllerAuthorize.ts";
import { runEffect, testRunId } from "./setup.ts";

const clientId = process.env.WORKOS_CLIENT_ID ?? `client_test_${testRunId}`;

describe("UserlandSsoControllerAuthorize", () => {
  it(
    "initiates the user management authorization flow",
    async () => {
      // The endpoint normally responds with a redirect; the SDK's output
      // schema is Void, so a successful call simply resolves without error.
      const result = await runEffect(
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
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when client_id is empty",
    async () => {
      const error = await runEffect(
        UserlandSsoControllerAuthorize({
          client_id: "",
          redirect_uri: "https://example.com/callback",
          response_type: "code",
          provider: "authkit",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when redirect_uri is malformed",
    async () => {
      const error = await runEffect(
        UserlandSsoControllerAuthorize({
          client_id: clientId,
          redirect_uri: "not a url",
          response_type: "code",
          provider: "authkit",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
