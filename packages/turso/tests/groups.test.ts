import { Effect } from "effect";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { runEffect, testRunId } from "./setup";
import { listOrganizations } from "../src/operations/listOrganizations";
import { listLocations } from "../src/operations/listLocations";
import { listGroups } from "../src/operations/listGroups";
import { createGroup } from "../src/operations/createGroup";
import { getGroup } from "../src/operations/getGroup";
import { deleteGroup } from "../src/operations/deleteGroup";

let orgSlug: string;
let location: string;
const groupName = `distilled-turso-grp-${testRunId}`;
const deleteGroupName = `distilled-turso-del-${testRunId}`;

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

    it("error - NotFound for non-existent organization", async () => {
      await runEffect(
        listGroups({
          organizationSlug: "nonexistent-org-xyz-999",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("NotFound")),
        ),
      );
    }, 30_000);
  });

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
          expect(result.group?.uuid).toBeDefined();
        }),
      );
    }, 30_000);

    it("error - BadRequest for invalid group name", async () => {
      await runEffect(
        createGroup({
          organizationSlug: orgSlug,
          name: "INVALID GROUP NAME!!!",
          location,
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
          expect(result.group?.uuid).toBeDefined();
          expect(result.group?.locations).toContain(location);
          expect(result.group?.primary).toBe(location);
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
});
