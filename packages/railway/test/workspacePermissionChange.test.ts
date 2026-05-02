import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { workspacePermissionChange } from "../src/operations/workspacePermissionChange.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("workspacePermissionChange", () => {
  it(
    "happy path - exercises workspace permission change with fabricated workspaceId/userId (real promotion/demotion would alter the test runner's own role on its workspace and could break subsequent tests; lands in RailwayNotFound for the fabricated workspace)",
    async () => {
      const error = await runEffect(
        workspacePermissionChange({
          input: {
            role: "MEMBER",
            userId: NON_EXISTENT_UUID,
            workspaceId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect(
        ["RailwayNotFound", "RailwayInvalidInput"].includes(
          (error as { _tag: string })._tag,
        ),
      ).toBe(true);
    },
    30_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        workspacePermissionChange({
          input: {
            role: "MEMBER",
            userId: NON_EXISTENT_UUID,
            workspaceId: NON_EXISTENT_UUID,
          },
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
    "error - RailwayNotFound for a non-existent workspace id",
    async () => {
      const error = await runEffect(
        workspacePermissionChange({
          input: {
            role: "MEMBER",
            userId: NON_EXISTENT_UUID,
            workspaceId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect(
        ["RailwayNotFound", "RailwayInvalidInput"].includes(
          (error as { _tag: string })._tag,
        ),
      ).toBe(true);
    },
    30_000,
  );

  it(
    "error - RailwayInvalidInput for a malformed workspace/user id",
    async () => {
      const error = await runEffect(
        workspacePermissionChange({
          input: {
            role: "MEMBER",
            userId: "not-a-valid-uuid",
            workspaceId: "not-a-valid-uuid",
          },
        }).pipe(Effect.flip),
      );
      expect(
        ["RailwayInvalidInput", "RailwayNotFound"].includes(
          (error as { _tag: string })._tag,
        ),
      ).toBe(true);
    },
    30_000,
  );
});
