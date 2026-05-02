import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { projectInviteCode } from "../src/operations/projectInviteCode.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectInviteCode", () => {
  it(
    "happy path - returns an invite code for a freshly created project",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const created = yield* projectCreate({
            input: { name: `distilled-railway-invitecode-${testRunId}` },
          });

          yield* Effect.gen(function* () {
            const result = yield* projectInviteCode({
              projectId: created.id,
              role: "MEMBER",
            });

            expect(typeof result.id).toBe("string");
            expect(typeof result.code).toBe("string");
            expect(typeof result.createdAt).toBe("string");
            expect(result.projectId).toBe(created.id);
            expect(["ADMIN", "MEMBER", "VIEWER"]).toContain(result.role);
            expect(result.project.id).toBe(created.id);
            expect(typeof result.project.name).toBe("string");
          }).pipe(
            Effect.ensuring(
              projectDelete({ id: created.id }).pipe(Effect.ignore),
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
        projectInviteCode({
          projectId: NON_EXISTENT_UUID,
          role: "MEMBER",
        }).pipe(
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
        projectInviteCode({
          projectId: NON_EXISTENT_UUID,
          role: "MEMBER",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
      expect((error as { message: string }).message).toMatch(/not found$/i);
    },
    30_000,
  );
});
