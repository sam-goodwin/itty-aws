import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { bucketCreate } from "../src/operations/bucketCreate.ts";
import { bucketUpdate } from "../src/operations/bucketUpdate.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const projectName = (name: string) => `distilled-railway-${name}-${testRunId}`;
const bucketName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("bucketUpdate", () => {
  it("happy path - renames a freshly created bucket", async () => {
    const projName = projectName("bkt-update");
    const initialName = bucketName("bkt-orig");
    const renamedName = bucketName("bkt-renamed");

    await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: { name: projName },
        });
        return yield* Effect.gen(function* () {
          const bucket = yield* bucketCreate({
            input: { projectId: project.id, name: initialName },
          });

          const updated = yield* bucketUpdate({
            id: bucket.id,
            input: { name: renamedName },
          });

          expect(updated.id).toBe(bucket.id);
          expect(updated.name).toBe(renamedName);
          expect(updated.projectId).toBe(project.id);
          expect(typeof updated.createdAt).toBe("string");
          expect(typeof updated.updatedAt).toBe("string");

          // project nested struct
          expect(updated.project.id).toBe(project.id);
          expect(updated.project.name).toBe(projName);
          expect(["free", "hobby", "pro", "trial"]).toContain(
            updated.project.subscriptionType,
          );
          for (const m of updated.project.members) {
            expect(["ADMIN", "MEMBER", "VIEWER"]).toContain(m.role);
          }
          if (updated.project.workspace !== null) {
            expect(["FREE", "HOBBY", "PRO"]).toContain(
              updated.project.workspace.plan,
            );
            expect(["FREE", "TEAM", "USER"]).toContain(
              updated.project.workspace.subscriptionModel,
            );
          }
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
      bucketUpdate({
        id: NON_EXISTENT_UUID,
        input: { name: bucketName("bkt-unauth") },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent bucket id", async () => {
    const error = await runEffect(
      bucketUpdate({
        id: NON_EXISTENT_UUID,
        input: { name: bucketName("bkt-missing") },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty bucket id", async () => {
    const error = await runEffect(
      bucketUpdate({
        id: "",
        input: { name: bucketName("bkt-invalid") },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
