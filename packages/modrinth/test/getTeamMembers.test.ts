import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest } from "../src/errors.ts";
import { getProjectTeamMembers } from "../src/operations/getProjectTeamMembers.ts";
import { getTeamMembers } from "../src/operations/getTeamMembers.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getTeamMembers", () => {
  it("returns the members of a team resolved from a public project", async () => {
    // GET /team/{id}/members is a public read endpoint. Bootstrap via
    // GET /project/sodium/members to obtain a stable, real team_id and
    // round-trip it. Both routes return the same TeamMember shape so the
    // membership lists for the same team_id should match.
    const projectMembers = await runEffect(
      getProjectTeamMembers({ id_or_slug: "sodium" }),
    );
    expect(projectMembers.length).toBeGreaterThan(0);
    const teamId = projectMembers[0]!.team_id;

    const teamMembers = await runEffect(getTeamMembers({ id: teamId }));

    expect(Array.isArray(teamMembers)).toBe(true);
    expect(teamMembers.length).toBeGreaterThan(0);
    for (const member of teamMembers) {
      expect(member.team_id).toBe(teamId);
      expect(typeof member.role).toBe("string");
      expect(typeof member.accepted).toBe("boolean");
      expect(typeof member.user.id).toBe("string");
      expect(typeof member.user.username).toBe("string");
      expect(["admin", "moderator", "developer"]).toContain(member.user.role);
    }
  });

  it("returns BadRequest for an id that is not valid base62", async () => {
    // Modrinth team ids are base62-encoded; the path validator rejects
    // ids containing non-base62 characters (e.g. `!`) with a
    // `400 invalid_input` before any DB lookup. This 400 mapping is
    // added by patches/001-add-error-responses.patch.json.
    const error = await runEffect(
      getTeamMembers({ id: `zz!${testRunId}` }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });
});
