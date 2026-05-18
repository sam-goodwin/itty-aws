import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getProjectTeamMembers } from "../src/operations/getProjectTeamMembers.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getProjectTeamMembers", () => {
  it("returns the team members of a public project", async () => {
    // GET /project/{id_or_slug}/members is a public read endpoint. We
    // round-trip the well-known `sodium` slug (also used by
    // getVersions.test.ts as a stable bootstrap target) and assert the
    // response shape — every project has at least one team member.
    const members = await runEffect(
      getProjectTeamMembers({ id_or_slug: "sodium" }),
    );

    expect(Array.isArray(members)).toBe(true);
    expect(members.length).toBeGreaterThan(0);
    const first = members[0]!;
    expect(typeof first.team_id).toBe("string");
    expect(typeof first.role).toBe("string");
    expect(typeof first.accepted).toBe("boolean");
    expect(typeof first.user.id).toBe("string");
    expect(typeof first.user.username).toBe("string");
    expect(typeof first.user.avatar_url).toBe("string");
    expect(typeof first.user.created).toBe("string");
    expect(["admin", "moderator", "developer"]).toContain(first.user.role);
  });

  it("returns NotFound for a slug that does not resolve to a project", async () => {
    // Modrinth resolves project slugs/ids on this route and returns 404
    // when nothing matches. A run-scoped slug guarantees the lookup
    // misses and triggers the typed `NotFound`.
    const slug = `distilled-no-such-project-${testRunId}`;
    const error = await runEffect(
      getProjectTeamMembers({ id_or_slug: slug }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
