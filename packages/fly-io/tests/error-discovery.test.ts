import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import { AppsShow } from "../src/operations/AppsShow";
import { AppsCreate } from "../src/operations/AppsCreate";
import { AppsDelete } from "../src/operations/AppsDelete";
import { AppsList } from "../src/operations/AppsList";
import { MachinesShow } from "../src/operations/MachinesShow";
import { MachinesList } from "../src/operations/MachinesList";
import { MachinesDelete } from "../src/operations/MachinesDelete";
import { MachinesRestart } from "../src/operations/MachinesRestart";
import { MachinesStop } from "../src/operations/MachinesStop";
import { MachinesStart } from "../src/operations/MachinesStart";
import { MachinesCreateLease } from "../src/operations/MachinesCreateLease";
import { TokensRequestOIDC } from "../src/operations/TokensRequestOIDC";
import { TokensRequestKms } from "../src/operations/TokensRequestKms";
import { VolumesList } from "../src/operations/VolumesList";
import { VolumesGetById } from "../src/operations/VolumesGetById";
import { VolumeDelete } from "../src/operations/VolumeDelete";
import { VolumesExtend } from "../src/operations/VolumesExtend";
import { SecretsList } from "../src/operations/SecretsList";
import { Forbidden, NotFound } from "../src/errors";

describe("Fly.io Error Discovery", () => {
  describe("Apps", () => {
    it("AppsShow returns NotFound for non-existent app", () =>
      runEffect(
        AppsShow({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("AppsDelete returns NotFound for non-existent app", () =>
      runEffect(
        AppsDelete({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Machines", () => {
    it("MachinesList returns NotFound for non-existent app", () =>
      runEffect(
        MachinesList({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);

    it("MachinesShow returns NotFound for non-existent machine", () =>
      runEffect(
        MachinesShow({
          app_name: "distilled-nonexistent-app-zzzzz",
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);

    it("MachinesDelete returns NotFound for non-existent machine", () =>
      runEffect(
        MachinesDelete({
          app_name: "distilled-nonexistent-app-zzzzz",
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);

    it("MachinesRestart returns NotFound for non-existent machine", () =>
      runEffect(
        MachinesRestart({
          app_name: "distilled-nonexistent-app-zzzzz",
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);

    it("MachinesStop returns NotFound for non-existent machine", () =>
      runEffect(
        MachinesStop({
          app_name: "distilled-nonexistent-app-zzzzz",
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);

    it("MachinesStart returns NotFound for non-existent machine", () =>
      runEffect(
        MachinesStart({
          app_name: "distilled-nonexistent-app-zzzzz",
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);

    it("MachinesCreateLease returns NotFound for non-existent machine", () =>
      runEffect(
        MachinesCreateLease({
          app_name: "distilled-nonexistent-app-zzzzz",
          machine_id: "nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);
  });

  describe("Volumes", () => {
    it("VolumesList returns NotFound for non-existent app", () =>
      runEffect(
        VolumesList({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);

    it("VolumesGetById returns NotFound for non-existent volume", () =>
      runEffect(
        VolumesGetById({
          app_name: "distilled-nonexistent-app-zzzzz",
          volume_id: "vol_nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);

    it("VolumeDelete returns NotFound for non-existent volume", () =>
      runEffect(
        VolumeDelete({
          app_name: "distilled-nonexistent-app-zzzzz",
          volume_id: "vol_nonexistent123",
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);

    it("VolumesExtend returns NotFound for non-existent volume", () =>
      runEffect(
        VolumesExtend({
          app_name: "distilled-nonexistent-app-zzzzz",
          volume_id: "vol_nonexistent123",
          size_gb: 10,
        }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);
  });

  describe("Secrets", () => {
    it("SecretsList returns NotFound for non-existent app", () =>
      runEffect(
        SecretsList({ app_name: "distilled-nonexistent-app-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
          }),
        ),
      ), 30_000);
  });

  describe("Forbidden (403)", () => {
    it("AppsList returns Forbidden for unauthorized token", () =>
      runEffect(
        AppsList({ org_slug: "personal" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(Forbidden);
            expect(e._tag).toBe("Forbidden");
          }),
        ),
      ), 30_000);

    it("AppsCreate returns Forbidden for unauthorized token", () =>
      runEffect(
        AppsCreate({ org_slug: "personal", name: "test-forbidden" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(Forbidden);
            expect(e._tag).toBe("Forbidden");
          }),
        ),
      ), 30_000);
  });

  describe("AppsCreate NotFound", () => {
    it("AppsCreate returns NotFound for non-existent org", () =>
      runEffect(
        AppsCreate({ org_slug: "nonexistent-org-zzzzz" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });

  describe("Tokens", () => {
    it("TokensRequestOIDC returns NotFound when not on a machine", () =>
      runEffect(
        TokensRequestOIDC({ aud: "" }).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);

    it("TokensRequestKms returns NotFound when not on a machine", () =>
      runEffect(
        TokensRequestKms({}).pipe(
          Effect.flip,
          Effect.map((e) => {
            expect(e).toBeInstanceOf(NotFound);
            expect(e._tag).toBe("NotFound");
          }),
        ),
      ), 30_000);
  });
});
