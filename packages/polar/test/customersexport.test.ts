import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customersexport } from "../src/operations/customersexport.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customersexport", () => {
  it("exports customers as a CSV string", { timeout: 30_000 }, async () => {
    const csv = await runEffect(customersexport({}));
    expect(typeof csv).toBe("string");
    expect(csv.length).toBeGreaterThan(0);
    // CSV should at least contain a delimiter or newline
    expect(csv.includes(",") || csv.includes("\n")).toBe(true);
  });

  it(
    "rejects a malformed organization_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customersexport({ organization_id: "not-a-valid-uuid" }).pipe(
          Effect.flip,
        ),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
