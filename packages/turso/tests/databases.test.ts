import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { runEffect, testRunId } from "./setup";
import { listOrganizations } from "../src/operations/listOrganizations";
import { listLocations } from "../src/operations/listLocations";
import { createGroup } from "../src/operations/createGroup";
import { deleteGroup } from "../src/operations/deleteGroup";
import { createDatabase } from "../src/operations/createDatabase";
import { getDatabase } from "../src/operations/getDatabase";
import { deleteDatabase } from "../src/operations/deleteDatabase";
import { listDatabases } from "../src/operations/listDatabases";
import { getDatabaseConfiguration } from "../src/operations/getDatabaseConfiguration";
import { updateDatabaseConfiguration } from "../src/operations/updateDatabaseConfiguration";
import { getDatabaseStats } from "../src/operations/getDatabaseStats";
import { getDatabaseUsage } from "../src/operations/getDatabaseUsage";
import { listDatabaseInstances } from "../src/operations/listDatabaseInstances";
import { getDatabaseInstance } from "../src/operations/getDatabaseInstance";
import { createDatabaseToken } from "../src/operations/createDatabaseToken";
import { invalidateDatabaseTokens } from "../src/operations/invalidateDatabaseTokens";

let orgSlug: string;
let location: string;
const groupName = `distilled-turso-db-${testRunId}`;
const dbName = `distilled-turso-db-${testRunId}`;

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
          expect(result).toBeDefined();
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

  describe("getDatabaseStats", () => {
    // Note: happy path skipped - "stats not supported on AWS clusters"

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

  describe("getDatabaseUsage", () => {
    it("happy path - retrieves database usage", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getDatabaseUsage({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          expect(result).toBeDefined();
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
  });

  describe("listDatabaseInstances", () => {
    it("happy path - lists database instances", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listDatabaseInstances({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          expect(result).toBeDefined();
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
    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        getDatabaseInstance({
          organizationSlug: orgSlug,
          databaseName: "nonexistent-db-xyz-999",
          instanceName: "foo",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("createDatabaseToken", () => {
    it("happy path - creates a database token", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createDatabaseToken({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          expect(result.jwt).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent database", async () => {
      await runEffect(
        createDatabaseToken({
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
    it("happy path - invalidates database tokens", async () => {
      await runEffect(
        Effect.gen(function* () {
          // Create a token first, then invalidate all
          yield* createDatabaseToken({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
          yield* invalidateDatabaseTokens({
            organizationSlug: orgSlug,
            databaseName: dbName,
          });
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

  describe("deleteDatabase", () => {
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
});
