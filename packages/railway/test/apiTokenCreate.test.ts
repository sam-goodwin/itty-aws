import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiToken } from "../src/operations/apiToken.ts";
import { apiTokenCreate } from "../src/operations/apiTokenCreate.ts";
import { apiTokenDelete } from "../src/operations/apiTokenDelete.ts";
import { apiTokens } from "../src/operations/apiTokens.ts";
import { runEffect, testRunId } from "./setup.ts";

const tokenName = (name: string) => `distilled-railway-${name}-${testRunId}`;

const cleanupTokenByName = (name: string) =>
  Effect.gen(function* () {
    const list = yield* apiTokens({ first: 100 });
    const match = list.edges.find((e) => e.node.name === name);
    if (match) {
      yield* apiTokenDelete({ id: match.node.id });
    }
  }).pipe(Effect.ignore);

describe("apiTokenCreate", () => {
  it("happy path - creates an API token and returns the secret string", async () => {
    const name = tokenName("create-happy");
    await runEffect(
      Effect.gen(function* () {
        const me = yield* apiToken({});
        const workspaceId = me.workspaces[0]?.id;
        if (!workspaceId) {
          throw new Error("test setup: authenticated token has no workspaces");
        }
        const secret = yield* apiTokenCreate({
          input: { name, workspaceId },
        });
        expect(typeof secret).toBe("string");
        expect(secret.length).toBeGreaterThan(0);

        // Verify the token shows up in the list with our name
        const list = yield* apiTokens({ first: 100 });
        const created = list.edges.find((e) => e.node.name === name);
        expect(created).toBeDefined();
        expect(typeof created?.node.id).toBe("string");
      }).pipe(Effect.ensuring(cleanupTokenByName(name))),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      apiTokenCreate({
        input: { name: tokenName("create-unauth") },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty token name", async () => {
    const error = await runEffect(
      apiTokenCreate({ input: { name: "" } }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
