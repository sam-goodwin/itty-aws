import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { getTeamMembers } from "../src/operations/getTeamMembers.ts";
import { modifyTeamMember } from "../src/operations/modifyTeamMember.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
// PATCH /team/{id}/members/{id_or_username} mutates a real team
// member's metadata (ordering, role, permissions, payouts_split). The
// happy path is quadruple-gated: API key, a team id the auth'd caller
// administers (MODRINTH_TEST_TEAM_ID), the member to bump
// (MODRINTH_TEST_TEAM_MEMBER_USERNAME), and an explicit opt-in flag
// MODRINTH_TEST_ALLOW_MODIFY_TEAM_MEMBER=1. We mutate `ordering` only
// (least disruptive) and restore the prior value via ensuring-style
// cleanup.
const TEAM_ID = process.env.MODRINTH_TEST_TEAM_ID;
const TARGET_MEMBER = process.env.MODRINTH_TEST_TEAM_MEMBER_USERNAME;
const ALLOW_MODIFY =
  process.env.MODRINTH_TEST_ALLOW_MODIFY_TEAM_MEMBER === "1";
const SHOULD_RUN_HAPPY =
  HAS_API_KEY && !!TEAM_ID && !!TARGET_MEMBER && ALLOW_MODIFY;

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

describe("modifyTeamMember", () => {
  it.skipIf(!SHOULD_RUN_HAPPY)(
    "bumps a team member's ordering and restores it on cleanup",
    async () => {
      const teamId = TEAM_ID as string;
      const target = TARGET_MEMBER as string;

      // Read current state so we can restore the original ordering on
      // cleanup. If the target is not on the team the test would
      // misconfigure cleanup, so we surface that as an assertion
      // failure rather than silently skipping.
      const members = await runEffect(getTeamMembers({ id: teamId }));
      const member = members.find((m) => m.user.username === target);
      expect(member).toBeDefined();
      const originalOrdering = member!.ordering ?? 0;
      const newOrdering = originalOrdering + 1;

      const result = await runEffect(
        modifyTeamMember({
          id: teamId,
          id_or_username: target,
          ordering: newOrdering,
        }).pipe(
          Effect.ensuring(
            // Always restore the original ordering, even on failure.
            // Effect.ignore swallows any failure of the restore call so
            // cleanup never masks the real test result.
            modifyTeamMember({
              id: teamId,
              id_or_username: target,
              ordering: originalOrdering,
            }).pipe(Effect.ignore),
          ),
        ),
      );

      // PATCH returns 204/Void — verify the mutation took effect by
      // re-reading the team and checking the new ordering value.
      expect(result).toBeUndefined();
      const after = await runEffect(getTeamMembers({ id: teamId }));
      const updated = after.find((m) => m.user.username === target);
      expect(updated).toBeDefined();
      expect(updated!.ordering).toBe(newOrdering);
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
      modifyTeamMember({
        id: `zz!${testRunId}`,
        id_or_username: `user-${testRunId}`,
        ordering: 0,
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
        modifyTeamMember({
          id,
          id_or_username: `user-${testRunId}`,
          ordering: 0,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /team/{id}/members/{id_or_username} requires auth — only
    // team admins may modify members. With a base62-shaped id the path
    // validator passes, the auth check fires next, and Modrinth returns
    // 401 without an API key.
    const id = `zz${testRunId.slice(0, 6)}`;
    const error = await Effect.runPromise(
      modifyTeamMember({
        id,
        id_or_username: `user-${testRunId}`,
        ordering: 0,
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
