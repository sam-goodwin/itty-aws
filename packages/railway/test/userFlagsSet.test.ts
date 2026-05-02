import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { userFlagsSet } from "../src/operations/userFlagsSet.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("userFlagsSet", () => {
  it("happy path - sets the BETA flag on the authenticated user", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* userFlagsSet({
          input: { flags: ["BETA"] },
        });
        expect(typeof result).toBe("boolean");
      }),
    );
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      userFlagsSet({ input: { flags: ["BETA"] } }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for a non-existent target user id", async () => {
    const error = await runEffect(
      userFlagsSet({
        input: { flags: ["BETA"], userId: NON_EXISTENT_UUID },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
