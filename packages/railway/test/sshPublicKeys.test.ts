import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { sshPublicKeys } from "../src/operations/sshPublicKeys.ts";
import { runEffect } from "./setup.ts";

describe("sshPublicKeys", () => {
  it(
    "happy path - lists SSH public keys for authenticated user",
    async () => {
      const result = await runEffect(sshPublicKeys({ first: 20 }));

      expect(result).toBeDefined();
      expect(Array.isArray(result.edges)).toBe(true);
      expect(result.pageInfo).toBeDefined();
      expect(typeof result.pageInfo.hasNextPage).toBe("boolean");
      expect(typeof result.pageInfo.hasPreviousPage).toBe("boolean");
      if (result.pageInfo.endCursor !== null) {
        expect(typeof result.pageInfo.endCursor).toBe("string");
      }
      if (result.pageInfo.startCursor !== null) {
        expect(typeof result.pageInfo.startCursor).toBe("string");
      }

      for (const edge of result.edges) {
        expect(typeof edge.cursor).toBe("string");
        expect(typeof edge.node.id).toBe("string");
        expect(typeof edge.node.name).toBe("string");
        expect(typeof edge.node.fingerprint).toBe("string");
        expect(typeof edge.node.publicKey).toBe("string");
        expect(typeof edge.node.createdAt).toBe("string");
        expect(typeof edge.node.updatedAt).toBe("string");
        if (edge.node.userId !== null) {
          expect(typeof edge.node.userId).toBe("string");
        }
        if (edge.node.workspaceId !== null) {
          expect(typeof edge.node.workspaceId).toBe("string");
        }
      }
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
        sshPublicKeys({ first: 1 }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
