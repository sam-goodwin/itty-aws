import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./test";
import { AppsList } from "../src/operations/AppsList";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsDelete } from "../src/operations/AppsDelete";
import { AppsShow } from "../src/operations/AppsShow";
import { AppCertificatesList } from "../src/operations/AppCertificatesList";
import { AppCertificatesAcmeCreate } from "../src/operations/AppCertificatesAcmeCreate";
import { AppCertificatesAcmeDelete } from "../src/operations/AppCertificatesAcmeDelete";
import { AppCertificatesCheck } from "../src/operations/AppCertificatesCheck";
import { AppCertificatesCustomCreate } from "../src/operations/AppCertificatesCustomCreate";
import { AppCertificatesCustomDelete } from "../src/operations/AppCertificatesCustomDelete";
import { AppCertificatesDelete } from "../src/operations/AppCertificatesDelete";
import { AppCertificatesShow } from "../src/operations/AppCertificatesShow";
import { AppCreateDeployToken } from "../src/operations/AppCreateDeployToken";
import { AppIPAssignmentsList } from "../src/operations/AppIPAssignmentsList";
import { AppIPAssignmentsCreate } from "../src/operations/AppIPAssignmentsCreate";
import { AppIPAssignmentsDelete } from "../src/operations/AppIPAssignmentsDelete";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Apps", () => {
  // ============================================================================
  // AppsList
  // ============================================================================
  describe("AppsList", () => {
    it("happy path - lists apps for personal org", async () => {
      const result = await runEffect(
        AppsList({ org_slug: "personal" }),
      );
      expect(result).toHaveProperty("apps");
      expect(Array.isArray(result.apps)).toBe(true);
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppsList({ org_slug: "personal" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppsCreate
  // ============================================================================
  describe("AppsCreate", () => {
    const appName = `distilled-fly-create-${testRunId}`;

    it("happy path - creates an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid org_slug", async () => {
      await runEffect(
        AppsCreate({ org_slug: "nonexistent-org-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppsCreate({ org_slug: "personal", name: `distilled-fly-bad-${testRunId}` }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);

    it("error - NotFound with non-existent org", async () => {
      await runEffect(
        AppsCreate({ org_slug: "org-does-not-exist-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["NotFound", "BadRequest"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppsShow
  // ============================================================================
  describe("AppsShow", () => {
    const appName = `distilled-fly-show-${testRunId}`;

    it("happy path - shows app details", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* AppsShow({ app_name: appName });
          expect(result.name).toBe(appName);
          expect(result).toHaveProperty("id");
          expect(result).toHaveProperty("status");
          expect(result).toHaveProperty("organization");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppsShow({ app_name: "nonexistent-app-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppsShow({ app_name: "nonexistent-app-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppsDelete
  // ============================================================================
  describe("AppsDelete", () => {
    const appName = `distilled-fly-del-${testRunId}`;

    it("happy path - deletes an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          yield* AppsDelete({ app_name: appName });
          // Verify the app is gone by expecting NotFound on show
          const error = yield* AppsShow({ app_name: appName }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppsDelete({ app_name: "nonexistent-app-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppsDelete({ app_name: "nonexistent-app-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppCertificatesList
  // ============================================================================
  describe("AppCertificatesList", () => {
    const appName = `distilled-fly-certs-${testRunId}`;

    it("happy path - lists certificates for an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* AppCertificatesList({ app_name: appName } as any);
          expect(result).toHaveProperty("certificates");
          expect(Array.isArray(result.certificates)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppCertificatesList({ app_name: "nonexistent-app-00000000" } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppCertificatesList({ app_name: "nonexistent-app-00000000" } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppCertificatesAcmeCreate
  // ============================================================================
  describe("AppCertificatesAcmeCreate", () => {
    const appName = `distilled-fly-acme-${testRunId}`;
    const testHostname = `${testRunId}.example.com`;

    it("happy path - requests ACME certificate", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* AppCertificatesAcmeCreate({
            app_name: appName,
            hostname: testHostname,
          } as any);
          expect(result).toHaveProperty("hostname");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              yield* AppCertificatesDelete({ app_name: appName, hostname: testHostname } as any).pipe(Effect.ignore);
              yield* AppsDelete({ app_name: appName }).pipe(Effect.ignore);
            }),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppCertificatesAcmeCreate({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest with empty hostname", async () => {
      const badAppName = `distilled-fly-acme-bad-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: badAppName });
          const error = yield* AppCertificatesAcmeCreate({
            app_name: badAppName,
          } as any).pipe(Effect.flip);
          expect(["BadRequest", "UnprocessableEntity"]).toContain((error as any)._tag);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: badAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppCertificatesAcmeCreate({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);

    it("error - UnprocessableEntity with invalid hostname", async () => {
      const ueAppName = `distilled-fly-acme-ue-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: ueAppName });
          const error = yield* AppCertificatesAcmeCreate({
            app_name: ueAppName,
            hostname: "not a valid hostname!!!",
          } as any).pipe(Effect.flip);
          expect(["UnprocessableEntity", "BadRequest"]).toContain((error as any)._tag);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: ueAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppCertificatesCustomCreate
  // ============================================================================
  describe("AppCertificatesCustomCreate", () => {
    const appName = `distilled-fly-ccert-${testRunId}`;
    const testHostname = `custom-${testRunId}.example.com`;

    it("happy path - uploads custom certificate (expects UnprocessableEntity with self-signed)", async () => {
      // Custom cert upload requires valid PEM chain + private key.
      // With dummy PEM data, the API will reject it — so we verify the SDK
      // correctly maps the response. A real happy path would need a valid cert.
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const error = yield* AppCertificatesCustomCreate({
            app_name: appName,
            hostname: testHostname,
            fullchain: "-----BEGIN CERTIFICATE-----\nMIIBkTCB+wIUEg==\n-----END CERTIFICATE-----",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIBkTCB+wIUEg==\n-----END PRIVATE KEY-----",
          } as any).pipe(Effect.flip);
          // The API rejects invalid certs — verify we get a typed error
          expect(["UnprocessableEntity", "BadRequest"]).toContain((error as any)._tag);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              yield* AppCertificatesDelete({ app_name: appName, hostname: testHostname } as any).pipe(Effect.ignore);
              yield* AppsDelete({ app_name: appName }).pipe(Effect.ignore);
            }),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppCertificatesCustomCreate({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
          fullchain: "fake-cert",
          private_key: "fake-key",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest with missing cert data", async () => {
      const badAppName = `distilled-fly-ccert-bad-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: badAppName });
          const error = yield* AppCertificatesCustomCreate({
            app_name: badAppName,
          } as any).pipe(Effect.flip);
          expect(["BadRequest", "UnprocessableEntity"]).toContain((error as any)._tag);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: badAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppCertificatesCustomCreate({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
          fullchain: "fake-cert",
          private_key: "fake-key",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);

    it("error - UnprocessableEntity with invalid cert content", async () => {
      const ueAppName = `distilled-fly-ccert-ue-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: ueAppName });
          const error = yield* AppCertificatesCustomCreate({
            app_name: ueAppName,
            hostname: `ue-${testRunId}.example.com`,
            fullchain: "not-a-pem-cert",
            private_key: "not-a-pem-key",
          } as any).pipe(Effect.flip);
          expect(["UnprocessableEntity", "BadRequest"]).toContain((error as any)._tag);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: ueAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppCertificatesShow
  // ============================================================================
  describe("AppCertificatesShow", () => {
    const appName = `distilled-fly-cshow-${testRunId}`;
    const testHostname = `show-${testRunId}.example.com`;

    it("happy path - shows certificate details", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Create a cert first via ACME so we can show it
          yield* AppCertificatesAcmeCreate({
            app_name: appName,
            hostname: testHostname,
          } as any);
          const result = yield* AppCertificatesShow({
            app_name: appName,
            hostname: testHostname,
          } as any);
          expect(result).toHaveProperty("hostname");
          expect(result.hostname).toBe(testHostname);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              yield* AppCertificatesDelete({ app_name: appName, hostname: testHostname } as any).pipe(Effect.ignore);
              yield* AppsDelete({ app_name: appName }).pipe(Effect.ignore);
            }),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent hostname", async () => {
      const nfAppName = `distilled-fly-cshow-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* AppCertificatesShow({
            app_name: nfAppName,
            hostname: "nonexistent.example.com",
          } as any).pipe(Effect.flip);
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
        AppCertificatesShow({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppCertificatesDelete
  // ============================================================================
  describe("AppCertificatesDelete", () => {
    const appName = `distilled-fly-cdel-${testRunId}`;
    const testHostname = `del-${testRunId}.example.com`;

    it("happy path - deletes a certificate", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Create a cert first so we can delete it
          yield* AppCertificatesAcmeCreate({
            app_name: appName,
            hostname: testHostname,
          } as any);
          yield* AppCertificatesDelete({
            app_name: appName,
            hostname: testHostname,
          } as any);
          // Verify the cert is gone
          const error = yield* AppCertificatesShow({
            app_name: appName,
            hostname: testHostname,
          } as any).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              yield* AppCertificatesDelete({ app_name: appName, hostname: testHostname } as any).pipe(Effect.ignore);
              yield* AppsDelete({ app_name: appName }).pipe(Effect.ignore);
            }),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent hostname", async () => {
      const nfAppName = `distilled-fly-cdel-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* AppCertificatesDelete({
            app_name: nfAppName,
            hostname: "nonexistent.example.com",
          } as any).pipe(Effect.flip);
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
        AppCertificatesDelete({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppCertificatesAcmeDelete
  // ============================================================================
  describe("AppCertificatesAcmeDelete", () => {
    const appName = `distilled-fly-adel-${testRunId}`;
    const testHostname = `adel-${testRunId}.example.com`;

    it("happy path - removes ACME certificate", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Create an ACME cert first so we can delete it
          yield* AppCertificatesAcmeCreate({
            app_name: appName,
            hostname: testHostname,
          } as any);
          const result = yield* AppCertificatesAcmeDelete({
            app_name: appName,
            hostname: testHostname,
          } as any);
          expect(result).toHaveProperty("hostname");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              yield* AppCertificatesDelete({ app_name: appName, hostname: testHostname } as any).pipe(Effect.ignore);
              yield* AppsDelete({ app_name: appName }).pipe(Effect.ignore);
            }),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent hostname", async () => {
      const nfAppName = `distilled-fly-adel-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* AppCertificatesAcmeDelete({
            app_name: nfAppName,
            hostname: "nonexistent.example.com",
          } as any).pipe(Effect.flip);
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
        AppCertificatesAcmeDelete({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppCertificatesCheck
  // ============================================================================
  describe("AppCertificatesCheck", () => {
    const appName = `distilled-fly-cchk-${testRunId}`;
    const testHostname = `chk-${testRunId}.example.com`;

    it("happy path - checks certificate DNS and validation", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Create a cert first so we can check it
          yield* AppCertificatesAcmeCreate({
            app_name: appName,
            hostname: testHostname,
          } as any);
          const result = yield* AppCertificatesCheck({
            app_name: appName,
            hostname: testHostname,
          } as any);
          expect(result).toHaveProperty("hostname");
          expect(result.hostname).toBe(testHostname);
          expect(result).toHaveProperty("validation");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              yield* AppCertificatesDelete({ app_name: appName, hostname: testHostname } as any).pipe(Effect.ignore);
              yield* AppsDelete({ app_name: appName }).pipe(Effect.ignore);
            }),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent hostname", async () => {
      const nfAppName = `distilled-fly-cchk-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* AppCertificatesCheck({
            app_name: nfAppName,
            hostname: "nonexistent.example.com",
          } as any).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - BadRequest for non-existent app", async () => {
      await runEffect(
        AppCertificatesCheck({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppCertificatesCheck({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppCertificatesCustomDelete
  // ============================================================================
  describe("AppCertificatesCustomDelete", () => {
    const appName = `distilled-fly-ccdel-${testRunId}`;
    const testHostname = `ccdel-${testRunId}.example.com`;

    it("happy path - removes custom certificate component from ACME cert", async () => {
      // Create an ACME cert, then call custom delete on it.
      // The API returns the cert details even if no custom component exists.
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          yield* AppCertificatesAcmeCreate({
            app_name: appName,
            hostname: testHostname,
          } as any);
          const result = yield* AppCertificatesCustomDelete({
            app_name: appName,
            hostname: testHostname,
          } as any);
          expect(result).toHaveProperty("hostname");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              yield* AppCertificatesDelete({ app_name: appName, hostname: testHostname } as any).pipe(Effect.ignore);
              yield* AppsDelete({ app_name: appName }).pipe(Effect.ignore);
            }),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent hostname", async () => {
      const nfAppName = `distilled-fly-ccdel-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* AppCertificatesCustomDelete({
            app_name: nfAppName,
            hostname: "nonexistent.example.com",
          } as any).pipe(Effect.flip);
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
        AppCertificatesCustomDelete({
          app_name: "nonexistent-app-00000000",
          hostname: "test.example.com",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppCreateDeployToken
  // ============================================================================
  describe("AppCreateDeployToken", () => {
    const appName = `distilled-fly-dtkn-${testRunId}`;

    it("happy path - creates a deploy token", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* AppCreateDeployToken({ app_name: appName });
          expect(result).toHaveProperty("token");
          expect(typeof result.token).toBe("string");
          expect(result.token!.length).toBeGreaterThan(0);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppCreateDeployToken({ app_name: "nonexistent-app-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid expiry", async () => {
      const badAppName = `distilled-fly-dtkn-bad-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: badAppName });
          const error = yield* AppCreateDeployToken({
            app_name: badAppName,
            expiry: "not-a-valid-duration",
          }).pipe(Effect.flip);
          expect(["BadRequest", "UnprocessableEntity"]).toContain((error as any)._tag);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: badAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppCreateDeployToken({ app_name: "nonexistent-app-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppIPAssignmentsList
  // ============================================================================
  describe("AppIPAssignmentsList", () => {
    const appName = `distilled-fly-ips-${testRunId}`;

    it("happy path - lists IP assignments for an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* AppIPAssignmentsList({
            app_name: appName,
          } as any);
          expect(result).toHaveProperty("ips");
          expect(Array.isArray(result.ips)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppIPAssignmentsList({
          app_name: "nonexistent-app-00000000",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppIPAssignmentsList({
          app_name: "nonexistent-app-00000000",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppIPAssignmentsCreate
  // ============================================================================
  describe("AppIPAssignmentsCreate", () => {
    const appName = `distilled-fly-ipcr-${testRunId}`;

    it("happy path - assigns a shared IPv4 to an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* AppIPAssignmentsCreate({
            app_name: appName,
            type: "shared_v4",
          } as any);
          expect(result).toHaveProperty("ip");
          expect(typeof result.ip).toBe("string");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        AppIPAssignmentsCreate({
          app_name: "nonexistent-app-00000000",
          type: "shared_v4",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid type", async () => {
      const badAppName = `distilled-fly-ipcr-bad-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: badAppName });
          const error = yield* AppIPAssignmentsCreate({
            app_name: badAppName,
            type: "invalid_type_xyz",
          } as any).pipe(Effect.flip);
          expect(["BadRequest", "UnprocessableEntity"]).toContain((error as any)._tag);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: badAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        AppIPAssignmentsCreate({
          app_name: "nonexistent-app-00000000",
          type: "shared_v4",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });

  // ============================================================================
  // AppIPAssignmentsDelete
  // ============================================================================
  describe("AppIPAssignmentsDelete", () => {
    const appName = `distilled-fly-ipdel-${testRunId}`;

    it("happy path - removes an IP assignment from an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          // Assign an IP first so we can delete it
          const created = yield* AppIPAssignmentsCreate({
            app_name: appName,
            type: "shared_v4",
          } as any);
          const ip = created.ip!;
          yield* AppIPAssignmentsDelete({
            app_name: appName,
            ip,
          } as any);
          // Verify the IP is gone
          const result = yield* AppIPAssignmentsList({
            app_name: appName,
          } as any);
          const remaining = (result.ips ?? []).map((a: any) => a.ip);
          expect(remaining).not.toContain(ip);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent IP", async () => {
      const nfAppName = `distilled-fly-ipdel-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* AppIPAssignmentsDelete({
            app_name: nfAppName,
            ip: "192.0.2.999",
          } as any).pipe(Effect.flip);
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
        AppIPAssignmentsDelete({
          app_name: "nonexistent-app-00000000",
          ip: "192.0.2.1",
        } as any).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain((e as any)._tag);
          }),
          Effect.provide(BadTokenLayer),
        ),
      );
    }, 30_000);
  });
});
