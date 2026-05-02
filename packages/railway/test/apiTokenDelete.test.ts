import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { apiTokenCreate } from "../src/operations/apiTokenCreate.ts";
import { apiTokenDelete } from "../src/operations/apiTokenDelete.ts";
import { apiTokens } from "../src/operations/apiTokens.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const tokenName = (name: string) => `distilled-railway-${name}-${testRunId}`;

const cleanupTokenByName = (name: string) =>
  Effect.gen(function* () {
    const list = yield* apiTokens({ first: 100 });
    const match = list.edges.find((e) => e.node.name === name);
    if (match) {
      yield* apiTokenDelete({ id: match.node.id });
    }
  }).pipe(Effect.ignore);

describe("apiTokenDelete", () => {
  it(
    "happy path - deletes a freshly created API token and returns true",
    async () => {
      const name = tokenName("delete-happy");
      await runEffect(
        Effect.gen(function* () {
          const me = yield* apiToken({});
          const workspaceId = me.workspaces[0]?.id;
          if (!workspaceId) {
            throw new Error(
              "test setup: authenticated token has no workspaces",
            );
          }

          // Create the token to delete
          yield* apiTokenCreate({ input: { name, workspaceId } });

          // Look up its id by name
          const list = yield* apiTokens({ first: 100 });
          const created = list.edges.find((e) => e.node.name === name);
          if (!created) {
            throw new Error(`test setup: token ${name} not found after create`);
          }

          // Delete it
          const result = yield* apiTokenDelete({ id: created.node.id });
          expect(result).toBe(true);

          // Verify it no longer appears in the list
          const after = yield* apiTokens({ first: 100 });
          const stillThere = after.edges.find((e) => e.node.name === name);
          expect(stillThere).toBeUndefined();
        }).pipe(Effect.ensuring(cleanupTokenByName(name))),
      );
    },
    60_000,
  );

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      apiTokenDelete({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayNotFound for a non-existent token id", async () => {
    const error = await runEffect(
      apiTokenDelete({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
