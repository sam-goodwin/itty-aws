import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { banUser as PlatformBanUser } from "../src/operations/platform/users/banUser";
import { listApplications as PlatformListApplications } from "../src/operations/platform/applications/listApplications";
import { listInstanceUsers as PlatformListInstanceUsers } from "../src/operations/platform/users/listInstanceUsers";
import { unbanUser as PlatformUnbanUser } from "../src/operations/platform/users/unbanUser";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_USER = `user_does_not_exist_${testRunId}`;

/**
 * Pick the first application/instance/user reachable with the configured
 * Platform credentials. We need a real user to ban+unban for the happy path
 * since `PlatformUnbanUser` operates on existing users.
 */
const pickAppInstanceAndUser = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformUnbanUser",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformUnbanUser`,
      ),
    );
  }
  const users = yield* PlatformListInstanceUsers({
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
    limit: 1,
  });
  const user = users.data[0];
  if (!user) {
    return yield* Effect.die(
      new Error(
        `Instance ${instance.instance_id} has no users - cannot test PlatformUnbanUser`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
    userID: user.id,
  };
});

describe("PlatformUnbanUser", () => {
  it("removes the ban from a previously banned user", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID, userID } =
          yield* pickAppInstanceAndUser;

        // Banning the user is a prerequisite for a meaningful unban call.
        yield* PlatformBanUser({ applicationID, envOrInsID, userID });

        yield* Effect.gen(function* () {
          const result = yield* PlatformUnbanUser({
            applicationID,
            envOrInsID,
            userID,
          });

          expect(result.id).toBe(userID);
          expect(result.object).toBe("user");
          expect(result.banned).toBe(false);
          expect(typeof result.created_at).toBe("number");
          expect(typeof result.updated_at).toBe("number");
        }).pipe(
          // Idempotent safety net: if the assertion-side unban failed,
          // make sure we don't leave the test user banned for subsequent runs.
          Effect.ensuring(
            PlatformUnbanUser({ applicationID, envOrInsID, userID }).pipe(
              Effect.ignore,
            ),
          ),
        );
      }),
    );
  });

  it("returns BadRequest for a malformed user id", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppInstanceAndUser;

        const error = yield* PlatformUnbanUser({
          applicationID,
          envOrInsID,
          // An empty-segment-ish path component triggers Clerk's
          // input validation (400) rather than a 404 lookup miss.
          userID: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformUnbanUser({
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
        const { applicationID, envOrInsID } = yield* pickAppInstanceAndUser;

        const error = yield* PlatformUnbanUser({
          applicationID,
          envOrInsID,
          userID: NON_EXISTENT_USER,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
