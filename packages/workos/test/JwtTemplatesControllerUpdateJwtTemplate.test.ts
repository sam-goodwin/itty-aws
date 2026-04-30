import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { JwtTemplatesControllerUpdateJwtTemplate } from "../src/operations/JwtTemplatesControllerUpdateJwtTemplate.ts";
import { runEffect } from "./setup.ts";

describe("JwtTemplatesControllerUpdateJwtTemplate", () => {
  it(
    "updates the JWT template for the current environment",
    async () => {
      const content = JSON.stringify({});
      const result = await runEffect(
        JwtTemplatesControllerUpdateJwtTemplate({ content }),
      );
      expect(result).toBeDefined();
      expect(typeof result.object).toBe("string");
      expect(typeof result.content).toBe("string");
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity for malformed template content",
    async () => {
      const error = await runEffect(
        JwtTemplatesControllerUpdateJwtTemplate({
          content: "not valid json {",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
