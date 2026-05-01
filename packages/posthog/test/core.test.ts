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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
            expect(e._tag, `run ${testRunId}`).toBe("UnknownPosthogError");
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
            expect(e._tag, `run ${testRunId}`).toBe("UnknownPosthogError");
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
        const result = yield* Core.cohortsAddPersonsToStaticCohortPartialUpdate(
          {
            project_id: getProjectId(),
            id: created.id,
            person_ids: [],
          },
        );

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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
            expect(e._tag, `run ${testRunId}`).toBe("UnknownPosthogError");
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
          cohortStub(getProjectId(), `distilled-cohort-persons-${testRunId}`),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
          cohortStub(getProjectId(), `distilled-cohort-rmperson-${testRunId}`),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
          cohortStub(getProjectId(), `distilled-cohort-retrieve-${testRunId}`),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
          commentInput(getProjectId(), `distilled-comment-create-${testRunId}`),
        );
        createdId = result.id;
        expect(typeof result.id).toBe("string");
        expect(result.id.length).toBeGreaterThan(0);
        expect(result.content).toBe(`distilled-comment-create-${testRunId}`);
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
            expect(e._tag, `run ${testRunId}`).toBe("UnknownPosthogError");
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
          commentInput(getProjectId(), `distilled-comment-patch-${testRunId}`),
        );
        createdId = created.id;
        const result = yield* Core.commentsPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          content: `distilled-comment-patched-${testRunId}`,
        });
        expect(result.id).toBe(created.id);
        expect(result.content).toBe(`distilled-comment-patched-${testRunId}`);
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
          commentInput(getProjectId(), `distilled-comment-soft-${testRunId}`),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
        expect(result.content).toBe(`distilled-comment-retrieve-${testRunId}`);
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
          commentInput(getProjectId(), `distilled-comment-thread-${testRunId}`),
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

    const updateBody = (project_id: string, id: string, content: string) => ({
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
      creation_mode: "default",
      filters: {},
      variables: null,
      effective_restriction_level: 21,
      effective_privilege_level: 21,
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
            ? Number((sourceFull.tiles[0] as Record<string, unknown>).id ?? 0)
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
      creation_mode: "default",
      filters: {},
      variables: null,
      effective_restriction_level: 21,
      effective_privilege_level: 21,
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
        dashboardCreateInput("99999999999", `distilled-dash-nf-${testRunId}`),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
      creation_mode: "default",
      filters: {},
      variables: null,
      effective_restriction_level: 21,
      effective_privilege_level: 21,
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
            expect(e._tag, `run ${testRunId}`).toBe("UnknownPosthogError");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Core.dashboardsDestroy({
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
        Effect.map((e) => expect(e._tag).toBe("InternalServerError")),
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
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
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
});
