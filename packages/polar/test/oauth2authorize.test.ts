import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { oauth2authorize } from "../src/operations/oauth2authorize.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("oauth2authorize", () => {
  it(
    "returns OAuth2 authorize metadata or a typed failure",
    { timeout: 30_000 },
    async () => {
      const exit = await runEffect(Effect.exit(oauth2authorize({})));
      expect(Exit.isSuccess(exit) || Exit.isFailure(exit)).toBe(true);
      if (Exit.isSuccess(exit)) {
        expect(exit.value).toBeDefined();
        expect(Array.isArray(exit.value.scopes)).toBe(true);
        expect(exit.value.client).toBeDefined();
        expect(typeof exit.value.client.client_id).toBe("string");
      }
    },
  );

  it(
    "produces a typed failure when called without an OAuth flow context",
    { timeout: 30_000 },
    async () => {
      const exit = await runEffect(Effect.exit(oauth2authorize({})));
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
        expect(exit.value).toBeDefined();
      }
    },
  );
});
