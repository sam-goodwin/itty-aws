import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest } from "../src/errors.ts";
import { getProjects } from "../src/operations/getProjects.ts";
import { runEffect } from "./setup.ts";

// Long-lived public Modrinth project slugs used as stable read fixtures.
const STABLE_SLUGS = ["sodium", "fabric-api"];

describe("getProjects", () => {
  it("returns multiple projects for a JSON-encoded array of slugs", async () => {
    const result = await runEffect(
      getProjects({ ids: JSON.stringify(STABLE_SLUGS) }),
    );

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(STABLE_SLUGS.length);
    for (const project of result) {
      expect(typeof project.id).toBe("string");
      expect(project.id.length).toBeGreaterThan(0);
      expect(typeof project.team).toBe("string");
      expect(typeof project.published).toBe("string");
      expect(typeof project.updated).toBe("string");
      expect(typeof project.followers).toBe("number");
    }
  });

  it("returns an empty array when given an empty id list", async () => {
    const result = await runEffect(getProjects({ ids: "[]" }));

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(0);
  });

  it("returns BadRequest when ids is not valid JSON", async () => {
    const error = await runEffect(
      getProjects({ ids: "this-is-not-valid-json" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });
});
