import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { runEffect, testRunId } from "./setup";
import { listOrganizations } from "../src/operations/listOrganizations";
import { listLocations } from "../src/operations/listLocations";
import { listDatabases } from "../src/operations/listDatabases";
import { createDatabase } from "../src/operations/createDatabase";
import { deleteDatabase } from "../src/operations/deleteDatabase";
import { createGroup } from "../src/operations/createGroup";
import { getDatabase } from "../src/operations/getDatabase";
import { getDatabaseConfiguration } from "../src/operations/getDatabaseConfiguration";
import { updateDatabaseConfiguration } from "../src/operations/updateDatabaseConfiguration";
import { listDatabaseInstances } from "../src/operations/listDatabaseInstances";
import { getDatabaseInstance } from "../src/operations/getDatabaseInstance";
import { createDatabaseToken } from "../src/operations/createDatabaseToken";
import { getDatabaseUsage } from "../src/operations/getDatabaseUsage";
import { getDatabaseStats } from "../src/operations/getDatabaseStats";
import { invalidateDatabaseTokens } from "../src/operations/invalidateDatabaseTokens";
import { deleteGroup } from "../src/operations/deleteGroup";

let orgSlug: string;
let location: string;
const groupName = `distilled-turso-db-${testRunId}`;
const dbName = `distilled-turso-db-${testRunId}`;
const deleteDbName = `distilled-turso-del-${testRunId}`;

