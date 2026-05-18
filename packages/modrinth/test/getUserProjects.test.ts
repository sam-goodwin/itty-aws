import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getUserProjects } from "../src/operations/getUserProjects.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getUserProjects", () => {
  it("returns the projects owned by a real user", async () => {
    // GET /user/{id_or_username}/projects returns the public list of
    // projects the user is a member of. We hit jellysquid3 — sodium's
    // author — because the account is well-known, public, and ships
    // multiple maintained projects, so we can confidently assert the
    // sodium project appears in the response.
    const projects = await runEffect(
      getUserProjects({ id_or_username: "jellysquid3" }),
    );

    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
    for (const project of projects) {
      expect(typeof project.id).toBe("string");
      expect(project.id.length).toBeGreaterThan(0);
      expect(typeof project.team).toBe("string");
      expect(typeof project.published).toBe("string");
      expect(typeof project.updated).toBe("string");
    }
    // sodium has the slug `AANobbMI` — verify the canonical project for
    // jellysquid3 is present.
    expect(projects.some((p) => p.id === "AANobbMI")).toBe(true);
  });

  it("returns NotFound for a username that does not exist", async () => {
    // Modrinth usernames are alphanumeric and case-insensitive. A username
    // prefixed with "zz-distilled-" plus testRunId is guaranteed not to
    // collide with any real account, so the route returns 404.
    const username = `zz-distilled-${testRunId}`;
    const error = await runEffect(
      getUserProjects({ id_or_username: username }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
