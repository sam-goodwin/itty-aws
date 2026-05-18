import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { getFollowedProjects } from "../src/operations/getFollowedProjects.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
const OWNED_USER_ID = process.env.MODRINTH_TEST_OWNED_USER_ID;

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

describe("getFollowedProjects", () => {
  it.skipIf(!OWNED_USER_ID)(
    "returns the followed projects of the authenticated user",
    async () => {
      // GET /user/{id_or_username}/follows requires auth and returns the
      // public list of projects the auth'd user follows. Modrinth allows
      // the auth'd user to read their own follows, so we target the
      // configured owned user id.
      const id = OWNED_USER_ID as string;
      const projects = await runEffect(
        getFollowedProjects({ id_or_username: id }),
      );

      expect(Array.isArray(projects)).toBe(true);
      for (const project of projects) {
        expect(typeof project.id).toBe("string");
        expect(project.id.length).toBeGreaterThan(0);
        expect(typeof project.team).toBe("string");
        expect(typeof project.published).toBe("string");
        expect(typeof project.updated).toBe("string");
      }
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a username that does not exist",
    async () => {
      // With auth Modrinth resolves the route, looks up the user, and
      // returns 404 when the username is unknown.
      const username = `zz-distilled-${testRunId}`;
      const error = await runEffect(
        getFollowedProjects({ id_or_username: username }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // GET /user/{id_or_username}/follows requires auth. Modrinth runs the
    // auth check before any user lookup, so any well-formed username
    // (including the public `jellysquid3` account) yields 401 with no API
    // key.
    const error = await Effect.runPromise(
      getFollowedProjects({ id_or_username: "jellysquid3" }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
