import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest } from "../src/errors.ts";
import { getProjectTeamMembers } from "../src/operations/getProjectTeamMembers.ts";
import { getTeams } from "../src/operations/getTeams.ts";
import { runEffect } from "./setup.ts";

describe("getTeams", () => {
  it("returns the members of the requested teams for a list of valid ids", async () => {
    // Bootstrap via GET /project/sodium/members to obtain a stable, real
    // team_id and round-trip it through GET /teams?ids=[...]. The route
    // does not require auth and returns one inner array per requested
    // team — for a single id we expect exactly one inner array whose
    // members all carry the same team_id.
    const sodiumMembers = await runEffect(
      getProjectTeamMembers({ id_or_slug: "sodium" }),
    );
    expect(sodiumMembers.length).toBeGreaterThan(0);
    const teamId = sodiumMembers[0]!.team_id;

    const teams = await runEffect(
      getTeams({ ids: JSON.stringify([teamId]) }),
    );

    expect(Array.isArray(teams)).toBe(true);
    expect(teams.length).toBe(1);
    const members = teams[0]!;
    expect(Array.isArray(members)).toBe(true);
    expect(members.length).toBeGreaterThan(0);
    for (const member of members) {
      expect(member.team_id).toBe(teamId);
      expect(typeof member.role).toBe("string");
      expect(typeof member.accepted).toBe("boolean");
      expect(typeof member.user.id).toBe("string");
      expect(typeof member.user.username).toBe("string");
      expect(["admin", "moderator", "developer"]).toContain(member.user.role);
    }
  });

  it("returns BadRequest when the ids query is not valid JSON", async () => {
    // Modrinth parses `ids` as a JSON array; a non-JSON value yields a
    // 400 invalid_input. This 400 mapping is added by
    // patches/001-add-error-responses.patch.json.
    const error = await runEffect(
      getTeams({ ids: "not-json" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });
});
