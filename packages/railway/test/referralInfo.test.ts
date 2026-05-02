import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { referralInfo } from "../src/operations/referralInfo.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("referralInfo", () => {
  it("happy path - returns referral info for authenticated user's workspace", async () => {
    const info = await runEffect(
      Effect.gen(function* () {
        const token = yield* apiToken({});
        const workspaceId = token!.workspace.id;
        return yield* referralInfo({ workspaceId });
      }),
    );

    expect(info).toBeDefined();
    expect(typeof info.code).toBe("string");
    expect(typeof info.id).toBe("string");
    expect(typeof info.status).toBe("string");
    expect(info.referralStats).toBeDefined();
    expect(typeof info.referralStats.credited).toBe("number");
    expect(typeof info.referralStats.pending).toBe("number");
    expect(info.referralStats.credited).toBeGreaterThanOrEqual(0);
    expect(info.referralStats.pending).toBeGreaterThanOrEqual(0);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      referralInfo({ workspaceId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
