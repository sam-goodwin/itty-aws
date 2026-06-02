import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteUser as PlatformDeleteUser } from "../src/operations/platform/users/deleteUser";
import { listApplications as PlatformListApplications } from "../src/operations/platform/applications/listApplications";
import { listInstanceUsers as PlatformListInstanceUsers } from "../src/operations/platform/users/listInstanceUsers";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_USER = `user_does_not_exist_${testRunId}`;

const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformDeleteUser",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformDeleteUser`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

/**
 * Pick the most recently created user in the first available instance.
 * PlatformDeleteUser is destructive - per the test rules, destructive
 * operations on test data are explicitly permitted and must be tested.
 */
const pickUser = Effect.gen(function* () {
  const { applicationID, envOrInsID } = yield* pickAppAndInstance;
  const users = yield* PlatformListInstanceUsers({
    applicationID,
    envOrInsID,
    limit: 1,
  });
  const user = users.data[0];
  if (!user) {
    return yield* Effect.die(
      new Error(
        `Instance ${envOrInsID} has no users - cannot test PlatformDeleteUser`,
      ),
    );
  }
  return { applicationID, envOrInsID, userID: user.id };
});

describe("PlatformDeleteUser", () => {
  it("deletes an existing user and returns the deletion record", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID, userID } = yield* pickUser;

        const result = yield* PlatformDeleteUser({
          applicationID,
          envOrInsID,
          userID,
        });

        expect(result.deleted).toBe(true);
        expect(result.id).toBe(userID);
        expect(typeof result.object).toBe("string");
      }),
    );
  });

  it("returns BadRequest for a malformed user id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformDeleteUser({
          applicationID,
          envOrInsID,
          // Whitespace-only path segment trips input validation (400)
          // before the resource lookup.
          userID: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformDeleteUser({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          envOrInsID: "production",
          userID: NON_EXISTENT_USER,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a user id that does not exist on a real instance", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformDeleteUser({
          applicationID,
          envOrInsID,
          userID: NON_EXISTENT_USER,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
