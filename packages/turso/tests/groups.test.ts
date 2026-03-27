import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { runEffect, testRunId } from "./setup";
import { listOrganizations } from "../src/operations/listOrganizations";
import { listLocations } from "../src/operations/listLocations";
import { createGroup } from "../src/operations/createGroup";
import { getGroup } from "../src/operations/getGroup";
import { deleteGroup } from "../src/operations/deleteGroup";
import { listGroups } from "../src/operations/listGroups";
import { getGroupConfiguration } from "../src/operations/getGroupConfiguration";
import { updateGroupConfiguration } from "../src/operations/updateGroupConfiguration";
import { createGroupToken } from "../src/operations/createGroupToken";
import { invalidateGroupTokens } from "../src/operations/invalidateGroupTokens";
import { addLocationToGroup } from "../src/operations/addLocationToGroup";
import { removeLocationFromGroup } from "../src/operations/removeLocationFromGroup";
import { updateGroupDatabases } from "../src/operations/updateGroupDatabases";
import { transferGroup } from "../src/operations/transferGroup";
import { unarchiveGroup } from "../src/operations/unarchiveGroup";

let orgSlug: string;
let location: string;
const groupName = `distilled-turso-grp-${testRunId}`;

describe("Groups", () => {
  beforeAll(async () => {
    await runEffect(
      Effect.gen(function* () {
        const orgs = yield* listOrganizations({});
        orgSlug = orgs[0].slug!;

        // Discover a valid location
        const locs = yield* listLocations({});
        location = Object.keys(locs.locations!)[0];

        // Clean up any leftover group from previous runs
        yield* deleteGroup({ organizationSlug: orgSlug, groupName }).pipe(Effect.ignore);
      }),
    );
  }, 60_000);

  afterAll(async () => {
    await runEffect(
      Effect.gen(function* () {
        yield* deleteGroup({ organizationSlug: orgSlug, groupName }).pipe(Effect.ignore);
      }),
    );
  }, 60_000);

  describe("createGroup", () => {
    it("happy path - creates a group", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createGroup({
            organizationSlug: orgSlug,
            name: groupName,
            location,
          });
          expect(result.group).toBeDefined();
          expect(result.group?.name).toBe(groupName);
          expect(result.group?.locations).toContain(location);
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid location", async () => {
      await runEffect(
        createGroup({
          organizationSlug: orgSlug,
          name: "test-bad-loc",
          location: "zzz-invalid",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("BadRequest")),
        ),
      );
    }, 30_000);

    it("error - Conflict for duplicate group name", async () => {
      await runEffect(
        createGroup({
          organizationSlug: orgSlug,
          name: groupName,
          location,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Conflict")),
        ),
      );
    }, 30_000);
  });

  describe("getGroup", () => {
    it("happy path - retrieves group details", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getGroup({
            organizationSlug: orgSlug,
            groupName,
          });
          expect(result.group).toBeDefined();
          expect(result.group?.name).toBe(groupName);
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        getGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("listGroups", () => {
    it("happy path - lists groups", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* listGroups({
            organizationSlug: orgSlug,
          });
          expect(result.groups).toBeDefined();
          expect(Array.isArray(result.groups)).toBe(true);
        }),
      );
    }, 30_000);
  });

  describe("getGroupConfiguration", () => {
    it("happy path - retrieves group configuration", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* getGroupConfiguration({
            organizationSlug: orgSlug,
            groupName,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        getGroupConfiguration({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("updateGroupConfiguration", () => {
    it("happy path - updates group configuration", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* updateGroupConfiguration({
            organizationSlug: orgSlug,
            groupName,
            delete_protection: false,
          });
          expect(result).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        updateGroupConfiguration({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
          delete_protection: false,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("createGroupToken", () => {
    it("happy path - creates a group token", async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* createGroupToken({
            organizationSlug: orgSlug,
            groupName,
          });
          expect(result.jwt).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        createGroupToken({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("invalidateGroupTokens", () => {
    it("happy path - invalidates group tokens", async () => {
      await runEffect(
        Effect.gen(function* () {
          yield* createGroupToken({
            organizationSlug: orgSlug,
            groupName,
          });
          yield* invalidateGroupTokens({
            organizationSlug: orgSlug,
            groupName,
          });
        }),
      );
    }, 30_000);

    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        invalidateGroupTokens({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("addLocationToGroup", () => {
    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        addLocationToGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
          location,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("removeLocationFromGroup", () => {
    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        removeLocationFromGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
          location,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("updateGroupDatabases", () => {
    // Note: happy path skipped - "group update is not supported on AWS clusters"

    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        updateGroupDatabases({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("transferGroup", () => {
    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        transferGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
          organization: "foo",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("unarchiveGroup", () => {
    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        unarchiveGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

  describe("deleteGroup", () => {
    it("error - NotFound for non-existent group", async () => {
      await runEffect(
        deleteGroup({
          organizationSlug: orgSlug,
          groupName: "nonexistent-group-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });
});
