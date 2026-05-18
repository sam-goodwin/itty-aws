import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { Unauthorized } from "../src/errors.ts";
import { getUserFromAuth } from "../src/operations/getUserFromAuth.ts";
import { runEffect } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;

// Layer with no API key so we can deterministically trigger 401 even when
// MODRINTH_API_KEY is set in the environment.
const NoAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: undefined,
    apiBaseUrl: DEFAULT_API_BASE_URL,
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

describe("getUserFromAuth", () => {
  it.skipIf(!HAS_API_KEY)(
    "resolves the user owning the configured API key",
    async () => {
      // GET /user reads the Authorization header and returns the matching
      // user profile. With a valid API key Modrinth returns the same shape
      // as GET /user/{id_or_username}.
      const result = await runEffect(getUserFromAuth({}));

      expect(typeof result.id).toBe("string");
      expect(result.id.length).toBeGreaterThan(0);
      expect(typeof result.username).toBe("string");
      expect(result.username.length).toBeGreaterThan(0);
      expect(typeof result.avatar_url).toBe("string");
      expect(typeof result.created).toBe("string");
      expect(["admin", "moderator", "developer"]).toContain(result.role);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // GET /user is purely auth-driven: there is no path or query param to
    // resolve, so removing the API key sends Modrinth straight into the
    // auth check, which responds 401.
    const error = await Effect.runPromise(
      getUserFromAuth({}).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });

  // NotFound note:
  //   GET /user takes no path or query parameters — it identifies the user
  //   purely from the Authorization header. There is no resource id the
  //   caller can supply that would miss, so Modrinth's response set for
  //   this route is `200` (valid token) or `401` (missing/invalid token).
  //   404 is unreachable through this operation and therefore cannot be
  //   exercised here.
});
