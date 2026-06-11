import { Effect } from "effect";
import { describe, expect, test } from "vitest";
import { getMe, getProject, getProjects } from "../src/operations/index.ts";
import { hasCredentials, runEffect } from "./setup.ts";

describe.skipIf(!hasCredentials)("Railway", () => {
  describe("getMe", () => {
    test("happy path - returns the authenticated user", async () => {
      const result = await runEffect(getMe({}));
      expect(result.id).toBeDefined();
      expect(result.email).toContain("@");
    });
  });

  describe("getProjects", () => {
    test("happy path - lists projects", async () => {
      const result = await runEffect(getProjects({ first: 5 }));
      expect(Array.isArray(result.edges)).toBe(true);
    });
  });

  describe("getProject", () => {
    test("error - fails for a non-existent project", async () => {
      const error = await runEffect(
        getProject({ id: crypto.randomUUID() }).pipe(Effect.flip),
      );
      // Untyped until a patch pins the observed error — run with DEBUG=1,
      // record it in patches/getProject.json, regenerate, and tighten this
      // assertion to the typed class.
      expect(error).toHaveProperty("_tag");
    });
  });
});
