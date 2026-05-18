import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { BadRequest } from "../src/errors.ts";
import { randomProjects } from "../src/operations/randomProjects.ts";
import { runEffect } from "./setup.ts";

describe("randomProjects", () => {
  it("returns the requested number of random projects", async () => {
    const result = await runEffect(randomProjects({ count: 3 }));

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
    for (const project of result) {
      expect(typeof project.id).toBe("string");
      expect(project.id.length).toBeGreaterThan(0);
      expect(typeof project.team).toBe("string");
      expect(typeof project.published).toBe("string");
      expect(typeof project.updated).toBe("string");
      expect(typeof project.followers).toBe("number");
    }
  });

  it("returns BadRequest when count exceeds Modrinth's allowed range", async () => {
    // Modrinth limits `count` to a small range (max 100). Passing 10_000
    // triggers a 400 invalid_input "range" validation error.
    const error = await runEffect(
      randomProjects({ count: 10_000 }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
    expect(error).toBeInstanceOf(BadRequest);
  });
});
