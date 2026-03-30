import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { TestLayer } from "./setup";
import { deleteV1IntegrationsById } from "../src/operations/deleteV1IntegrationsById";

describe("deleteV1IntegrationsById", () => {
  // ============================================================================
  // Happy path
  // ============================================================================

  // Integrations are created via OAuth flows, not through the API.
  // A true happy-path delete would require an existing OAuth integration,
  // which cannot be provisioned in automated tests. The error tests below
  // confirm the endpoint is reachable and the SDK maps errors correctly.

  // ============================================================================
  // Error tests
  // ============================================================================

  it("error - NotFound for non-existent integration id", async () => {
    await Effect.runPromise(
      deleteV1IntegrationsById({ id: "non-existent-integ-id-00000000" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["NotFound", "UnprocessableEntity"]).toContain((e as any)._tag);
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);

  it("error - UnprocessableEntity for malformed id", async () => {
    await Effect.runPromise(
      deleteV1IntegrationsById({ id: "" }).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["UnprocessableEntity", "NotFound", "BadRequest"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(TestLayer),
      ),
    );
  }, 30_000);
});
