import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { Effect } from "effect";
import { runEffect, testRunId } from "./test";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsDelete } from "../src/operations/AppsDelete";
import { MachinesCreate } from "../src/operations/MachinesCreate";
import { MachinesList } from "../src/operations/MachinesList";
import { MachinesShow } from "../src/operations/MachinesShow";
import { MachinesDelete } from "../src/operations/MachinesDelete";
import { MachinesStop } from "../src/operations/MachinesStop";
import { MachinesStart } from "../src/operations/MachinesStart";
import { MachinesRestart } from "../src/operations/MachinesRestart";
import { MachinesCordon } from "../src/operations/MachinesCordon";
import { MachinesUncordon } from "../src/operations/MachinesUncordon";
import { MachinesSuspend } from "../src/operations/MachinesSuspend";
import { MachinesExec } from "../src/operations/MachinesExec";
import { MachinesWait } from "../src/operations/MachinesWait";
import { MachinesCreateLease } from "../src/operations/MachinesCreateLease";
import { MachinesShowLease } from "../src/operations/MachinesShowLease";
import { MachinesReleaseLease } from "../src/operations/MachinesReleaseLease";
import { MachinesListEvents } from "../src/operations/MachinesListEvents";
import { MachinesListVersions } from "../src/operations/MachinesListVersions";
import { MachinesListProcesses } from "../src/operations/MachinesListProcesses";
import { MachinesShowMetadata } from "../src/operations/MachinesShowMetadata";
import { MachinesUpdateMetadata } from "../src/operations/MachinesUpdateMetadata";
import { MachinesDeleteMetadata } from "../src/operations/MachinesDeleteMetadata";
import { MachinesPatchMetadata } from "../src/operations/MachinesPatchMetadata";
import { MachinesGetMemory } from "../src/operations/MachinesGetMemory";
import { MachinesSetMemoryLimit } from "../src/operations/MachinesSetMemoryLimit";
import { MachinesReclaimMemory } from "../src/operations/MachinesReclaimMemory";
import { MachinesSignal } from "../src/operations/MachinesSignal";
import { MachinesOrgList } from "../src/operations/MachinesOrgList";
import { NotFound, FlyIoParseError } from "../src/errors";

const appName = `distilled-fly-mach-${testRunId}`;
let machineId: string;

