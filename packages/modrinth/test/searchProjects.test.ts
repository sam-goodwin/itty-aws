import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest } from "../src/errors.ts";
import { searchProjects } from "../src/operations/searchProjects.ts";
import { runEffect } from "./setup.ts";

describe("searchProjects", () => {
  it("can search projects without parameters", async () => {
    const result = await runEffect(searchProjects({}));

    expect(Array.isArray(result.hits)).toBe(true);
    expect(typeof result.offset).toBe("number");
    expect(typeof result.limit).toBe("number");
    expect(typeof result.total_hits).toBe("number");
  });

  it("can search projects with a query string", async () => {
    const result = await runEffect(
      searchProjects({ query: "shader", limit: 5 }),
    );

    expect(Array.isArray(result.hits)).toBe(true);
    expect(result.limit).toBe(5);
    expect(result.hits.length).toBeLessThanOrEqual(5);
    if (result.hits.length > 0) {
      const hit = result.hits[0]!;
      expect(typeof hit.project_id).toBe("string");
      expect(typeof hit.author).toBe("string");
      expect(Array.isArray(hit.versions)).toBe(true);
      expect(typeof hit.follows).toBe("number");
      expect(typeof hit.date_created).toBe("string");
      expect(typeof hit.date_modified).toBe("string");
      expect(typeof hit.license).toBe("string");
    }
  });

  it("respects pagination via offset and limit", async () => {
    const result = await runEffect(
      searchProjects({ offset: 5, limit: 3, index: "downloads" }),
    );

    expect(result.limit).toBe(3);
    expect(result.hits.length).toBeLessThanOrEqual(3);
    expect(typeof result.offset).toBe("number");
  });

  it("returns BadRequest for malformed facets JSON", async () => {
    const error = await runEffect(
      searchProjects({ facets: "this-is-not-valid-json" }).pipe(Effect.flip),
    );

    expect(error).toBeInstanceOf(BadRequest);
    expect(error._tag).toBe("BadRequest");
  });
});
