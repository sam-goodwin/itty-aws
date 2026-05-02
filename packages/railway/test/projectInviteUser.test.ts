import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { projectInviteUser } from "../src/operations/projectInviteUser.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectInviteUser", () => {
  it("happy path - invites a user to a freshly created project", async () => {
    const projectName = `distilled-railway-piu-${testRunId}`;
    const inviteEmail = `distilled-railway-piu-${testRunId}@example.com`;
    const inviteLink = `https://railway.com/invite/${testRunId}`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled invite user test project",
          },
        });
        return yield* Effect.gen(function* () {
          const result = yield* projectInviteUser({
            id: project.id,
            input: {
              email: inviteEmail,
              link: inviteLink,
            },
          });
          expect(result).toBe(true);
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      projectInviteUser({
        id: NON_EXISTENT_UUID,
        input: {
          email: `distilled-railway-piu-unauth-${testRunId}@example.com`,
          link: `https://railway.com/invite/${testRunId}`,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty project id", async () => {
    const error = await runEffect(
      projectInviteUser({
        id: "",
        input: {
          email: `distilled-railway-piu-inv-${testRunId}@example.com`,
          link: `https://railway.com/invite/${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
