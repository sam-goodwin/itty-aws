import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { addTeamMember } from "../src/operations/addTeamMember.ts";
import { deleteTeamMember } from "../src/operations/deleteTeamMember.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// POST /team/{id}/members sends a real team invitation to the target
// user (they receive a Modrinth notification). The happy path is
// triple-gated: API key, the auth'd user must own/admin a team passed
// via MODRINTH_TEST_TEAM_ID, a target user id passed via
// MODRINTH_TEST_INVITE_USER_ID, and an explicit opt-in flag
// MODRINTH_TEST_ALLOW_TEAM_INVITE=1. Cleanup removes the invitee.
const TEAM_ID = process.env.MODRINTH_TEST_TEAM_ID;
const INVITE_USER_ID = process.env.MODRINTH_TEST_INVITE_USER_ID;
const ALLOW_INVITE = process.env.MODRINTH_TEST_ALLOW_TEAM_INVITE === "1";
const SHOULD_RUN_HAPPY =
  HAS_API_KEY && !!TEAM_ID && !!INVITE_USER_ID && ALLOW_INVITE;

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

describe("addTeamMember", () => {
  it.skipIf(!SHOULD_RUN_HAPPY)(
    "invites a user to a team the auth'd caller administers",
    async () => {
      // Real Modrinth team invitations are visible to the invitee, so
      // this test is gated behind explicit env vars (see above). The
      // SDK call itself returns 204/Void; we assert that and rely on
      // ensuring-style cleanup to remove the invitee whether the
      // assertion succeeds or throws.
      const teamId = TEAM_ID as string;
      const inviteeId = INVITE_USER_ID as string;

      const result = await runEffect(
        addTeamMember({ id: teamId, user_id: inviteeId }).pipe(
          Effect.ensuring(
            // Always remove the invitee after the test completes, even
            // on failure. Effect.ignore swallows any failure of the
            // delete call itself so cleanup never masks the real
            // result. testRunId in resource names doesn't apply here
            // because we operate on a pre-existing team passed via env.
            deleteTeamMember({
              id: teamId,
              id_or_username: inviteeId,
            }).pipe(Effect.ignore),
          ),
        ),
      );

      expect(result).toBeUndefined();
    },
    30_000,
  );

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth ids are base62-encoded; the path validator rejects ids
    // containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any auth or DB lookup, so the typed
    // BadRequest is reachable without an API key. This 400 mapping is
    // added by patches/002-add-mutation-bad-request.patch.json.
    const error = await runEffect(
      addTeamMember({
        id: `zz!${testRunId}`,
        user_id: `zz${testRunId.slice(0, 6)}`,
      }).pipe(Effect.flip),
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
      const error = await runEffect(
        addTeamMember({ id, user_id: `zz${testRunId.slice(0, 6)}` }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // POST /team/{id}/members requires auth — only team admins may add
    // members. With a base62-shaped id the path validator passes, the
    // auth check fires next, and Modrinth returns 401 without an API
    // key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      addTeamMember({ id, user_id: `zz${testRunId.slice(0, 6)}` }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
