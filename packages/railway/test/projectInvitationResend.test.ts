import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectInvitationCreate } from "../src/operations/projectInvitationCreate.ts";
import { projectInvitationDelete } from "../src/operations/projectInvitationDelete.ts";
import { projectInvitationResend } from "../src/operations/projectInvitationResend.ts";
import { getSharedProject, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectInvitationResend", () => {
  it("happy path - resends a freshly created project invitation", async () => {
    const project = await getSharedProject();
    const inviteEmail = `distilled-railway-pir-${testRunId}@example.com`;

    await runEffect(
      Effect.gen(function* () {
        const invitation = yield* projectInvitationCreate({
          id: project.id,
          input: { email: inviteEmail, role: "MEMBER" },
        });
        return yield* Effect.gen(function* () {
          const resent = yield* projectInvitationResend({ id: invitation.id });
          expect(resent.id).toBe(invitation.id);
          expect(resent.email).toBe(inviteEmail);
          expect(resent.project.id).toBe(project.id);
        }).pipe(
          Effect.ensuring(
            projectInvitationDelete({ id: invitation.id }).pipe(Effect.ignore),
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
      projectInvitationResend({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent invitation id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      projectInvitationResend({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
