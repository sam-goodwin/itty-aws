import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listApplications as PlatformListApplications } from "../src/operations/platform/applications/listApplications";
import { listInstanceUsers as PlatformListInstanceUsers } from "../src/operations/platform/users/listInstanceUsers";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_INSTANCE = `ins_does_not_exist_${testRunId}`;

const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformListInstanceUsers",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformListInstanceUsers`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformListInstanceUsers", () => {
  it("lists users in an instance and respects the limit", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const result = yield* PlatformListInstanceUsers({
          applicationID,
          envOrInsID,
          limit: 5,
        });

        expect(typeof result.total_count).toBe("number");
        expect(result.total_count).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(result.data)).toBe(true);
        expect(result.data.length).toBeLessThanOrEqual(5);
        for (const user of result.data) {
          expect(user.object).toBe("user");
          expect(typeof user.id).toBe("string");
          expect(typeof user.created_at).toBe("number");
          expect(typeof user.updated_at).toBe("number");
          expect(Array.isArray(user.email_addresses)).toBe(true);
        }
      }),
    );
  });

  it("returns BadRequest for a malformed instance identifier", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformListInstanceUsers({
          applicationID,
          // Whitespace-only path segment trips input validation (400)
          // before the resource lookup.
          envOrInsID: " ",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("BadRequest");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformListInstanceUsers({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          envOrInsID: "production",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for an instance id that does not exist on a real application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformListInstanceUsers({
          applicationID,
          envOrInsID: NON_EXISTENT_INSTANCE,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns UnprocessableEntity for an invalid order_by field", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        // `order_by` must reference one of the documented sort fields
        // prefixed with `+` or `-`. A bogus field name is a semantically
        // invalid sort specifier.
        const error = yield* PlatformListInstanceUsers({
          applicationID,
          envOrInsID,
          order_by: "-not_a_real_field",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("UnprocessableEntity");
      }),
    );
  });
});
