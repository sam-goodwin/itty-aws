import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest } from "../src/errors.ts";
import { getUser } from "../src/operations/getUser.ts";
import { getUsers } from "../src/operations/getUsers.ts";
import { runEffect } from "./setup.ts";

describe("getUsers", () => {
  it("returns the requested users for a list of valid ids", async () => {
    // GET /users?ids=[...] reads `ids` as a JSON-encoded array and returns
    // the matching user profiles. We resolve jellysquid3 by username first
    // to get a real id, then round-trip it through the bulk route.
    const jelly = await runEffect(getUser({ id_or_username: "jellysquid3" }));
    expect(typeof jelly.id).toBe("string");
    const ids = [jelly.id];

    const users = await runEffect(getUsers({ ids: JSON.stringify(ids) }));

    expect(Array.isArray(users)).toBe(true);
    expect(users.length).toBe(1);
    expect(users[0]!.id).toBe(jelly.id);
    expect(users[0]!.username).toBe("jellysquid3");
    expect(["admin", "moderator", "developer"]).toContain(users[0]!.role);
  });

  it("returns BadRequest when the ids query is not valid JSON", async () => {
    // Modrinth parses `ids` as a JSON array; a non-JSON value yields a 400
    // invalid_input. The SDK schema accepts any string for `ids`, so this
    // request actually leaves the client and the typed BadRequest comes
    // from the server.
    const error = await runEffect(
      getUsers({ ids: "not-json" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });
});
