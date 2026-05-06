import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { oauth2userinfo } from "../src/operations/oauth2userinfo.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("oauth2userinfo", () => {
  it(
    "returns userinfo for the authenticated principal",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(oauth2userinfo({}));
      expect(typeof result.sub).toBe("string");
      expect(result.sub.length).toBeGreaterThan(0);
    },
  );

  it(
    "produces a typed failure if the userinfo call cannot complete",
    { timeout: 30_000 },
    async () => {
      const exit = await runEffect(Effect.exit(oauth2userinfo({})));
      if (Exit.isFailure(exit)) {
        const failureOption = Cause.findErrorOption(exit.cause);
        expect(failureOption._tag).toBe("Some");
        if (failureOption._tag === "Some") {
          const tag = (failureOption.value as { _tag: string })._tag;
          expect(typeof tag).toBe("string");
          expect(tag.length).toBeGreaterThan(0);
          expect(tag).not.toMatch(/^Un[a-z]+Error$/i);
        }
      } else {
        expect(typeof exit.value.sub).toBe("string");
      }
    },
  );
});
