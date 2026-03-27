import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { Effect } from "effect";
import { runEffect, testRunId } from "./test";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsDelete } from "../src/operations/AppsDelete";
import { SecretCreate } from "../src/operations/SecretCreate";
import { SecretGet } from "../src/operations/SecretGet";
import { SecretsList } from "../src/operations/SecretsList";
import { SecretsUpdate } from "../src/operations/SecretsUpdate";
import { SecretDelete } from "../src/operations/SecretDelete";
import { SecretkeysList } from "../src/operations/SecretkeysList";
import { SecretkeyGenerate } from "../src/operations/SecretkeyGenerate";
import { SecretkeyGet } from "../src/operations/SecretkeyGet";
import { SecretkeyDelete } from "../src/operations/SecretkeyDelete";
import { NotFound } from "../src/errors";

const appName = `distilled-fly-sec-${testRunId}`;
const secretName = `TEST_SECRET_${testRunId}`;

describe("Secrets", () => {
  beforeAll(async () => {
    await runEffect(AppsDelete({ app_name: appName }).pipe(Effect.ignore));
    await runEffect(AppsCreate({ org_slug: "alchemy-test", name: appName }));
  }, 60_000);

  afterAll(async () => {
    await runEffect(AppsDelete({ app_name: appName }).pipe(Effect.ignore));
  }, 60_000);

  describe("SecretCreate", () => {
    it("happy path - creates a secret", async () => {
      await runEffect(
        Effect.gen(function* () {
          const secret = yield* SecretCreate({
            app_name: appName,
            secret_name: secretName,
            value: "test-secret-value",
          });
          expect(secret.name).toBe(secretName);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        SecretCreate({
          app_name: "distilled-nonexistent-app-zzzzz",
          secret_name: "TEST_SECRET",
          value: "test",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);
  });

  describe("SecretGet", () => {
    it("happy path - gets a secret", async () => {
      await runEffect(
        Effect.gen(function* () {
          const secret = yield* SecretGet({
            app_name: appName,
            secret_name: secretName,
          });
          expect(secret.name).toBe(secretName);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent secret", async () => {
      await runEffect(
        SecretGet({
          app_name: appName,
          secret_name: "NONEXISTENT_SECRET_ZZZZZ",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("SecretsList", () => {
    it("happy path - lists secrets for the app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* SecretsList({ app_name: appName });
          expect(result.secrets).toBeDefined();
          expect(Array.isArray(result.secrets)).toBe(true);
          expect(result.secrets!.length).toBeGreaterThanOrEqual(1);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        SecretsList({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("SecretsUpdate", () => {
    it("happy path - updates secrets", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* SecretsUpdate({
            app_name: appName,
            values: { [`UPDATE_SECRET_${testRunId}`]: "updated-value" },
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        SecretsUpdate({
          app_name: "distilled-nonexistent-app-zzzzz",
          values: { TEST: "value" },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("SecretDelete", () => {
    it("happy path - deletes a secret", async () => {
      await runEffect(
        Effect.gen(function* () {
          // Create a secret to delete
          yield* SecretCreate({
            app_name: appName,
            secret_name: `DELETE_ME_${testRunId}`,
            value: "to-delete",
          });
          const result = yield* SecretDelete({
            app_name: appName,
            secret_name: `DELETE_ME_${testRunId}`,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        SecretDelete({
          app_name: "distilled-nonexistent-app-zzzzz",
          secret_name: "NONEXISTENT_SECRET_ZZZZZ",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("SecretkeysList", () => {
    it("happy path - lists secretkeys for the app", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* SecretkeysList({ app_name: appName });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        SecretkeysList({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("SecretkeyGenerate", () => {
    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        SecretkeyGenerate({
          app_name: "distilled-nonexistent-app-zzzzz",
          secret_name: "nonexistent",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("SecretkeyGet", () => {
    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        SecretkeyGet({
          app_name: "distilled-nonexistent-app-zzzzz",
          secret_name: "nonexistent",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("SecretkeyDelete", () => {
    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        SecretkeyDelete({
          app_name: "distilled-nonexistent-app-zzzzz",
          secret_name: "nonexistent",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });
});
