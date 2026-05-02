import { generateKeyPairSync } from "node:crypto";
import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { sshPublicKeyCreate } from "../src/operations/sshPublicKeyCreate.ts";
import { sshPublicKeyDelete } from "../src/operations/sshPublicKeyDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const generateEd25519PublicKey = (comment: string): string => {
  const { publicKey } = generateKeyPairSync("ed25519");
  const jwk = publicKey.export({ format: "jwk" }) as { x: string };
  const raw = Buffer.from(jwk.x, "base64url");
  const algo = Buffer.from("ssh-ed25519");
  const algoLen = Buffer.from([0, 0, 0, algo.length]);
  const rawLen = Buffer.from([0, 0, 0, raw.length]);
  const wire = Buffer.concat([algoLen, algo, rawLen, raw]);
  return `ssh-ed25519 ${wire.toString("base64")} ${comment}`;
};

describe("sshPublicKeyCreate", () => {
  it("happy path - registers a freshly generated ed25519 public key", async () => {
    const name = `distilled-railway-sshpkc-${testRunId}`;
    const publicKey = generateEd25519PublicKey(name);
    await runEffect(
      Effect.gen(function* () {
        const created = yield* sshPublicKeyCreate({
          input: { name, publicKey },
        });
        return yield* Effect.gen(function* () {
          expect(typeof created.id).toBe("string");
          expect(created.id).toBeTruthy();
          expect(created.name).toBe(name);
          expect(created.publicKey).toBe(publicKey);
          expect(typeof created.fingerprint).toBe("string");
          expect(created.fingerprint).toBeTruthy();
        }).pipe(
          Effect.ensuring(
            sshPublicKeyDelete({ id: created.id }).pipe(Effect.ignore),
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
    const name = `distilled-railway-sshpkc-unauth-${testRunId}`;
    const publicKey = generateEd25519PublicKey(name);
    const error = await Effect.runPromise(
      sshPublicKeyCreate({
        input: { name, publicKey },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for a malformed publicKey", async () => {
    const error = await runEffect(
      sshPublicKeyCreate({
        input: {
          name: `distilled-railway-sshpkc-inv-${testRunId}`,
          publicKey: "not-a-valid-ssh-public-key",
        },
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
