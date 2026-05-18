import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { NotFound } from "../src/errors.ts";
import { getUser } from "../src/operations/getUser.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("getUser", () => {
  it("resolves a real user by username", async () => {
    // GET /user/{id_or_username} accepts either the user's id or username
    // and returns their public profile. We hit jellysquid3 — sodium's
    // author — because the account is well-known, public, and stable.
    const result = await runEffect(
      getUser({ id_or_username: "jellysquid3" }),
    );

    expect(result.username).toBe("jellysquid3");
    expect(typeof result.id).toBe("string");
    expect(result.id.length).toBeGreaterThan(0);
    expect(result.role).toBe("developer");
    expect(typeof result.avatar_url).toBe("string");
    expect(typeof result.created).toBe("string");
  });

  it("resolves the same user when looked up by id", async () => {
    // The route is symmetric on id and username: looking the user up by id
    // must return the same profile.
    const byUsername = await runEffect(
      getUser({ id_or_username: "jellysquid3" }),
    );
    const byId = await runEffect(getUser({ id_or_username: byUsername.id }));

    expect(byId.id).toBe(byUsername.id);
    expect(byId.username).toBe(byUsername.username);
  });

  it("returns NotFound for a username that does not exist", async () => {
    // Modrinth usernames are alphanumeric and case-insensitive. A username
    // prefixed with "zz-distilled-" plus testRunId is guaranteed not to
    // collide with any real account, so the route returns 404.
    const username = `zz-distilled-${testRunId}`;
    const error = await runEffect(
      getUser({ id_or_username: username }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
    expect(error).toBeInstanceOf(NotFound);
  });
});
