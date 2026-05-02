import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { projectInvitations } from "../src/operations/projectInvitations.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectInvitations", () => {
  it(
    "happy path - lists invitations for a freshly created project",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const project = yield* projectCreate({
            input: { name: `distilled-railway-invitations-${testRunId}` },
          });

          yield* Effect.gen(function* () {
            const invitations = yield* projectInvitations({ id: project.id });

            expect(Array.isArray(invitations)).toBe(true);
            for (const inv of invitations) {
              expect(typeof inv.id).toBe("string");
              expect(typeof inv.email).toBe("string");
              expect(typeof inv.expiresAt).toBe("string");
              expect(typeof inv.isExpired).toBe("boolean");
              expect(typeof inv.project.id).toBe("string");
              expect(typeof inv.project.name).toBe("string");
              if (inv.inviter !== null) {
                expect(typeof inv.inviter.email).toBe("string");
              }
            }
          }).pipe(
            Effect.ensuring(
              projectDelete({ id: project.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    60_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });

      const error = await Effect.runPromise(
        projectInvitations({ id: NON_EXISTENT_UUID }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound for a non-existent projectId",
    async () => {
      const error = await runEffect(
        projectInvitations({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
      expect((error as { message: string }).message).toMatch(/not found$/i);
    },
    30_000,
  );
});
