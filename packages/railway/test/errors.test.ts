/**
 * Discovery tests for Railway's untyped error envelope.
 *
 * Railway's backboard returns most application errors as
 * `{ extensions: { code: "INTERNAL_SERVER_ERROR" }, message: "..." }`
 * with HTTP 200. The SDK discriminates them by message text — see
 * `RAILWAY_MESSAGE_MAP` in `src/errors.ts`. Pure GraphQL meta errors
 * (parse / validation) are routed via `extensions.code`.
 */
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { project } from "../src/operations/project.ts";
import { deployment } from "../src/operations/deployment.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { me } from "../src/operations/me.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("Railway error matching", () => {
  describe("RailwayNotAuthorized (INTERNAL_SERVER_ERROR + 'Not Authorized')", () => {
    it("fires when the bearer token is invalid", async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });

      const error = await Effect.runPromise(
        me({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
    }, 30_000);
  });

  describe("RailwayNotFound (INTERNAL_SERVER_ERROR + '... not found')", () => {
    it("fires for project lookup against a non-existent UUID", async () => {
      const error = await runEffect(
        project({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
    }, 30_000);

    it("fires for deployment lookup against a non-existent UUID", async () => {
      const error = await runEffect(
        deployment({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
    }, 30_000);
  });

  describe("RailwayInvalidInput (INTERNAL_SERVER_ERROR + 'Invalid ...')", () => {
    it("fires when projectCreate is given an empty name", async () => {
      const error = await runEffect(
        projectCreate({ input: { name: "" } }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
      expect((error as { message: string }).message).toMatch(/^Invalid /);
    }, 30_000);
  });
});
