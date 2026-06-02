import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformBanUser } from "../src/operations/platform/PlatformBanUser";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { PlatformListInstanceUsers } from "../src/operations/platform/PlatformListInstanceUsers";
import { PlatformUnbanUser } from "../src/operations/platform/PlatformUnbanUser";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_USER = `user_does_not_exist_${testRunId}`;

/**
 * Pick the first application/instance/user reachable with the configured
 * Platform credentials. We need a real user to ban for the happy path.
 */
const pickAppInstanceAndUser = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformBanUser",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformBanUser`,
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
        `Instance ${instance.instance_id} has no users - cannot test PlatformBanUser`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
    userID: user.id,
  };
});

describe("PlatformBanUser", () => {
  it("bans an existing user and returns the user envelope with banned=true", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID, userID } =
          yield* pickAppInstanceAndUser;

        yield* Effect.gen(function* () {
          const result = yield* PlatformBanUser({
            applicationID,
            envOrInsID,
            userID,
          });

          expect(result.id).toBe(userID);
          expect(result.object).toBe("user");
          expect(result.banned).toBe(true);
          expect(typeof result.created_at).toBe("number");
          expect(typeof result.updated_at).toBe("number");
        }).pipe(
          // Always unban the test user so subsequent runs (and this
          // workspace) aren't left with a permanently banned account.
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

        const error = yield* PlatformBanUser({
          applicationID,
          envOrInsID,
          // A whitespace-only path segment trips Clerk's input
          // validation (400) before the resource lookup.
          userID: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformBanUser({
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

        const error = yield* PlatformBanUser({
          applicationID,
          envOrInsID,
          userID: NON_EXISTENT_USER,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });
});
