import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { projectInvitationCreate } from "../src/operations/projectInvitationCreate.ts";
import { projectInvitationDelete } from "../src/operations/projectInvitationDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectInvitationDelete", () => {
  it("happy path - deletes a freshly created project invitation", async () => {
    const projectName = `distilled-railway-pid-${testRunId}`;
    const inviteEmail = `distilled-railway-pid-${testRunId}@example.com`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled invitation delete test project",
          },
        });
        return yield* Effect.gen(function* () {
          const invitation = yield* projectInvitationCreate({
            id: project.id,
            input: {
              email: inviteEmail,
              role: "MEMBER",
            },
          });
          const result = yield* projectInvitationDelete({ id: invitation.id });
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
      projectInvitationDelete({
        id: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent invitation id", async () => {
    const error = await runEffect(
      projectInvitationDelete({
        id: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
