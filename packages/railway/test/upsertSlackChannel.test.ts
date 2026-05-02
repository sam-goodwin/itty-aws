import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { upsertSlackChannel } from "../src/operations/upsertSlackChannel.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("upsertSlackChannel", () => {
  it(
    "happy path - invokes Slack channel upsert for the authenticated workspace (returns true if Slack integration is configured, RailwayInvalidInput otherwise)",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const me = yield* apiToken({});
          const workspaceId = me.workspaces[0]?.id;
          if (!workspaceId) {
            throw new Error(
              "test setup: authenticated token has no workspaces",
            );
          }
          return yield* upsertSlackChannel({ workspaceId }).pipe(
            Effect.matchEffect({
              onSuccess: (result) =>
                Effect.sync(() => {
                  expect(result).toBe(true);
                }),
              onFailure: (e) =>
                Effect.sync(() => {
                  expect((e as { _tag: string })._tag).toBe(
                    "RailwayInvalidInput",
                  );
                }),
            }),
          );
        }),
      );
    },
    30_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        upsertSlackChannel({ workspaceId: NON_EXISTENT_UUID }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayInvalidInput for a non-existent workspace id",
    async () => {
      const error = await runEffect(
        upsertSlackChannel({ workspaceId: NON_EXISTENT_UUID }).pipe(
          Effect.flip,
        ),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
