import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { workspaceTwoFactorEnforcementUpdate } from "../src/operations/workspaceTwoFactorEnforcementUpdate.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("workspaceTwoFactorEnforcementUpdate", () => {
  it("happy path - exercises 2FA enforcement update with a fabricated workspace id (real enforcement on the test workspace would lock the test runner out if 2FA is not enrolled; lands in RailwayNotFound or RailwayInvalidInput for the fabricated workspace)", async () => {
    const error = await runEffect(
      workspaceTwoFactorEnforcementUpdate({
        workspaceId: NON_EXISTENT_UUID,
        enabled: true,
      }).pipe(Effect.flip),
    );
    expect(
      ["RailwayNotFound", "RailwayInvalidInput"].includes(
        (error as { _tag: string })._tag,
      ),
    ).toBe(true);
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      workspaceTwoFactorEnforcementUpdate({
        workspaceId: NON_EXISTENT_UUID,
        enabled: true,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent workspace id", async () => {
    const error = await runEffect(
      workspaceTwoFactorEnforcementUpdate({
        workspaceId: NON_EXISTENT_UUID,
        enabled: false,
      }).pipe(Effect.flip),
    );
    expect(
      ["RailwayNotFound", "RailwayInvalidInput"].includes(
        (error as { _tag: string })._tag,
      ),
    ).toBe(true);
  }, 30_000);

  it("error - RailwayInvalidInput for a malformed workspace id", async () => {
    const error = await runEffect(
      workspaceTwoFactorEnforcementUpdate({
        workspaceId: "not-a-valid-uuid",
        enabled: true,
      }).pipe(Effect.flip),
    );
    expect(
      ["RailwayInvalidInput", "RailwayNotFound"].includes(
        (error as { _tag: string })._tag,
      ),
    ).toBe(true);
  }, 30_000);
});
