import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { PlatformGetInstanceUsage } from "../src/operations/platform/PlatformGetInstanceUsage";
import { PlatformListApplications } from "../src/operations/platform/PlatformListApplications";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_FOREIGN_APP = `app_2ForeignNotOwned${testRunId}`;
const NON_EXISTENT_INSTANCE = `ins_does_not_exist_${testRunId}`;

const pickAppAndInstance = Effect.gen(function* () {
  const apps = yield* PlatformListApplications({});
  const app = apps[0];
  if (!app) {
    return yield* Effect.die(
      new Error(
        "PlatformListApplications returned no applications - cannot test PlatformGetInstanceUsage",
      ),
    );
  }
  const instance = app.instances[0];
  if (!instance) {
    return yield* Effect.die(
      new Error(
        `Application ${app.application_id} has no instances - cannot test PlatformGetInstanceUsage`,
      ),
    );
  }
  return {
    applicationID: app.application_id,
    envOrInsID: instance.instance_id,
  };
});

describe("PlatformGetInstanceUsage", () => {
  it("returns usage totals for the current billing cycle", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const result = yield* PlatformGetInstanceUsage({
          applicationID,
          envOrInsID,
        });

        expect(result.application_id).toBe(applicationID);
        expect(typeof result.instance_id).toBe("string");
        expect(typeof result.period_start).toBe("string");
        expect(typeof result.period_end).toBe("string");

        expect(typeof result.mau.total_usage).toBe("number");
        expect(typeof result.mau.total_billable_usage).toBe("number");
        expect(typeof result.mao.total_usage).toBe("number");
        expect(typeof result.mao.total_billable_usage).toBe("number");
        expect(typeof result.custom_domains.total_usage).toBe("number");
        expect(typeof result.sms_messages.total_usage).toBe("number");
        expect(typeof result.sms_messages.tier_a.total_usage).toBe("number");
        expect(typeof result.sms_messages.tier_f.total_usage).toBe("number");
        expect(typeof result.enterprise_connections.total_usage).toBe("number");
      }),
    );
  });

  it("returns Forbidden when targeting an application the caller does not own", async () => {
    await runEffect(
      Effect.gen(function* () {
        const error = yield* PlatformGetInstanceUsage({
          applicationID: NON_EXISTENT_FOREIGN_APP,
          envOrInsID: "production",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("Forbidden");
      }),
    );
  });

  it("returns NotFound for a non-existent instance on a real application", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID } = yield* pickAppAndInstance;

        const error = yield* PlatformGetInstanceUsage({
          applicationID,
          envOrInsID: NON_EXISTENT_INSTANCE,
        }).pipe(Effect.flip);

        expect(error._tag).toBe("NotFound");
      }),
    );
  });

  it("returns UnprocessableEntity when only one of start/end is provided", async () => {
    await runEffect(
      Effect.gen(function* () {
        const { applicationID, envOrInsID } = yield* pickAppAndInstance;

        const error = yield* PlatformGetInstanceUsage({
          applicationID,
          envOrInsID,
          // Per the docs, `start` and `end` must be provided together;
          // supplying only one violates the semantic constraint (422).
          start: "2024-01-01",
        }).pipe(Effect.flip);

        expect(error._tag).toBe("UnprocessableEntity");
      }),
    );
  });
});
