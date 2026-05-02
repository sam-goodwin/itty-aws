import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { projectInvitationCreate } from "../src/operations/projectInvitationCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectInvitationCreate", () => {
  it("happy path - creates an invitation for a freshly created project", async () => {
    const projectName = `distilled-railway-pic-${testRunId}`;
    const inviteEmail = `distilled-railway-pic-${testRunId}@example.com`;
    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: {
            name: projectName,
            description: "distilled invitation test project",
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
          expect(invitation.id).toBeTruthy();
          expect(invitation.email).toBe(inviteEmail);
          expect(invitation.project.id).toBe(project.id);
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
      projectInvitationCreate({
        id: NON_EXISTENT_UUID,
        input: {
          email: `distilled-railway-pic-unauth-${testRunId}@example.com`,
          role: "MEMBER",
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
      projectInvitationCreate({
        id: "",
        input: {
          email: `distilled-railway-pic-inv-${testRunId}@example.com`,
          role: "MEMBER",
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