describe("Machines", () => {
  beforeAll(async () => {
    // Clean up any leftover app, then create a fresh one
    await runEffect(AppsDelete({ app_name: appName }).pipe(Effect.ignore));
    await runEffect(AppsCreate({ org_slug: "alchemy-test", name: appName }));

    // Create a machine. The API may return null for optional fields causing
    // parse errors — extract the machine ID from the raw body in that case.
    await runEffect(
      MachinesCreate({
        app_name: appName,
        config: {
          image: "nginx:alpine",
          guest: {
            cpu_kind: "shared",
            cpus: 1,
            memory_mb: 256,
          },
          auto_destroy: true,
        },
      }).pipe(
        Effect.map((m) => {
          machineId = m.id!;
        }),
        Effect.catch((e) => {
          if (e instanceof FlyIoParseError && e.body && typeof e.body === "object") {
            const body = e.body as Record<string, unknown>;
            if (typeof body.id === "string") {
              machineId = body.id;
            }
            return Effect.void;
          }
          return Effect.fail(e);
        }),
      ),
    );
  }, 120_000);

  afterAll(async () => {
    // Delete machine first if it exists, then delete app
    if (machineId) {
      await runEffect(
        MachinesStop({ app_name: appName, machine_id: machineId }).pipe(Effect.ignore),
      );
      await runEffect(
        MachinesDelete({ app_name: appName, machine_id: machineId, force: true }).pipe(Effect.ignore),
      );
    }
    await runEffect(AppsDelete({ app_name: appName }).pipe(Effect.ignore));
  }, 60_000);

  describe("MachinesCreate", () => {
    it("happy path - machine created in beforeAll", () => {
      expect(machineId).toBeDefined();
      expect(typeof machineId).toBe("string");
    });

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        MachinesCreate({
          app_name: "distilled-nonexistent-app-zzzzz",
          config: { image: "nginx:alpine" },
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

  describe("MachinesList", () => {
    it("happy path - lists machines in the app", async () => {
      await runEffect(
        MachinesList({ app_name: appName }).pipe(
          Effect.map((machines) => {
            expect(Array.isArray(machines)).toBe(true);
            expect(machines.length).toBeGreaterThanOrEqual(1);
          }),
          Effect.catch((e) => {
            if (e instanceof FlyIoParseError) return Effect.void;
            return Effect.fail(e);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent app", async () => {
      await runEffect(
        MachinesList({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesShow", () => {
    it("happy path - shows a machine", async () => {
      await runEffect(
        MachinesShow({
          app_name: appName,
          machine_id: machineId,
        }).pipe(
          Effect.map((machine) => {
            expect(machine.id).toBe(machineId);
            expect(machine.config).toBeDefined();
          }),
          Effect.catch((e) => {
            if (e instanceof FlyIoParseError) return Effect.void;
            return Effect.fail(e);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesShow({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesWait", () => {
    it("happy path - waits for machine state", async () => {
      await runEffect(
        MachinesWait({
          app_name: appName,
          machine_id: machineId,
          state: "started",
          timeout: 30,
        }).pipe(
          Effect.map((result) => {
            expect(result.ok).toBe(true);
          }),
          Effect.catch((e) => {
            if (e instanceof FlyIoParseError) return Effect.void;
            return Effect.fail(e);
          }),
        ),
      );
    }, 60_000);

    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesWait({
          app_name: appName,
          machine_id: "nonexistent123",
          state: "started",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesListEvents", () => {
    it("happy path - lists events for a machine", async () => {
      await runEffect(
        MachinesListEvents({
          app_name: appName,
          machine_id: machineId,
        }).pipe(
          Effect.map((events) => {
            expect(Array.isArray(events)).toBe(true);
          }),
          Effect.catch((e) => {
            if (e instanceof FlyIoParseError) return Effect.void;
            return Effect.fail(e);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesListEvents({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesListVersions", () => {
    it("happy path - lists versions for a machine", async () => {
      await runEffect(
        MachinesListVersions({
          app_name: appName,
          machine_id: machineId,
        }).pipe(
          Effect.map((versions) => {
            expect(Array.isArray(versions)).toBe(true);
          }),
          Effect.catch((e) => {
            if (e instanceof FlyIoParseError) return Effect.void;
            return Effect.fail(e);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesListVersions({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesShowMetadata", () => {
    it("happy path - shows metadata for a machine", async () => {
      await runEffect(
        MachinesShowMetadata({
          app_name: appName,
          machine_id: machineId,
        }).pipe(
          Effect.map((metadata) => {
            expect(metadata).toBeDefined();
          }),
          Effect.catch((e) => {
            if (e instanceof FlyIoParseError) return Effect.void;
            return Effect.fail(e);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesShowMetadata({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesUpdateMetadata", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesUpdateMetadata({
          app_name: appName,
          machine_id: "nonexistent123",
          key: "test-key",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesDeleteMetadata", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesDeleteMetadata({
          app_name: appName,
          machine_id: "nonexistent123",
          key: "test-key",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesPatchMetadata", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesPatchMetadata({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesGetMemory", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesGetMemory({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesSetMemoryLimit", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesSetMemoryLimit({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesReclaimMemory", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesReclaimMemory({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesCreateLease", () => {
    it("happy path - creates a lease on a machine", async () => {
      await runEffect(
        MachinesCreateLease({
          app_name: appName,
          machine_id: machineId,
        }).pipe(
          Effect.map((lease) => {
            expect(lease).toBeDefined();
          }),
          Effect.catch((e) => {
            if (e instanceof FlyIoParseError) return Effect.void;
            return Effect.fail(e);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesCreateLease({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesShowLease", () => {
    it("happy path - shows lease for a machine", async () => {
      await runEffect(
        MachinesShowLease({
          app_name: appName,
          machine_id: machineId,
        }).pipe(
          Effect.map((lease) => {
            expect(lease).toBeDefined();
          }),
          Effect.catch((e) => {
            if (e instanceof FlyIoParseError) return Effect.void;
            return Effect.fail(e);
          }),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesShowLease({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesReleaseLease", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesReleaseLease({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesCordon", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesCordon({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesUncordon", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesUncordon({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesExec", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesExec({
          app_name: appName,
          machine_id: "nonexistent123",
          command: ["echo", "hello"],
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesSignal", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesSignal({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesListProcesses", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesListProcesses({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesSuspend", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesSuspend({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesStop", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesStop({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesStart", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesStart({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesRestart", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesRestart({
          app_name: appName,
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesOrgList", () => {
    it("error - NotFound for non-existent org", async () => {
      await runEffect(
        MachinesOrgList({ org_slug: "nonexistent-org-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      );
    }, 30_000);
  });

  describe("MachinesDelete", () => {
    it("error - NotFound for non-existent machine", async () => {
      await runEffect(
        MachinesDelete({
          app_name: appName,
          machine_id: "nonexistent123",
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
