import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { projectMembers } from "../src/operations/projectMembers.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectMembers", () => {
  it("happy path - lists members for a freshly created project", async () => {
    await runEffect(
      Effect.gen(function* () {
        const created = yield* projectCreate({
          input: { name: `distilled-railway-members-${testRunId}` },
        });

        yield* Effect.gen(function* () {
          const members = yield* projectMembers({ projectId: created.id });

          expect(Array.isArray(members)).toBe(true);
          for (const member of members) {
            expect(typeof member.id).toBe("string");
            expect(typeof member.email).toBe("string");
            expect(["ADMIN", "MEMBER", "VIEWER"]).toContain(member.role);
          }
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: created.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      projectMembers({ projectId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent projectId", async () => {
    const error = await runEffect(
      projectMembers({ projectId: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
