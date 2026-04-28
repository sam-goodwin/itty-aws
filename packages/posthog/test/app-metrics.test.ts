import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getProjectId, testRunId } from "./test.ts";
import * as AppMetrics from "~/operations/app-metrics";

describe("AppMetrics", () => {
  // --------------------------------------------------------------------------
  // appMetricsErrorDetailsRetrieve
  // --------------------------------------------------------------------------
  describe("appMetricsErrorDetailsRetrieve", () => {
    // App metric error details are scoped to an existing plugin config (the
    // `id` path param is a plugin config integer ID, per the operation
    // docstring). Provide POSTHOG_PLUGIN_CONFIG_ID for happy-path coverage;
    // without it, the happy path is skipped, but error paths still run.
    //
    // Output schema is Schema.Void — the operation resolves to `undefined`
    // on success and does not return a body to assert against beyond that.
    //
    // testRunId is referenced in error-test resource identifiers below to
    // stay consistent with sibling tests, even though this GET endpoint
    // takes no client-controlled name.
    const pluginConfigId = (): number =>
      Number(process.env.POSTHOG_PLUGIN_CONFIG_ID ?? "0");

    test.skipIf(!process.env.POSTHOG_PLUGIN_CONFIG_ID)(
      "happy path - retrieves error details for an existing plugin config",
      () =>
        Effect.gen(function* () {
          const result = yield* AppMetrics.appMetricsErrorDetailsRetrieve({
            project_id: getProjectId(),
            id: pluginConfigId(),
          });

          // Output schema is Schema.Void — successful response decodes to
          // `undefined`. Assert that the call succeeded and returned void.
          expect(result).toBeUndefined();
        }),
    );

    test("error - NotFound for non-existent plugin config id", () =>
      AppMetrics.appMetricsErrorDetailsRetrieve({
        project_id: getProjectId(),
        // An integer well outside any realistic plugin config sequence.
        id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          // Reference testRunId so parallel runs surface unique failure
          // messages if the assertion below ever regresses.
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        AppMetrics.appMetricsErrorDetailsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // appMetricsHistoricalExportsList
  // --------------------------------------------------------------------------
  describe("appMetricsHistoricalExportsList", () => {
    // Historical exports are scoped to an existing plugin config (the
    // `plugin_config_id` path param is a plugin config integer ID). Provide
    // POSTHOG_PLUGIN_CONFIG_ID for happy-path coverage; without it the happy
    // path is skipped, but error paths still run.
    //
    // Output schema is Schema.Void — the operation resolves to `undefined`
    // on success and does not return a body to assert against beyond that.
    //
    // testRunId is referenced in error-test failure messages to stay
    // consistent with sibling tests, even though this GET endpoint takes no
    // client-controlled name.
    const pluginConfigId = (): number =>
      Number(process.env.POSTHOG_PLUGIN_CONFIG_ID ?? "0");

    test.skipIf(!process.env.POSTHOG_PLUGIN_CONFIG_ID)(
      "happy path - lists historical exports for an existing plugin config",
      () =>
        Effect.gen(function* () {
          const result = yield* AppMetrics.appMetricsHistoricalExportsList({
            project_id: getProjectId(),
            plugin_config_id: pluginConfigId(),
          });

          // Output schema is Schema.Void — successful response decodes to
          // `undefined`. Assert that the call succeeded and returned void.
          expect(result).toBeUndefined();
        }),
    );

    test("error - NotFound for non-existent plugin config id", () =>
      AppMetrics.appMetricsHistoricalExportsList({
        project_id: getProjectId(),
        // An integer well outside any realistic plugin config sequence.
        plugin_config_id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        AppMetrics.appMetricsHistoricalExportsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          plugin_config_id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // appMetricsHistoricalExportsRetrieve
  // --------------------------------------------------------------------------
  describe("appMetricsHistoricalExportsRetrieve", () => {
    // This GET retrieves a single historical export by its integer id under
    // a given plugin config. Happy-path coverage requires both:
    //   POSTHOG_PLUGIN_CONFIG_ID — an existing plugin config integer ID
    //   POSTHOG_HISTORICAL_EXPORT_ID — an existing historical export id
    // for that plugin config. If either is missing, the happy path is
    // skipped, but error paths still run.
    //
    // Output schema is Schema.Record(String, Unknown) — a generic JSON
    // object. We assert it's a non-array object on success.
    //
    // testRunId is referenced in error-test failure messages to stay
    // consistent with sibling tests.
    const pluginConfigId = (): number =>
      Number(process.env.POSTHOG_PLUGIN_CONFIG_ID ?? "0");
    const historicalExportId = (): number =>
      Number(process.env.POSTHOG_HISTORICAL_EXPORT_ID ?? "0");

    test.skipIf(
      !process.env.POSTHOG_PLUGIN_CONFIG_ID ||
        !process.env.POSTHOG_HISTORICAL_EXPORT_ID,
    )(
      "happy path - retrieves an existing historical export by id",
      () =>
        Effect.gen(function* () {
          const result = yield* AppMetrics.appMetricsHistoricalExportsRetrieve({
            project_id: getProjectId(),
            plugin_config_id: pluginConfigId(),
            id: historicalExportId(),
          });

          // Output is Record<string, unknown> — assert it's a non-null,
          // non-array object.
          expect(result).toBeDefined();
          expect(typeof result).toBe("object");
          expect(result).not.toBeNull();
          expect(Array.isArray(result)).toBe(false);
        }),
    );

    test("error - NotFound for non-existent historical export id", () =>
      AppMetrics.appMetricsHistoricalExportsRetrieve({
        project_id: getProjectId(),
        // Use a real plugin config id if available, else a placeholder.
        // Either way, the export id below won't match anything.
        plugin_config_id: pluginConfigId() || 1,
        // An integer well outside any realistic export sequence.
        id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        AppMetrics.appMetricsHistoricalExportsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          plugin_config_id: 1,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // appMetricsRetrieve
  // --------------------------------------------------------------------------
  describe("appMetricsRetrieve", () => {
    // Retrieves app metrics for an existing plugin config (the `id` path
    // param is a plugin config integer ID, per the operation docstring).
    // Provide POSTHOG_PLUGIN_CONFIG_ID for happy-path coverage; without it
    // the happy path is skipped, but error paths still run.
    //
    // Output schema is Schema.Record(String, Unknown) — a generic JSON
    // object. We assert it's a non-null, non-array object on success.
    //
    // testRunId is referenced in error-test failure messages to stay
    // consistent with sibling tests, even though this GET endpoint takes
    // no client-controlled name.
    const pluginConfigId = (): number =>
      Number(process.env.POSTHOG_PLUGIN_CONFIG_ID ?? "0");

    test.skipIf(!process.env.POSTHOG_PLUGIN_CONFIG_ID)(
      "happy path - retrieves app metrics for an existing plugin config",
      () =>
        Effect.gen(function* () {
          const result = yield* AppMetrics.appMetricsRetrieve({
            project_id: getProjectId(),
            id: pluginConfigId(),
          });

          // Output is Record<string, unknown> — assert it's a non-null,
          // non-array object.
          expect(result).toBeDefined();
          expect(typeof result).toBe("object");
          expect(result).not.toBeNull();
          expect(Array.isArray(result)).toBe(false);
        }),
    );

    test("error - NotFound for non-existent plugin config id", () =>
      AppMetrics.appMetricsRetrieve({
        project_id: getProjectId(),
        // An integer well outside any realistic plugin config sequence.
        id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        AppMetrics.appMetricsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });
});
