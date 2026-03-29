import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./test";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsDelete } from "../src/operations/AppsDelete";
import { MachinesList } from "../src/operations/MachinesList";
import { MachinesCordon } from "../src/operations/MachinesCordon";
import { MachinesCreate } from "../src/operations/MachinesCreate";
import { MachinesListEvents } from "../src/operations/MachinesListEvents";
import { MachinesDelete } from "../src/operations/MachinesDelete";
import { MachinesShow } from "../src/operations/MachinesShow";
import { MachinesShowLease } from "../src/operations/MachinesShowLease";
import { MachinesCreateLease } from "../src/operations/MachinesCreateLease";
import { MachinesReleaseLease } from "../src/operations/MachinesReleaseLease";
import { MachinesExec } from "../src/operations/MachinesExec";
import { MachinesGetMemory } from "../src/operations/MachinesGetMemory";
import { MachinesSetMemoryLimit } from "../src/operations/MachinesSetMemoryLimit";
import { MachinesReclaimMemory } from "../src/operations/MachinesReclaimMemory";
import { MachinesShowMetadata } from "../src/operations/MachinesShowMetadata";
import { MachinesPatchMetadata } from "../src/operations/MachinesPatchMetadata";
import { MachinesUpdateMetadata } from "../src/operations/MachinesUpdateMetadata";
import { MachinesDeleteMetadata } from "../src/operations/MachinesDeleteMetadata";
import { MachinesListProcesses } from "../src/operations/MachinesListProcesses";
import { MachinesRestart } from "../src/operations/MachinesRestart";
import { MachinesSignal } from "../src/operations/MachinesSignal";
import { MachinesStart } from "../src/operations/MachinesStart";
import { MachinesSuspend } from "../src/operations/MachinesSuspend";
import { MachinesUncordon } from "../src/operations/MachinesUncordon";
import { MachinesListVersions } from "../src/operations/MachinesListVersions";
import { MachinesWait } from "../src/operations/MachinesWait";
import { MachinesOrgList } from "../src/operations/MachinesOrgList";
import { MachinesStop } from "../src/operations/MachinesStop";
import { MachinesUpdate } from "../src/operations/MachinesUpdate";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("Machines", () => {
  // ============================================================================
  // MachinesList
  // ============================================================================
  describe("MachinesList", () => {
    const appName = `distilled-fly-mlist-${testRunId}`;

    it("happy path - lists machines for an app", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* MachinesList({ app_name: appName });
          expect(Array.isArray(result)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        MachinesList({ app_name: "nonexistent-app-00000000" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        MachinesList({ app_name: "nonexistent-app-00000000" }).pipe(
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
  // MachinesCreate
  // ============================================================================
  describe("MachinesCreate", () => {
    const appName = `distilled-fly-mcreate-${testRunId}`;

    it("happy path - creates a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const result = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: {
                cpu_kind: "shared",
                cpus: 1,
                memory_mb: 256,
              },
            },
            skip_launch: true,
          });
          expect(result).toHaveProperty("id");
          expect(typeof result.id).toBe("string");
          expect(result).toHaveProperty("state");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        MachinesCreate({
          app_name: "nonexistent-app-00000000",
          config: {
            image: "registry.fly.io/flyctl:latest",
          },
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect((e as any)._tag).toBe("NotFound");
          }),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid config", async () => {
      const badAppName = `distilled-fly-mcreate-bad-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: badAppName });
          const error = yield* MachinesCreate({
            app_name: badAppName,
            config: {
              image: "",
            },
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
        MachinesCreate({
          app_name: "nonexistent-app-00000000",
          config: {
            image: "registry.fly.io/flyctl:latest",
          },
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
  // MachinesShow
  // ============================================================================
  describe("MachinesShow", () => {
    const appName = `distilled-fly-mshow-${testRunId}`;

    it("happy path - shows machine details", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: {
                cpu_kind: "shared",
                cpus: 1,
                memory_mb: 256,
              },
            },
            skip_launch: true,
          });
          const result = yield* MachinesShow({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(result.id).toBe(machine.id);
          expect(result).toHaveProperty("state");
          expect(result).toHaveProperty("region");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `distilled-fly-mshow-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesShow({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesShow({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesUpdate
  // ============================================================================
  describe("MachinesUpdate", () => {
    const appName = `distilled-fly-mupd-${testRunId}`;

    it("happy path - updates a machine config", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: {
                cpu_kind: "shared",
                cpus: 1,
                memory_mb: 256,
              },
            },
            skip_launch: true,
          });
          const result = yield* MachinesUpdate({
            app_name: appName,
            machine_id: machine.id!,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: {
                cpu_kind: "shared",
                cpus: 1,
                memory_mb: 256,
              },
              metadata: { updated: "true" },
            },
          });
          expect(result).toHaveProperty("id");
          expect(result.id).toBe(machine.id);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `distilled-fly-mupd-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesUpdate({
            app_name: nfAppName,
            machine_id: "00000000000000",
            config: {
              image: "registry.fly.io/flyctl:latest",
            },
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: nfAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - BadRequest with invalid config", async () => {
      const badAppName = `distilled-fly-mupd-bad-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: badAppName });
          const machine = yield* MachinesCreate({
            app_name: badAppName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: {
                cpu_kind: "shared",
                cpus: 1,
                memory_mb: 256,
              },
            },
            skip_launch: true,
          });
          const error = yield* MachinesUpdate({
            app_name: badAppName,
            machine_id: machine.id!,
            config: {
              image: "",
            },
          }).pipe(Effect.flip);
          expect(["BadRequest", "UnprocessableEntity"]).toContain((error as any)._tag);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: badAppName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        MachinesUpdate({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
          config: {
            image: "registry.fly.io/flyctl:latest",
          },
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
  // MachinesDelete
  // ============================================================================
  describe("MachinesDelete", () => {
    const appName = `distilled-fly-mdel-${testRunId}`;

    it("happy path - deletes a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: {
                cpu_kind: "shared",
                cpus: 1,
                memory_mb: 256,
              },
            },
            skip_launch: true,
          });
          yield* MachinesDelete({
            app_name: appName,
            machine_id: machine.id!,
            force: true,
          });
          // Verify the machine is gone
          const error = yield* MachinesShow({
            app_name: appName,
            machine_id: machine.id!,
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `distilled-fly-mdel-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesDelete({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesDelete({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesCordon
  // ============================================================================
  describe("MachinesCordon", () => {
    const appName = `distilled-fly-mcord-${testRunId}`;

    it("happy path - cordons a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: {
                cpu_kind: "shared",
                cpus: 1,
                memory_mb: 256,
              },
            },
            skip_launch: true,
          });
          yield* MachinesCordon({
            app_name: appName,
            machine_id: machine.id!,
          });
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `distilled-fly-mcord-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesCordon({
            app_name: nfAppName,
            machine_id: "00000000000000",
          }).pipe(Effect.flip);
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
        MachinesCordon({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(["BadRequest", "NotFound"]).toContain((e as any)._tag);
          }),
        ),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        MachinesCordon({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesListEvents
  // ============================================================================
  describe("MachinesListEvents", () => {
    const appName = `distilled-fly-mevt-${testRunId}`;

    it("happy path - lists events for a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: {
                cpu_kind: "shared",
                cpus: 1,
                memory_mb: 256,
              },
            },
            skip_launch: true,
          });
          const result = yield* MachinesListEvents({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(Array.isArray(result)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `distilled-fly-mevt-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesListEvents({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesListEvents({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesExec
  // ============================================================================

  describe("MachinesExec", () => {
    const appName = `test-exec-${testRunId}`;

    it("happy path - exec command on a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
          });
          // Wait for machine to be started before exec
          yield* Effect.sleep("5 seconds");
          const result = yield* MachinesExec({
            app_name: appName,
            machine_id: machine.id!,
            command: ["echo", "hello"],
            timeout: 10,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("exit_code");
          expect(result).toHaveProperty("stdout");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-exec-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesExec({
            app_name: nfAppName,
            machine_id: "00000000000000",
            command: ["echo", "hello"],
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
        MachinesExec({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
          command: ["echo", "hello"],
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
  // MachinesShowLease
  // ============================================================================

  describe("MachinesShowLease", () => {
    const appName = `test-showlease-${testRunId}`;

    it("happy path - show lease on a machine (no active lease)", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const lease = yield* MachinesShowLease({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(lease).toBeDefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-showlease-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesShowLease({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesShowLease({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesCreateLease
  // ============================================================================

  describe("MachinesCreateLease", () => {
    const appName = `test-createlease-${testRunId}`;

    it("happy path - create a lease on a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const lease = yield* MachinesCreateLease({
            app_name: appName,
            machine_id: machine.id!,
            description: "test lease",
            ttl: 30,
          });
          expect(lease).toBeDefined();
          expect(lease).toHaveProperty("nonce");
          expect(lease).toHaveProperty("expires_at");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-createlease-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesCreateLease({
            app_name: nfAppName,
            machine_id: "00000000000000",
            ttl: 30,
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
        MachinesCreateLease({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
          ttl: 30,
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
  // MachinesReleaseLease
  // ============================================================================

  describe("MachinesReleaseLease", () => {
    const appName = `test-rellease-${testRunId}`;

    it("happy path - create and release a lease on a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          // First create a lease so we can release it
          yield* MachinesCreateLease({
            app_name: appName,
            machine_id: machine.id!,
            description: "lease to release",
            ttl: 60,
          });
          // Now release the lease
          const result = yield* MachinesReleaseLease({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-rellease-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesReleaseLease({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesReleaseLease({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesGetMemory
  // ============================================================================

  describe("MachinesGetMemory", () => {
    const appName = `test-getmem-${testRunId}`;

    it("happy path - get memory for a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const memory = yield* MachinesGetMemory({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(memory).toBeDefined();
          expect(memory).toHaveProperty("limit_mb");
          expect(memory).toHaveProperty("available_mb");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-getmem-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesGetMemory({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesGetMemory({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesSetMemoryLimit
  // ============================================================================

  describe("MachinesSetMemoryLimit", () => {
    const appName = `test-setmlim-${testRunId}`;

    it("happy path - set memory limit on a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const result = yield* MachinesSetMemoryLimit({
            app_name: appName,
            machine_id: machine.id!,
            limit_mb: 128,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("limit_mb");
          expect(result).toHaveProperty("available_mb");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-setmlim-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesSetMemoryLimit({
            app_name: nfAppName,
            machine_id: "00000000000000",
            limit_mb: 128,
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
        MachinesSetMemoryLimit({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
          limit_mb: 128,
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
  // MachinesReclaimMemory
  // ============================================================================

  describe("MachinesReclaimMemory", () => {
    const appName = `test-reclmem-${testRunId}`;

    it("happy path - reclaim memory from a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const result = yield* MachinesReclaimMemory({
            app_name: appName,
            machine_id: machine.id!,
            amount_mb: 64,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("actual_mb");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-reclmem-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesReclaimMemory({
            app_name: nfAppName,
            machine_id: "00000000000000",
            amount_mb: 64,
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
        MachinesReclaimMemory({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
          amount_mb: 64,
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
  // MachinesShowMetadata
  // ============================================================================

  describe("MachinesShowMetadata", () => {
    const appName = `test-showmeta-${testRunId}`;

    it("happy path - get metadata for a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const metadata = yield* MachinesShowMetadata({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(metadata).toBeDefined();
          expect(typeof metadata).toBe("object");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-showmeta-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesShowMetadata({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesShowMetadata({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesPatchMetadata
  // ============================================================================

  describe("MachinesPatchMetadata", () => {
    const appName = `test-patchmeta-${testRunId}`;

    it("happy path - patch metadata on a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const result = yield* MachinesPatchMetadata({
            app_name: appName,
            machine_id: machine.id!,
          } as any);
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-patchmeta-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesPatchMetadata({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesPatchMetadata({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
        } as any).pipe(
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
  // MachinesUpdateMetadata
  // ============================================================================

  describe("MachinesUpdateMetadata", () => {
    const appName = `test-updmeta-${testRunId}`;

    it("happy path - update metadata key on a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const result = yield* MachinesUpdateMetadata({
            app_name: appName,
            machine_id: machine.id!,
            key: "test-key",
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-updmeta-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesUpdateMetadata({
            app_name: nfAppName,
            machine_id: "00000000000000",
            key: "test-key",
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
        MachinesUpdateMetadata({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
          key: "test-key",
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
  // MachinesDeleteMetadata
  // ============================================================================

  describe("MachinesDeleteMetadata", () => {
    const appName = `test-delmeta-${testRunId}`;

    it("happy path - delete metadata key from a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          // First set a metadata key, then delete it
          yield* MachinesUpdateMetadata({
            app_name: appName,
            machine_id: machine.id!,
            key: "delete-me",
          });
          const result = yield* MachinesDeleteMetadata({
            app_name: appName,
            machine_id: machine.id!,
            key: "delete-me",
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-delmeta-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesDeleteMetadata({
            app_name: nfAppName,
            machine_id: "00000000000000",
            key: "some-key",
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
        MachinesDeleteMetadata({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
          key: "some-key",
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
  // MachinesListProcesses
  // ============================================================================

  describe("MachinesListProcesses", () => {
    const appName = `test-listproc-${testRunId}`;

    it("happy path - list processes on a running machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
          });
          // Wait for machine to be started before listing processes
          yield* Effect.sleep("5 seconds");
          const processes = yield* MachinesListProcesses({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(Array.isArray(processes)).toBe(true);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-listproc-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesListProcesses({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesListProcesses({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesRestart
  // ============================================================================

  describe("MachinesRestart", () => {
    const appName = `test-restart-${testRunId}`;

    it("happy path - restart a running machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
          });
          // Wait for machine to be started before restarting
          yield* Effect.sleep("5 seconds");
          const result = yield* MachinesRestart({
            app_name: appName,
            machine_id: machine.id!,
            timeout: "30",
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-restart-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesRestart({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesRestart({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesSignal
  // ============================================================================

  describe("MachinesSignal", () => {
    const appName = `test-signal-${testRunId}`;

    it("happy path - send signal to a running machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
          });
          // Wait for machine to be started before signaling
          yield* Effect.sleep("5 seconds");
          const result = yield* MachinesSignal({
            app_name: appName,
            machine_id: machine.id!,
            signal: "SIGUSR1",
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-signal-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesSignal({
            app_name: nfAppName,
            machine_id: "00000000000000",
            signal: "SIGUSR1",
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
        MachinesSignal({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
          signal: "SIGUSR1",
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
  // MachinesStart
  // ============================================================================

  describe("MachinesStart", () => {
    const appName = `test-start-${testRunId}`;

    it("happy path - start a stopped machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const result = yield* MachinesStart({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-start-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesStart({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesStart({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesStop
  // ============================================================================

  describe("MachinesStop", () => {
    const appName = `test-stop-${testRunId}`;

    it("happy path - stop a running machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
          });
          // Wait for machine to be started before stopping
          yield* Effect.sleep("5 seconds");
          const result = yield* MachinesStop({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-stop-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesStop({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesStop({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesSuspend
  // ============================================================================

  describe("MachinesSuspend", () => {
    const appName = `test-suspend-${testRunId}`;

    it("happy path - suspend a running machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
          });
          // Wait for machine to be started before suspending
          yield* Effect.sleep("5 seconds");
          const result = yield* MachinesSuspend({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-suspend-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesSuspend({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesSuspend({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesUncordon
  // ============================================================================

  describe("MachinesUncordon", () => {
    const appName = `test-uncordon-${testRunId}`;

    it("happy path - uncordon a cordoned machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          // Cordon first, then uncordon
          yield* MachinesCordon({
            app_name: appName,
            machine_id: machine.id!,
          });
          const result = yield* MachinesUncordon({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-uncordon-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesUncordon({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesUncordon({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesListVersions
  // ============================================================================

  describe("MachinesListVersions", () => {
    const appName = `test-listver-${testRunId}`;

    it("happy path - list versions for a machine", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
            skip_launch: true,
          });
          const versions = yield* MachinesListVersions({
            app_name: appName,
            machine_id: machine.id!,
          });
          expect(Array.isArray(versions)).toBe(true);
          expect(versions.length).toBeGreaterThanOrEqual(1);
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-listver-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesListVersions({
            app_name: nfAppName,
            machine_id: "00000000000000",
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
        MachinesListVersions({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
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
  // MachinesWait
  // ============================================================================

  describe("MachinesWait", () => {
    const appName = `test-wait-${testRunId}`;

    it("happy path - wait for machine to reach started state", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: appName });
          const machine = yield* MachinesCreate({
            app_name: appName,
            config: {
              image: "registry.fly.io/flyctl:latest",
              auto_destroy: true,
              guest: { cpu_kind: "shared", cpus: 1, memory_mb: 256 },
            },
          });
          const result = yield* MachinesWait({
            app_name: appName,
            machine_id: machine.id!,
            state: "started",
            timeout: 30,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("ok");
        }).pipe(
          Effect.ensuring(
            AppsDelete({ app_name: appName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      const nfAppName = `test-wait-nf-${testRunId}`;
      await runEffect(
        Effect.gen(function* () {
          yield* AppsCreate({ org_slug: "personal", name: nfAppName });
          const error = yield* MachinesWait({
            app_name: nfAppName,
            machine_id: "00000000000000",
            state: "started",
            timeout: 5,
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
        MachinesWait({
          app_name: "nonexistent-app-00000000",
          machine_id: "00000000000000",
          state: "started",
          timeout: 5,
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
  // MachinesOrgList
  // ============================================================================

  describe("MachinesOrgList", () => {
    it("happy path - list machines for personal org", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* MachinesOrgList({
            org_slug: "personal",
            limit: 10,
          });
          expect(result).toBeDefined();
          expect(result).toHaveProperty("machines");
          expect(Array.isArray(result.machines)).toBe(true);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent org", async () => {
      await runEffect(
        Effect.gen(function* () {
          const error = yield* MachinesOrgList({
            org_slug: "nonexistent-org-00000000",
            limit: 10,
          }).pipe(Effect.flip);
          expect((error as any)._tag).toBe("NotFound");
        }),
      );
    }, 30_000);

    it("error - Forbidden with invalid token", async () => {
      await Effect.runPromise(
        MachinesOrgList({
          org_slug: "personal",
          limit: 10,
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
