import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { NotFound, Unauthorized } from "../src/errors.ts";
import { deleteUserIcon } from "../src/operations/deleteUserIcon.ts";
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

describe("deleteUserIcon", () => {
  it.skipIf(!OWNED_USER_ID)(
    "removes the avatar of the authenticated user",
    async () => {
      // DELETE /user/{id_or_username}/icon clears the avatar and returns
      // 204. Modrinth treats the route as idempotent — calling it again on
      // a user with no avatar still succeeds — so we don't need to restore
      // anything afterwards.
      const id = OWNED_USER_ID as string;
      await runEffect(deleteUserIcon({ id_or_username: id }));
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a username that does not exist",
    async () => {
      // With auth Modrinth resolves the route, looks up the user, and
      // returns 404 when the username is unknown.
      const username = `zz-distilled-${testRunId}`;
      const error = await runEffect(
        deleteUserIcon({ id_or_username: username }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // DELETE /user/{id_or_username}/icon requires auth. Modrinth runs the
    // auth check before any user lookup, so any well-formed username
    // (including the public `jellysquid3` account) yields 401 with no API
    // key.
    const error = await Effect.runPromise(
      deleteUserIcon({ id_or_username: "jellysquid3" }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });

  // BadRequest note:
  //   This DELETE route takes no body and no query parameters — only a
  //   single path segment for `id_or_username`, which the SDK schema
  //   accepts as any string. Modrinth's response set for the route is
  //   `204` (deleted), `401` (no/invalid auth), and `404` (user not
  //   found); empirically it does not return `400` for any well-formed
  //   request the SDK can produce, so the typed `BadRequest` branch is
  //   unreachable here and cannot be exercised without bypassing the SDK
  //   entirely.
});