describe("Databases", () => {
  beforeAll(async () => {
    await runEffect(
      Effect.gen(function* () {
        const orgs = yield* listOrganizations({});
        orgSlug = orgs[0].slug!;

        // Discover a valid location
        const locs = yield* listLocations({});
        location = Object.keys(locs.locations!)[0];

        // Clean up any leftover resources from previous runs
        yield* deleteDatabase({ organizationSlug: orgSlug, databaseName: dbName }).pipe(Effect.ignore);
        yield* deleteGroup({ organizationSlug: orgSlug, groupName }).pipe(Effect.ignore);

        // Create a group for the database tests
        yield* createGroup({
          organizationSlug: orgSlug,
          name: groupName,
          location,
        });
      }),
    );
  }, 60_000);

  afterAll(async () => {
    await runEffect(
      Effect.gen(function* () {
        yield* deleteDatabase({ organizationSlug: orgSlug, databaseName: dbName }).pipe(Effect.ignore);
        yield* deleteGroup({ organizationSlug: orgSlug, groupName }).pipe(Effect.ignore);
      }),
    );
  }, 60_000);

  describe("listDatabases", () => {
    it("happy path - lists databases", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listDatabases({
            organizationSlug: orgSlug,
          });
          expect(result.databases).toBeDefined();
          expect(Array.isArray(result.databases)).toBe(true);
        }),
      );
    }, 30_000);

    it("happy path - filters by group", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listDatabases({
            organizationSlug: orgSlug,
            group: "default",
          });
          expect(result.databases).toBeDefined();
          expect(Array.isArray(result.databases)).toBe(true);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent organization", async () => {
      await runEffect(
        listDatabases({
          organizationSlug: "nonexistent-org-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("createDatabase", () => {
    it("happy path - creates a database", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createDatabase({
            organizationSlug: orgSlug,
            name: dbName,
            group: groupName,
          });
          expect(result.database).toBeDefined();
          expect(result.database?.Name).toBe(dbName);
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid name", async () => {
      await runEffect(
        createDatabase({
          organizationSlug: orgSlug,
          name: "INVALID NAME!!!",
          group: groupName,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - Conflict for duplicate database name", async () => {
      await runEffect(
        createDatabase({
          organizationSlug: orgSlug,
          name: dbName,
          group: groupName,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Conflict")),
        ),
      );
    }, 30_000);
  });

  describe("getDatabase", () => {
    it("happy path - retrieves database details", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getDatabase({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          expect(result.database).toBeDefined();
          expect(result.database?.Name).toBe(dbName);
          expect(result.database?.DbId).toBeDefined();
          expect(result.database?.Hostname).toBeDefined();
          expect(result.database?.group).toBe(groupName);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabase({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("deleteDatabase", () => {
    it("happy path - deletes a database", async () => {
      await runEffect(
        Effect.gen(function* () {
          // Create a dedicated database for deletion
          yield* createDatabase({
            organizationSlug: orgSlug,
            name: deleteDbName,
            group: groupName,
          });

          const result = yield* deleteDatabase({
            organizationSlug: orgSlug,
            databaseName: deleteDbName,
          });
          expect(result.database).toBeDefined();
        }).pipe(
          Effect.ensuring(
            deleteDatabase({ organizationSlug: orgSlug, databaseName: deleteDbName }).pipe(Effect.ignore),
          ),
        ),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        deleteDatabase({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("getDatabaseConfiguration", () => {
    it("happy path - retrieves database configuration", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getDatabaseConfiguration({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          expect(result).toBeDefined();
          expect(typeof result.allow_attach).toBe("boolean");
          expect(typeof result.block_reads).toBe("boolean");
          expect(typeof result.block_writes).toBe("boolean");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabaseConfiguration({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("updateDatabaseConfiguration", () => {
    it("happy path - updates database configuration", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* updateDatabaseConfiguration({
            organizationSlug: orgSlug,
            databaseName: dbName,
            allow_attach: true,
          });
          expect(result).toBeDefined();
          expect(result.allow_attach).toBe(true);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        updateDatabaseConfiguration({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
          allow_attach: true,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("listDatabaseInstances", () => {
    it("happy path - lists database instances", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listDatabaseInstances({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          expect(result.instances).toBeDefined();
          expect(Array.isArray(result.instances)).toBe(true);
          expect(result.instances!.length).toBeGreaterThan(0);
          const primary = result.instances![0];
          expect(primary.uuid).toBeDefined();
          expect(primary.type).toBe("primary");
          expect(primary.region).toBeDefined();
          expect(primary.hostname).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        listDatabaseInstances({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("getDatabaseInstance", () => {
    it("happy path - retrieves a database instance", async () => {
      await runEffect(
        Effect.gen(function* () {
          // First get a valid instance name from listDatabaseInstances
          const list = yield* listDatabaseInstances({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          const instanceName = list.instances![0].name!;

          const result = yield* getDatabaseInstance({
            organizationSlug: orgSlug,
            databaseName: dbName,
            instanceName,
          });
          expect(result.instance).toBeDefined();
          expect(result.instance?.uuid).toBeDefined();
          expect(result.instance?.name).toBe(instanceName);
          expect(result.instance?.type).toBe("primary");
          expect(result.instance?.hostname).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent instance", async () => {
      await runEffect(
        getDatabaseInstance({
          organizationSlug: orgSlug,
          databaseName: dbName,
          instanceName: "nonexistent-instance-xyz",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("createDatabaseToken", () => {
    it("happy path - generates a database auth token", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createDatabaseToken({
            organizationSlug: orgSlug,
            databaseName: dbName,
            authorization: "read-only",
          });
          expect(result.jwt).toBeDefined();
          expect(typeof result.jwt).toBe("string");
          expect(result.jwt!.length).toBeGreaterThan(0);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        createDatabaseToken({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
          authorization: "read-only",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("error - BadRequest for invalid expiration", async () => {
      await runEffect(
        createDatabaseToken({
          organizationSlug: orgSlug,
          databaseName: dbName,
          expiration: "not-a-valid-expiration",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  describe("getDatabaseUsage", () => {
    it("happy path - retrieves database usage", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getDatabaseUsage({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          expect(result.database).toBeDefined();
          expect(result.database?.uuid).toBeDefined();
          expect(result.database?.total).toBeDefined();
          expect(typeof result.database?.total?.rows_read).toBe("number");
          expect(typeof result.database?.total?.rows_written).toBe("number");
          expect(typeof result.database?.total?.storage_bytes).toBe("number");
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabaseUsage({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);

    it("error - BadRequest for invalid date range", async () => {
      await runEffect(
        getDatabaseUsage({
          organizationSlug: orgSlug,
          databaseName: dbName,
          from: "not-a-valid-date",
          to: "also-not-a-valid-date",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);
  });

  describe("getDatabaseStats", () => {
    it("happy path - retrieves database stats", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getDatabaseStats({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          expect(result).toBeDefined();
          // top_queries may be null or an array for a fresh database
          if (result.top_queries) {
            expect(Array.isArray(result.top_queries)).toBe(true);
          }
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabaseStats({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("invalidateDatabaseTokens", () => {
    it("happy path - invalidates all database auth tokens", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* invalidateDatabaseTokens({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          // Output is void — operation succeeds without error
          expect(result).toBeUndefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        invalidateDatabaseTokens({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
