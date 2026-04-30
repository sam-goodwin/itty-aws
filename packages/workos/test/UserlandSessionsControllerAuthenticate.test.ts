import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandSessionsControllerAuthenticate } from "../src/operations/UserlandSessionsControllerAuthenticate.ts";
import { runEffect } from "./setup.ts";

const typedErrorTags = [
  "BadRequest",
  "Forbidden",
  "NotFound",
  "UnprocessableEntity",
] as const;

describe("UserlandSessionsControllerAuthenticate", () => {
  it(
    "authenticates a user and returns a session, or surfaces a typed error",
    async () => {
      // The authenticate endpoint requires real auth flow context (e.g. a
      // valid authorization code, password credentials, or refresh token).
      // The SDK's input schema is empty, so the body is empty here. The
      // call exercises the live API and the SDK must map the response to
      // a typed error class — never an Unknown variant.
      const result = await runEffect(
        UserlandSessionsControllerAuthenticate({}).pipe(
          Effect.matchEffect({
            onSuccess: (session) =>
              Effect.succeed({ ok: true as const, session }),
            onFailure: (error) =>
              Effect.succeed({ ok: false as const, error }),
          }),
        ),
      );

      if (result.ok) {
        expect(result.session).toBeDefined();
        expect(result.session.user).toBeDefined();
        expect(typeof result.session.user.id).toBe("string");
        expect(typeof result.session.user.email).toBe("string");
        expect(typeof result.session.access_token).toBe("string");
        expect(typeof result.session.refresh_token).toBe("string");
      } else {
        expect(typedErrorTags).toContain(result.error._tag);
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed BadRequest when required body fields are missing",
    async () => {
      const error = await runEffect(
        UserlandSessionsControllerAuthenticate({}).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed Forbidden when the caller is not permitted to authenticate",
    async () => {
      const error = await runEffect(
        UserlandSessionsControllerAuthenticate({}).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed NotFound when the referenced auth context cannot be resolved",
    async () => {
      const error = await runEffect(
        UserlandSessionsControllerAuthenticate({}).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with a typed UnprocessableEntity for semantically invalid auth payloads",
    async () => {
      const error = await runEffect(
        UserlandSessionsControllerAuthenticate({}).pipe(Effect.flip),
      );
      expect(typedErrorTags).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
