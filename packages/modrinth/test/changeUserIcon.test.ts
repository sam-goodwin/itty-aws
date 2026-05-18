import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, NotFound, Unauthorized } from "../src/errors.ts";
import { changeUserIcon } from "../src/operations/changeUserIcon.ts";
import { runEffect, testRunId } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;
const OWNED_USER_ID = process.env.MODRINTH_TEST_OWNED_USER_ID;

// Layer with no API key so we can deterministically trigger 401 even when
// MODRINTH_API_KEY is set in the environment.
const NoAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: undefined,
    apiBaseUrl: DEFAULT_API_BASE_URL,
    userAgent: DEFAULT_USER_AGENT,
  }),
  FetchHttpClient.layer,
);

describe("changeUserIcon", () => {
  it.skipIf(!OWNED_USER_ID)(
    "changes the icon on the authenticated user",
    async () => {
      // PATCH /user/{id_or_username}/icon takes the new image as the raw
      // request body and the file extension as `?ext=`. The SDK leaves the
      // body empty for this PATCH; Modrinth's icon route accepts that as a
      // clear-icon no-op for owners and returns 204.
      const id = OWNED_USER_ID as string;
      await runEffect(changeUserIcon({ id_or_username: id, ext: "png" }));
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns NotFound for a username that does not exist",
    async () => {
      // With auth and a valid `ext` query param Modrinth resolves the
      // route, looks up the user, and returns 404 when the username is
      // unknown.
      const username = `zz-distilled-${testRunId}`;
      const error = await runEffect(
        changeUserIcon({ id_or_username: username, ext: "png" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("NotFound");
      expect(error).toBeInstanceOf(NotFound);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /user/{id_or_username}/icon requires auth. With a valid `ext`
    // query param Modrinth reaches the auth check and returns 401.
    const error = await Effect.runPromise(
      changeUserIcon({ id_or_username: "jellysquid3", ext: "png" }).pipe(
        Effect.flip,
        Effect.provide(NoAuthLayer),
      ),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });

  // BadRequest note:
  //   The only `400 invalid_input` Modrinth returns for this route is
  //   "missing field `ext`" when the `ext` query parameter is absent. The
  //   SDK schema marks `ext` as required and constrains it to a fixed set
  //   of `Schema.Literals` — `Schema.encode` rejects any input that omits
  //   `ext` or supplies a non-allowed value before any HTTP call, so the
  //   `BadRequest` branch is unreachable through the typed SDK and cannot
  //   be exercised here without bypassing the SDK entirely.
});
