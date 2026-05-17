import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { metricslistDashboards } from "../src/operations/metricslistDashboards.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("metricslistDashboards", () => {
  it("lists user-defined metric dashboards", { timeout: 30_000 }, async () => {
    const result = await runEffect(metricslistDashboards({}));

    expect(Array.isArray(result)).toBe(true);
    for (const dashboard of result) {
      expect(typeof dashboard.id).toBe("string");
      expect(typeof dashboard.name).toBe("string");
      expect(typeof dashboard.organization_id).toBe("string");
      expect(typeof dashboard.created_at).toBe("string");
      expect(Array.isArray(dashboard.metrics)).toBe(true);
      for (const metric of dashboard.metrics) {
        expect(typeof metric).toBe("string");
      }
    }
  });

  it(
    "rejects a malformed organization_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        metricslistDashboards({
          organization_id: "not-a-valid-uuid",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
