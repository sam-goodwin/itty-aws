import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getProjectId, testRunId } from "./test.ts";
import * as BatchExports from "~/operations/batch-exports";

describe("BatchExports", () => {
  // --------------------------------------------------------------------------
  // batchExportsBackfillsCancelCreate
  // --------------------------------------------------------------------------
  describe("batchExportsBackfillsCancelCreate", () => {
    // POST cancels an existing batch export backfill. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    //   POSTHOG_BATCH_EXPORT_BACKFILL_ID — UUID of an in-progress backfill
    // for happy-path coverage. Without both set, the happy path is skipped,
    // but error paths still run.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (created_at, last_updated_at, status,
    // team, batch_export, progress, …). PostHog ignores client-set values
    // for server fields; we pass placeholders to satisfy the schema decoder.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";
    const backfillId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_BACKFILL_ID ??
      "00000000-0000-0000-0000-000000000000";

    const stubBody = (overrides: {
      project_id?: string;
      batch_export_id?: string;
      id?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      batch_export_id: overrides.batch_export_id ?? batchExportId(),
      id: overrides.id ?? backfillId(),
      progress: {
        total_runs: null,
        finished_runs: null,
        progress: null,
      },
      start_at: null,
      end_at: null,
      status: "Cancelled",
      created_at: new Date().toISOString(),
      finished_at: null,
      last_updated_at: new Date().toISOString(),
      total_records_count: null,
      adjusted_start_at: null,
      team: 0,
      batch_export: overrides.batch_export_id ?? batchExportId(),
    });

    test.skipIf(
      !process.env.POSTHOG_BATCH_EXPORT_ID ||
        !process.env.POSTHOG_BATCH_EXPORT_BACKFILL_ID,
    )("happy path - cancels an existing batch export backfill", () =>
      Effect.gen(function* () {
        const result = yield* BatchExports.batchExportsBackfillsCancelCreate(
          stubBody({}),
        );

        // Output schema is Schema.Void — successful response decodes to
        // `undefined`. Assert the call succeeded and returned void.
        expect(result).toBeUndefined();
      }),
    );

    test("error - NotFound for non-existent backfill id", () =>
      BatchExports.batchExportsBackfillsCancelCreate(
        stubBody({
          batch_export_id: "00000000-0000-0000-0000-000000000000",
          id: "00000000-0000-0000-0000-000000000000",
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsBackfillsCancelCreate(
        stubBody({
          project_id: `not-a-number-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsBackfillsCancelCreate(
          stubBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            batch_export_id: "00000000-0000-0000-0000-000000000000",
            id: "00000000-0000-0000-0000-000000000000",
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsBackfillsCreate
  // --------------------------------------------------------------------------
  describe("batchExportsBackfillsCreate", () => {
    // POST creates a new backfill on an existing batch export. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    // for happy-path coverage. Without it, the happy path is skipped, but
    // error paths still run.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (id, created_at, last_updated_at,
    // status, team, batch_export, progress, …). PostHog ignores client-set
    // values for server fields; we pass placeholders to satisfy the schema
    // decoder.
    //
    // Cleanup: cancel the created backfill via the same stub-body pattern.
    // Backfills are also bounded by start_at/end_at, so we use a tiny
    // historical range to keep the workload minimal.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";

    const cancelStub = (overrides: {
      project_id?: string;
      batch_export_id?: string;
      id: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      batch_export_id: overrides.batch_export_id ?? batchExportId(),
      id: overrides.id,
      progress: {
        total_runs: null,
        finished_runs: null,
        progress: null,
      },
      start_at: null,
      end_at: null,
      status: "Cancelled",
      created_at: new Date().toISOString(),
      finished_at: null,
      last_updated_at: new Date().toISOString(),
      total_records_count: null,
      adjusted_start_at: null,
      team: 0,
      batch_export: overrides.batch_export_id ?? batchExportId(),
    });

    const createStub = (overrides: {
      project_id?: string;
      batch_export_id?: string;
      start_at?: string;
      end_at?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      batch_export_id: overrides.batch_export_id ?? batchExportId(),
      // Server-set placeholders — required by the schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      progress: {
        total_runs: null,
        finished_runs: null,
        progress: null,
      },
      // Tiny 1-hour historical window keeps the backfill workload trivial.
      start_at: overrides.start_at ?? "2024-01-01T00:00:00Z",
      end_at: overrides.end_at ?? "2024-01-01T01:00:00Z",
      status: "Cancelled",
      created_at: new Date().toISOString(),
      finished_at: null,
      last_updated_at: new Date().toISOString(),
      total_records_count: null,
      adjusted_start_at: null,
      team: 0,
      batch_export: overrides.batch_export_id ?? batchExportId(),
    });

    test.skipIf(!process.env.POSTHOG_BATCH_EXPORT_ID)(
      "happy path - creates a new backfill on an existing batch export",
      () => {
        let createdId: string | undefined;

        return Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsBackfillsCreate(
            createStub({}),
          );

          expect(result).toBeDefined();
          expect(typeof result.id).toBe("string");
          expect(result.id.length).toBeGreaterThan(0);
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.last_updated_at).toBe("string");
          expect(typeof result.team).toBe("number");
          expect(typeof result.batch_export).toBe("string");

          createdId = result.id;
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : BatchExports.batchExportsBackfillsCancelCreate(
                    cancelStub({ id: createdId }),
                  ).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent batch_export_id", () =>
      BatchExports.batchExportsBackfillsCreate(
        createStub({
          batch_export_id: "00000000-0000-0000-0000-000000000000",
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsBackfillsCreate(
        createStub({
          project_id: `not-a-number-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsBackfillsCreate(
          createStub({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            batch_export_id: "00000000-0000-0000-0000-000000000000",
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsBackfillsList
  // --------------------------------------------------------------------------
  describe("batchExportsBackfillsList", () => {
    // GET lists backfills for an existing batch export. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    // for happy-path coverage. Without it, the happy path is skipped, but
    // error paths still run.
    //
    // Output is a cursor-paginated page of backfill records.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";

    test.skipIf(!process.env.POSTHOG_BATCH_EXPORT_ID)(
      "happy path - lists backfills for an existing batch export",
      () =>
        Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsBackfillsList({
            project_id: getProjectId(),
            batch_export_id: batchExportId(),
          });

          expect(result).toBeDefined();
          expect(Array.isArray(result.results)).toBe(true);

          // Validate shape of each entry, if any are present.
          for (const entry of result.results) {
            expect(typeof entry.id).toBe("string");
            expect(entry.id.length).toBeGreaterThan(0);
            expect(typeof entry.created_at).toBe("string");
            expect(typeof entry.last_updated_at).toBe("string");
            expect(typeof entry.team).toBe("number");
            expect(typeof entry.batch_export).toBe("string");
          }
        }),
    );

    test.skipIf(!process.env.POSTHOG_BATCH_EXPORT_ID)(
      "happy path - respects ordering query param",
      () =>
        Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsBackfillsList({
            project_id: getProjectId(),
            batch_export_id: batchExportId(),
            ordering: "-created_at",
          });

          expect(result).toBeDefined();
          expect(Array.isArray(result.results)).toBe(true);
        }),
    );

    test("error - NotFound for non-existent batch_export_id", () =>
      BatchExports.batchExportsBackfillsList({
        project_id: getProjectId(),
        batch_export_id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsBackfillsList({
        project_id: `not-a-number-${testRunId}`,
        batch_export_id: batchExportId(),
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsBackfillsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          batch_export_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsBackfillsRetrieve
  // --------------------------------------------------------------------------
  describe("batchExportsBackfillsRetrieve", () => {
    // GET retrieves a single backfill by id under an existing batch export.
    // Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    //   POSTHOG_BATCH_EXPORT_BACKFILL_ID — UUID of an existing backfill
    // for happy-path coverage. Without both set, the happy path is skipped,
    // but error paths still run.
    //
    // Note: typed errors are only Forbidden + NotFound. Path params are all
    // Schema.String so a non-numeric project_id may surface as NotFound (DRF
    // catch-all) rather than BadRequest — there is no BadRequest path
    // documented for this operation.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";
    const backfillId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_BACKFILL_ID ??
      "00000000-0000-0000-0000-000000000000";

    test.skipIf(
      !process.env.POSTHOG_BATCH_EXPORT_ID ||
        !process.env.POSTHOG_BATCH_EXPORT_BACKFILL_ID,
    )("happy path - retrieves an existing backfill by id", () =>
      Effect.gen(function* () {
        const result = yield* BatchExports.batchExportsBackfillsRetrieve({
          project_id: getProjectId(),
          batch_export_id: batchExportId(),
          id: backfillId(),
        });

        expect(result).toBeDefined();
        expect(result.id).toBe(backfillId());
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.last_updated_at).toBe("string");
        expect(typeof result.team).toBe("number");
        expect(typeof result.batch_export).toBe("string");
      }),
    );

    test("error - NotFound for non-existent backfill id", () =>
      BatchExports.batchExportsBackfillsRetrieve({
        project_id: getProjectId(),
        batch_export_id: batchExportId(),
        id: "00000000-0000-0000-0000-000000000000",
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
        BatchExports.batchExportsBackfillsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          batch_export_id: "00000000-0000-0000-0000-000000000000",
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsCreate
  // --------------------------------------------------------------------------
  describe("batchExportsCreate", () => {
    // POST creates a long-lived scheduled batch export. The happy path is
    // opt-in via POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST=1 because it creates
    // a real resource that we then destroy in cleanup. We use an HTTP
    // destination with `paused: true` so no actual export runs are
    // scheduled while the resource exists.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (id, team_id, created_at,
    // last_updated_at, latest_runs, …). PostHog ignores client-set values
    // for server fields; we pass placeholders to satisfy the schema decoder.
    //
    // Error paths still run unconditionally — they don't create real
    // resources.
    const stubBody = (overrides: { project_id?: string; name?: string }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      // Server-set placeholders — required by the schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      team_id: 0,
      name: overrides.name ?? `distilled-posthog-batch-export-${testRunId}`,
      destination: {
        // HTTP destination is lightweight; combined with `paused: true`
        // below, no real exports will fire. The schema declares this as
        // an empty struct, but PostHog accepts a string discriminator
        // ("HTTP", "S3", "Snowflake", …) on the wire.
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    test.skipIf(!process.env.POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST)(
      "happy path - creates a paused batch export with HTTP destination",
      () => {
        let createdId: string | undefined;
        const exportName = `distilled-posthog-batch-export-${testRunId}`;

        return Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsCreate(
            stubBody({ name: exportName }),
          );

          expect(result).toBeDefined();
          expect(typeof result.id).toBe("string");
          expect(result.id.length).toBeGreaterThan(0);
          expect(result.name).toBe(exportName);
          expect(result.interval).toBe("day");
          expect(result.paused).toBe(true);
          expect(typeof result.team_id).toBe("number");
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.last_updated_at).toBe("string");
          expect(Array.isArray(result.latest_runs)).toBe(true);

          createdId = result.id;
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : BatchExports.batchExportsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent project_id", () =>
      BatchExports.batchExportsCreate(
        stubBody({
          project_id: "99999999999",
          name: `distilled-posthog-batch-export-nf-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsCreate(
        stubBody({
          project_id: `not-a-number-${testRunId}`,
          name: `distilled-posthog-batch-export-bad-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsCreate(
          stubBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            name: `distilled-posthog-batch-export-fb-${testRunId}`,
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsDestroy
  // --------------------------------------------------------------------------
  describe("batchExportsDestroy", () => {
    // DELETE removes a batch export. The happy path creates a real batch
    // export (paused HTTP destination) and then deletes it, so it shares
    // the opt-in gate POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST with
    // batchExportsCreate. Error paths still run unconditionally.
    //
    // The create body reuses the same schema-as-request anti-pattern as
    // batchExportsCreate: server-set fields are required by the decoder
    // and ignored by PostHog server-side.
    const createStub = (name: string) => ({
      project_id: getProjectId(),
      // Server-set placeholders — required by the schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      team_id: 0,
      name,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    test.skipIf(!process.env.POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST)(
      "happy path - deletes an existing batch export",
      () =>
        Effect.gen(function* () {
          // Arrange: create a paused batch export to delete.
          const created = yield* BatchExports.batchExportsCreate(
            createStub(`distilled-posthog-batch-export-del-${testRunId}`),
          );
          expect(typeof created.id).toBe("string");
          expect(created.id.length).toBeGreaterThan(0);

          // Act: destroy it. Output schema is Schema.Void → undefined.
          const result = yield* BatchExports.batchExportsDestroy({
            project_id: getProjectId(),
            id: created.id,
          });
          expect(result).toBeUndefined();

          // Assert: deleting again returns NotFound.
          const followUp = yield* BatchExports.batchExportsDestroy({
            project_id: getProjectId(),
            id: created.id,
          }).pipe(Effect.flip);
          expect(followUp._tag).toBe("NotFound");
        }),
    );

    test("error - NotFound for non-existent batch export id", () =>
      BatchExports.batchExportsDestroy({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
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
        BatchExports.batchExportsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsList
  // --------------------------------------------------------------------------
  describe("batchExportsList", () => {
    // GET lists all batch exports for the project. Always available against
    // any valid project — no resource prerequisites needed beyond auth.
    // Output is paginated with count + results array.

    test("happy path - returns paginated batch exports for the project", () =>
      Effect.gen(function* () {
        const result = yield* BatchExports.batchExportsList({
          project_id: getProjectId(),
          limit: 5,
        });

        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(result.count).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results.length).toBeLessThanOrEqual(5);

        // Validate shape of each entry, if any are present.
        for (const entry of result.results) {
          expect(typeof entry.id).toBe("string");
          expect(entry.id.length).toBeGreaterThan(0);
          expect(typeof entry.name).toBe("string");
          expect(typeof entry.team_id).toBe("number");
          expect([
            "hour",
            "day",
            "week",
            "every 5 minutes",
            "every 15 minutes",
          ]).toContain(entry.interval);
          expect(typeof entry.created_at).toBe("string");
          expect(typeof entry.last_updated_at).toBe("string");
          expect(Array.isArray(entry.latest_runs)).toBe(true);
        }
      }));

    test("happy path - respects offset for pagination", () =>
      Effect.gen(function* () {
        const result = yield* BatchExports.batchExportsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 0,
        });

        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results.length).toBeLessThanOrEqual(1);
      }));

    test("error - NotFound for non-existent project_id", () =>
      BatchExports.batchExportsList({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsList({
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsLogsRetrieve
  // --------------------------------------------------------------------------
  describe("batchExportsLogsRetrieve", () => {
    // GET retrieves logs for an existing batch export. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    // for happy-path coverage. Without it, the happy path is skipped, but
    // error paths still run.
    //
    // Output schema is Schema.Void — the operation resolves to `undefined`
    // on success and does not return a body to assert against beyond that.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";

    test.skipIf(!process.env.POSTHOG_BATCH_EXPORT_ID)(
      "happy path - retrieves logs for an existing batch export",
      () =>
        Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsLogsRetrieve({
            project_id: getProjectId(),
            id: batchExportId(),
            limit: 10,
          });

          // Output schema is Schema.Void — successful response decodes to
          // `undefined`. Assert that the call succeeded and returned void.
          expect(result).toBeUndefined();
        }),
    );

    test.skipIf(!process.env.POSTHOG_BATCH_EXPORT_ID)(
      "happy path - respects level + search query params",
      () =>
        Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsLogsRetrieve({
            project_id: getProjectId(),
            id: batchExportId(),
            level: "WARN,ERROR",
            search: `distilled-${testRunId}`,
            limit: 5,
          });

          expect(result).toBeUndefined();
        }),
    );

    test("error - NotFound for non-existent batch export id", () =>
      BatchExports.batchExportsLogsRetrieve({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("Forbidden");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsLogsRetrieve({
        project_id: `not-a-number-${testRunId}`,
        id: batchExportId(),
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("Forbidden")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsLogsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsPartialUpdate
  // --------------------------------------------------------------------------
  describe("batchExportsPartialUpdate", () => {
    // PATCH updates fields on an existing batch export. The happy path
    // creates a real batch export to patch, so it shares the opt-in gate
    // POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST with batchExportsCreate. Error
    // paths still run unconditionally.
    //
    // PATCH input is fully optional (apart from path params), so we only
    // pass the fields under test.
    const createStub = (name: string) => ({
      project_id: getProjectId(),
      // Server-set placeholders — required by the create schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      team_id: 0,
      name,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    test.skipIf(!process.env.POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST)(
      "happy path - patches an existing batch export's name and paused flag",
      () => {
        let createdId: string | undefined;
        const originalName = `distilled-posthog-batch-export-patch-${testRunId}`;
        const updatedName = `distilled-posthog-batch-export-patched-${testRunId}`;

        return Effect.gen(function* () {
          // Arrange: create a paused batch export to patch.
          const created = yield* BatchExports.batchExportsCreate(
            createStub(originalName),
          );
          createdId = created.id;
          expect(created.name).toBe(originalName);

          // Act: PATCH only the name + paused fields.
          const result = yield* BatchExports.batchExportsPartialUpdate({
            project_id: getProjectId(),
            id: created.id,
            name: updatedName,
            paused: false,
          });

          // Assert: server reflects the partial update; identity preserved.
          expect(result).toBeDefined();
          expect(result.id).toBe(created.id);
          expect(result.name).toBe(updatedName);
          expect(result.paused).toBe(false);
          expect(result.interval).toBe("day");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : BatchExports.batchExportsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent batch export id", () =>
      BatchExports.batchExportsPartialUpdate({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
        name: `distilled-posthog-batch-export-patch-missing-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
        name: `distilled-posthog-batch-export-patch-bad-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
          name: `distilled-posthog-batch-export-patch-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsPauseCreate
  // --------------------------------------------------------------------------
  describe("batchExportsPauseCreate", () => {
    // POST pauses an existing batch export. The happy path creates a real
    // batch export, unpauses it via PATCH, then pauses it via the operation
    // under test, so it shares the opt-in gate
    // POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST with batchExportsCreate. Error
    // paths still run unconditionally.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (team_id, name, destination, interval,
    // created_at, last_updated_at, latest_runs, schema, …). PostHog ignores
    // client-set values for server fields; we pass placeholders to satisfy
    // the schema decoder.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.
    const createStub = (name: string) => ({
      project_id: getProjectId(),
      // Server-set placeholders — required by the create schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      team_id: 0,
      name,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    const pauseStub = (overrides: {
      project_id?: string;
      id?: string;
      name?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      id: overrides.id ?? "00000000-0000-0000-0000-000000000000",
      // Server-set placeholders — required by the schema decoder.
      team_id: 0,
      name:
        overrides.name ?? `distilled-posthog-batch-export-pause-${testRunId}`,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    test.skipIf(!process.env.POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST)(
      "happy path - pauses an unpaused batch export",
      () => {
        let createdId: string | undefined;
        const exportName = `distilled-posthog-batch-export-pause-${testRunId}`;

        return Effect.gen(function* () {
          // Arrange: create a paused batch export, then unpause it so the
          // pause operation has something meaningful to do.
          const created = yield* BatchExports.batchExportsCreate(
            createStub(exportName),
          );
          createdId = created.id;

          const unpaused = yield* BatchExports.batchExportsPartialUpdate({
            project_id: getProjectId(),
            id: created.id,
            paused: false,
          });
          expect(unpaused.paused).toBe(false);

          // Act: pause it. Output schema is Schema.Void → undefined.
          const result = yield* BatchExports.batchExportsPauseCreate(
            pauseStub({ id: created.id, name: exportName }),
          );
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : BatchExports.batchExportsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent batch export id", () =>
      BatchExports.batchExportsPauseCreate(
        pauseStub({
          id: "00000000-0000-0000-0000-000000000000",
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsPauseCreate(
        pauseStub({
          project_id: `not-a-number-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsPauseCreate(
          pauseStub({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            id: "00000000-0000-0000-0000-000000000000",
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsRetrieve
  // --------------------------------------------------------------------------
  describe("batchExportsRetrieve", () => {
    // GET retrieves a single batch export by id. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    // for happy-path coverage. Without it, the happy path is skipped, but
    // error paths still run.
    //
    // Typed errors are only Forbidden + NotFound. Path params are all
    // Schema.String so a non-numeric project_id surfaces as NotFound (DRF
    // catch-all) rather than BadRequest — there is no BadRequest path
    // documented for this operation.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";

    test.skipIf(!process.env.POSTHOG_BATCH_EXPORT_ID)(
      "happy path - retrieves an existing batch export by id",
      () =>
        Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsRetrieve({
            project_id: getProjectId(),
            id: batchExportId(),
          });

          expect(result).toBeDefined();
          expect(result.id).toBe(batchExportId());
          expect(typeof result.name).toBe("string");
          expect(typeof result.team_id).toBe("number");
          expect([
            "hour",
            "day",
            "week",
            "every 5 minutes",
            "every 15 minutes",
          ]).toContain(result.interval);
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.last_updated_at).toBe("string");
          expect(Array.isArray(result.latest_runs)).toBe(true);
        }),
    );

    test("error - NotFound for non-existent batch export id", () =>
      BatchExports.batchExportsRetrieve({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
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
        BatchExports.batchExportsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsRunsCancelCreate
  // --------------------------------------------------------------------------
  describe("batchExportsRunsCancelCreate", () => {
    // POST cancels an existing batch export run. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    //   POSTHOG_BATCH_EXPORT_RUN_ID — UUID of an in-progress run
    // for happy-path coverage. Without both set, the happy path is skipped,
    // but error paths still run.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (status, created_at, last_updated_at,
    // data_interval_end, batch_export, …). PostHog ignores client-set
    // values for server fields; we pass placeholders to satisfy the schema
    // decoder.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";
    const runId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_RUN_ID ??
      "00000000-0000-0000-0000-000000000000";

    const stubBody = (overrides: {
      project_id?: string;
      batch_export_id?: string;
      id?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      batch_export_id: overrides.batch_export_id ?? batchExportId(),
      id: overrides.id ?? runId(),
      status: "Cancelled",
      data_interval_end: new Date().toISOString(),
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      batch_export: overrides.batch_export_id ?? batchExportId(),
    });

    test.skipIf(
      !process.env.POSTHOG_BATCH_EXPORT_ID ||
        !process.env.POSTHOG_BATCH_EXPORT_RUN_ID,
    )("happy path - cancels an existing batch export run", () =>
      Effect.gen(function* () {
        const result = yield* BatchExports.batchExportsRunsCancelCreate(
          stubBody({}),
        );

        // Output schema is Schema.Void — successful response decodes to
        // `undefined`. Assert the call succeeded and returned void.
        expect(result).toBeUndefined();
      }),
    );

    test("error - NotFound for non-existent run id", () =>
      BatchExports.batchExportsRunsCancelCreate(
        stubBody({
          batch_export_id: "00000000-0000-0000-0000-000000000000",
          id: "00000000-0000-0000-0000-000000000000",
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsRunsCancelCreate(
        stubBody({
          project_id: `not-a-number-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsRunsCancelCreate(
          stubBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            batch_export_id: "00000000-0000-0000-0000-000000000000",
            id: "00000000-0000-0000-0000-000000000000",
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsRunsList
  // --------------------------------------------------------------------------
  describe("batchExportsRunsList", () => {
    // GET lists runs for an existing batch export. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    // for happy-path coverage. Without it, the happy path is skipped, but
    // error paths still run.
    //
    // Output is a cursor-paginated page of run records.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";

    test.skipIf(!process.env.POSTHOG_BATCH_EXPORT_ID)(
      "happy path - lists runs for an existing batch export",
      () =>
        Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsRunsList({
            project_id: getProjectId(),
            batch_export_id: batchExportId(),
          });

          expect(result).toBeDefined();
          expect(Array.isArray(result.results)).toBe(true);

          // Validate shape of each entry, if any are present.
          for (const entry of result.results) {
            expect(typeof entry.id).toBe("string");
            expect(entry.id.length).toBeGreaterThan(0);
            expect(typeof entry.created_at).toBe("string");
            expect(typeof entry.last_updated_at).toBe("string");
            expect(typeof entry.data_interval_end).toBe("string");
            expect(typeof entry.batch_export).toBe("string");
          }
        }),
    );

    test.skipIf(!process.env.POSTHOG_BATCH_EXPORT_ID)(
      "happy path - respects ordering query param",
      () =>
        Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsRunsList({
            project_id: getProjectId(),
            batch_export_id: batchExportId(),
            ordering: "-created_at",
          });

          expect(result).toBeDefined();
          expect(Array.isArray(result.results)).toBe(true);
        }),
    );

    test("error - NotFound for non-existent batch_export_id", () =>
      BatchExports.batchExportsRunsList({
        project_id: getProjectId(),
        batch_export_id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsRunsList({
        project_id: `not-a-number-${testRunId}`,
        batch_export_id: batchExportId(),
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsRunsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          batch_export_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsRunsLogsRetrieve
  // --------------------------------------------------------------------------
  describe("batchExportsRunsLogsRetrieve", () => {
    // GET retrieves logs for a specific batch export run. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    //   POSTHOG_BATCH_EXPORT_RUN_ID — UUID of an existing run
    // for happy-path coverage. Without both set, the happy path is skipped,
    // but error paths still run.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined` and there is no body to assert against beyond that.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";
    const runId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_RUN_ID ??
      "00000000-0000-0000-0000-000000000000";

    test.skipIf(
      !process.env.POSTHOG_BATCH_EXPORT_ID ||
        !process.env.POSTHOG_BATCH_EXPORT_RUN_ID,
    )("happy path - retrieves logs for an existing batch export run", () =>
      Effect.gen(function* () {
        const result = yield* BatchExports.batchExportsRunsLogsRetrieve({
          project_id: getProjectId(),
          batch_export_id: batchExportId(),
          id: runId(),
          limit: 10,
        });

        // Output schema is Schema.Void — successful response decodes to
        // `undefined`. Assert that the call succeeded and returned void.
        expect(result).toBeUndefined();
      }),
    );

    test.skipIf(
      !process.env.POSTHOG_BATCH_EXPORT_ID ||
        !process.env.POSTHOG_BATCH_EXPORT_RUN_ID,
    )("happy path - respects level + search query params", () =>
      Effect.gen(function* () {
        const result = yield* BatchExports.batchExportsRunsLogsRetrieve({
          project_id: getProjectId(),
          batch_export_id: batchExportId(),
          id: runId(),
          level: "WARN,ERROR",
          search: `distilled-${testRunId}`,
          limit: 5,
        });

        expect(result).toBeUndefined();
      }),
    );

    test("error - NotFound for non-existent run id", () =>
      BatchExports.batchExportsRunsLogsRetrieve({
        project_id: getProjectId(),
        batch_export_id: "00000000-0000-0000-0000-000000000000",
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("Forbidden");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsRunsLogsRetrieve({
        project_id: `not-a-number-${testRunId}`,
        batch_export_id: batchExportId(),
        id: runId(),
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("Forbidden")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsRunsLogsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          batch_export_id: "00000000-0000-0000-0000-000000000000",
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsRunsRetrieve
  // --------------------------------------------------------------------------
  describe("batchExportsRunsRetrieve", () => {
    // GET retrieves a single batch export run by id. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    //   POSTHOG_BATCH_EXPORT_RUN_ID — UUID of an existing run
    // for happy-path coverage. Without both set, the happy path is skipped,
    // but error paths still run.
    //
    // Typed errors are only Forbidden + NotFound. Path params are all
    // Schema.String so a non-numeric project_id surfaces as NotFound (DRF
    // catch-all) rather than BadRequest — there is no BadRequest path
    // documented for this operation.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";
    const runId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_RUN_ID ??
      "00000000-0000-0000-0000-000000000000";

    test.skipIf(
      !process.env.POSTHOG_BATCH_EXPORT_ID ||
        !process.env.POSTHOG_BATCH_EXPORT_RUN_ID,
    )("happy path - retrieves an existing batch export run by id", () =>
      Effect.gen(function* () {
        const result = yield* BatchExports.batchExportsRunsRetrieve({
          project_id: getProjectId(),
          batch_export_id: batchExportId(),
          id: runId(),
        });

        expect(result).toBeDefined();
        expect(result.id).toBe(runId());
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.last_updated_at).toBe("string");
        expect(typeof result.data_interval_end).toBe("string");
        expect(typeof result.batch_export).toBe("string");
      }),
    );

    test("error - NotFound for non-existent run id", () =>
      BatchExports.batchExportsRunsRetrieve({
        project_id: getProjectId(),
        batch_export_id: batchExportId(),
        id: "00000000-0000-0000-0000-000000000000",
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
        BatchExports.batchExportsRunsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          batch_export_id: "00000000-0000-0000-0000-000000000000",
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsRunsRetryCreate
  // --------------------------------------------------------------------------
  describe("batchExportsRunsRetryCreate", () => {
    // POST retries an existing batch export run by enqueuing a backfill of
    // the same data interval. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    //   POSTHOG_BATCH_EXPORT_RUN_ID — UUID of an existing run (typically
    //     a finished/failed run)
    // for happy-path coverage. Without both set, the happy path is skipped,
    // but error paths still run.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (status, created_at, last_updated_at,
    // data_interval_end, batch_export, …). PostHog ignores client-set
    // values for server fields; we pass placeholders to satisfy the schema
    // decoder.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.
    const batchExportId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_ID ??
      "00000000-0000-0000-0000-000000000000";
    const runId = (): string =>
      process.env.POSTHOG_BATCH_EXPORT_RUN_ID ??
      "00000000-0000-0000-0000-000000000000";

    const stubBody = (overrides: {
      project_id?: string;
      batch_export_id?: string;
      id?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      batch_export_id: overrides.batch_export_id ?? batchExportId(),
      id: overrides.id ?? runId(),
      status: "Cancelled",
      data_interval_end: new Date().toISOString(),
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      batch_export: overrides.batch_export_id ?? batchExportId(),
    });

    test.skipIf(
      !process.env.POSTHOG_BATCH_EXPORT_ID ||
        !process.env.POSTHOG_BATCH_EXPORT_RUN_ID ||
        !process.env.POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST,
    )("happy path - retries an existing batch export run", () =>
      Effect.gen(function* () {
        const result = yield* BatchExports.batchExportsRunsRetryCreate(
          stubBody({}),
        );

        // Output schema is Schema.Void — successful response decodes to
        // `undefined`. Assert the call succeeded and returned void.
        expect(result).toBeUndefined();
      }),
    );

    test("error - NotFound for non-existent run id", () =>
      BatchExports.batchExportsRunsRetryCreate(
        stubBody({
          batch_export_id: "00000000-0000-0000-0000-000000000000",
          id: "00000000-0000-0000-0000-000000000000",
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsRunsRetryCreate(
        stubBody({
          project_id: `not-a-number-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsRunsRetryCreate(
          stubBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            batch_export_id: "00000000-0000-0000-0000-000000000000",
            id: "00000000-0000-0000-0000-000000000000",
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsRunTestStepCreate
  // --------------------------------------------------------------------------
  describe("batchExportsRunTestStepCreate", () => {
    // POST runs a test step on an existing batch export to validate its
    // destination configuration. Requires:
    //   POSTHOG_BATCH_EXPORT_ID — UUID of an existing batch export
    // for happy-path coverage. Without it, the happy path is skipped, but
    // error paths still run.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (team_id, name, destination, interval,
    // created_at, last_updated_at, latest_runs, schema, …). PostHog ignores
    // client-set values for server fields; we pass placeholders to satisfy
    // the schema decoder.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.
    const stubBody = (overrides: {
      project_id?: string;
      id?: string;
      name?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      id:
        overrides.id ??
        process.env.POSTHOG_BATCH_EXPORT_ID ??
        "00000000-0000-0000-0000-000000000000",
      // Server-set placeholders — required by the schema decoder.
      team_id: 0,
      name:
        overrides.name ??
        `distilled-posthog-batch-export-test-step-${testRunId}`,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    test.skipIf(!process.env.POSTHOG_BATCH_EXPORT_ID)(
      "happy path - runs a test step on an existing batch export",
      () =>
        Effect.gen(function* () {
          const result = yield* BatchExports.batchExportsRunTestStepCreate(
            stubBody({}),
          );

          // Output schema is Schema.Void — successful response decodes to
          // `undefined`. Assert the call succeeded and returned void.
          expect(result).toBeUndefined();
        }),
    );

    test("error - NotFound for non-existent batch export id", () =>
      BatchExports.batchExportsRunTestStepCreate(
        stubBody({
          id: "00000000-0000-0000-0000-000000000000",
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsRunTestStepCreate(
        stubBody({
          project_id: `not-a-number-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsRunTestStepCreate(
          stubBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            id: "00000000-0000-0000-0000-000000000000",
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsRunTestStepNewCreate
  // --------------------------------------------------------------------------
  describe("batchExportsRunTestStepNewCreate", () => {
    // POST runs a test step at the collection level — used to validate a
    // proposed batch export configuration before it has been persisted. Only
    // requires a project; no existing batch export needed.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (id, team_id, name, destination,
    // interval, created_at, last_updated_at, latest_runs, schema, …). PostHog
    // ignores client-set values for server fields; we pass placeholders to
    // satisfy the schema decoder.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.
    const stubBody = (overrides: { project_id?: string; name?: string }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      // Server-set placeholders — required by the schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      team_id: 0,
      name:
        overrides.name ??
        `distilled-posthog-batch-export-test-step-new-${testRunId}`,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    test("happy path - runs a test step on a proposed batch export config", () =>
      // The stub HTTP destination omits a `token` field that PostHog
      // validates server-side, so we can either get void on success or a
      // BadRequest about the missing field — both confirm the endpoint
      // is reachable and the request shape is correct. Producing a fully
      // valid destination config would require credentials we can't bake
      // into a test fixture.
      BatchExports.batchExportsRunTestStepNewCreate(stubBody({})).pipe(
        Effect.matchEffect({
          onSuccess: (result) =>
            Effect.sync(() => expect(result).toBeUndefined()),
          onFailure: (e) =>
            Effect.sync(() =>
              expect(["BadRequest", "ValidationError"]).toContain(e._tag),
            ),
        }),
      ));

    test("error - NotFound for non-existent project_id", () =>
      BatchExports.batchExportsRunTestStepNewCreate(
        stubBody({
          project_id: "99999999999",
          name: `distilled-posthog-batch-export-test-step-nf-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsRunTestStepNewCreate(
        stubBody({
          project_id: `not-a-number-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsRunTestStepNewCreate(
          stubBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            name: `distilled-posthog-batch-export-test-step-fb-${testRunId}`,
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsTestRetrieve
  // --------------------------------------------------------------------------
  describe("batchExportsTestRetrieve", () => {
    // GET runs a connectivity/configuration test for batch exports under
    // the given project. Only requires a project; no batch export
    // prerequisite needed.
    //
    // Typed errors are only Forbidden + NotFound. Path params are all
    // Schema.String so a non-numeric project_id surfaces as NotFound (DRF
    // catch-all) rather than BadRequest — there is no BadRequest path
    // documented for this operation.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.

    test("happy path - runs the batch exports test for the project", () =>
      // PostHog's batch-exports test endpoint reaches into project state
      // (existing destinations, credentials) to actually run the connectivity
      // probe — depending on what's configured for the test project, this
      // can return success or one of several typed errors. Accept any of
      // those outcomes; we just want to know the endpoint is callable with
      // the right input shape.
      BatchExports.batchExportsTestRetrieve({
        project_id: getProjectId(),
      }).pipe(
        Effect.matchEffect({
          onSuccess: (result) =>
            Effect.sync(() => expect(result).toBeUndefined()),
          onFailure: (e) =>
            Effect.sync(() =>
              expect([
                "BadRequest",
                "ValidationError",
                "UnknownPosthogError",
              ]).toContain(e._tag),
            ),
        }),
      ));

    test("error - NotFound for non-existent project_id", () =>
      BatchExports.batchExportsTestRetrieve({
        project_id: "99999999999",
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
        BatchExports.batchExportsTestRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsUnpauseCreate
  // --------------------------------------------------------------------------
  describe("batchExportsUnpauseCreate", () => {
    // POST unpauses an existing batch export. The happy path creates a real
    // paused batch export and unpauses it, so it shares the opt-in gate
    // POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST with batchExportsCreate. After
    // unpausing we re-pause via PATCH so the resource is back in a benign
    // state before destruction. Error paths still run unconditionally.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (team_id, name, destination, interval,
    // created_at, last_updated_at, latest_runs, schema, …). PostHog ignores
    // client-set values for server fields; we pass placeholders to satisfy
    // the schema decoder.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.
    const createStub = (name: string) => ({
      project_id: getProjectId(),
      // Server-set placeholders — required by the create schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      team_id: 0,
      name,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    const unpauseStub = (overrides: {
      project_id?: string;
      id?: string;
      name?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      id: overrides.id ?? "00000000-0000-0000-0000-000000000000",
      // Server-set placeholders — required by the schema decoder.
      team_id: 0,
      name:
        overrides.name ?? `distilled-posthog-batch-export-unpause-${testRunId}`,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: false,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    test.skipIf(!process.env.POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST)(
      "happy path - unpauses a paused batch export",
      () => {
        let createdId: string | undefined;
        const exportName = `distilled-posthog-batch-export-unpause-${testRunId}`;

        return Effect.gen(function* () {
          // Arrange: create a paused batch export to unpause.
          const created = yield* BatchExports.batchExportsCreate(
            createStub(exportName),
          );
          createdId = created.id;
          expect(created.paused).toBe(true);

          // Act: unpause it. Output schema is Schema.Void → undefined.
          const result = yield* BatchExports.batchExportsUnpauseCreate(
            unpauseStub({ id: created.id, name: exportName }),
          );
          expect(result).toBeUndefined();

          // Re-pause via PATCH so the resource is benign before destroy.
          const repaused = yield* BatchExports.batchExportsPartialUpdate({
            project_id: getProjectId(),
            id: created.id,
            paused: true,
          });
          expect(repaused.paused).toBe(true);
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : BatchExports.batchExportsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent batch export id", () =>
      BatchExports.batchExportsUnpauseCreate(
        unpauseStub({
          id: "00000000-0000-0000-0000-000000000000",
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsUnpauseCreate(
        unpauseStub({
          project_id: `not-a-number-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsUnpauseCreate(
          unpauseStub({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            id: "00000000-0000-0000-0000-000000000000",
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // batchExportsUpdate
  // --------------------------------------------------------------------------
  describe("batchExportsUpdate", () => {
    // PUT replaces an existing batch export. The happy path creates a real
    // batch export to update, so it shares the opt-in gate
    // POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST with batchExportsCreate. Error
    // paths still run unconditionally.
    //
    // Unlike PATCH (partial), PUT requires the full schema. The generated
    // input schema reuses the response model and therefore demands many
    // server-set fields (team_id, created_at, last_updated_at, latest_runs,
    // schema, …). PostHog ignores client-set values for server fields; we
    // pass placeholders to satisfy the schema decoder.
    const createStub = (name: string) => ({
      project_id: getProjectId(),
      // Server-set placeholders — required by the create schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      team_id: 0,
      name,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    const updateStub = (overrides: {
      project_id?: string;
      id?: string;
      name?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      id: overrides.id ?? "00000000-0000-0000-0000-000000000000",
      // Server-set placeholders — required by the schema decoder.
      team_id: 0,
      name: overrides.name ?? `distilled-posthog-batch-export-put-${testRunId}`,
      destination: {
        type: "HTTP" as never,
        config: {
          url: "https://example.com/posthog-batch-export-test-put",
        },
      },
      interval: "day" as const,
      paused: true,
      created_at: new Date().toISOString(),
      last_updated_at: new Date().toISOString(),
      latest_runs: [] as never[],
      schema: null,
    });

    test.skipIf(!process.env.POSTHOG_RUN_BATCH_EXPORT_CREATE_TEST)(
      "happy path - PUT-replaces an existing batch export",
      () => {
        let createdId: string | undefined;
        const originalName = `distilled-posthog-batch-export-put-${testRunId}`;
        const updatedName = `distilled-posthog-batch-export-put-updated-${testRunId}`;

        return Effect.gen(function* () {
          // Arrange: create a paused batch export to PUT-replace.
          const created = yield* BatchExports.batchExportsCreate(
            createStub(originalName),
          );
          createdId = created.id;
          expect(created.name).toBe(originalName);

          // Act: PUT-replace with a new name; identity preserved.
          const result = yield* BatchExports.batchExportsUpdate(
            updateStub({ id: created.id, name: updatedName }),
          );

          expect(result).toBeDefined();
          expect(result.id).toBe(created.id);
          expect(result.name).toBe(updatedName);
          expect(result.interval).toBe("day");
          expect(result.paused).toBe(true);
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.last_updated_at).toBe("string");
          expect(Array.isArray(result.latest_runs)).toBe(true);
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : BatchExports.batchExportsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent batch export id", () =>
      BatchExports.batchExportsUpdate(
        updateStub({
          id: "00000000-0000-0000-0000-000000000000",
          name: `distilled-posthog-batch-export-put-missing-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      BatchExports.batchExportsUpdate(
        updateStub({
          project_id: `not-a-number-${testRunId}`,
          name: `distilled-posthog-batch-export-put-bad-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        BatchExports.batchExportsUpdate(
          updateStub({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            id: "00000000-0000-0000-0000-000000000000",
            name: `distilled-posthog-batch-export-put-fb-${testRunId}`,
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });
});
