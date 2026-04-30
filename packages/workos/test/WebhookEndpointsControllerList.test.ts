import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { WebhookEndpointsControllerList } from "../src/operations/WebhookEndpointsControllerList.ts";
import { runEffect } from "./setup.ts";

const clientLevelErrorTags = ["BadRequest", "UnprocessableEntity"] as const;

describe("WebhookEndpointsControllerList", () => {
  it(
    "lists webhook endpoints with a small limit",
    async () => {
      const result = await runEffect(WebhookEndpointsControllerList({ limit: 5 }));
      expect(result).toBeDefined();
      expect(result.object).toBe("list");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();
      for (const endpoint of result.data) {
        expect(typeof endpoint.id).toBe("string");
        expect(typeof endpoint.endpoint_url).toBe("string");
        expect(["enabled", "disabled"]).toContain(endpoint.status);
        expect(Array.isArray(endpoint.events)).toBe(true);
        expect(typeof endpoint.created_at).toBe("string");
        expect(typeof endpoint.updated_at).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed client-level error when limit exceeds the allowed maximum",
    async () => {
      // The API documents limit as between 1 and 100; 1000 violates that bound.
      // The operation declares no per-operation errors, so the SDK must map
      // the response to a default typed error class (BadRequest or
      // UnprocessableEntity) — never an untyped variant.
      const error = await runEffect(
        WebhookEndpointsControllerList({ limit: 1000 }).pipe(Effect.flip),
      );
      expect(clientLevelErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
