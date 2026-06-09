import * as Effect from "effect/Effect";
import { describe, expect } from "vitest";
import * as Alerts from "~/operations/alerts";
import { getProjectId, test, testRunId } from "./test.ts";

describe("Alerts", () => {
  // --------------------------------------------------------------------------
  // alertsCreate
  // --------------------------------------------------------------------------
  describe("alertsCreate", () => {
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (id, created_at, created_by, threshold.id,
    // checks, last_notified_at, last_checked_at, next_check_at, state,
    // checks_total, last_value, …). PostHog ignores client-set values for
    // server fields; we pass placeholders to satisfy the schema decoder.
    //
    // Alerts depend on an existing Insight (`insight: number`). Provide
    // POSTHOG_INSIGHT_ID for happy-path coverage; without it, the create
    // happy path is skipped, but error paths still run.
    const insightId = (): number =>
      Number(process.env.POSTHOG_INSIGHT_ID ?? "0");

    const stubBody = (overrides: {
      project_id?: string;
      insight?: number;
      name?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      created_at: new Date().toISOString(),
      insight: overrides.insight ?? insightId(),
      name: overrides.name ?? `distilled-posthog-alert-${testRunId}`,
      subscribed_users: [] as number[],
      threshold: {
        id: "00000000-0000-0000-0000-000000000000",
        created_at: new Date().toISOString(),
        configuration: {
          bounds: { lower: null, upper: 100 },
          type: "absolute" as const,
        },
      },
      state: "not_firing",
      last_notified_at: null,
      last_checked_at: null,
      next_check_at: null,
      checks: [] as never[],
      checks_total: null,
      last_value: null,
      config: { series_index: 0, type: "TrendsAlertConfig" as const },
    });

    test.skipIf(!process.env.POSTHOG_INSIGHT_ID)(
      "happy path - creates a new alert tied to an existing insight",
      () => {
        const alertName = `distilled-posthog-alert-${testRunId}`;
        let createdId: string | undefined;

        return Effect.gen(function* () {
          const result = yield* Alerts.alertsCreate(
            stubBody({ name: alertName }),
          );

          expect(result).toBeDefined();
          expect(typeof result.id).toBe("string");
          expect(result.id?.length).toBeGreaterThan(0);
          expect(result.name).toBe(alertName);
          expect(result.insight).toBe(insightId());
          expect(typeof result.state).toBe("string");
          expect(result.threshold?.configuration?.type).toBe("absolute");

          createdId = result.id;
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Alerts.alertsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent project_id", () =>
      Alerts.alertsCreate(
        stubBody({ project_id: "99999999999", insight: 1 }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Alerts.alertsCreate(
        stubBody({
          project_id: `not-a-number-${testRunId}`,
          insight: 1,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Alerts.alertsCreate(
          stubBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            insight: 1,
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // alertsDestroy
  // --------------------------------------------------------------------------
  describe("alertsDestroy", () => {
    // Reuse the same stub body as alertsCreate (alerts depend on an insight).
    const insightId = (): number =>
      Number(process.env.POSTHOG_INSIGHT_ID ?? "0");

    const createBody = (name: string) => ({
      project_id: getProjectId(),
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      created_at: new Date().toISOString(),
      insight: insightId(),
      name,
      subscribed_users: [] as number[],
      threshold: {
        id: "00000000-0000-0000-0000-000000000000",
        created_at: new Date().toISOString(),
        configuration: {
          bounds: { lower: null, upper: 100 },
          type: "absolute" as const,
        },
      },
      state: "not_firing",
      last_notified_at: null,
      last_checked_at: null,
      next_check_at: null,
      checks: [] as never[],
      checks_total: null,
      last_value: null,
      config: { series_index: 0, type: "TrendsAlertConfig" as const },
    });

    test.skipIf(!process.env.POSTHOG_INSIGHT_ID)(
      "happy path - deletes an existing alert",
      () =>
        Effect.gen(function* () {
          // Arrange: create an alert so we have a UUID to delete.
          const created = yield* Alerts.alertsCreate(
            createBody(`distilled-posthog-alert-del-${testRunId}`),
          );
          expect(typeof created.id).toBe("string");
          expect(created.id?.length).toBeGreaterThan(0);

          // Act: destroy it. Output schema is Schema.Void → undefined.
          const result = yield* Alerts.alertsDestroy({
            project_id: getProjectId(),
            id: created.id!,
          });
          expect(result).toBeUndefined();

          // Assert: deleting again returns NotFound.
          const followUp = yield* Alerts.alertsDestroy({
            project_id: getProjectId(),
            id: created.id!,
          }).pipe(Effect.flip);
          expect(followUp._tag).toBe("NotFound");
        }),
    );

    test("error - NotFound for non-existent alert id", () =>
      Alerts.alertsDestroy({
        project_id: getProjectId(),
        // A well-formed UUID that won't match any real alert.
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Alerts.alertsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // alertsList
  // --------------------------------------------------------------------------
  describe("alertsList", () => {
    test("happy path - returns paginated alerts for the project", () =>
      Effect.gen(function* () {
        const result = yield* Alerts.alertsList({
          project_id: getProjectId(),
          limit: 5,
        });

        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(result.count).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results?.length).toBeLessThanOrEqual(5);

        // Validate shape of each entry, if any are present.
        for (const entry of result.results ?? []) {
          expect(typeof entry.id).toBe("string");
          expect(entry.id?.length).toBeGreaterThan(0);
          expect(typeof entry.insight).toBe("number");
          expect(typeof entry.state).toBe("string");
          expect(typeof entry.created_at).toBe("string");
          expect(typeof entry.created_by?.id).toBe("number");
          expect(typeof entry.created_by?.email).toBe("string");
          expect(typeof entry.threshold?.id).toBe("string");
          expect(["absolute", "percentage"]).toContain(
            entry.threshold?.configuration?.type,
          );
          expect(Array.isArray(entry.subscribed_users)).toBe(true);
          expect(Array.isArray(entry.checks)).toBe(true);
        }
      }));

    test("happy path - respects offset for pagination", () =>
      Effect.gen(function* () {
        const result = yield* Alerts.alertsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 0,
        });

        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results?.length).toBeLessThanOrEqual(1);
      }));

    test("error - NotFound for non-existent project_id", () =>
      Alerts.alertsList({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Alerts.alertsList({
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Alerts.alertsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // alertsPartialUpdate
  // --------------------------------------------------------------------------
  describe("alertsPartialUpdate", () => {
    // Alerts depend on an existing Insight (`insight: number`). Provide
    // POSTHOG_INSIGHT_ID for the create-then-patch happy path. Without it,
    // the happy path is skipped, but error paths still run.
    const insightId = (): number =>
      Number(process.env.POSTHOG_INSIGHT_ID ?? "0");

    const createBody = (name: string) => ({
      project_id: getProjectId(),
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      created_at: new Date().toISOString(),
      insight: insightId(),
      name,
      subscribed_users: [] as number[],
      threshold: {
        id: "00000000-0000-0000-0000-000000000000",
        created_at: new Date().toISOString(),
        configuration: {
          bounds: { lower: null, upper: 100 },
          type: "absolute" as const,
        },
      },
      state: "not_firing",
      last_notified_at: null,
      last_checked_at: null,
      next_check_at: null,
      checks: [] as never[],
      checks_total: null,
      last_value: null,
      config: { series_index: 0, type: "TrendsAlertConfig" as const },
    });

    test.skipIf(!process.env.POSTHOG_INSIGHT_ID)(
      "happy path - patches an existing alert's name and enabled flag",
      () => {
        let createdId: string | undefined;
        const originalName = `distilled-posthog-alert-patch-${testRunId}`;
        const updatedName = `distilled-posthog-alert-patched-${testRunId}`;

        return Effect.gen(function* () {
          // Arrange: create an alert to update.
          const created = yield* Alerts.alertsCreate(createBody(originalName));
          createdId = created.id;
          expect(created.name).toBe(originalName);

          // Act: PATCH only the name + enabled fields.
          const result = yield* Alerts.alertsPartialUpdate({
            project_id: getProjectId(),
            id: created.id!,
            name: updatedName,
            enabled: false,
          });

          // Assert: server reflects the partial update; identity preserved.
          expect(result).toBeDefined();
          expect(result.id).toBe(created.id);
          expect(result.name).toBe(updatedName);
          expect(result.enabled).toBe(false);
          expect(result.insight).toBe(insightId());
          expect(typeof result.state).toBe("string");
          expect(result.threshold?.configuration?.type).toBe("absolute");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Alerts.alertsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent alert id", () =>
      Alerts.alertsPartialUpdate({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
        name: `distilled-posthog-alert-patch-missing-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Alerts.alertsPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
        name: `distilled-posthog-alert-patch-bad-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Alerts.alertsPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
          name: `distilled-posthog-alert-patch-forbidden-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // alertsRetrieve
  // --------------------------------------------------------------------------
  describe("alertsRetrieve", () => {
    // Alerts depend on an existing Insight (`insight: number`). Provide
    // POSTHOG_INSIGHT_ID for the create-then-retrieve happy path. Without it,
    // the happy path is skipped, but error paths still run.
    const insightId = (): number =>
      Number(process.env.POSTHOG_INSIGHT_ID ?? "0");

    const createBody = (name: string) => ({
      project_id: getProjectId(),
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      created_at: new Date().toISOString(),
      insight: insightId(),
      name,
      subscribed_users: [] as number[],
      threshold: {
        id: "00000000-0000-0000-0000-000000000000",
        created_at: new Date().toISOString(),
        configuration: {
          bounds: { lower: null, upper: 100 },
          type: "absolute" as const,
        },
      },
      state: "not_firing",
      last_notified_at: null,
      last_checked_at: null,
      next_check_at: null,
      checks: [] as never[],
      checks_total: null,
      last_value: null,
      config: { series_index: 0, type: "TrendsAlertConfig" as const },
    });

    test.skipIf(!process.env.POSTHOG_INSIGHT_ID)(
      "happy path - retrieves an existing alert by id",
      () => {
        let createdId: string | undefined;
        const alertName = `distilled-posthog-alert-get-${testRunId}`;

        return Effect.gen(function* () {
          // Arrange: create an alert to retrieve.
          const created = yield* Alerts.alertsCreate(createBody(alertName));
          createdId = created.id;

          // Act: retrieve by id.
          const result = yield* Alerts.alertsRetrieve({
            project_id: getProjectId(),
            id: created.id!,
          });

          // Assert: identity + key fields preserved.
          expect(result).toBeDefined();
          expect(result.id).toBe(created.id);
          expect(result.name).toBe(alertName);
          expect(result.insight).toBe(insightId());
          expect(typeof result.state).toBe("string");
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.created_by?.id).toBe("number");
          expect(typeof result.created_by?.email).toBe("string");
          expect(result.threshold?.configuration?.type).toBe("absolute");
          expect(Array.isArray(result.subscribed_users)).toBe(true);
          expect(Array.isArray(result.checks)).toBe(true);
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Alerts.alertsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test.skipIf(!process.env.POSTHOG_INSIGHT_ID)(
      "happy path - respects checks_limit and checks_offset query params",
      () => {
        let createdId: string | undefined;
        const alertName = `distilled-posthog-alert-get-checks-${testRunId}`;

        return Effect.gen(function* () {
          const created = yield* Alerts.alertsCreate(createBody(alertName));
          createdId = created.id;

          const result = yield* Alerts.alertsRetrieve({
            project_id: getProjectId(),
            id: created.id!,
            checks_limit: 5,
            checks_offset: 0,
            checks_date_from: "-24h",
          });

          expect(result.id).toBe(created.id);
          expect(Array.isArray(result.checks)).toBe(true);
          expect(result.checks?.length).toBeLessThanOrEqual(5);
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Alerts.alertsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent alert id", () =>
      Alerts.alertsRetrieve({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Alerts.alertsRetrieve({
        project_id: `not-a-number-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Alerts.alertsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // alertsSimulateCreate
  // --------------------------------------------------------------------------
  describe("alertsSimulateCreate", () => {
    // Read-only simulation — no AlertCheck records are created, so no cleanup
    // is required. Still requires an existing Insight for the happy path.
    const insightId = (): number =>
      Number(process.env.POSTHOG_INSIGHT_ID ?? "0");

    test.skipIf(!process.env.POSTHOG_INSIGHT_ID)(
      "happy path - simulates a detector against an existing insight",
      () =>
        Effect.gen(function* () {
          const result = yield* Alerts.alertsSimulateCreate({
            project_id: getProjectId(),
            insight: insightId(),
            detector_config: {},
            series_index: 0,
            date_from: "-7d",
          });

          expect(result).toBeDefined();
          expect(Array.isArray(result.data)).toBe(true);
          expect(Array.isArray(result.dates)).toBe(true);
          expect(Array.isArray(result.scores)).toBe(true);
          expect(Array.isArray(result.triggered_indices)).toBe(true);
          expect(Array.isArray(result.triggered_dates)).toBe(true);
          expect(typeof result.total_points).toBe("number");
          expect(result.total_points).toBeGreaterThanOrEqual(0);
          expect(typeof result.anomaly_count).toBe("number");
          expect(result.anomaly_count).toBeGreaterThanOrEqual(0);
          // The dates and data arrays should align in length.
          expect(result.dates?.length).toBe(result.data?.length);
        }),
    );

    test("error - NotFound for non-existent project_id", () =>
      Alerts.alertsSimulateCreate({
        project_id: "99999999999",
        insight: 1,
        detector_config: {},
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Alerts.alertsSimulateCreate({
        project_id: `not-a-number-${testRunId}`,
        insight: 1,
        detector_config: {},
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Alerts.alertsSimulateCreate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          insight: 1,
          detector_config: {},
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // alertsUpdate
  // --------------------------------------------------------------------------
  describe("alertsUpdate", () => {
    // PUT requires the full alert body. Same schema-as-request anti-pattern
    // as alertsCreate: server-set fields (id, created_at, created_by,
    // threshold.id, checks, last_*, last_value, checks_total, state) are
    // required by the decoder; PostHog ignores client-supplied values for
    // those fields server-side.
    //
    // Alerts depend on an existing Insight; happy path is gated on
    // POSTHOG_INSIGHT_ID. Error paths still run without it.
    const insightId = (): number =>
      Number(process.env.POSTHOG_INSIGHT_ID ?? "0");

    const fullBody = (overrides: {
      project_id?: string;
      id?: string;
      insight?: number;
      name?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      id: overrides.id ?? "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      created_at: new Date().toISOString(),
      insight: overrides.insight ?? insightId(),
      name: overrides.name ?? `distilled-posthog-alert-put-${testRunId}`,
      subscribed_users: [] as number[],
      threshold: {
        id: "00000000-0000-0000-0000-000000000000",
        created_at: new Date().toISOString(),
        configuration: {
          bounds: { lower: null, upper: 200 },
          type: "absolute" as const,
        },
      },
      state: "not_firing",
      last_notified_at: null,
      last_checked_at: null,
      next_check_at: null,
      checks: [] as never[],
      checks_total: null,
      last_value: null,
      config: { series_index: 0, type: "TrendsAlertConfig" as const },
    });

    const createBody = (name: string) => ({
      ...fullBody({ name }),
    });

    test.skipIf(!process.env.POSTHOG_INSIGHT_ID)(
      "happy path - replaces an existing alert with PUT",
      () => {
        let createdId: string | undefined;
        const originalName = `distilled-posthog-alert-put-orig-${testRunId}`;
        const replacedName = `distilled-posthog-alert-put-new-${testRunId}`;

        return Effect.gen(function* () {
          // Arrange: create an alert to replace.
          const created = yield* Alerts.alertsCreate(createBody(originalName));
          createdId = created.id;
          expect(created.name).toBe(originalName);

          // Act: PUT a full body with a new name + threshold bounds.
          const result = yield* Alerts.alertsUpdate(
            fullBody({
              id: created.id,
              name: replacedName,
            }),
          );

          // Assert: server reflects replacement; identity preserved.
          expect(result).toBeDefined();
          expect(result.id).toBe(created.id);
          expect(result.name).toBe(replacedName);
          expect(result.insight).toBe(insightId());
          expect(typeof result.state).toBe("string");
          expect(result.threshold?.configuration?.type).toBe("absolute");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Alerts.alertsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent alert id", () =>
      Alerts.alertsUpdate(
        fullBody({
          id: "00000000-0000-0000-0000-000000000000",
          insight: 1,
          name: `distilled-posthog-alert-put-missing-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Alerts.alertsUpdate(
        fullBody({
          project_id: `not-a-number-${testRunId}`,
          id: "00000000-0000-0000-0000-000000000000",
          insight: 1,
          name: `distilled-posthog-alert-put-bad-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Alerts.alertsUpdate(
          fullBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            id: "00000000-0000-0000-0000-000000000000",
            insight: 1,
            name: `distilled-posthog-alert-put-forbidden-${testRunId}`,
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });
});
