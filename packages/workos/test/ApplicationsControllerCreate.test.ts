import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ApplicationsControllerCreate } from "../src/operations/ApplicationsControllerCreate.ts";
import { runEffect } from "./setup.ts";

describe("ApplicationsControllerCreate", () => {
  it(
    "fails with NotFound when a referenced resource does not exist",
    async () => {
      const error = await runEffect(
        ApplicationsControllerCreate({}).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    30_000,
  );

  it(
    "fails with UnprocessableEntity when the application configuration is invalid",
    async () => {
      const error = await runEffect(
        ApplicationsControllerCreate({}).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    30_000,
  );
});
