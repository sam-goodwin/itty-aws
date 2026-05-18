import { Effect, Layer } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import {
  Credentials,
  DEFAULT_API_BASE_URL,
  DEFAULT_USER_AGENT,
} from "../src/credentials.ts";
import { BadRequest, Unauthorized } from "../src/errors.ts";
import { patchProjects } from "../src/operations/patchProjects.ts";
import { runEffect } from "./setup.ts";

const HAS_API_KEY = !!process.env.MODRINTH_API_KEY;

// Comma-separated list of project IDs/slugs the test account owns and is
// willing to bulk-edit (with a no-op patch). Provided externally so we never
// touch projects we don't intend to.
const OWNED_PROJECT_IDS_ENV = process.env.MODRINTH_TEST_OWNED_PROJECT_IDS;

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

describe("patchProjects", () => {
  it.skipIf(!OWNED_PROJECT_IDS_ENV)(
    "performs a no-op bulk patch on projects the caller owns",
    async () => {
      const owned = (OWNED_PROJECT_IDS_ENV as string)
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);
      // add_categories: [] is a no-op — no categories added — but is a valid
      // body field, satisfying any "non-empty body" requirement.
      await runEffect(
        patchProjects({
          ids: JSON.stringify(owned),
          add_categories: [],
        }),
      );
    },
  );

  it.skipIf(!HAS_API_KEY)(
    "returns BadRequest when ids is not valid JSON (with auth)",
    async () => {
      const error = await runEffect(
        patchProjects({
          ids: "this-is-not-valid-json",
          add_categories: [],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("BadRequest");
      expect(error).toBeInstanceOf(BadRequest);
    },
  );

  it("returns Unauthorized when no API key is provided", async () => {
    // PATCH /projects requires auth; Modrinth checks auth before validating
    // the `ids` query, so a well-formed request without credentials is 401.
    const error = await Effect.runPromise(
      patchProjects({
        ids: JSON.stringify(["sodium"]),
        add_categories: [],
      }).pipe(Effect.flip, Effect.provide(NoAuthLayer)),
    );

    expect(error._tag).toBe("Unauthorized");
    expect(error).toBeInstanceOf(Unauthorized);
  });
});
