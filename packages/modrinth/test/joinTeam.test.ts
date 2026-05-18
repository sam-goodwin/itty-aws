import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { deleteTeamMember } from "../src/operations/deleteTeamMember.ts";
import { joinTeam } from "../src/operations/joinTeam.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// POST /team/{id}/join accepts a pending team invitation for the
// auth'd user. The happy path is quadruple-gated: API key, a team id
// that the auth'd user has a pending invitation to (via
// MODRINTH_TEST_JOIN_TEAM_ID), the auth'd user's id (via
// MODRINTH_TEST_OWNED_USER_ID, used to leave the team for cleanup),
// and an explicit opt-in flag MODRINTH_TEST_ALLOW_JOIN_TEAM=1.
const JOIN_TEAM_ID = process.env.MODRINTH_TEST_JOIN_TEAM_ID;
const OWNED_USER_ID = process.env.MODRINTH_TEST_OWNED_USER_ID;
const ALLOW_JOIN = process.env.MODRINTH_TEST_ALLOW_JOIN_TEAM === "1";
const SHOULD_RUN_HAPPY =
  HAS_API_KEY && !!JOIN_TEAM_ID && !!OWNED_USER_ID && ALLOW_JOIN;

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

describe("joinTeam", () => {
  it.skipIf(!SHOULD_RUN_HAPPY)(
    "accepts a pending team invitation for the authenticated user",
    async () => {
      // Real team membership is observable to other team members. The
      // SDK call returns 204/Void on success; we assert that and rely
      // on ensuring-style cleanup to leave the team afterwards (via
      // DELETE /team/{id}/members/{user_id} with the auth'd user's id)
      // so subsequent runs can re-invite and re-join.
      const teamId = JOIN_TEAM_ID as string;
      const userId = OWNED_USER_ID as string;

      const result = await runEffect(
        joinTeam({ id: teamId }).pipe(
          Effect.ensuring(
            // Always leave the team after the test completes, even on
            // failure. Effect.ignore swallows any failure of the delete
            // call itself so cleanup never masks the real result.
            deleteTeamMember({
              id: teamId,
              id_or_username: userId,
            }).pipe(Effect.ignore),
          ),
        ),
      );

      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth team ids are base62-encoded; the path validator rejects
    // ids containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any auth or DB lookup, so the typed
    // BadRequest is reachable without an API key. This 400 mapping is
    // added by patches/002-add-mutation-bad-request.patch.json.
    const error = await runEffect(
      joinTeam({ id: `zz!${testRunId}` }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a base62-shaped team id that does not exist",
    async () => {
      // With auth and a base62-shaped team id Modrinth resolves the
      // route, looks up the team, and returns 404 when nothing matches.
      // We pad the testRunId so the path validator accepts it and the
      // lookup actually fires.
      const id = `zz${testRunId.slice(0, 6)}`;
      const error = await runEffect(joinTeam({ id }).pipe(Effect.flip));

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // POST /team/{id}/join requires auth — only the invited user may
    // accept their own invitation. With a base62-shaped id the path
    // validator passes, the auth check fires next, and Modrinth returns
    // 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      joinTeam({ id }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
