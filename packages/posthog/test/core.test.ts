import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getProjectId, testRunId } from "./test.ts";
import * as Core from "~/operations/core";

describe("Core", () => {
  // --------------------------------------------------------------------------
  // annotationsCreate
  // --------------------------------------------------------------------------
  describe("annotationsCreate", () => {
    // POST creates an annotation under a project. The schema reuses the
    // response model as the request body, so server-set fields (id,
    // created_by, created_at, updated_at) take placeholder values that the
    // API ignores/replaces.
    //
    // Annotations do not support hard-delete — the destroy operation
    // returns an error directing callers to PATCH `deleted: true` instead.
    // Cleanup therefore uses annotationsPartialUpdate to soft-delete the
    // created annotation in Effect.ensuring.
    const createStub = (
      project_id: string,
      content: string,
      overrides: { date_marker?: string | null } = {},
    ) => ({
      project_id,
      id: 0,
      content,
      date_marker: overrides.date_marker ?? new Date().toISOString(),
      dashboard_name: null,
      insight_short_id: null,
      insight_name: null,
      insight_derived_name: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      updated_at: new Date().toISOString(),
    });

    test("happy path - creates an annotation and returns it with a numeric id", () => {
      let createdId: number | undefined;
      const content = `distilled-annotation-${testRunId}`;

      return Effect.gen(function* () {
        const result = yield* Core.annotationsCreate(
          createStub(getProjectId(), content),
        );
        createdId = result.id;

        expect(result).toBeDefined();
        expect(typeof result.id).toBe("number");
        expect(result.id).toBeGreaterThan(0);
        expect(result.content).toBe(content);
        expect(typeof result.updated_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.uuid).toBe("string");
        expect(typeof result.created_by.email).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.annotationsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.annotationsCreate(
        createStub("99999999999", `distilled-annotation-nf-${testRunId}`),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.annotationsCreate(
        createStub(
          `not-a-number-${testRunId}`,
          `distilled-annotation-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.annotationsCreate(
          createStub(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-annotation-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // annotationsDestroy
  // --------------------------------------------------------------------------
  describe("annotationsDestroy", () => {
    // DELETE deletes an annotation. The endpoint is documented as not
    // supporting hard delete — PostHog overrides destroy to soft-delete
    // (set deleted=true) and returns 204 No Content. From the SDK's
    // perspective the call resolves to void on success.
    //
    // Happy path creates a throwaway annotation, deletes it, and then
    // asserts a second delete on the same id surfaces NotFound (proving
    // the first delete took effect). Cleanup soft-deletes via patch in
    // case destroy itself failed.
    const createStub = (project_id: string, content: string) => ({
      project_id,
      id: 0,
      content,
      date_marker: new Date().toISOString(),
      dashboard_name: null,
      insight_short_id: null,
      insight_name: null,
      insight_derived_name: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      updated_at: new Date().toISOString(),
    });

    test("happy path - deletes a previously-created annotation", () => {
      let createdId: number | undefined;
      const content = `distilled-annotation-del-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create an annotation to delete.
        const created = yield* Core.annotationsCreate(
          createStub(getProjectId(), content),
        );
        createdId = created.id;

        // Act: delete it.
        yield* Core.annotationsDestroy({
          project_id: getProjectId(),
          id: created.id,
        });

        // Mark cleanup as already done — the ensuring block becomes a no-op.
        createdId = undefined;

        // Assert: a second delete on the same id surfaces NotFound.
        const err = yield* Core.annotationsDestroy({
          project_id: getProjectId(),
          id: created.id,
        }).pipe(Effect.flip);
        expect(err._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.annotationsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent annotation id", () =>
      Core.annotationsDestroy({
        project_id: getProjectId(),
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
        Core.annotationsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // annotationsList
  // --------------------------------------------------------------------------
  describe("annotationsList", () => {
    // GET lists annotations under a project (paginated). The happy path
    // creates a throwaway annotation with a unique searchable content
    // string so we can verify it appears in the list, and cleans up via
    // annotationsPartialUpdate({ deleted: true }) since hard-delete is
    // not supported.
    const createStub = (project_id: string, content: string) => ({
      project_id,
      id: 0,
      content,
      date_marker: new Date().toISOString(),
      dashboard_name: null,
      insight_short_id: null,
      insight_name: null,
      insight_derived_name: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      updated_at: new Date().toISOString(),
    });

    test("happy path - lists annotations and includes a freshly created one", () => {
      let createdId: number | undefined;
      const content = `distilled-annotation-list-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create an annotation we can search for.
        const created = yield* Core.annotationsCreate(
          createStub(getProjectId(), content),
        );
        createdId = created.id;

        // Act: search for it via the search query param.
        const result = yield* Core.annotationsList({
          project_id: getProjectId(),
          limit: 100,
          search: content,
        });

        // Assert: pagination shape and presence of our annotation.
        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(result.count).toBeGreaterThanOrEqual(1);
        expect(Array.isArray(result.results)).toBe(true);
        const found = result.results.find((a) => a.id === created.id);
        expect(found).toBeDefined();
        expect(found?.content).toBe(content);
        for (const a of result.results) {
          expect(typeof a.id).toBe("number");
          expect(typeof a.updated_at).toBe("string");
          expect(a.created_by).toBeDefined();
          expect(typeof a.created_by.id).toBe("number");
          expect(typeof a.created_by.uuid).toBe("string");
          expect(typeof a.created_by.email).toBe("string");
        }
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.annotationsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.annotationsList({
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
      Core.annotationsList({
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.annotationsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // annotationsPartialUpdate
  // --------------------------------------------------------------------------
  describe("annotationsPartialUpdate", () => {
    // PATCH partially updates an annotation. All non-path-param fields are
    // optional, so we only pass what's under test. The happy path creates
    // a throwaway annotation to patch, asserts the patched field is
    // reflected in the response, and cleans up via a soft-delete patch
    // (annotations do not support hard delete).
    const createStub = (project_id: string, content: string) => ({
      project_id,
      id: 0,
      content,
      date_marker: new Date().toISOString(),
      dashboard_name: null,
      insight_short_id: null,
      insight_name: null,
      insight_derived_name: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      updated_at: new Date().toISOString(),
    });

    test("happy path - patches an annotation's content", () => {
      let createdId: number | undefined;
      const initialContent = `distilled-annotation-patch-${testRunId}`;
      const updatedContent = `distilled-annotation-patched-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create an annotation to patch.
        const created = yield* Core.annotationsCreate(
          createStub(getProjectId(), initialContent),
        );
        createdId = created.id;

        // Act: PATCH only the content field.
        const result = yield* Core.annotationsPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          content: updatedContent,
        });

        // Assert: server reflects the partial update; identity preserved.
        expect(result).toBeDefined();
        expect(result.id).toBe(created.id);
        expect(result.content).toBe(updatedContent);
        expect(typeof result.updated_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.annotationsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent annotation id", () =>
      Core.annotationsPartialUpdate({
        project_id: getProjectId(),
        id: 999999999,
        content: `distilled-annotation-patch-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.annotationsPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        content: `distilled-annotation-patch-bad-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.annotationsPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          content: `distilled-annotation-patch-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // annotationsRetrieve
  // --------------------------------------------------------------------------
  describe("annotationsRetrieve", () => {
    // GET retrieves a single annotation by numeric id. The happy path
    // creates a throwaway annotation, retrieves it, and asserts identity
    // plus shape. Cleanup soft-deletes via patch (annotations do not
    // support hard delete).
    const createStub = (project_id: string, content: string) => ({
      project_id,
      id: 0,
      content,
      date_marker: new Date().toISOString(),
      dashboard_name: null,
      insight_short_id: null,
      insight_name: null,
      insight_derived_name: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      updated_at: new Date().toISOString(),
    });

    test("happy path - retrieves a freshly created annotation by id", () => {
      let createdId: number | undefined;
      const content = `distilled-annotation-get-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create an annotation to retrieve.
        const created = yield* Core.annotationsCreate(
          createStub(getProjectId(), content),
        );
        createdId = created.id;

        // Act: retrieve it.
        const result = yield* Core.annotationsRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });

        // Assert: identity and shape.
        expect(result).toBeDefined();
        expect(result.id).toBe(created.id);
        expect(result.content).toBe(content);
        expect(typeof result.updated_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.uuid).toBe("string");
        expect(typeof result.created_by.email).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.annotationsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent annotation id", () =>
      Core.annotationsRetrieve({
        project_id: getProjectId(),
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
        Core.annotationsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // annotationsUpdate
  // --------------------------------------------------------------------------
  describe("annotationsUpdate", () => {
    // PUT replaces an annotation. The schema reuses the response model as
    // the request body, so server-set fields (created_by, created_at,
    // updated_at) take placeholder values that the API ignores/replaces.
    //
    // Happy path creates a throwaway annotation, PUTs a replacement body
    // changing `content`, and asserts the new value is reflected. Cleanup
    // soft-deletes via patch (annotations do not support hard delete).
    const createStub = (project_id: string, content: string) => ({
      project_id,
      id: 0,
      content,
      date_marker: new Date().toISOString(),
      dashboard_name: null,
      insight_short_id: null,
      insight_name: null,
      insight_derived_name: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      updated_at: new Date().toISOString(),
    });

    const putStub = (
      project_id: string,
      id: number,
      content: string | null,
    ) => ({
      project_id,
      id,
      content,
      date_marker: new Date().toISOString(),
      dashboard_name: null,
      insight_short_id: null,
      insight_name: null,
      insight_derived_name: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      updated_at: new Date().toISOString(),
    });

    test("happy path - replaces an annotation via PUT", () => {
      let createdId: number | undefined;
      const initialContent = `distilled-annotation-put-${testRunId}`;
      const updatedContent = `distilled-annotation-put-updated-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create an annotation to update.
        const created = yield* Core.annotationsCreate(
          createStub(getProjectId(), initialContent),
        );
        createdId = created.id;

        // Act: PUT a replacement body with updated content.
        const result = yield* Core.annotationsUpdate(
          putStub(getProjectId(), created.id, updatedContent),
        );

        // Assert: server returns the updated representation.
        expect(result).toBeDefined();
        expect(result.id).toBe(created.id);
        expect(result.content).toBe(updatedContent);
        expect(typeof result.updated_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.uuid).toBe("string");
        expect(typeof result.created_by.email).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.annotationsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent annotation id", () =>
      Core.annotationsUpdate(
        putStub(
          getProjectId(),
          999999999,
          `distilled-annotation-put-nf-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.annotationsUpdate(
        putStub(
          `not-a-number-${testRunId}`,
          1,
          `distilled-annotation-put-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.annotationsUpdate(
          putStub(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            1,
            `distilled-annotation-put-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // cohortsActivityRetrieve
  // --------------------------------------------------------------------------
  describe("cohortsActivityRetrieve", () => {
    // GET retrieves the activity feed for a cohort. The output schema is
    // Schema.Void, so a successful call resolves to undefined and we only
    // need to verify that no error is raised.
    //
    // The happy path creates a throwaway static cohort to query activity
    // against. Cleanup soft-deletes via cohortsPartialUpdate({ deleted:
    // true }) since cohorts do not support hard delete.
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - retrieves activity for a freshly created cohort", () => {
      let createdId: number | undefined;
      const name = `distilled-cohort-activity-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create a cohort to query activity for.
        const created = yield* Core.cohortsCreate(
          cohortStub(getProjectId(), name),
        );
        createdId = created.id;

        // Act: retrieve activity. Output is Void; success means no error.
        const result = yield* Core.cohortsActivityRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });

        // Assert: schema-decoded Void is undefined.
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent cohort id", () =>
      Core.cohortsActivityRetrieve({
        project_id: getProjectId(),
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
        Core.cohortsActivityRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // cohortsAddPersonsToStaticCohortPartialUpdate
  // --------------------------------------------------------------------------
  describe("cohortsAddPersonsToStaticCohortPartialUpdate", () => {
    // PATCH adds persons (by distinct_id-derived person_ids) to a static
    // cohort. Output is Schema.Void — success means no error.
    //
    // Happy path creates a throwaway static cohort, calls the endpoint
    // with an empty person_ids array (which the endpoint accepts as a
    // no-op against an empty list of persons), and asserts no error.
    // Cleanup soft-deletes via cohortsPartialUpdate({ deleted: true }).
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - adds persons (empty list) to a fresh static cohort", () => {
      let createdId: number | undefined;
      const name = `distilled-cohort-add-persons-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create a static cohort to add persons to.
        const created = yield* Core.cohortsCreate(
          cohortStub(getProjectId(), name),
        );
        createdId = created.id;

        // Act: call add_persons_to_static_cohort with an empty list. The
        // endpoint accepts this as a no-op and returns Void on success.
        const result =
          yield* Core.cohortsAddPersonsToStaticCohortPartialUpdate({
            project_id: getProjectId(),
            id: created.id,
            person_ids: [],
          });

        // Assert: schema-decoded Void is undefined.
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent cohort id", () =>
      Core.cohortsAddPersonsToStaticCohortPartialUpdate({
        project_id: getProjectId(),
        id: 999999999,
        person_ids: [],
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.cohortsAddPersonsToStaticCohortPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        person_ids: [],
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.cohortsAddPersonsToStaticCohortPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          person_ids: [],
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // cohortsAllActivityRetrieve
  // --------------------------------------------------------------------------
  describe("cohortsAllActivityRetrieve", () => {
    // GET retrieves the activity feed across all cohorts in a project.
    // The output schema is Schema.Void, so a successful call resolves to
    // undefined and we only need to verify that no error is raised.
    test("happy path - retrieves activity for all cohorts in the project", () =>
      Effect.gen(function* () {
        const result = yield* Core.cohortsAllActivityRetrieve({
          project_id: getProjectId(),
        });

        // Schema-decoded Void is undefined.
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.cohortsAllActivityRetrieve({
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
        Core.cohortsAllActivityRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // cohortsCalculationHistoryRetrieve
  // --------------------------------------------------------------------------
  describe("cohortsCalculationHistoryRetrieve", () => {
    // GET retrieves the calculation history for a cohort. The output
    // schema is Schema.Void, so a successful call resolves to undefined
    // and we only need to verify that no error is raised.
    //
    // Happy path creates a throwaway static cohort to query history
    // against. Cleanup soft-deletes via cohortsPartialUpdate({ deleted:
    // true }) since cohorts do not support hard delete.
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - retrieves calculation history for a fresh cohort", () => {
      let createdId: number | undefined;
      const name = `distilled-cohort-calc-history-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create a cohort to query history for.
        const created = yield* Core.cohortsCreate(
          cohortStub(getProjectId(), name),
        );
        createdId = created.id;

        // Act: retrieve calculation history. Output is Void.
        const result = yield* Core.cohortsCalculationHistoryRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });

        // Assert: schema-decoded Void is undefined.
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent cohort id", () =>
      Core.cohortsCalculationHistoryRetrieve({
        project_id: getProjectId(),
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
        Core.cohortsCalculationHistoryRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // cohortsCreate
  // --------------------------------------------------------------------------
  describe("cohortsCreate", () => {
    // POST creates a cohort under a project. The schema reuses the
    // response model as the request body, so server-set fields (id,
    // created_by, created_at, version, pending_version, etc.) take
    // placeholder values that the API ignores/replaces. Cleanup
    // soft-deletes via cohortsPartialUpdate({ deleted: true }) since
    // cohorts do not support hard delete.
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - creates a static cohort and returns its id", () => {
      let createdId: number | undefined;
      const name = `distilled-cohort-create-${testRunId}`;

      return Effect.gen(function* () {
        const result = yield* Core.cohortsCreate(
          cohortStub(getProjectId(), name),
        );
        createdId = result.id;

        expect(result).toBeDefined();
        expect(typeof result.id).toBe("number");
        expect(result.id).toBeGreaterThan(0);
        expect(result.name).toBe(name);
        expect(typeof result.is_calculating).toBe("boolean");
        expect(typeof result.errors_calculating).toBe("number");
        expect(Array.isArray(result.experiment_set)).toBe(true);
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.uuid).toBe("string");
        expect(typeof result.created_by.email).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.cohortsCreate(
        cohortStub("99999999999", `distilled-cohort-nf-${testRunId}`),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.cohortsCreate(
        cohortStub(
          `not-a-number-${testRunId}`,
          `distilled-cohort-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.cohortsCreate(
          cohortStub(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-cohort-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // cohortsDestroy
  // --------------------------------------------------------------------------
  describe("cohortsDestroy", () => {
    // DELETE deletes a cohort. The endpoint is documented as not
    // supporting hard delete — PostHog overrides destroy to soft-delete
    // (set deleted=true) and returns 204 No Content. From the SDK's
    // perspective the call resolves to void on success.
    //
    // Happy path creates a throwaway cohort, deletes it, and then asserts
    // a follow-up retrieve surfaces NotFound (proving the destroy took
    // effect — soft-deleted cohorts are excluded from default queries).
    // Cleanup soft-deletes via patch in case destroy itself failed.
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - deletes a previously-created cohort", () => {
      let createdId: number | undefined;
      const name = `distilled-cohort-del-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create a cohort to delete.
        const created = yield* Core.cohortsCreate(
          cohortStub(getProjectId(), name),
        );
        createdId = created.id;

        // Act: delete it. Output is Void.
        const result = yield* Core.cohortsDestroy({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result).toBeUndefined();

        // Mark cleanup as already done — the ensuring block becomes a no-op.
        createdId = undefined;

        // Assert: a subsequent retrieve surfaces NotFound (soft-deleted
        // cohorts are excluded from default reads).
        const err = yield* Core.cohortsRetrieve({
          project_id: getProjectId(),
          id: created.id,
        }).pipe(Effect.flip);
        expect(err._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent cohort id", () =>
      Core.cohortsDestroy({
        project_id: getProjectId(),
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
        Core.cohortsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // cohortsList
  // --------------------------------------------------------------------------
  describe("cohortsList", () => {
    // GET lists cohorts under a project (paginated). Happy path creates a
    // throwaway cohort, lists with limit=100, asserts the freshly created
    // cohort appears in the results, and cleans up via cohortsPartialUpdate.
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - lists cohorts and includes a freshly created one", () => {
      let createdId: number | undefined;
      const name = `distilled-cohort-list-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create a cohort to look for in the list response.
        const created = yield* Core.cohortsCreate(
          cohortStub(getProjectId(), name),
        );
        createdId = created.id;

        // Act: list cohorts.
        const result = yield* Core.cohortsList({
          project_id: getProjectId(),
          limit: 100,
        });

        // Assert: pagination shape and presence of our created cohort.
        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(result.count).toBeGreaterThanOrEqual(1);
        expect(Array.isArray(result.results)).toBe(true);
        const found = result.results.find((c) => c.id === created.id);
        expect(found).toBeDefined();
        expect(found?.name).toBe(name);
        for (const c of result.results) {
          expect(typeof c.id).toBe("number");
          expect(typeof c.is_calculating).toBe("boolean");
          expect(typeof c.errors_calculating).toBe("number");
          expect(Array.isArray(c.experiment_set)).toBe(true);
          expect(c.created_by).toBeDefined();
          expect(typeof c.created_by.id).toBe("number");
          expect(typeof c.created_by.uuid).toBe("string");
          expect(typeof c.created_by.email).toBe("string");
        }
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.cohortsList({
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
      Core.cohortsList({
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.cohortsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // cohortsPartialUpdate
  // --------------------------------------------------------------------------
  describe("cohortsPartialUpdate", () => {
    // PATCH partially updates a cohort. All non-path-param fields are
    // optional, so we only pass what's under test. Happy path creates a
    // throwaway cohort, patches its name, asserts the new value is
    // reflected, and cleans up via a soft-delete patch (cohorts do not
    // support hard delete).
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - patches a cohort's name", () => {
      let createdId: number | undefined;
      const initialName = `distilled-cohort-patch-${testRunId}`;
      const updatedName = `distilled-cohort-patched-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create a cohort to patch.
        const created = yield* Core.cohortsCreate(
          cohortStub(getProjectId(), initialName),
        );
        createdId = created.id;

        // Act: PATCH only the name field.
        const result = yield* Core.cohortsPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          name: updatedName,
        });

        // Assert: server reflects the partial update; identity preserved.
        expect(result).toBeDefined();
        expect(result.id).toBe(created.id);
        expect(result.name).toBe(updatedName);
        expect(typeof result.is_calculating).toBe("boolean");
        expect(typeof result.errors_calculating).toBe("number");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent cohort id", () =>
      Core.cohortsPartialUpdate({
        project_id: getProjectId(),
        id: 999999999,
        name: `distilled-cohort-patch-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.cohortsPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        name: `distilled-cohort-patch-bad-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.cohortsPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          name: `distilled-cohort-patch-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("cohortsPersonsRetrieve", () => {
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - retrieves persons for a cohort", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.cohortsCreate(
          cohortStub(
            getProjectId(),
            `distilled-cohort-persons-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.cohortsPersonsRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent cohort id", () =>
      Core.cohortsPersonsRetrieve({
        project_id: getProjectId(),
        id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.cohortsPersonsRetrieve({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.cohortsPersonsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("cohortsRemovePersonFromStaticCohortPartialUpdate", () => {
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - removes person from static cohort", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.cohortsCreate(
          cohortStub(
            getProjectId(),
            `distilled-cohort-rmperson-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result =
          yield* Core.cohortsRemovePersonFromStaticCohortPartialUpdate({
            project_id: getProjectId(),
            id: created.id,
          });
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent cohort id", () =>
      Core.cohortsRemovePersonFromStaticCohortPartialUpdate({
        project_id: getProjectId(),
        id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.cohortsRemovePersonFromStaticCohortPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.cohortsRemovePersonFromStaticCohortPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("cohortsRetrieve", () => {
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - retrieves a cohort by id", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.cohortsCreate(
          cohortStub(
            getProjectId(),
            `distilled-cohort-retrieve-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.cohortsRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result.id).toBe(created.id);
        expect(result.name).toBe(`distilled-cohort-retrieve-${testRunId}`);
        expect(typeof result.is_calculating).toBe("boolean");
        expect(typeof result.errors_calculating).toBe("number");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(Array.isArray(result.experiment_set)).toBe(true);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent cohort id", () =>
      Core.cohortsRetrieve({
        project_id: getProjectId(),
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
        Core.cohortsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("cohortsUpdate", () => {
    const cohortStub = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      is_static: true,
      version: null,
      pending_version: null,
      is_calculating: false,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      created_at: null,
      last_calculation: null,
      last_backfill_person_properties_at: null,
      errors_calculating: 0,
      last_error_message: null,
      count: null,
      experiment_set: [] as number[],
    });

    test("happy path - updates a cohort via PUT", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.cohortsCreate(
          cohortStub(getProjectId(), `distilled-cohort-put-${testRunId}`),
        );
        createdId = created.id;
        const result = yield* Core.cohortsUpdate({
          project_id: getProjectId(),
          id: created.id,
          name: `distilled-cohort-put-renamed-${testRunId}`,
          version: null,
          pending_version: null,
          is_calculating: false,
          created_by: {
            id: 0,
            uuid: "00000000-0000-0000-0000-000000000000",
            email: "placeholder@example.com",
            hedgehog_config: null,
          },
          created_at: null,
          last_calculation: null,
          last_backfill_person_properties_at: null,
          errors_calculating: 0,
          last_error_message: null,
          count: null,
          experiment_set: [],
        });
        expect(result.id).toBe(created.id);
        expect(result.name).toBe(`distilled-cohort-put-renamed-${testRunId}`);
        expect(typeof result.is_calculating).toBe("boolean");
        expect(typeof result.errors_calculating).toBe("number");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.cohortsPartialUpdate({
                  project_id: getProjectId(),
                  id: createdId,
                  deleted: true,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent cohort id", () =>
      Core.cohortsUpdate({
        project_id: getProjectId(),
        id: 999999999,
        name: `distilled-cohort-put-nf-${testRunId}`,
        version: null,
        pending_version: null,
        is_calculating: false,
        created_by: {
          id: 0,
          uuid: "00000000-0000-0000-0000-000000000000",
          email: "placeholder@example.com",
          hedgehog_config: null,
        },
        created_at: null,
        last_calculation: null,
        last_backfill_person_properties_at: null,
        errors_calculating: 0,
        last_error_message: null,
        count: null,
        experiment_set: [],
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.cohortsUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        name: `distilled-cohort-put-bad-${testRunId}`,
        version: null,
        pending_version: null,
        is_calculating: false,
        created_by: {
          id: 0,
          uuid: "00000000-0000-0000-0000-000000000000",
          email: "placeholder@example.com",
          hedgehog_config: null,
        },
        created_at: null,
        last_calculation: null,
        last_backfill_person_properties_at: null,
        errors_calculating: 0,
        last_error_message: null,
        count: null,
        experiment_set: [],
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.cohortsUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          name: `distilled-cohort-put-fb-${testRunId}`,
          version: null,
          pending_version: null,
          is_calculating: false,
          created_by: {
            id: 0,
            uuid: "00000000-0000-0000-0000-000000000000",
            email: "placeholder@example.com",
            hedgehog_config: null,
          },
          created_at: null,
          last_calculation: null,
          last_backfill_person_properties_at: null,
          errors_calculating: 0,
          last_error_message: null,
          count: null,
          experiment_set: [],
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("commentsCountRetrieve", () => {
    test("happy path - retrieves comments count", () =>
      Effect.gen(function* () {
        const result = yield* Core.commentsCountRetrieve({
          project_id: getProjectId(),
        });
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.commentsCountRetrieve({
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
        Core.commentsCountRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("commentsCreate", () => {
    const commentInput = (project_id: string, content: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      content,
      version: 0,
      created_at: "1970-01-01T00:00:00Z",
      scope: "Notebook",
    });

    test("happy path - creates a comment", () => {
      let createdId: string | undefined;
      return Effect.gen(function* () {
        const result = yield* Core.commentsCreate(
          commentInput(
            getProjectId(),
            `distilled-comment-create-${testRunId}`,
          ),
        );
        createdId = result.id;
        expect(typeof result.id).toBe("string");
        expect(result.id.length).toBeGreaterThan(0);
        expect(result.content).toBe(
          `distilled-comment-create-${testRunId}`,
        );
        expect(typeof result.scope).toBe("string");
        expect(typeof result.version).toBe("number");
        expect(typeof result.created_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.commentsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.commentsCreate(
        commentInput("99999999999", `distilled-comment-nf-${testRunId}`),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.commentsCreate(
        commentInput(
          `not-a-number-${testRunId}`,
          `distilled-comment-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.commentsCreate(
          commentInput(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-comment-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("commentsDestroy", () => {
    const commentInput = (project_id: string, content: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      content,
      version: 0,
      created_at: "1970-01-01T00:00:00Z",
      scope: "Notebook",
    });

    test("happy path - destroys a comment", () => {
      let createdId: string | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.commentsCreate(
          commentInput(
            getProjectId(),
            `distilled-comment-destroy-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.commentsDestroy({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result).toBeUndefined();
        createdId = undefined;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.commentsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent comment id", () =>
      Core.commentsDestroy({
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
        Core.commentsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("commentsList", () => {
    test("happy path - lists comments", () =>
      Effect.gen(function* () {
        const result = yield* Core.commentsList({
          project_id: getProjectId(),
        });
        expect(Array.isArray(result.results)).toBe(true);
        for (const item of result.results) {
          expect(typeof item.id).toBe("string");
          expect(typeof item.scope).toBe("string");
          expect(typeof item.version).toBe("number");
          expect(typeof item.created_at).toBe("string");
          expect(item.created_by).toBeDefined();
          expect(typeof item.created_by.id).toBe("number");
        }
      }));

    test("happy path - lists comments with search filter", () =>
      Effect.gen(function* () {
        const result = yield* Core.commentsList({
          project_id: getProjectId(),
          search: `distilled-comment-search-${testRunId}`,
        });
        expect(Array.isArray(result.results)).toBe(true);
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.commentsList({
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
      Core.commentsList({
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.commentsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("commentsPartialUpdate", () => {
    const commentInput = (project_id: string, content: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      content,
      version: 0,
      created_at: "1970-01-01T00:00:00Z",
      scope: "Notebook",
    });

    test("happy path - patches a comment's content", () => {
      let createdId: string | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.commentsCreate(
          commentInput(
            getProjectId(),
            `distilled-comment-patch-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.commentsPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          content: `distilled-comment-patched-${testRunId}`,
        });
        expect(result.id).toBe(created.id);
        expect(result.content).toBe(
          `distilled-comment-patched-${testRunId}`,
        );
        expect(typeof result.scope).toBe("string");
        expect(typeof result.version).toBe("number");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.commentsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("happy path - soft-deletes a comment via deleted=true", () => {
      let createdId: string | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.commentsCreate(
          commentInput(
            getProjectId(),
            `distilled-comment-soft-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.commentsPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          deleted: true,
        });
        expect(result.id).toBe(created.id);
        expect(result.deleted).toBe(true);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.commentsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent comment id", () =>
      Core.commentsPartialUpdate({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
        content: `distilled-comment-patch-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.commentsPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
        content: `distilled-comment-patch-bad-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.commentsPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
          content: `distilled-comment-patch-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("commentsRetrieve", () => {
    const commentInput = (project_id: string, content: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      content,
      version: 0,
      created_at: "1970-01-01T00:00:00Z",
      scope: "Notebook",
    });

    test("happy path - retrieves a comment by id", () => {
      let createdId: string | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.commentsCreate(
          commentInput(
            getProjectId(),
            `distilled-comment-retrieve-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.commentsRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result.id).toBe(created.id);
        expect(result.content).toBe(
          `distilled-comment-retrieve-${testRunId}`,
        );
        expect(typeof result.scope).toBe("string");
        expect(typeof result.version).toBe("number");
        expect(typeof result.created_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.commentsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent comment id", () =>
      Core.commentsRetrieve({
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
        Core.commentsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("commentsThreadRetrieve", () => {
    const commentInput = (project_id: string, content: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      content,
      version: 0,
      created_at: "1970-01-01T00:00:00Z",
      scope: "Notebook",
    });

    test("happy path - retrieves a comment thread", () => {
      let createdId: string | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.commentsCreate(
          commentInput(
            getProjectId(),
            `distilled-comment-thread-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.commentsThreadRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.commentsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent comment id", () =>
      Core.commentsThreadRetrieve({
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
        Core.commentsThreadRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("commentsUpdate", () => {
    const commentInput = (project_id: string, content: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      content,
      version: 0,
      created_at: "1970-01-01T00:00:00Z",
      scope: "Notebook",
    });

    const updateBody = (
      project_id: string,
      id: string,
      content: string,
    ) => ({
      project_id,
      id,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      content,
      version: 0,
      created_at: "1970-01-01T00:00:00Z",
      scope: "Notebook",
    });

    test("happy path - replaces a comment via PUT", () => {
      let createdId: string | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.commentsCreate(
          commentInput(getProjectId(), `distilled-comment-put-${testRunId}`),
        );
        createdId = created.id;
        const result = yield* Core.commentsUpdate(
          updateBody(
            getProjectId(),
            created.id,
            `distilled-comment-put-renamed-${testRunId}`,
          ),
        );
        expect(result.id).toBe(created.id);
        expect(result.content).toBe(
          `distilled-comment-put-renamed-${testRunId}`,
        );
        expect(typeof result.scope).toBe("string");
        expect(typeof result.version).toBe("number");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.commentsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent comment id", () =>
      Core.commentsUpdate(
        updateBody(
          getProjectId(),
          "00000000-0000-0000-0000-000000000000",
          `distilled-comment-put-nf-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.commentsUpdate(
        updateBody(
          `not-a-number-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
          `distilled-comment-put-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.commentsUpdate(
          updateBody(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            "00000000-0000-0000-0000-000000000000",
            `distilled-comment-put-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsAnalyzeRefreshResultCreate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    const analyzeInput = (project_id: string, id: number) => ({
      project_id,
      id,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - analyzes refresh result for a dashboard", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-analyze-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsAnalyzeRefreshResultCreate(
          analyzeInput(getProjectId(), created.id),
        );
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsAnalyzeRefreshResultCreate(
        analyzeInput(getProjectId(), 999999999),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsAnalyzeRefreshResultCreate(
        analyzeInput(`not-a-number-${testRunId}`, 1),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsAnalyzeRefreshResultCreate(
          analyzeInput(process.env.POSTHOG_FORBIDDEN_PROJECT_ID!, 1),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsBulkUpdateTagsCreate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - bulk-adds tags to dashboards", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-bulktags-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsBulkUpdateTagsCreate({
          project_id: getProjectId(),
          ids: [created.id],
          action: "add" as never,
          tags: [`distilled-tag-${testRunId}`],
        });
        expect(Array.isArray(result.updated)).toBe(true);
        expect(Array.isArray(result.skipped)).toBe(true);
        for (const item of result.updated) {
          expect(typeof item.id).toBe("number");
          expect(Array.isArray(item.tags)).toBe(true);
        }
        for (const item of result.skipped) {
          expect(typeof item.id).toBe("number");
          expect(typeof item.reason).toBe("string");
        }
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.dashboardsBulkUpdateTagsCreate({
        project_id: "99999999999",
        ids: [1],
        action: "add" as never,
        tags: [`distilled-tag-nf-${testRunId}`],
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsBulkUpdateTagsCreate({
        project_id: `not-a-number-${testRunId}`,
        ids: [1],
        action: "add" as never,
        tags: [`distilled-tag-bad-${testRunId}`],
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsBulkUpdateTagsCreate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          ids: [1],
          action: "add" as never,
          tags: [`distilled-tag-fb-${testRunId}`],
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsCopyTileCreate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - copies a tile between dashboards", () => {
      const sourceIds: number[] = [];
      return Effect.gen(function* () {
        const source = yield* Core.dashboardsCreate({
          ...dashboardCreateInput(
            getProjectId(),
            `distilled-dash-copytile-src-${testRunId}`,
          ),
          use_template: "DEFAULT_APP",
        });
        sourceIds.push(source.id);
        const target = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-copytile-tgt-${testRunId}`,
          ),
        );
        sourceIds.push(target.id);
        const sourceFull = yield* Core.dashboardsRetrieve({
          project_id: getProjectId(),
          id: source.id,
        });
        const tileId =
          sourceFull.tiles && sourceFull.tiles.length > 0
            ? Number(
                (sourceFull.tiles[0] as Record<string, unknown>).id ?? 0,
              )
            : 0;
        const result = yield* Core.dashboardsCopyTileCreate({
          project_id: getProjectId(),
          id: target.id,
          fromDashboardId: source.id,
          tileId,
        });
        expect(typeof result.id).toBe("number");
        expect(typeof result.created_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            Effect.forEach(sourceIds, (id) =>
              Core.dashboardsDestroy({
                project_id: getProjectId(),
                id,
              }).pipe(Effect.ignore),
            ),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent target dashboard id", () =>
      Core.dashboardsCopyTileCreate({
        project_id: getProjectId(),
        id: 999999999,
        fromDashboardId: 1,
        tileId: 1,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsCopyTileCreate({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        fromDashboardId: 1,
        tileId: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsCopyTileCreate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          fromDashboardId: 1,
          tileId: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsCreate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - creates a dashboard", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const result = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-create-${testRunId}`,
          ),
        );
        createdId = result.id;
        expect(typeof result.id).toBe("number");
        expect(result.name).toBe(`distilled-dash-create-${testRunId}`);
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.is_shared).toBe("boolean");
        expect(typeof result.access_control_version).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.dashboardsCreate(
        dashboardCreateInput(
          "99999999999",
          `distilled-dash-nf-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsCreate(
        dashboardCreateInput(
          `not-a-number-${testRunId}`,
          `distilled-dash-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsCreate(
          dashboardCreateInput(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-dash-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsCreateFromTemplateJsonCreate", () => {
    const templateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - creates a dashboard from a template JSON", () =>
      Effect.gen(function* () {
        const result = yield* Core.dashboardsCreateFromTemplateJsonCreate(
          templateInput(
            getProjectId(),
            `distilled-dash-tpljson-${testRunId}`,
          ),
        );
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.dashboardsCreateFromTemplateJsonCreate(
        templateInput("99999999999", `distilled-dash-tpljson-nf-${testRunId}`),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsCreateFromTemplateJsonCreate(
        templateInput(
          `not-a-number-${testRunId}`,
          `distilled-dash-tpljson-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsCreateFromTemplateJsonCreate(
          templateInput(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-dash-tpljson-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsCreateUnlistedDashboardCreate", () => {
    const unlistedInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - creates an unlisted dashboard from a template tag", () =>
      Effect.gen(function* () {
        const result = yield* Core.dashboardsCreateUnlistedDashboardCreate(
          unlistedInput(
            getProjectId(),
            `distilled-dash-unlisted-${testRunId}`,
          ),
        );
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.dashboardsCreateUnlistedDashboardCreate(
        unlistedInput(
          "99999999999",
          `distilled-dash-unlisted-nf-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsCreateUnlistedDashboardCreate(
        unlistedInput(
          `not-a-number-${testRunId}`,
          `distilled-dash-unlisted-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsCreateUnlistedDashboardCreate(
          unlistedInput(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-dash-unlisted-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsDestroy", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - destroys a dashboard", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-destroy-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsDestroy({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result).toBeUndefined();
        createdId = undefined;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsDestroy({
        project_id: getProjectId(),
        id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsDestroy({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsList", () => {
    test("happy path - lists dashboards", () =>
      Effect.gen(function* () {
        const result = yield* Core.dashboardsList({
          project_id: getProjectId(),
        });
        expect(typeof result.count).toBe("number");
        expect(Array.isArray(result.results)).toBe(true);
        for (const item of result.results) {
          expect(typeof item.id).toBe("number");
          expect(typeof item.created_at).toBe("string");
          expect(typeof item.is_shared).toBe("boolean");
          expect(typeof item.deleted).toBe("boolean");
          expect(typeof item.team_id).toBe("number");
          expect(item.created_by).toBeDefined();
          expect(typeof item.created_by.id).toBe("number");
        }
      }));

    test("happy path - lists dashboards with limit and offset", () =>
      Effect.gen(function* () {
        const result = yield* Core.dashboardsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 0,
        });
        expect(typeof result.count).toBe("number");
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results.length).toBeLessThanOrEqual(1);
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.dashboardsList({
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
      Core.dashboardsList({
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsMoveTilePartialUpdate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - moves a tile between dashboards", () => {
      const sourceIds: number[] = [];
      return Effect.gen(function* () {
        const source = yield* Core.dashboardsCreate({
          ...dashboardCreateInput(
            getProjectId(),
            `distilled-dash-movetile-src-${testRunId}`,
          ),
          use_template: "DEFAULT_APP",
        });
        sourceIds.push(source.id);
        const target = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-movetile-tgt-${testRunId}`,
          ),
        );
        sourceIds.push(target.id);
        const result = yield* Core.dashboardsMoveTilePartialUpdate({
          project_id: getProjectId(),
          id: source.id,
          name: `distilled-dash-movetile-src-renamed-${testRunId}`,
        });
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            Effect.forEach(sourceIds, (id) =>
              Core.dashboardsDestroy({
                project_id: getProjectId(),
                id,
              }).pipe(Effect.ignore),
            ),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsMoveTilePartialUpdate({
        project_id: getProjectId(),
        id: 999999999,
        name: `distilled-dash-movetile-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsMoveTilePartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        name: `distilled-dash-movetile-bad-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsMoveTilePartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          name: `distilled-dash-movetile-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsPartialUpdate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - patches a dashboard's name", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-patch-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          name: `distilled-dash-patched-${testRunId}`,
        });
        expect(result.id).toBe(created.id);
        expect(result.name).toBe(`distilled-dash-patched-${testRunId}`);
        expect(typeof result.is_shared).toBe("boolean");
        expect(typeof result.created_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsPartialUpdate({
        project_id: getProjectId(),
        id: 999999999,
        name: `distilled-dash-patch-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        name: `distilled-dash-patch-bad-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          name: `distilled-dash-patch-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsReorderTilesCreate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - reorders dashboard tiles", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate({
          ...dashboardCreateInput(
            getProjectId(),
            `distilled-dash-reorder-${testRunId}`,
          ),
          use_template: "DEFAULT_APP",
        });
        createdId = created.id;
        const full = yield* Core.dashboardsRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });
        const tileIds =
          full.tiles && full.tiles.length > 0
            ? (full.tiles as Array<Record<string, unknown>>).map((t) =>
                Number(t.id ?? 0),
              )
            : [];
        const result = yield* Core.dashboardsReorderTilesCreate({
          project_id: getProjectId(),
          id: created.id,
          tile_order: tileIds,
        });
        expect(result.id).toBe(created.id);
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.is_shared).toBe("boolean");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsReorderTilesCreate({
        project_id: getProjectId(),
        id: 999999999,
        tile_order: [],
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsReorderTilesCreate({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        tile_order: [],
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsReorderTilesCreate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          tile_order: [],
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsRetrieve", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - retrieves a dashboard by id", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-retrieve-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result.id).toBe(created.id);
        expect(result.name).toBe(`distilled-dash-retrieve-${testRunId}`);
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.is_shared).toBe("boolean");
        expect(typeof result.access_control_version).toBe("string");
        expect(typeof result.team_id).toBe("number");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsRetrieve({
        project_id: getProjectId(),
        id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsRetrieve({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsRunInsightsRetrieve", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test(
      "happy path - runs insights on a dashboard",
      () => {
        let createdId: number | undefined;
        return Effect.gen(function* () {
          const created = yield* Core.dashboardsCreate({
            ...dashboardCreateInput(
              getProjectId(),
              `distilled-dash-runinsights-${testRunId}`,
            ),
            use_template: "DEFAULT_APP",
          });
          createdId = created.id;
          const result = yield* Core.dashboardsRunInsightsRetrieve({
            project_id: getProjectId(),
            id: created.id,
            refresh: "force_cache",
          });
          expect(Array.isArray(result.results)).toBe(true);
          for (const item of result.results) {
            expect(item.insight).toBeDefined();
            expect(typeof item.insight.id).toBe("number");
            expect(typeof item.insight.short_id).toBe("string");
          }
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Core.dashboardsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
      { timeout: 60_000 },
    );

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsRunInsightsRetrieve({
        project_id: getProjectId(),
        id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsRunInsightsRetrieve({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsRunInsightsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsSharingList", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - lists sharing configs for a dashboard", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-sharinglist-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsSharingList({
          project_id: getProjectId(),
          dashboard_id: created.id,
        });
        expect(Array.isArray(result)).toBe(true);
        for (const item of result) {
          expect(typeof item.created_at).toBe("string");
          expect(Array.isArray(item.share_passwords)).toBe(true);
          for (const pw of item.share_passwords) {
            expect(typeof pw.id).toBe("number");
            expect(typeof pw.created_at).toBe("string");
            expect(typeof pw.created_by_email).toBe("string");
            expect(typeof pw.is_active).toBe("boolean");
          }
        }
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsSharingList({
        project_id: getProjectId(),
        dashboard_id: 999999999,
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
        Core.dashboardsSharingList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          dashboard_id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsSharingPasswordsCreate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    const passwordCreateStub = (project_id: string, dashboard_id: number) => ({
      project_id,
      dashboard_id,
      created_at: new Date().toISOString(),
      access_token: null,
      share_passwords: [],
    });

    test("happy path - creates a sharing password for a dashboard", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-sharingpw-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsSharingPasswordsCreate(
          passwordCreateStub(getProjectId(), created.id),
        );
        expect(typeof result.created_at).toBe("string");
        expect(Array.isArray(result.share_passwords)).toBe(true);
        for (const pw of result.share_passwords) {
          expect(typeof pw.id).toBe("number");
          expect(typeof pw.created_at).toBe("string");
          expect(typeof pw.created_by_email).toBe("string");
          expect(typeof pw.is_active).toBe("boolean");
        }
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsSharingPasswordsCreate(
        passwordCreateStub(getProjectId(), 999999999),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsSharingPasswordsCreate(
        passwordCreateStub(`not-a-number-${testRunId}`, 1),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsSharingPasswordsCreate(
          passwordCreateStub(process.env.POSTHOG_FORBIDDEN_PROJECT_ID!, 1),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsSharingPasswordsDestroy", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    const passwordCreateStub = (project_id: string, dashboard_id: number) => ({
      project_id,
      dashboard_id,
      created_at: new Date().toISOString(),
      access_token: null,
      share_passwords: [],
    });

    test("happy path - deletes a sharing password from a dashboard", () => {
      let createdDashboardId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-sharingpwdel-${testRunId}`,
          ),
        );
        createdDashboardId = created.id;
        const sharing = yield* Core.dashboardsSharingPasswordsCreate(
          passwordCreateStub(getProjectId(), created.id),
        );
        expect(sharing.share_passwords.length).toBeGreaterThan(0);
        const passwordId = sharing.share_passwords[0]!.id;
        const result = yield* Core.dashboardsSharingPasswordsDestroy({
          project_id: getProjectId(),
          dashboard_id: created.id,
          password_id: String(passwordId),
        });
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdDashboardId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdDashboardId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsSharingPasswordsDestroy({
        project_id: getProjectId(),
        dashboard_id: 999999999,
        password_id: "999999999",
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
        Core.dashboardsSharingPasswordsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          dashboard_id: 1,
          password_id: "1",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsSharingRefreshCreate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    const sharingRefreshStub = (project_id: string, dashboard_id: number) => ({
      project_id,
      dashboard_id,
      created_at: new Date().toISOString(),
      access_token: null,
      share_passwords: [],
    });

    test("happy path - refreshes the sharing configuration access token", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-sharingrefresh-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsSharingRefreshCreate(
          sharingRefreshStub(getProjectId(), created.id),
        );
        expect(typeof result.created_at).toBe("string");
        expect(Array.isArray(result.share_passwords)).toBe(true);
        for (const pw of result.share_passwords) {
          expect(typeof pw.id).toBe("number");
          expect(typeof pw.created_at).toBe("string");
          expect(typeof pw.created_by_email).toBe("string");
          expect(typeof pw.is_active).toBe("boolean");
        }
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsSharingRefreshCreate(
        sharingRefreshStub(getProjectId(), 999999999),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsSharingRefreshCreate(
        sharingRefreshStub(`not-a-number-${testRunId}`, 1),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsSharingRefreshCreate(
          sharingRefreshStub(process.env.POSTHOG_FORBIDDEN_PROJECT_ID!, 1),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsSnapshotCreate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    const snapshotStub = (project_id: string, id: number) => ({
      project_id,
      id,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - snapshots a dashboard", () => {
      let createdId: number | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-snapshot-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsSnapshotCreate(
          snapshotStub(getProjectId(), created.id),
        );
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsSnapshotCreate(
        snapshotStub(getProjectId(), 999999999),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsSnapshotCreate(
        snapshotStub(`not-a-number-${testRunId}`, 1),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsSnapshotCreate(
          snapshotStub(process.env.POSTHOG_FORBIDDEN_PROJECT_ID!, 1),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsStreamTilesRetrieve", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test(
      "happy path - streams tiles for a dashboard",
      () => {
        let createdId: number | undefined;
        return Effect.gen(function* () {
          const created = yield* Core.dashboardsCreate(
            dashboardCreateInput(
              getProjectId(),
              `distilled-dash-streamtiles-${testRunId}`,
            ),
          );
          createdId = created.id;
          const result = yield* Core.dashboardsStreamTilesRetrieve({
            project_id: getProjectId(),
            id: created.id,
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Core.dashboardsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
      { timeout: 60_000 },
    );

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsStreamTilesRetrieve({
        project_id: getProjectId(),
        id: 999999999,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsStreamTilesRetrieve({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsStreamTilesRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardsUpdate", () => {
    const dashboardCreateInput = (project_id: string, name: string) => ({
      project_id,
      id: 0,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    const updateStub = (
      project_id: string,
      id: number,
      name: string | null,
    ) => ({
      project_id,
      id,
      name,
      created_at: "1970-01-01T00:00:00Z",
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      last_viewed_at: null,
      is_shared: false,
      creation_mode: {},
      filters: {},
      variables: null,
      effective_restriction_level: {},
      effective_privilege_level: {},
      user_access_level: null,
      access_control_version: "v2",
      persisted_filters: null,
      persisted_variables: null,
      team_id: 0,
      tiles: null,
    });

    test("happy path - updates a dashboard via PUT", () => {
      let createdId: number | undefined;
      const newName = `distilled-dash-update-renamed-${testRunId}`;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardsCreate(
          dashboardCreateInput(
            getProjectId(),
            `distilled-dash-update-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardsUpdate(
          updateStub(getProjectId(), created.id, newName),
        );
        expect(typeof result.id).toBe("number");
        expect(result.id).toBe(created.id);
        expect(result.name).toBe(newName);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent dashboard id", () =>
      Core.dashboardsUpdate(
        updateStub(getProjectId(), 999999999, `nope-${testRunId}`),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsUpdate(
        updateStub(`not-a-number-${testRunId}`, 1, `nope-${testRunId}`),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardsUpdate(
          updateStub(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            1,
            `nope-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardTemplatesCopyBetweenProjectsCreate", () => {
    // Cross-project copy of a team-scoped template requires a pre-existing
    // team-scoped template in a *different* project of the same organization.
    // The happy path is therefore gated on POSTHOG_SOURCE_TEMPLATE_ID, which
    // must point to a team-scoped template id in another project that the API
    // key has access to. The destination is the current `getProjectId()`.
    test.skipIf(!process.env.POSTHOG_SOURCE_TEMPLATE_ID)(
      "happy path - copies a team template into the current project",
      () =>
        Effect.gen(function* () {
          const result = yield* Core.dashboardTemplatesCopyBetweenProjectsCreate(
            {
              project_id: getProjectId(),
              source_template_id: process.env.POSTHOG_SOURCE_TEMPLATE_ID!,
            },
          );
          expect(typeof result.id).toBe("string");
          expect(result.id.length).toBeGreaterThan(0);
          expect(result.created_by).toBeDefined();
          expect(typeof result.created_by.id).toBe("number");
          expect(typeof result.created_by.uuid).toBe("string");
        }),
    );

    test("error - NotFound for non-existent source_template_id", () =>
      Core.dashboardTemplatesCopyBetweenProjectsCreate({
        project_id: getProjectId(),
        source_template_id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardTemplatesCopyBetweenProjectsCreate({
        project_id: `not-a-number-${testRunId}`,
        source_template_id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardTemplatesCopyBetweenProjectsCreate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          source_template_id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardTemplatesCreate", () => {
    // The schema reuses the response model as the request body. Server-set
    // fields (id, created_at, created_by, team_id) take placeholder values
    // that the API ignores/replaces.
    const templateStub = (project_id: string, template_name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      template_name,
      dashboard_description: "distilled test template",
      dashboard_filters: null,
      tags: null,
      tiles: [],
      variables: null,
      deleted: false,
      created_at: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      image_url: null,
      team_id: null,
      availability_contexts: null,
      is_featured: false,
    });

    test("happy path - creates a dashboard template", () => {
      let createdId: string | undefined;
      const templateName = `distilled-tpl-create-${testRunId}`;
      return Effect.gen(function* () {
        const result = yield* Core.dashboardTemplatesCreate(
          templateStub(getProjectId(), templateName),
        );
        createdId = result.id;
        expect(typeof result.id).toBe("string");
        expect(result.id.length).toBeGreaterThan(0);
        expect(result.template_name).toBe(templateName);
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.uuid).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardTemplatesDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.dashboardTemplatesCreate(
        templateStub("99999999999", `distilled-tpl-nf-${testRunId}`),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardTemplatesCreate(
        templateStub(
          `not-a-number-${testRunId}`,
          `distilled-tpl-br-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardTemplatesCreate(
          templateStub(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-tpl-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardTemplatesDestroy", () => {
    const templateStub = (project_id: string, template_name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      template_name,
      dashboard_description: "distilled test template",
      dashboard_filters: null,
      tags: null,
      tiles: [],
      variables: null,
      deleted: false,
      created_at: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      image_url: null,
      team_id: null,
      availability_contexts: null,
      is_featured: false,
    });

    test("happy path - deletes a dashboard template", () => {
      let createdId: string | undefined;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardTemplatesCreate(
          templateStub(getProjectId(), `distilled-tpl-destroy-${testRunId}`),
        );
        createdId = created.id;
        const result = yield* Core.dashboardTemplatesDestroy({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result).toBeUndefined();
        createdId = undefined;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardTemplatesDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent template id", () =>
      Core.dashboardTemplatesDestroy({
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
        Core.dashboardTemplatesDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardTemplatesJsonSchemaRetrieve", () => {
    test("happy path - retrieves the dashboard template JSON schema", () =>
      Effect.gen(function* () {
        const result = yield* Core.dashboardTemplatesJsonSchemaRetrieve({
          project_id: getProjectId(),
        });
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.dashboardTemplatesJsonSchemaRetrieve({
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
        Core.dashboardTemplatesJsonSchemaRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardTemplatesList", () => {
    test("happy path - lists dashboard templates with pagination", () =>
      Effect.gen(function* () {
        const result = yield* Core.dashboardTemplatesList({
          project_id: getProjectId(),
          limit: 5,
          offset: 0,
        });
        expect(typeof result.count).toBe("number");
        expect(Array.isArray(result.results)).toBe(true);
        for (const tpl of result.results) {
          expect(typeof tpl.id).toBe("string");
          expect(tpl.created_by).toBeDefined();
          expect(typeof tpl.created_by.id).toBe("number");
          expect(typeof tpl.created_by.uuid).toBe("string");
        }
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.dashboardTemplatesList({
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
      Core.dashboardTemplatesList({
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardTemplatesList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardTemplatesPartialUpdate", () => {
    const templateStub = (project_id: string, template_name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      template_name,
      dashboard_description: "distilled test template",
      dashboard_filters: null,
      tags: null,
      tiles: [],
      variables: null,
      deleted: false,
      created_at: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      image_url: null,
      team_id: null,
      availability_contexts: null,
      is_featured: false,
    });

    test("happy path - patches a dashboard template's name", () => {
      let createdId: string | undefined;
      const newName = `distilled-tpl-patched-${testRunId}`;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardTemplatesCreate(
          templateStub(getProjectId(), `distilled-tpl-patch-${testRunId}`),
        );
        createdId = created.id;
        const result = yield* Core.dashboardTemplatesPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          template_name: newName,
        });
        expect(result.id).toBe(created.id);
        expect(result.template_name).toBe(newName);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardTemplatesDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent template id", () =>
      Core.dashboardTemplatesPartialUpdate({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
        template_name: `nope-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardTemplatesPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
        template_name: `nope-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardTemplatesPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
          template_name: `nope-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardTemplatesRetrieve", () => {
    const templateStub = (project_id: string, template_name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      template_name,
      dashboard_description: "distilled test template",
      dashboard_filters: null,
      tags: null,
      tiles: [],
      variables: null,
      deleted: false,
      created_at: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      image_url: null,
      team_id: null,
      availability_contexts: null,
      is_featured: false,
    });

    test("happy path - retrieves a dashboard template by id", () => {
      let createdId: string | undefined;
      const templateName = `distilled-tpl-retrieve-${testRunId}`;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardTemplatesCreate(
          templateStub(getProjectId(), templateName),
        );
        createdId = created.id;
        const result = yield* Core.dashboardTemplatesRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result.id).toBe(created.id);
        expect(result.template_name).toBe(templateName);
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.uuid).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardTemplatesDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent template id", () =>
      Core.dashboardTemplatesRetrieve({
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
        Core.dashboardTemplatesRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("dashboardTemplatesUpdate", () => {
    const templateCreateStub = (project_id: string, template_name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      template_name,
      dashboard_description: "distilled test template",
      dashboard_filters: null,
      tags: null,
      tiles: [],
      variables: null,
      deleted: false,
      created_at: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      image_url: null,
      team_id: null,
      availability_contexts: null,
      is_featured: false,
    });

    const updateStub = (
      project_id: string,
      id: string,
      template_name: string,
    ) => ({
      project_id,
      id,
      template_name,
      dashboard_description: "distilled test template - updated",
      dashboard_filters: null,
      tags: null,
      tiles: [],
      variables: null,
      deleted: false,
      created_at: null,
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
      image_url: null,
      team_id: null,
      availability_contexts: null,
      is_featured: false,
    });

    test("happy path - PUT updates a dashboard template", () => {
      let createdId: string | undefined;
      const newName = `distilled-tpl-put-renamed-${testRunId}`;
      return Effect.gen(function* () {
        const created = yield* Core.dashboardTemplatesCreate(
          templateCreateStub(
            getProjectId(),
            `distilled-tpl-put-${testRunId}`,
          ),
        );
        createdId = created.id;
        const result = yield* Core.dashboardTemplatesUpdate(
          updateStub(getProjectId(), created.id, newName),
        );
        expect(result.id).toBe(created.id);
        expect(result.template_name).toBe(newName);
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.uuid).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.dashboardTemplatesDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent template id", () =>
      Core.dashboardTemplatesUpdate(
        updateStub(
          getProjectId(),
          "00000000-0000-0000-0000-000000000000",
          `nope-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardTemplatesUpdate(
        updateStub(
          `not-a-number-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
          `nope-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.dashboardTemplatesUpdate(
          updateStub(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            "00000000-0000-0000-0000-000000000000",
            `nope-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("domainsCreate", () => {
    // Domains are scoped to an organization, not a project. The happy path
    // needs an organization id with admin scope (POSTHOG_ORGANIZATION_ID).
    // Server-set fields (id, is_verified, verified_at, verification_challenge,
    // has_saml, has_scim, scim_base_url, scim_bearer_token) take placeholder
    // values that the API ignores/replaces.
    const domainStub = (organization_id: string, domain: string) => ({
      organization_id,
      id: "00000000-0000-0000-0000-000000000000",
      domain,
      is_verified: false,
      verified_at: null,
      verification_challenge: "",
      has_saml: false,
      has_scim: false,
      scim_base_url: null,
      scim_bearer_token: null,
    });

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "happy path - creates an organization domain",
      () => {
        let createdId: string | undefined;
        const orgId = process.env.POSTHOG_ORGANIZATION_ID!;
        const domain = `distilled-${testRunId}.example.com`;
        return Effect.gen(function* () {
          const result = yield* Core.domainsCreate(domainStub(orgId, domain));
          createdId = result.id;
          expect(typeof result.id).toBe("string");
          expect(result.id.length).toBeGreaterThan(0);
          expect(result.domain).toBe(domain);
          expect(typeof result.is_verified).toBe("boolean");
          expect(typeof result.verification_challenge).toBe("string");
          expect(typeof result.has_saml).toBe("boolean");
          expect(typeof result.has_scim).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Core.domainsDestroy({
                    organization_id: orgId,
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent organization_id", () =>
      Core.domainsCreate(
        domainStub(
          "00000000-0000-0000-0000-000000000000",
          `distilled-nf-${testRunId}.example.com`,
        ),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for invalid organization_id format", () =>
      Core.domainsCreate(
        domainStub(
          `not-a-uuid-${testRunId}`,
          `distilled-br-${testRunId}.example.com`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID)(
      "error - Forbidden when organization is outside key scope",
      () =>
        Core.domainsCreate(
          domainStub(
            process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID!,
            `distilled-fb-${testRunId}.example.com`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("domainsDestroy", () => {
    const domainStub = (organization_id: string, domain: string) => ({
      organization_id,
      id: "00000000-0000-0000-0000-000000000000",
      domain,
      is_verified: false,
      verified_at: null,
      verification_challenge: "",
      has_saml: false,
      has_scim: false,
      scim_base_url: null,
      scim_bearer_token: null,
    });

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "happy path - deletes an organization domain",
      () => {
        let createdId: string | undefined;
        const orgId = process.env.POSTHOG_ORGANIZATION_ID!;
        const domain = `distilled-destroy-${testRunId}.example.com`;
        return Effect.gen(function* () {
          const created = yield* Core.domainsCreate(domainStub(orgId, domain));
          createdId = created.id;
          const result = yield* Core.domainsDestroy({
            organization_id: orgId,
            id: created.id,
          });
          expect(result).toBeUndefined();
          createdId = undefined;
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Core.domainsDestroy({
                    organization_id: orgId,
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "error - NotFound for non-existent domain id",
      () =>
        Core.domainsDestroy({
          organization_id: process.env.POSTHOG_ORGANIZATION_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.tap((e) =>
            Effect.sync(() => {
              expect(e._tag, `run ${testRunId}`).toBe("NotFound");
            }),
          ),
        ),
    );

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID)(
      "error - Forbidden when organization is outside key scope",
      () =>
        Core.domainsDestroy({
          organization_id: process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("domainsList", () => {
    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "happy path - lists organization domains with pagination",
      () =>
        Effect.gen(function* () {
          const result = yield* Core.domainsList({
            organization_id: process.env.POSTHOG_ORGANIZATION_ID!,
            limit: 5,
            offset: 0,
          });
          expect(typeof result.count).toBe("number");
          expect(Array.isArray(result.results)).toBe(true);
          for (const d of result.results) {
            expect(typeof d.id).toBe("string");
            expect(typeof d.domain).toBe("string");
            expect(typeof d.is_verified).toBe("boolean");
            expect(typeof d.verification_challenge).toBe("string");
            expect(typeof d.has_saml).toBe("boolean");
            expect(typeof d.has_scim).toBe("boolean");
          }
        }),
    );

    test("error - NotFound for non-existent organization_id", () =>
      Core.domainsList({
        organization_id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for invalid organization_id format", () =>
      Core.domainsList({
        organization_id: `not-a-uuid-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID)(
      "error - Forbidden when organization is outside key scope",
      () =>
        Core.domainsList({
          organization_id: process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("domainsPartialUpdate", () => {
    const domainStub = (organization_id: string, domain: string) => ({
      organization_id,
      id: "00000000-0000-0000-0000-000000000000",
      domain,
      is_verified: false,
      verified_at: null,
      verification_challenge: "",
      has_saml: false,
      has_scim: false,
      scim_base_url: null,
      scim_bearer_token: null,
    });

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "happy path - patches an organization domain",
      () => {
        let createdId: string | undefined;
        const orgId = process.env.POSTHOG_ORGANIZATION_ID!;
        const domain = `distilled-patch-${testRunId}.example.com`;
        return Effect.gen(function* () {
          const created = yield* Core.domainsCreate(domainStub(orgId, domain));
          createdId = created.id;
          const result = yield* Core.domainsPartialUpdate({
            organization_id: orgId,
            id: created.id,
            jit_provisioning_enabled: false,
          });
          expect(result.id).toBe(created.id);
          expect(result.domain).toBe(domain);
          expect(typeof result.is_verified).toBe("boolean");
          expect(typeof result.has_saml).toBe("boolean");
          expect(typeof result.has_scim).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Core.domainsDestroy({
                    organization_id: orgId,
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "error - NotFound for non-existent domain id",
      () =>
        Core.domainsPartialUpdate({
          organization_id: process.env.POSTHOG_ORGANIZATION_ID!,
          id: "00000000-0000-0000-0000-000000000000",
          jit_provisioning_enabled: false,
        }).pipe(
          Effect.flip,
          Effect.tap((e) =>
            Effect.sync(() => {
              expect(e._tag, `run ${testRunId}`).toBe("NotFound");
            }),
          ),
        ),
    );

    test("error - BadRequest for invalid organization_id format", () =>
      Core.domainsPartialUpdate({
        organization_id: `not-a-uuid-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
        jit_provisioning_enabled: false,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID)(
      "error - Forbidden when organization is outside key scope",
      () =>
        Core.domainsPartialUpdate({
          organization_id: process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID!,
          id: "00000000-0000-0000-0000-000000000000",
          jit_provisioning_enabled: false,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("domainsRetrieve", () => {
    const domainStub = (organization_id: string, domain: string) => ({
      organization_id,
      id: "00000000-0000-0000-0000-000000000000",
      domain,
      is_verified: false,
      verified_at: null,
      verification_challenge: "",
      has_saml: false,
      has_scim: false,
      scim_base_url: null,
      scim_bearer_token: null,
    });

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "happy path - retrieves an organization domain by id",
      () => {
        let createdId: string | undefined;
        const orgId = process.env.POSTHOG_ORGANIZATION_ID!;
        const domain = `distilled-retrieve-${testRunId}.example.com`;
        return Effect.gen(function* () {
          const created = yield* Core.domainsCreate(domainStub(orgId, domain));
          createdId = created.id;
          const result = yield* Core.domainsRetrieve({
            organization_id: orgId,
            id: created.id,
          });
          expect(result.id).toBe(created.id);
          expect(result.domain).toBe(domain);
          expect(typeof result.is_verified).toBe("boolean");
          expect(typeof result.verification_challenge).toBe("string");
          expect(typeof result.has_saml).toBe("boolean");
          expect(typeof result.has_scim).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Core.domainsDestroy({
                    organization_id: orgId,
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "error - NotFound for non-existent domain id",
      () =>
        Core.domainsRetrieve({
          organization_id: process.env.POSTHOG_ORGANIZATION_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.tap((e) =>
            Effect.sync(() => {
              expect(e._tag, `run ${testRunId}`).toBe("NotFound");
            }),
          ),
        ),
    );

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID)(
      "error - Forbidden when organization is outside key scope",
      () =>
        Core.domainsRetrieve({
          organization_id: process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("domainsScimLogsRetrieve", () => {
    // SCIM logs only exist for domains with SCIM enabled. Happy path is gated
    // on POSTHOG_SCIM_DOMAIN_ID + POSTHOG_ORGANIZATION_ID, which together
    // identify a domain in the test org that has SCIM provisioning enabled.
    test.skipIf(
      !process.env.POSTHOG_ORGANIZATION_ID ||
        !process.env.POSTHOG_SCIM_DOMAIN_ID,
    )("happy path - retrieves the SCIM logs for a domain", () =>
      Effect.gen(function* () {
        const result = yield* Core.domainsScimLogsRetrieve({
          organization_id: process.env.POSTHOG_ORGANIZATION_ID!,
          id: process.env.POSTHOG_SCIM_DOMAIN_ID!,
        });
        expect(result).toBeUndefined();
      }),
    );

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "error - NotFound for non-existent domain id",
      () =>
        Core.domainsScimLogsRetrieve({
          organization_id: process.env.POSTHOG_ORGANIZATION_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.tap((e) =>
            Effect.sync(() => {
              expect(e._tag, `run ${testRunId}`).toBe("NotFound");
            }),
          ),
        ),
    );

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID)(
      "error - Forbidden when organization is outside key scope",
      () =>
        Core.domainsScimLogsRetrieve({
          organization_id: process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("domainsScimTokenCreate", () => {
    // Regenerates the SCIM bearer token for a domain. Body schema reuses the
    // domain response model; server-set fields take placeholder values that
    // the API ignores. Happy path is gated on POSTHOG_ORGANIZATION_ID +
    // POSTHOG_SCIM_DOMAIN_ID — regenerating breaks any existing SCIM
    // integration so requires an explicit test domain to be opted in.
    const tokenStub = (organization_id: string, id: string) => ({
      organization_id,
      id,
      domain: "placeholder.example.com",
      is_verified: false,
      verified_at: null,
      verification_challenge: "",
      has_saml: false,
      has_scim: true,
      scim_base_url: null,
      scim_bearer_token: null,
    });

    test.skipIf(
      !process.env.POSTHOG_ORGANIZATION_ID ||
        !process.env.POSTHOG_SCIM_DOMAIN_ID,
    )("happy path - regenerates the SCIM bearer token for a domain", () =>
      Effect.gen(function* () {
        const result = yield* Core.domainsScimTokenCreate(
          tokenStub(
            process.env.POSTHOG_ORGANIZATION_ID!,
            process.env.POSTHOG_SCIM_DOMAIN_ID!,
          ),
        );
        expect(result).toBeUndefined();
      }),
    );

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "error - NotFound for non-existent domain id",
      () =>
        Core.domainsScimTokenCreate(
          tokenStub(
            process.env.POSTHOG_ORGANIZATION_ID!,
            "00000000-0000-0000-0000-000000000000",
          ),
        ).pipe(
          Effect.flip,
          Effect.tap((e) =>
            Effect.sync(() => {
              expect(e._tag, `run ${testRunId}`).toBe("NotFound");
            }),
          ),
        ),
    );

    test("error - BadRequest for invalid organization_id format", () =>
      Core.domainsScimTokenCreate(
        tokenStub(
          `not-a-uuid-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID)(
      "error - Forbidden when organization is outside key scope",
      () =>
        Core.domainsScimTokenCreate(
          tokenStub(
            process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID!,
            "00000000-0000-0000-0000-000000000000",
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("domainsUpdate", () => {
    // PUT replaces the full domain resource. Body schema reuses the response
    // model; server-managed fields (id, is_verified, verified_at,
    // verification_challenge, scim_base_url, scim_bearer_token) take
    // placeholder values that the API ignores. Happy path is gated on
    // POSTHOG_ORGANIZATION_ID — we create a domain via domainsCreate, update
    // it via domainsUpdate, then clean up via domainsDestroy.
    const domainStub = (organization_id: string, domain: string) => ({
      organization_id,
      id: "00000000-0000-0000-0000-000000000000",
      domain,
      is_verified: false,
      verified_at: null,
      verification_challenge: "",
      has_saml: false,
      has_scim: false,
      scim_base_url: null,
      scim_bearer_token: null,
    });

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "happy path - replaces an organization domain",
      () => {
        let createdId: string | undefined;
        const orgId = process.env.POSTHOG_ORGANIZATION_ID!;
        const domain = `distilled-update-${testRunId}.example.com`;
        const renamed = `distilled-update-renamed-${testRunId}.example.com`;
        return Effect.gen(function* () {
          const created = yield* Core.domainsCreate(domainStub(orgId, domain));
          createdId = created.id;
          const result = yield* Core.domainsUpdate({
            ...domainStub(orgId, renamed),
            id: created.id,
          });
          expect(result.id).toBe(created.id);
          expect(result.domain).toBe(renamed);
          expect(typeof result.is_verified).toBe("boolean");
          expect(typeof result.verification_challenge).toBe("string");
          expect(typeof result.has_saml).toBe("boolean");
          expect(typeof result.has_scim).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Core.domainsDestroy({
                    organization_id: orgId,
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "error - NotFound for non-existent domain id",
      () =>
        Core.domainsUpdate({
          ...domainStub(
            process.env.POSTHOG_ORGANIZATION_ID!,
            `distilled-nf-${testRunId}.example.com`,
          ),
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.tap((e) =>
            Effect.sync(() => {
              expect(e._tag, `run ${testRunId}`).toBe("NotFound");
            }),
          ),
        ),
    );

    test("error - BadRequest for invalid organization_id format", () =>
      Core.domainsUpdate({
        ...domainStub(
          `not-a-uuid-${testRunId}`,
          `distilled-br-${testRunId}.example.com`,
        ),
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID)(
      "error - Forbidden when organization is outside key scope",
      () =>
        Core.domainsUpdate({
          ...domainStub(
            process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID!,
            `distilled-fb-${testRunId}.example.com`,
          ),
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("domainsVerifyCreate", () => {
    // POST /api/organizations/{organization_id}/domains/{id}/verify/ triggers
    // a DNS verification check. The body schema reuses the domain response
    // model; server-managed fields take placeholder values that the API
    // ignores. Output is Schema.Void — the call returns undefined regardless
    // of whether the DNS check actually succeeded. Happy path is gated on
    // POSTHOG_ORGANIZATION_ID; we create a domain via domainsCreate, attempt
    // verification, then clean up via domainsDestroy.
    const domainStub = (organization_id: string, domain: string) => ({
      organization_id,
      id: "00000000-0000-0000-0000-000000000000",
      domain,
      is_verified: false,
      verified_at: null,
      verification_challenge: "",
      has_saml: false,
      has_scim: false,
      scim_base_url: null,
      scim_bearer_token: null,
    });

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "happy path - triggers verification for an organization domain",
      () => {
        let createdId: string | undefined;
        const orgId = process.env.POSTHOG_ORGANIZATION_ID!;
        const domain = `distilled-verify-${testRunId}.example.com`;
        return Effect.gen(function* () {
          const created = yield* Core.domainsCreate(domainStub(orgId, domain));
          createdId = created.id;
          const result = yield* Core.domainsVerifyCreate({
            ...domainStub(orgId, domain),
            id: created.id,
          });
          expect(result).toBeUndefined();
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Core.domainsDestroy({
                    organization_id: orgId,
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test.skipIf(!process.env.POSTHOG_ORGANIZATION_ID)(
      "error - NotFound for non-existent domain id",
      () =>
        Core.domainsVerifyCreate({
          ...domainStub(
            process.env.POSTHOG_ORGANIZATION_ID!,
            `distilled-nf-${testRunId}.example.com`,
          ),
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.tap((e) =>
            Effect.sync(() => {
              expect(e._tag, `run ${testRunId}`).toBe("NotFound");
            }),
          ),
        ),
    );

    test("error - BadRequest for invalid organization_id format", () =>
      Core.domainsVerifyCreate({
        ...domainStub(
          `not-a-uuid-${testRunId}`,
          `distilled-br-${testRunId}.example.com`,
        ),
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID)(
      "error - Forbidden when organization is outside key scope",
      () =>
        Core.domainsVerifyCreate({
          ...domainStub(
            process.env.POSTHOG_FORBIDDEN_ORGANIZATION_ID!,
            `distilled-fb-${testRunId}.example.com`,
          ),
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsBulkUpdateTagsCreate", () => {
    // POST /api/projects/{project_id}/event_definitions/bulk_update_tags/
    // Bulk-applies a tag operation across multiple event definitions.
    // The generated input schema models `action` as Schema.Struct({}) (the
    // OpenAPI definition is loose); the server in practice tolerates this
    // for an empty `ids` list and returns empty updated/skipped arrays.
    test("happy path - returns updated and skipped arrays for empty id list", () =>
      Effect.gen(function* () {
        const result = yield* Core.eventDefinitionsBulkUpdateTagsCreate({
          project_id: getProjectId(),
          ids: [],
          action: {},
          tags: [`distilled-posthog-tag-${testRunId}`],
        });

        expect(result).toBeDefined();
        expect(Array.isArray(result.updated)).toBe(true);
        expect(Array.isArray(result.skipped)).toBe(true);
        // With no ids supplied, the server cannot update anything.
        expect(result.updated).toHaveLength(0);
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.eventDefinitionsBulkUpdateTagsCreate({
        project_id: "99999999999",
        ids: [1],
        action: {},
        tags: [`distilled-posthog-tag-${testRunId}`],
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.eventDefinitionsBulkUpdateTagsCreate({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
        ids: [],
        action: {},
        tags: [`distilled-posthog-tag-${testRunId}`],
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsBulkUpdateTagsCreate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          ids: [],
          action: {},
          tags: [`distilled-posthog-tag-${testRunId}`],
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsByNameRetrieve", () => {
    // GET /api/projects/{project_id}/event_definitions/by_name/?name=...
    // Looks up an event definition by exact name. Event definitions are
    // server-managed (created when the API receives an event with a new
    // name), so the happy path discovers an existing definition via the
    // list endpoint and then retrieves it by name. If the test project has
    // no event definitions yet, the assertion still validates the call
    // succeeded against the schema decoder.
    test("happy path - retrieves an existing event definition by exact name", () =>
      Effect.gen(function* () {
        const list = yield* Core.eventDefinitionsList({
          project_id: getProjectId(),
          limit: 1,
        });
        if (list.results.length === 0) {
          // Nothing to look up; assert the list shape and exit.
          expect(list.count).toBe(0);
          return;
        }
        const target = list.results[0]!;
        const result = yield* Core.eventDefinitionsByNameRetrieve({
          project_id: getProjectId(),
          name: target.name,
        });

        expect(result).toBeDefined();
        expect(typeof result.id).toBe("string");
        expect(result.name).toBe(target.name);
        expect(typeof result.last_updated_at).toBe("string");
        expect(typeof result.last_calculated_at).toBe("string");
        expect(typeof result.is_action).toBe("boolean");
        expect(typeof result.is_calculating).toBe("boolean");
        expect(typeof result.action_id).toBe("number");
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.email).toBe("string");
      }));

    test("error - NotFound for non-existent event name", () =>
      Core.eventDefinitionsByNameRetrieve({
        project_id: getProjectId(),
        name: `distilled-posthog-nonexistent-event-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.eventDefinitionsByNameRetrieve({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
        name: `distilled-posthog-event-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsByNameRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          name: `distilled-posthog-event-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsCreate", () => {
    // POST /api/projects/{project_id}/event_definitions/
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (id, created_at, updated_at, last_*,
    // created_by, updated_by, verified_by, action_id, …). PostHog ignores
    // client-supplied values for these on the server side; we pass
    // placeholder stubs so the schema decoder accepts the request.
    const stubBody = (project_id: string, name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      name,
      created_at: null,
      updated_at: new Date().toISOString(),
      updated_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      last_seen_at: null,
      last_updated_at: new Date().toISOString(),
      verified_at: null,
      verified_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_action: false,
      action_id: 0,
      is_calculating: false,
      last_calculated_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      media_preview_urls: [],
    });

    test("happy path - creates an event definition and returns its id", () => {
      const eventName = `distilled-posthog-event-${testRunId}`;
      let createdId: string | undefined;

      return Effect.gen(function* () {
        const result = yield* Core.eventDefinitionsCreate(
          stubBody(getProjectId(), eventName),
        );

        expect(result).toBeDefined();
        expect(typeof result.id).toBe("string");
        expect(result.id.length).toBeGreaterThan(0);
        expect(result.name).toBe(eventName);
        expect(typeof result.last_updated_at).toBe("string");
        expect(typeof result.last_calculated_at).toBe("string");
        expect(typeof result.is_action).toBe("boolean");
        expect(typeof result.is_calculating).toBe("boolean");
        expect(typeof result.action_id).toBe("number");
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.email).toBe("string");
        expect(Array.isArray(result.media_preview_urls)).toBe(true);

        createdId = result.id;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.eventDefinitionsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.eventDefinitionsCreate({
        ...stubBody("99999999999", `distilled-posthog-event-nf-${testRunId}`),
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.eventDefinitionsCreate({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        ...stubBody(
          `not-a-number-${testRunId}`,
          `distilled-posthog-event-br-${testRunId}`,
        ),
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsCreate({
          ...stubBody(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-posthog-event-fb-${testRunId}`,
          ),
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsDestroy", () => {
    // DELETE /api/projects/{project_id}/event_definitions/{id}/
    // Output is Schema.Void → resolves to undefined. The happy path
    // provisions a fresh event definition via eventDefinitionsCreate so we
    // have a UUID to delete; the create stub passes placeholder server-set
    // fields the API ignores.
    const createStub = (project_id: string, name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      name,
      created_at: null,
      updated_at: new Date().toISOString(),
      updated_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      last_seen_at: null,
      last_updated_at: new Date().toISOString(),
      verified_at: null,
      verified_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_action: false,
      action_id: 0,
      is_calculating: false,
      last_calculated_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      media_preview_urls: [],
    });

    test("happy path - deletes an existing event definition", () =>
      Effect.gen(function* () {
        // Arrange: create a definition we can destroy.
        const created = yield* Core.eventDefinitionsCreate(
          createStub(
            getProjectId(),
            `distilled-posthog-event-del-${testRunId}`,
          ),
        );
        expect(typeof created.id).toBe("string");
        expect(created.id.length).toBeGreaterThan(0);

        // Act: destroy it. Output schema is Schema.Void → undefined.
        const result = yield* Core.eventDefinitionsDestroy({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result).toBeUndefined();

        // Assert: a follow-up destroy now returns NotFound.
        const followUp = yield* Core.eventDefinitionsDestroy({
          project_id: getProjectId(),
          id: created.id,
        }).pipe(Effect.flip);
        expect(followUp._tag).toBe("NotFound");
      }));

    test("error - NotFound for non-existent event definition id", () =>
      Core.eventDefinitionsDestroy({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsGolangRetrieve", () => {
    // GET /api/projects/{project_id}/event_definitions/golang/
    // Returns generated Go type bindings for the project's events as a
    // text/plain stream. The generated output schema is Schema.Void, so
    // the call resolves to undefined regardless of the body content.
    test("happy path - retrieves the Go event definitions for the project", () =>
      Effect.gen(function* () {
        const result = yield* Core.eventDefinitionsGolangRetrieve({
          project_id: getProjectId(),
        });
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.eventDefinitionsGolangRetrieve({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsGolangRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsList", () => {
    // GET /api/projects/{project_id}/event_definitions/
    // Returns a paginated list (count/next/previous/results) of event
    // definitions tracked for the project. Server-managed; no setup required.
    test("happy path - returns a paginated list of event definitions", () =>
      Effect.gen(function* () {
        const result = yield* Core.eventDefinitionsList({
          project_id: getProjectId(),
          limit: 5,
        });

        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(result.count).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results.length).toBeLessThanOrEqual(5);

        for (const def of result.results) {
          expect(typeof def.id).toBe("string");
          expect(typeof def.name).toBe("string");
          expect(typeof def.updated_at).toBe("string");
          expect(typeof def.updated_by.id).toBe("number");
          expect(typeof def.updated_by.email).toBe("string");
        }
      }));

    test("happy path - respects pagination via offset", () =>
      Effect.gen(function* () {
        const page1 = yield* Core.eventDefinitionsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 0,
        });
        const page2 = yield* Core.eventDefinitionsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 1,
        });

        expect(page1.count).toBe(page2.count);
        if (page1.count >= 2) {
          expect(page1.results[0]?.id).not.toBe(page2.results[0]?.id);
        }
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.eventDefinitionsList({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.eventDefinitionsList({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsMetricsRetrieve", () => {
    // GET /api/projects/{project_id}/event_definitions/{id}/metrics/
    // Returns volume metrics for a single event definition. The output
    // schema is Schema.Void → resolves to undefined. The happy path
    // discovers an existing definition via the list endpoint; if the test
    // project has no definitions, the call cannot be exercised, so we
    // assert the list shape and exit instead.
    test("happy path - retrieves metrics for an existing event definition", () =>
      Effect.gen(function* () {
        const list = yield* Core.eventDefinitionsList({
          project_id: getProjectId(),
          limit: 1,
        });
        if (list.results.length === 0) {
          expect(list.count).toBe(0);
          return;
        }
        const target = list.results[0]!;
        const result = yield* Core.eventDefinitionsMetricsRetrieve({
          project_id: getProjectId(),
          id: target.id,
        });
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent event definition id", () =>
      Core.eventDefinitionsMetricsRetrieve({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsMetricsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsPartialUpdate", () => {
    // PATCH /api/projects/{project_id}/event_definitions/{id}/
    // All input fields except id and project_id are optional. The happy
    // path provisions a fresh event definition via eventDefinitionsCreate
    // so we have a known UUID to patch, then cleans up via
    // eventDefinitionsDestroy.
    const createStub = (project_id: string, name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      name,
      created_at: null,
      updated_at: new Date().toISOString(),
      updated_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      last_seen_at: null,
      last_updated_at: new Date().toISOString(),
      verified_at: null,
      verified_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_action: false,
      action_id: 0,
      is_calculating: false,
      last_calculated_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      media_preview_urls: [],
    });

    test("happy path - patches an event definition's description", () => {
      const eventName = `distilled-posthog-event-pu-${testRunId}`;
      let createdId: string | undefined;

      return Effect.gen(function* () {
        const created = yield* Core.eventDefinitionsCreate(
          createStub(getProjectId(), eventName),
        );
        createdId = created.id;

        const updated = yield* Core.eventDefinitionsPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          description: `patched at ${testRunId}`,
        });

        expect(updated.id).toBe(created.id);
        expect(updated.name).toBe(eventName);
        expect(updated.description).toBe(`patched at ${testRunId}`);
        expect(typeof updated.last_updated_at).toBe("string");
        expect(typeof updated.is_action).toBe("boolean");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.eventDefinitionsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent event definition id", () =>
      Core.eventDefinitionsPartialUpdate({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
        description: `patched-nf at ${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.eventDefinitionsPartialUpdate({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
        description: `patched-br at ${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
          description: `patched-fb at ${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsPythonRetrieve", () => {
    // GET /api/projects/{project_id}/event_definitions/python/
    // Returns generated Python type bindings for the project's events as a
    // text/plain stream. The generated output schema is Schema.Void, so
    // the call resolves to undefined regardless of the body content.
    test("happy path - retrieves the Python event definitions for the project", () =>
      Effect.gen(function* () {
        const result = yield* Core.eventDefinitionsPythonRetrieve({
          project_id: getProjectId(),
        });
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.eventDefinitionsPythonRetrieve({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsPythonRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsRetrieve", () => {
    // GET /api/projects/{project_id}/event_definitions/{id}/
    // Retrieves a single event definition by UUID. The happy path
    // discovers an existing definition via the list endpoint; if the test
    // project has no definitions, the assertion validates list shape and
    // exits — there's no way to fabricate an event definition without
    // event ingestion.
    test("happy path - retrieves an existing event definition by id", () =>
      Effect.gen(function* () {
        const list = yield* Core.eventDefinitionsList({
          project_id: getProjectId(),
          limit: 1,
        });
        if (list.results.length === 0) {
          expect(list.count).toBe(0);
          return;
        }
        const target = list.results[0]!;
        const result = yield* Core.eventDefinitionsRetrieve({
          project_id: getProjectId(),
          id: target.id,
        });

        expect(result.id).toBe(target.id);
        expect(result.name).toBe(target.name);
        expect(typeof result.last_updated_at).toBe("string");
        expect(typeof result.last_calculated_at).toBe("string");
        expect(typeof result.is_action).toBe("boolean");
        expect(typeof result.is_calculating).toBe("boolean");
        expect(typeof result.action_id).toBe("number");
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.email).toBe("string");
        expect(Array.isArray(result.media_preview_urls)).toBe(true);
      }));

    test("error - NotFound for non-existent event definition id", () =>
      Core.eventDefinitionsRetrieve({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsTypescriptRetrieve", () => {
    // GET /api/projects/{project_id}/event_definitions/typescript/
    // Returns generated TypeScript type bindings for the project's events
    // as a text/plain stream. The generated output schema is Schema.Void,
    // so the call resolves to undefined regardless of the body content.
    test("happy path - retrieves the TypeScript event definitions for the project", () =>
      Effect.gen(function* () {
        const result = yield* Core.eventDefinitionsTypescriptRetrieve({
          project_id: getProjectId(),
        });
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.eventDefinitionsTypescriptRetrieve({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsTypescriptRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("eventDefinitionsUpdate", () => {
    // PUT /api/projects/{project_id}/event_definitions/{id}/
    // Replaces an event definition. The generated input schema reuses the
    // response model and requires every server-set field — for a clean
    // happy path we pass back the values returned by eventDefinitionsCreate
    // so the schema validates and the server has consistent data.
    const createStub = (project_id: string, name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      name,
      created_at: null,
      updated_at: new Date().toISOString(),
      updated_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      last_seen_at: null,
      last_updated_at: new Date().toISOString(),
      verified_at: null,
      verified_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_action: false,
      action_id: 0,
      is_calculating: false,
      last_calculated_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      media_preview_urls: [],
    });

    // Standalone stub for error tests where we don't have a created
    // resource to copy from.
    const updateStub = (project_id: string, id: string, name: string) => ({
      project_id,
      id,
      name,
      created_at: null,
      updated_at: new Date().toISOString(),
      updated_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      last_seen_at: null,
      last_updated_at: new Date().toISOString(),
      verified_at: null,
      verified_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_action: false,
      action_id: 0,
      is_calculating: false,
      last_calculated_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      media_preview_urls: [],
    });

    test("happy path - replaces an event definition's editable fields", () => {
      const initialName = `distilled-posthog-event-pu2-${testRunId}`;
      let createdId: string | undefined;

      return Effect.gen(function* () {
        const created = yield* Core.eventDefinitionsCreate(
          createStub(getProjectId(), initialName),
        );
        createdId = created.id;

        const updated = yield* Core.eventDefinitionsUpdate({
          project_id: getProjectId(),
          id: created.id,
          name: created.name,
          created_at: created.created_at,
          updated_at: created.updated_at,
          updated_by: {
            id: created.updated_by.id,
            uuid: created.updated_by.uuid,
            email: created.updated_by.email,
            hedgehog_config: created.updated_by.hedgehog_config,
          },
          last_seen_at: created.last_seen_at,
          last_updated_at: created.last_updated_at,
          verified_at: created.verified_at,
          verified_by: {
            id: created.verified_by.id,
            uuid: created.verified_by.uuid,
            email: created.verified_by.email,
            hedgehog_config: created.verified_by.hedgehog_config,
          },
          is_action: created.is_action,
          action_id: created.action_id,
          is_calculating: created.is_calculating,
          last_calculated_at: created.last_calculated_at,
          created_by: {
            id: created.created_by.id,
            uuid: created.created_by.uuid,
            email: created.created_by.email,
            hedgehog_config: created.created_by.hedgehog_config,
          },
          media_preview_urls: [...created.media_preview_urls],
          description: `replaced at ${testRunId}`,
        });

        expect(updated.id).toBe(created.id);
        expect(updated.name).toBe(initialName);
        expect(updated.description).toBe(`replaced at ${testRunId}`);
        expect(typeof updated.last_updated_at).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.eventDefinitionsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent event definition id", () =>
      Core.eventDefinitionsUpdate(
        updateStub(
          getProjectId(),
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-event-pu2-nf-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.eventDefinitionsUpdate(
        updateStub(
          // PostHog routes project_id through an integer DRF lookup; a
          // non-numeric value yields a 400 invalid_request / parse_error.
          `not-a-number-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-event-pu2-br-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.eventDefinitionsUpdate(
          updateStub(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            "00000000-0000-0000-0000-000000000000",
            `distilled-posthog-event-pu2-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("exportsContentRetrieve", () => {
    // GET /api/projects/{project_id}/exports/{id}/content/
    // Streams the raw export payload for an exported asset. The output
    // schema is Schema.Void → resolves to undefined regardless of the
    // body content. The happy path discovers an export with has_content
    // via the list endpoint; if none are present, the assertion validates
    // list shape and exits.
    test("happy path - retrieves the content of an existing export", () =>
      Effect.gen(function* () {
        const list = yield* Core.exportsList({
          project_id: getProjectId(),
          limit: 20,
        });
        const target = list.results.find((r) => r.has_content);
        if (target === undefined) {
          // Nothing to retrieve content for; assert list shape and exit.
          expect(typeof list.count).toBe("number");
          expect(Array.isArray(list.results)).toBe(true);
          return;
        }
        const result = yield* Core.exportsContentRetrieve({
          project_id: getProjectId(),
          id: target.id,
        });
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent export id", () =>
      Core.exportsContentRetrieve({
        project_id: getProjectId(),
        id: 999_999_999,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.exportsContentRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("exportsCreate", () => {
    // POST /api/projects/{project_id}/exports/
    // Creates an exported asset. PostHog requires the body to reference one
    // of dashboard / insight / export_context — without any subject the
    // server returns BadRequest. The generated input schema reuses the
    // response model, so server-managed fields (id, created_at, has_content,
    // filename, expires_after, exception) take placeholder values that the
    // API ignores.
    const stubBody = (
      project_id: string,
      patch: {
        dashboard?: number | null;
        insight?: number | null;
        export_context?: unknown;
      },
    ) => ({
      project_id,
      id: 0,
      dashboard: patch.dashboard ?? null,
      insight: patch.insight ?? null,
      export_format: "application/json" as const,
      created_at: new Date().toISOString(),
      has_content: false,
      export_context: patch.export_context ?? null,
      filename: `distilled-posthog-export-${testRunId}.json`,
      expires_after: null,
      exception: null,
    });

    test("happy path - creates an export of an existing dashboard or insight", () =>
      Effect.gen(function* () {
        // Discover a subject we can export. Prefer a dashboard, fall back
        // to an insight, then to a generic events export_context. Without
        // any subject the server returns 400.
        const dashboards = yield* Core.dashboardsList({
          project_id: getProjectId(),
          limit: 1,
        });
        const exportBody =
          dashboards.results.length > 0
            ? stubBody(getProjectId(), { dashboard: dashboards.results[0]!.id })
            : stubBody(getProjectId(), {
                export_context: {
                  source: { kind: "EventsQuery", select: ["*"] },
                },
              });

        const result = yield* Core.exportsCreate(exportBody);

        expect(result).toBeDefined();
        expect(typeof result.id).toBe("number");
        expect(result.id).toBeGreaterThan(0);
        expect(result.export_format).toBe("application/json");
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.has_content).toBe("boolean");
        expect(typeof result.filename).toBe("string");
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.exportsCreate(
        stubBody("99999999999", {
          export_context: {
            source: { kind: "EventsQuery", select: ["*"] },
          },
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.exportsCreate(
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        stubBody(`not-a-number-${testRunId}`, {
          export_context: {
            source: { kind: "EventsQuery", select: ["*"] },
          },
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.exportsCreate(
          stubBody(process.env.POSTHOG_FORBIDDEN_PROJECT_ID!, {
            export_context: {
              source: { kind: "EventsQuery", select: ["*"] },
            },
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("exportsList", () => {
    // GET /api/projects/{project_id}/exports/
    // Returns a paginated list of exported assets for the project. No
    // setup required — exports are server-managed.
    test("happy path - returns a paginated list of exports", () =>
      Effect.gen(function* () {
        const result = yield* Core.exportsList({
          project_id: getProjectId(),
          limit: 5,
        });

        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(result.count).toBeGreaterThanOrEqual(0);
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results.length).toBeLessThanOrEqual(5);

        for (const exp of result.results) {
          expect(typeof exp.id).toBe("number");
          expect(typeof exp.export_format).toBe("string");
          expect(typeof exp.created_at).toBe("string");
          expect(typeof exp.has_content).toBe("boolean");
          expect(typeof exp.filename).toBe("string");
        }
      }));

    test("happy path - respects pagination via offset", () =>
      Effect.gen(function* () {
        const page1 = yield* Core.exportsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 0,
        });
        const page2 = yield* Core.exportsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 1,
        });

        expect(page1.count).toBe(page2.count);
        if (page1.count >= 2) {
          expect(page1.results[0]?.id).not.toBe(page2.results[0]?.id);
        }
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.exportsList({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.exportsList({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.exportsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("exportsRetrieve", () => {
    // GET /api/projects/{project_id}/exports/{id}/
    // Retrieves a single export by integer id. The happy path discovers an
    // existing export via the list endpoint; if the project has no exports,
    // the assertion validates list shape and exits.
    test("happy path - retrieves an existing export by id", () =>
      Effect.gen(function* () {
        const list = yield* Core.exportsList({
          project_id: getProjectId(),
          limit: 1,
        });
        if (list.results.length === 0) {
          expect(list.count).toBe(0);
          return;
        }
        const target = list.results[0]!;
        const result = yield* Core.exportsRetrieve({
          project_id: getProjectId(),
          id: target.id,
        });

        expect(result.id).toBe(target.id);
        expect(result.export_format).toBe(target.export_format);
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.has_content).toBe("boolean");
        expect(typeof result.filename).toBe("string");
      }));

    test("error - NotFound for non-existent export id", () =>
      Core.exportsRetrieve({
        project_id: getProjectId(),
        id: 999_999_999,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.exportsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemCountByPathCreate", () => {
    // POST /api/projects/{project_id}/file_system/count_by_path/
    // Returns the count of files under a given file-system folder. The
    // generated input schema reuses the FileSystemEntry response model and
    // demands many server-set fields (id, created_at, last_viewed_at, …);
    // we pass placeholder values that the API ignores. The output schema
    // is Schema.Void → resolves to undefined.
    const stubBody = (project_id: string, path: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - returns count for the project root path", () =>
      Effect.gen(function* () {
        const result = yield* Core.fileSystemCountByPathCreate(
          stubBody(getProjectId(), "/"),
        );
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.fileSystemCountByPathCreate(stubBody("99999999999", "/")).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.fileSystemCountByPathCreate(
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        stubBody(`not-a-number-${testRunId}`, "/"),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemCountByPathCreate(
          stubBody(process.env.POSTHOG_FORBIDDEN_PROJECT_ID!, "/"),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemCountCreate", () => {
    // POST /api/projects/{project_id}/file_system/{id}/count/
    // Returns the count of files under a specific file-system entry. The
    // generated input schema reuses the FileSystemEntry response model and
    // demands many server-set fields (path, depth, created_at, …); we pass
    // placeholder values that the API ignores. The output schema is
    // Schema.Void → resolves to undefined. The happy path discovers an
    // existing entry via fileSystemList; if the project has none, the
    // assertion validates list shape and exits.
    const stubBody = (project_id: string, id: string) => ({
      project_id,
      id,
      path: "/",
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - returns count for an existing file-system entry", () =>
      Effect.gen(function* () {
        const list = yield* Core.fileSystemList({
          project_id: getProjectId(),
          limit: 1,
        });
        if (list.results.length === 0) {
          expect(list.count).toBe(0);
          return;
        }
        const target = list.results[0]!;
        const result = yield* Core.fileSystemCountCreate(
          stubBody(getProjectId(), target.id),
        );
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent file-system id", () =>
      Core.fileSystemCountCreate(
        stubBody(getProjectId(), "00000000-0000-0000-0000-000000000000"),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.fileSystemCountCreate(
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        stubBody(
          `not-a-number-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemCountCreate(
          stubBody(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            "00000000-0000-0000-0000-000000000000",
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemCreate", () => {
    // POST /api/projects/{project_id}/file_system/
    // Creates a new file-system entry. The generated input schema reuses
    // the FileSystemEntry response model, so server-managed fields (id,
    // created_at) take placeholder values that the API ignores. Cleanup
    // via fileSystemDestroy.
    const stubBody = (project_id: string, path: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - creates a file-system entry and returns its id", () => {
      const path = `distilled-posthog-fs-${testRunId}`;
      let createdId: string | undefined;

      return Effect.gen(function* () {
        const result = yield* Core.fileSystemCreate(
          stubBody(getProjectId(), path),
        );

        expect(result).toBeDefined();
        expect(typeof result.id).toBe("string");
        expect(result.id.length).toBeGreaterThan(0);
        expect(result.path).toBe(path);
        expect(typeof result.created_at).toBe("string");

        createdId = result.id;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.fileSystemDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Core.fileSystemCreate(
        stubBody("99999999999", `distilled-posthog-fs-nf-${testRunId}`),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.fileSystemCreate(
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        stubBody(
          `not-a-number-${testRunId}`,
          `distilled-posthog-fs-br-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemCreate(
          stubBody(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-posthog-fs-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemDestroy", () => {
    // DELETE /api/projects/{project_id}/file_system/{id}/
    // Output is Schema.Void → resolves to undefined. The happy path
    // provisions a fresh file-system entry via fileSystemCreate so we have
    // a known UUID to delete.
    const createStub = (project_id: string, path: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - deletes an existing file-system entry", () =>
      Effect.gen(function* () {
        const created = yield* Core.fileSystemCreate(
          createStub(
            getProjectId(),
            `distilled-posthog-fs-del-${testRunId}`,
          ),
        );
        expect(typeof created.id).toBe("string");
        expect(created.id.length).toBeGreaterThan(0);

        const result = yield* Core.fileSystemDestroy({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result).toBeUndefined();

        // A follow-up destroy now returns NotFound.
        const followUp = yield* Core.fileSystemDestroy({
          project_id: getProjectId(),
          id: created.id,
        }).pipe(Effect.flip);
        expect(followUp._tag).toBe("NotFound");
      }));

    test("error - NotFound for non-existent file-system id", () =>
      Core.fileSystemDestroy({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemLinkCreate", () => {
    // POST /api/projects/{project_id}/file_system/{id}/link/
    // Creates a link from an existing file-system entry to a new path.
    // The generated input schema reuses the FileSystemEntry response model,
    // so server-managed fields (depth, created_at, last_viewed_at) accept
    // placeholder values. The output schema is Schema.Void → undefined.
    // The happy path discovers an existing entry via fileSystemList and
    // links it to a fresh testRunId-scoped path; if the project has no
    // entries, the assertion validates list shape and exits.
    const stubBody = (project_id: string, id: string, path: string) => ({
      project_id,
      id,
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - links an existing file-system entry to a new path", () =>
      Effect.gen(function* () {
        const list = yield* Core.fileSystemList({
          project_id: getProjectId(),
          limit: 1,
        });
        if (list.results.length === 0) {
          expect(list.count).toBe(0);
          return;
        }
        const target = list.results[0]!;
        const result = yield* Core.fileSystemLinkCreate(
          stubBody(
            getProjectId(),
            target.id,
            `distilled-posthog-fs-link-${testRunId}`,
          ),
        );
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent file-system id", () =>
      Core.fileSystemLinkCreate(
        stubBody(
          getProjectId(),
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-fs-link-nf-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.fileSystemLinkCreate(
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        stubBody(
          `not-a-number-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-fs-link-br-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemLinkCreate(
          stubBody(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            "00000000-0000-0000-0000-000000000000",
            `distilled-posthog-fs-link-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemLogViewCreate", () => {
    // POST /api/projects/{project_id}/file_system/log_view/
    // Records a "view" of a file-system entry. The generated input schema
    // reuses the FileSystemEntry response model, so server-managed fields
    // (path, depth, created_at, last_viewed_at) accept placeholder values.
    // The output schema is Schema.Void → undefined. The happy path
    // discovers an existing entry via fileSystemList and logs a view; if
    // the project has no entries, the assertion validates list shape and
    // exits.
    const stubBody = (project_id: string, id: string) => ({
      project_id,
      id,
      path: "/",
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - logs a view for an existing file-system entry", () =>
      Effect.gen(function* () {
        const list = yield* Core.fileSystemList({
          project_id: getProjectId(),
          limit: 1,
        });
        if (list.results.length === 0) {
          expect(list.count).toBe(0);
          return;
        }
        const target = list.results[0]!;
        const result = yield* Core.fileSystemLogViewCreate(
          stubBody(getProjectId(), target.id),
        );
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent file-system id", () =>
      Core.fileSystemLogViewCreate(
        stubBody(getProjectId(), "00000000-0000-0000-0000-000000000000"),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.fileSystemLogViewCreate(
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        stubBody(
          `not-a-number-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemLogViewCreate(
          stubBody(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            "00000000-0000-0000-0000-000000000000",
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemLogViewRetrieve", () => {
    // GET /api/projects/{project_id}/file_system/log_view/
    // Retrieves the recently-viewed log for the project. Input only takes
    // project_id; output is Schema.Void → resolves to undefined.

    test("happy path - returns undefined for the active project", () =>
      Effect.gen(function* () {
        const result = yield* Core.fileSystemLogViewRetrieve({
          project_id: getProjectId(),
        });
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.fileSystemLogViewRetrieve({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemLogViewRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemMoveCreate", () => {
    // POST /api/projects/{project_id}/file_system/{id}/move/
    // Moves an existing file-system entry to a new path. The generated
    // input schema reuses the FileSystemEntry response model, so server-
    // managed fields (depth, created_at, last_viewed_at) accept placeholder
    // values. The output schema is Schema.Void → undefined. The happy path
    // creates a fresh entry, moves it, and cleans up via fileSystemDestroy.
    const stubBody = (project_id: string, id: string, path: string) => ({
      project_id,
      id,
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    const createStub = (project_id: string, path: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - moves an existing file-system entry to a new path", () => {
      let createdId: string | undefined;

      return Effect.gen(function* () {
        const created = yield* Core.fileSystemCreate(
          createStub(
            getProjectId(),
            `distilled-posthog-fs-move-src-${testRunId}`,
          ),
        );
        createdId = created.id;

        const result = yield* Core.fileSystemMoveCreate(
          stubBody(
            getProjectId(),
            created.id,
            `distilled-posthog-fs-move-dst-${testRunId}`,
          ),
        );
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.fileSystemDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent file-system id", () =>
      Core.fileSystemMoveCreate(
        stubBody(
          getProjectId(),
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-fs-move-nf-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.fileSystemMoveCreate(
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        stubBody(
          `not-a-number-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-fs-move-br-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemMoveCreate(
          stubBody(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            "00000000-0000-0000-0000-000000000000",
            `distilled-posthog-fs-move-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemPartialUpdate", () => {
    // PATCH /api/projects/{project_id}/file_system/{id}/
    // Partially updates a file-system entry. All body fields are optional;
    // server returns the updated FileSystemEntry. The happy path creates
    // an entry, patches its path, and asserts the response reflects the
    // change. Cleanup via fileSystemDestroy.
    const createStub = (project_id: string, path: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - patches an existing file-system entry's path", () => {
      let createdId: string | undefined;
      const newPath = `distilled-posthog-fs-patched-${testRunId}`;

      return Effect.gen(function* () {
        const created = yield* Core.fileSystemCreate(
          createStub(
            getProjectId(),
            `distilled-posthog-fs-pre-patch-${testRunId}`,
          ),
        );
        createdId = created.id;

        const result = yield* Core.fileSystemPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          path: newPath,
        });

        expect(result.id).toBe(created.id);
        expect(result.path).toBe(newPath);
        expect(typeof result.created_at).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.fileSystemDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent file-system id", () =>
      Core.fileSystemPartialUpdate({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
        path: `distilled-posthog-fs-patch-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.fileSystemPartialUpdate({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
        path: `distilled-posthog-fs-patch-br-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
          path: `distilled-posthog-fs-patch-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemRetrieve", () => {
    // GET /api/projects/{project_id}/file_system/{id}/
    // Retrieves a single file-system entry by id. The happy path creates
    // an entry, retrieves it, and asserts the response shape. Cleanup via
    // fileSystemDestroy.
    const createStub = (project_id: string, path: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - retrieves an existing file-system entry by id", () => {
      let createdId: string | undefined;
      const path = `distilled-posthog-fs-get-${testRunId}`;

      return Effect.gen(function* () {
        const created = yield* Core.fileSystemCreate(
          createStub(getProjectId(), path),
        );
        createdId = created.id;

        const result = yield* Core.fileSystemRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });

        expect(result.id).toBe(created.id);
        expect(result.path).toBe(path);
        expect(typeof result.created_at).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.fileSystemDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent file-system id", () =>
      Core.fileSystemRetrieve({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemUndoDeleteCreate", () => {
    // POST /api/projects/{project_id}/file_system/undo_delete/
    // Restores a soft-deleted file-system entry. The id is supplied via
    // the request body (the URL has no {id} segment). The generated input
    // schema reuses the FileSystemEntry response model, so server-managed
    // fields (path, depth, created_at, last_viewed_at) take placeholder
    // values. The output schema is Schema.Void → undefined. The happy
    // path creates an entry, soft-deletes it via fileSystemDestroy, then
    // undoes the delete; cleanup destroys the restored entry.
    const stubBody = (project_id: string, id: string, path: string) => ({
      project_id,
      id,
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    const createStub = (project_id: string, path: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - restores a soft-deleted file-system entry", () => {
      let createdId: string | undefined;
      const path = `distilled-posthog-fs-undo-${testRunId}`;

      return Effect.gen(function* () {
        const created = yield* Core.fileSystemCreate(
          createStub(getProjectId(), path),
        );
        createdId = created.id;

        yield* Core.fileSystemDestroy({
          project_id: getProjectId(),
          id: created.id,
        });

        const result = yield* Core.fileSystemUndoDeleteCreate(
          stubBody(getProjectId(), created.id, path),
        );
        expect(result).toBeUndefined();
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.fileSystemDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent file-system id", () =>
      Core.fileSystemUndoDeleteCreate(
        stubBody(
          getProjectId(),
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-fs-undo-nf-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.fileSystemUndoDeleteCreate(
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        stubBody(
          `not-a-number-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-fs-undo-br-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemUndoDeleteCreate(
          stubBody(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            "00000000-0000-0000-0000-000000000000",
            `distilled-posthog-fs-undo-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemUnfiledRetrieve", () => {
    // GET /api/projects/{project_id}/file_system/unfiled/
    // Returns entries that have not been filed under any folder. Input
    // only takes project_id; output is Schema.Void → resolves to undefined.

    test("happy path - returns undefined for the active project", () =>
      Effect.gen(function* () {
        const result = yield* Core.fileSystemUnfiledRetrieve({
          project_id: getProjectId(),
        });
        expect(result).toBeUndefined();
      }));

    test("error - NotFound for non-existent project_id", () =>
      Core.fileSystemUnfiledRetrieve({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemUnfiledRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("fileSystemUpdate", () => {
    // PUT /api/projects/{project_id}/file_system/{id}/
    // Replaces a file-system entry's contents. The generated input schema
    // reuses the FileSystemEntry response model, so server-managed fields
    // (depth, created_at, last_viewed_at) accept placeholder values. The
    // happy path creates an entry, PUTs a new path, asserts the response
    // reflects the change. Cleanup via fileSystemDestroy.
    const stubBody = (project_id: string, id: string, path: string) => ({
      project_id,
      id,
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    const createStub = (project_id: string, path: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      path,
      depth: null,
      created_at: new Date().toISOString(),
      last_viewed_at: null,
    });

    test("happy path - replaces an existing file-system entry's path", () => {
      let createdId: string | undefined;
      const newPath = `distilled-posthog-fs-put-${testRunId}`;

      return Effect.gen(function* () {
        const created = yield* Core.fileSystemCreate(
          createStub(
            getProjectId(),
            `distilled-posthog-fs-pre-put-${testRunId}`,
          ),
        );
        createdId = created.id;

        const result = yield* Core.fileSystemUpdate(
          stubBody(getProjectId(), created.id, newPath),
        );

        expect(result.id).toBe(created.id);
        expect(result.path).toBe(newPath);
        expect(typeof result.created_at).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Core.fileSystemDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent file-system id", () =>
      Core.fileSystemUpdate(
        stubBody(
          getProjectId(),
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-fs-put-nf-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.fileSystemUpdate(
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        stubBody(
          `not-a-number-${testRunId}`,
          "00000000-0000-0000-0000-000000000000",
          `distilled-posthog-fs-put-br-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Core.fileSystemUpdate(
          stubBody(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            "00000000-0000-0000-0000-000000000000",
            `distilled-posthog-fs-put-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });
});
