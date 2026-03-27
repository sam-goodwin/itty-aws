import { describe, it, expect } from "vitest";
import { Effect } from "effect";
import { runEffect } from "./test";
import {
  getStorageAPIGroup,
  getStorageV1APIResources,
  listStorageV1StorageClass,
  listStorageV1CSIDriver,
  listStorageV1CSINode,
  listStorageV1VolumeAttachment,
  readStorageV1StorageClass,
  readStorageV1CSIDriver,
  readStorageV1CSINode,
  readStorageV1VolumeAttachment,
} from "../src/services/storage";
import { NotFound } from "../src/errors";

describe("Storage API", () => {
  describe("API Discovery", () => {
    it("getStorageAPIGroup - returns storage API group info", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getStorageAPIGroup({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("getStorageV1APIResources - lists storage v1 API resources", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getStorageV1APIResources({});
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);
  });

  describe("StorageClasses", () => {
    describe("listStorageV1StorageClass", () => {
      it("happy path - lists storage classes", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listStorageV1StorageClass({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readStorageV1StorageClass", () => {
      it("error - NotFound for non-existent storage class", () =>
        runEffect(
          readStorageV1StorageClass({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("CSIDrivers", () => {
    describe("listStorageV1CSIDriver", () => {
      it("happy path - lists CSI drivers", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listStorageV1CSIDriver({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readStorageV1CSIDriver", () => {
      it("error - NotFound for non-existent CSI driver", () =>
        runEffect(
          readStorageV1CSIDriver({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("CSINodes", () => {
    describe("listStorageV1CSINode", () => {
      it("happy path - lists CSI nodes", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listStorageV1CSINode({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readStorageV1CSINode", () => {
      it("error - NotFound for non-existent CSI node", () =>
        runEffect(
          readStorageV1CSINode({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });

  describe("VolumeAttachments", () => {
    describe("listStorageV1VolumeAttachment", () => {
      it("happy path - lists volume attachments", async () => {
        await runEffect(
          Effect.gen(function* () {
            const result = yield* listStorageV1VolumeAttachment({});
            expect(result.items).toBeDefined();
            expect(Array.isArray(result.items)).toBe(true);
          }),
        );
      }, 30_000);
    });

    describe("readStorageV1VolumeAttachment", () => {
      it("error - NotFound for non-existent volume attachment", () =>
        runEffect(
          readStorageV1VolumeAttachment({}).pipe(
            Effect.flip,
            Effect.map((e) => {
              expect(e).toBeInstanceOf(NotFound);
              expect(e._tag).toBe("NotFound");
            }),
          ),
        ), 30_000);
    });
  });
});
