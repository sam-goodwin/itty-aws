import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesControllerList } from "../src/operations/AuthorizationResourcesControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationResourcesControllerList", () => {
  it(
    "lists authorization resources",
    async () => {
      const result = await runEffect(
        AuthorizationResourcesControllerList({
          limit: 10,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();
    },
    30_000,
  );

});
