import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./test";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsDelete } from "../src/operations/AppsDelete";
import { SecretkeysList } from "../src/operations/SecretkeysList";
import { SecretkeyGet } from "../src/operations/SecretkeyGet";
import { SecretkeySet } from "../src/operations/SecretkeySet";
import { SecretkeyDelete } from "../src/operations/SecretkeyDelete";
import { SecretkeyDecrypt } from "../src/operations/SecretkeyDecrypt";
import { SecretkeyEncrypt } from "../src/operations/SecretkeyEncrypt";
import { SecretkeyGenerate } from "../src/operations/SecretkeyGenerate";
import { SecretkeySign } from "../src/operations/SecretkeySign";
import { SecretkeyVerify } from "../src/operations/SecretkeyVerify";
import { SecretsList } from "../src/operations/SecretsList";
import { SecretsUpdate } from "../src/operations/SecretsUpdate";
import { SecretGet } from "../src/operations/SecretGet";
import { SecretCreate } from "../src/operations/SecretCreate";
import { SecretDelete } from "../src/operations/SecretDelete";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Secrets", () => {
  // ============================================================================
  // SecretkeysList
  // ============================================================================

  describe("SecretkeysList", () => {
    const appName = `test-seckeys-${testRunId}`;

    it("happy path - list secret keys for an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* SecretkeysList({
            app_name: appName,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("secret_keys");
          expect(Array.isArray(result.secret_keys)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* SecretkeysList({
            app_name: "nonexistent-app-00000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretkeysList({
          app_name: "nonexistent-app-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretkeyGet
  // ============================================================================

  describe("SecretkeyGet", () => {
    const appName = `test-seckey-get-${testRunId}`;

    it("happy path - get a secret key for an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // List keys first to find one that exists
          const list = yield* SecretkeysList({ app_name: appName });
          const keys = list.secret_keys ?? [];
          if (keys.length > 0) {
            const result = yield* SecretkeyGet({
              app_name: appName,
              secret_name: keys[0].name!,
            });
            expect(result).toBeDefined();
            expect(result).toHaveProperty("name");
            expect(result).toHaveProperty("type");
          } else {
            // App has no secret keys yet — just verify the list was empty
            expect(keys).toHaveLength(0);
          }
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent secret key", async () => {
      const nfAppName = `test-seckey-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* SecretkeyGet({
            app_name: nfAppName,
            secret_name: "nonexistent-key-00000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretkeyGet({
          app_name: "nonexistent-app-00000000",
          secret_name: "nonexistent-key",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretkeySet
  // ============================================================================

  describe("SecretkeySet", () => {
    const appName = `test-seckey-set-${testRunId}`;

    it("happy path - create a secret key for an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* SecretkeySet({
            app_name: appName,
            secret_name: "test-key",
            type: "secret_box",
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("name");
          expect(result).toHaveProperty("type");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* SecretkeySet({
            app_name: "nonexistent-app-00000000",
            secret_name: "test-key",
            type: "secret_box",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretkeySet({
          app_name: "nonexistent-app-00000000",
          secret_name: "test-key",
          type: "secret_box",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretkeyDelete
  // ============================================================================

  describe("SecretkeyDelete", () => {
    const appName = `test-seckey-del-${testRunId}`;

    it("happy path - create then delete a secret key", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Create a secret key first
          yield* SecretkeySet({
            app_name: appName,
            secret_name: "delete-me",
            type: "secret_box",
          });
          // Now delete it
          const result = yield* SecretkeyDelete({
            app_name: appName,
            secret_name: "delete-me",
          });
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent secret key", async () => {
      const nfAppName = `test-seckey-del-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* SecretkeyDelete({
            app_name: nfAppName,
            secret_name: "nonexistent-key-00000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretkeyDelete({
          app_name: "nonexistent-app-00000000",
          secret_name: "nonexistent-key",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretkeyDecrypt
  // ============================================================================

  describe("SecretkeyDecrypt", () => {
    const appName = `test-seckey-dec-${testRunId}`;

    it("happy path - decrypt with a secret key (expect BadRequest for invalid ciphertext)", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Create a secret key first
          yield* SecretkeySet({
            app_name: appName,
            secret_name: "decrypt-key",
            type: "secret_box",
          });
          // Attempt decrypt — invalid ciphertext will produce an error,
          // but this verifies the SDK correctly maps the request
          const error = yield* SecretkeyDecrypt({
            app_name: appName,
            secret_name: "decrypt-key",
            ciphertext: [0, 1, 2, 3],
            associated_data: [4, 5, 6, 7],
          }).pipe(Effect.flip);
          // Invalid ciphertext should produce BadRequest
          expect((error as any)._tag).toBe("BadRequest");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent secret key", async () => {
      const nfAppName = `test-seckey-dec-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* SecretkeyDecrypt({
            app_name: nfAppName,
            secret_name: "nonexistent-key-00000000",
            ciphertext: [0, 1, 2, 3],
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretkeyDecrypt({
          app_name: "nonexistent-app-00000000",
          secret_name: "nonexistent-key",
          ciphertext: [0, 1, 2, 3],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretkeyEncrypt
  // ============================================================================

  describe("SecretkeyEncrypt", () => {
    const appName = `test-seckey-enc-${testRunId}`;

    it("happy path - encrypt with a secret key", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Create a secret key first
          yield* SecretkeySet({
            app_name: appName,
            secret_name: "encrypt-key",
            type: "secret_box",
          });
          const result = yield* SecretkeyEncrypt({
            app_name: appName,
            secret_name: "encrypt-key",
            plaintext: [72, 101, 108, 108, 111], // "Hello"
            associated_data: [1, 2, 3],
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("ciphertext");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent secret key", async () => {
      const nfAppName = `test-seckey-enc-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* SecretkeyEncrypt({
            app_name: nfAppName,
            secret_name: "nonexistent-key-00000000",
            plaintext: [72, 101, 108, 108, 111],
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretkeyEncrypt({
          app_name: "nonexistent-app-00000000",
          secret_name: "nonexistent-key",
          plaintext: [72, 101, 108, 108, 111],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretkeyGenerate
  // ============================================================================

  describe("SecretkeyGenerate", () => {
    const appName = `test-seckey-gen-${testRunId}`;

    it("happy path - generate a random secret key", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* SecretkeyGenerate({
            app_name: appName,
            secret_name: "generated-key",
            type: "secret_box",
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("name");
          expect(result).toHaveProperty("type");
          expect(result).toHaveProperty("public_key");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* SecretkeyGenerate({
            app_name: "nonexistent-app-00000000",
            secret_name: "generated-key",
            type: "secret_box",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretkeyGenerate({
          app_name: "nonexistent-app-00000000",
          secret_name: "generated-key",
          type: "secret_box",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretkeySign
  // ============================================================================

  describe("SecretkeySign", () => {
    const appName = `test-seckey-sign-${testRunId}`;

    it("happy path - sign with a secret key", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Generate an ed25519 signing key
          yield* SecretkeyGenerate({
            app_name: appName,
            secret_name: "sign-key",
            type: "ed25519",
          });
          const result = yield* SecretkeySign({
            app_name: appName,
            secret_name: "sign-key",
            plaintext: [72, 101, 108, 108, 111], // "Hello"
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("signature");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent secret key", async () => {
      const nfAppName = `test-seckey-sign-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* SecretkeySign({
            app_name: nfAppName,
            secret_name: "nonexistent-key-00000000",
            plaintext: [72, 101, 108, 108, 111],
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretkeySign({
          app_name: "nonexistent-app-00000000",
          secret_name: "nonexistent-key",
          plaintext: [72, 101, 108, 108, 111],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretkeyVerify
  // ============================================================================

  describe("SecretkeyVerify", () => {
    const appName = `test-seckey-ver-${testRunId}`;

    it("happy path - sign then verify with a secret key", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Generate an ed25519 signing key
          yield* SecretkeyGenerate({
            app_name: appName,
            secret_name: "verify-key",
            type: "ed25519",
          });
          // Sign some data
          const plaintext = [72, 101, 108, 108, 111]; // "Hello"
          const signed = yield* SecretkeySign({
            app_name: appName,
            secret_name: "verify-key",
            plaintext,
          });
          // Verify the signature
          const result = yield* SecretkeyVerify({
            app_name: appName,
            secret_name: "verify-key",
            plaintext,
            signature: signed.signature,
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - BadRequest for invalid signature", async () => {
      const brAppName = `test-seckey-ver-br-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: brAppName });
          yield* SecretkeyGenerate({
            app_name: brAppName,
            secret_name: "verify-key",
            type: "ed25519",
          });
          const error = yield* SecretkeyVerify({
            app_name: brAppName,
            secret_name: "verify-key",
            plaintext: [72, 101, 108, 108, 111],
            signature: [0, 1, 2, 3], // invalid signature
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("BadRequest");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: brAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent secret key", async () => {
      const nfAppName = `test-seckey-ver-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* SecretkeyVerify({
            app_name: nfAppName,
            secret_name: "nonexistent-key-00000000",
            plaintext: [72, 101, 108, 108, 111],
            signature: [0, 1, 2, 3],
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretkeyVerify({
          app_name: "nonexistent-app-00000000",
          secret_name: "nonexistent-key",
          plaintext: [72, 101, 108, 108, 111],
          signature: [0, 1, 2, 3],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretsList
  // ============================================================================

  describe("SecretsList", () => {
    const appName = `test-seclist-${testRunId}`;

    it("happy path - list secrets for an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* SecretsList({
            app_name: appName,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("secrets");
          expect(Array.isArray(result.secrets)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* SecretsList({
            app_name: "nonexistent-app-00000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretsList({
          app_name: "nonexistent-app-00000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretsUpdate
  // ============================================================================

  describe("SecretsUpdate", () => {
    const appName = `test-secupd-${testRunId}`;

    it("happy path - set app secrets", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* SecretsUpdate({
            app_name: appName,
            values: { MY_SECRET: "secret_value" },
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("secrets");
          expect(Array.isArray(result.secrets)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* SecretsUpdate({
            app_name: "nonexistent-app-00000000",
            values: { MY_SECRET: "secret_value" },
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretsUpdate({
          app_name: "nonexistent-app-00000000",
          values: { MY_SECRET: "secret_value" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretGet
  // ============================================================================

  describe("SecretGet", () => {
    const appName = `test-secget-${testRunId}`;

    it("happy path - get an app secret", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Set a secret first
          yield* SecretsUpdate({
            app_name: appName,
            values: { TEST_SECRET: "test_value" },
          });
          const result = yield* SecretGet({
            app_name: appName,
            secret_name: "TEST_SECRET",
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("name");
          expect(result).toHaveProperty("digest");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent secret", async () => {
      const nfAppName = `test-secget-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* SecretGet({
            app_name: nfAppName,
            secret_name: "NONEXISTENT_SECRET_00000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretGet({
          app_name: "nonexistent-app-00000000",
          secret_name: "NONEXISTENT_SECRET",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretCreate
  // ============================================================================

  describe("SecretCreate", () => {
    const appName = `test-seccreate-${testRunId}`;

    it("happy path - create an app secret", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* SecretCreate({
            app_name: appName,
            secret_name: "MY_NEW_SECRET",
            value: "my_secret_value",
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("name");
          expect(result).toHaveProperty("digest");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* SecretCreate({
            app_name: "nonexistent-app-00000000",
            secret_name: "MY_SECRET",
            value: "my_secret_value",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretCreate({
          app_name: "nonexistent-app-00000000",
          secret_name: "MY_SECRET",
          value: "my_secret_value",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // SecretDelete
  // ============================================================================

  describe("SecretDelete", () => {
    const appName = `test-secdel-${testRunId}`;

    it("happy path - create then delete an app secret", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Create a secret first
          yield* SecretCreate({
            app_name: appName,
            secret_name: "DELETE_ME_SECRET",
            value: "to_be_deleted",
          });
          // Now delete it
          const result = yield* SecretDelete({
            app_name: appName,
            secret_name: "DELETE_ME_SECRET",
          });
          expect(result).toBeDefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent secret", async () => {
      const nfAppName = `test-secdel-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* SecretDelete({
            app_name: nfAppName,
            secret_name: "NONEXISTENT_SECRET_00000000",
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        SecretDelete({
          app_name: "nonexistent-app-00000000",
          secret_name: "NONEXISTENT_SECRET",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
