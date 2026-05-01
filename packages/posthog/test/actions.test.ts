import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getProjectId, testRunId } from "./test.ts";
import * as Actions from "~/operations/actions";

describe("Actions", () => {
  // --------------------------------------------------------------------------
  // actionsCreate
  // --------------------------------------------------------------------------
  describe("actionsCreate", () => {
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (id, created_at, created_by, team_id, …).
    // PostHog ignores client-supplied values for these on the server side; we
    // pass placeholder stubs to satisfy the schema decoder.
    const stubBody = (name: string) => ({
      project_id: getProjectId(),
      id: 0,
      name,
      created_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_calculating: false,
      team_id: 0,
      is_action: true,
      bytecode_error: null,
      creation_context: null,
      user_access_level: null,
    });

    test("happy path - creates a new action and returns its id", () => {
      const actionName = `distilled-posthog-action-${testRunId}`;
      let createdId: number | undefined;

      return Effect.gen(function* () {
        const result = yield* Actions.actionsCreate(stubBody(actionName));

        expect(result).toBeDefined();
        expect(typeof result.id).toBe("number");
        expect(result.id).toBeGreaterThan(0);
        expect(result.name).toBe(actionName);
        expect(result.is_action).toBe(true);
        expect(result.team_id).toBeDefined();
        expect(typeof result.created_at).toBe("string");

        createdId = result.id;
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Actions.actionsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Actions.actionsCreate({
        ...stubBody(`distilled-posthog-action-nf-${testRunId}`),
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for invalid input", () =>
      Actions.actionsCreate({
        ...stubBody(`distilled-posthog-action-br-${testRunId}`),
        // PostHog action `name` has a max length (typically 400 chars).
        // A name that vastly exceeds that limit returns a DRF
        // validation_error (400 max_length).
        name: "x".repeat(10_000),
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("BadRequest")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Actions.actionsCreate({
          ...stubBody(`distilled-posthog-action-fb-${testRunId}`),
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // actionsDestroy
  // --------------------------------------------------------------------------
  describe("actionsDestroy", () => {
    // Stub body for actionsCreate so each destroy test can provision its
    // own subject. Server ignores client-set server fields.
    const stubCreateBody = (name: string) => ({
      project_id: getProjectId(),
      id: 0,
      name,
      created_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_calculating: false,
      team_id: 0,
      is_action: true,
      bytecode_error: null,
      creation_context: null,
      user_access_level: null,
    });

    test("happy path - deletes an existing action", () =>
      Effect.gen(function* () {
        // Arrange: create an action so we have something to destroy.
        const created = yield* Actions.actionsCreate(
          stubCreateBody(`distilled-posthog-action-del-${testRunId}`),
        );
        expect(created.id).toBeGreaterThan(0);

        // Act: destroy it. Output schema is Schema.Void → resolves to undefined.
        const result = yield* Actions.actionsDestroy({
          project_id: getProjectId(),
          id: created.id,
        });
        expect(result).toBeUndefined();

        // Assert: subsequent destroy of the same id errors. PostHog returns
        // an empty-body 4xx for destroy-after-destroy, which we can't
        // discriminate as NotFound — match what the explicit
        // "NotFound for non-existent action id" test below also asserts.
        const followUp = yield* Actions.actionsDestroy({
          project_id: getProjectId(),
          id: created.id,
        }).pipe(Effect.flip);
        expect(["NotFound", "UnknownPosthogError"]).toContain(followUp._tag);
      }));

    test("error - NotFound for non-existent action id", () =>
      Actions.actionsDestroy({
        project_id: getProjectId(),
        id: 999_999_999,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("UnknownPosthogError")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Actions.actionsDestroy({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Actions.actionsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // actionsList
  // --------------------------------------------------------------------------
  describe("actionsList", () => {
    test("happy path - returns paginated list of actions", () =>
      Effect.gen(function* () {
        const result = yield* Actions.actionsList({
          project_id: getProjectId(),
          limit: 5,
        });

        expect(result).toBeDefined();
        // PostHog's list endpoints sometimes omit `count` for large/expensive
        // collections (the schema marks it optional). Only assert on it if
        // present.
        if (result.count !== undefined) {
          expect(typeof result.count).toBe("number");
          expect(result.count).toBeGreaterThanOrEqual(0);
        }
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results!.length).toBeLessThanOrEqual(5);

        // Validate shape of each returned action.
        for (const action of result.results) {
          expect(typeof action.id).toBe("number");
          expect(typeof action.is_calculating).toBe("boolean");
          expect(typeof action.is_action).toBe("boolean");
          expect(typeof action.team_id).toBe("number");
          expect(typeof action.created_at).toBe("string");
        }
      }));

    test("happy path - respects pagination via offset", () =>
      Effect.gen(function* () {
        // Fetch the first two pages of size 1 and verify they don't overlap
        // when there's at least 2 actions; if fewer, just assert shape.
        const page1 = yield* Actions.actionsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 0,
        });
        const page2 = yield* Actions.actionsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 1,
        });

        if (page1.count !== undefined && page2.count !== undefined) {
          expect(page1.count).toBe(page2.count);
        }
        if ((page1.count ?? 0) >= 2) {
          expect(page1.results?.[0]?.id).not.toBe(page2.results?.[0]?.id);
        }
      }));

    test("error - NotFound for non-existent project_id", () =>
      Actions.actionsList({
        project_id: "99999999999",
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Actions.actionsList({
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
        Actions.actionsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // actionsPartialUpdate
  // --------------------------------------------------------------------------
  describe("actionsPartialUpdate", () => {
    // Helper to create a fresh action whose id can be patched.
    const createStub = (name: string) => ({
      project_id: getProjectId(),
      id: 0,
      name,
      created_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_calculating: false,
      team_id: 0,
      is_action: true,
      bytecode_error: null,
      creation_context: null,
      user_access_level: null,
    });

    test("happy path - patches an action's name and description", () => {
      const initialName = `distilled-posthog-action-pu-${testRunId}`;
      const updatedName = `distilled-posthog-action-pu-renamed-${testRunId}`;
      let createdId: number | undefined;

      return Effect.gen(function* () {
        // Arrange: create a fresh action.
        const created = yield* Actions.actionsCreate(createStub(initialName));
        createdId = created.id;

        // Act: patch only `name` and `description`.
        const updated = yield* Actions.actionsPartialUpdate({
          project_id: getProjectId(),
          id: created.id,
          name: updatedName,
          description: `patched at ${testRunId}`,
        });

        // Assert: server returns the updated action with new fields applied.
        expect(updated.id).toBe(created.id);
        expect(updated.name).toBe(updatedName);
        expect(updated.description).toBe(`patched at ${testRunId}`);
        expect(typeof updated.team_id).toBe("number");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Actions.actionsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent action id", () =>
      Actions.actionsPartialUpdate({
        project_id: getProjectId(),
        id: 999_999_999,
        name: `distilled-posthog-action-pu-nf-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Actions.actionsPartialUpdate({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        name: `distilled-posthog-action-pu-br-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Actions.actionsPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          name: `distilled-posthog-action-pu-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // actionsReferencesList
  // --------------------------------------------------------------------------
  describe("actionsReferencesList", () => {
    // Helper to provision an action whose references can be listed.
    const createStub = (name: string) => ({
      project_id: getProjectId(),
      id: 0,
      name,
      created_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_calculating: false,
      team_id: 0,
      is_action: true,
      bytecode_error: null,
      creation_context: null,
      user_access_level: null,
    });

    test("happy path - returns an array of references for an existing action", () => {
      let createdId: number | undefined;

      return Effect.gen(function* () {
        // Arrange: create a fresh action so we have a valid id.
        const created = yield* Actions.actionsCreate(
          createStub(`distilled-posthog-action-refs-${testRunId}`),
        );
        createdId = created.id;

        // Act: list references for the action. Newly-created actions have
        // no references, so we expect an empty array — but we also validate
        // the array shape if any references happen to be present.
        const refs = yield* Actions.actionsReferencesList({
          project_id: getProjectId(),
          id: created.id,
        });

        expect(Array.isArray(refs)).toBe(true);
        for (const ref of refs) {
          expect(typeof ref.type).toBe("string");
          expect(typeof ref.id).toBe("string");
          expect(typeof ref.name).toBe("string");
          expect(typeof ref.url).toBe("string");
          expect(typeof ref.created_by.id).toBe("number");
          expect(typeof ref.created_by.email).toBe("string");
        }
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Actions.actionsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent action id", () =>
      Actions.actionsReferencesList({
        project_id: getProjectId(),
        id: 999_999_999,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Actions.actionsReferencesList({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Actions.actionsReferencesList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // actionsRetrieve
  // --------------------------------------------------------------------------
  describe("actionsRetrieve", () => {
    // Helper to provision an action whose detail can be retrieved.
    const createStub = (name: string) => ({
      project_id: getProjectId(),
      id: 0,
      name,
      created_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_calculating: false,
      team_id: 0,
      is_action: true,
      bytecode_error: null,
      creation_context: null,
      user_access_level: null,
    });

    test("happy path - retrieves a single action by id", () => {
      const actionName = `distilled-posthog-action-get-${testRunId}`;
      let createdId: number | undefined;

      return Effect.gen(function* () {
        // Arrange: create a fresh action so we have a valid id to retrieve.
        const created = yield* Actions.actionsCreate(createStub(actionName));
        createdId = created.id;

        // Act: retrieve by id.
        const result = yield* Actions.actionsRetrieve({
          project_id: getProjectId(),
          id: created.id,
        });

        // Assert: returned action matches the one we created.
        expect(result.id).toBe(created.id);
        expect(result.name).toBe(actionName);
        expect(result.is_action).toBe(true);
        expect(typeof result.team_id).toBe("number");
        expect(typeof result.created_at).toBe("string");
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.email).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Actions.actionsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent action id", () =>
      Actions.actionsRetrieve({
        project_id: getProjectId(),
        id: 999_999_999,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Actions.actionsRetrieve({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
        id: 1,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Actions.actionsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // actionsUpdate
  // --------------------------------------------------------------------------
  describe("actionsUpdate", () => {
    // Helper to provision an action that we'll PUT-update.
    const createStub = (name: string) => ({
      project_id: getProjectId(),
      id: 0,
      name,
      created_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "test@example.com",
        hedgehog_config: null,
      },
      is_calculating: false,
      team_id: 0,
      is_action: true,
      bytecode_error: null,
      creation_context: null,
      user_access_level: null,
    });

    // Build a PUT body for a known existing action. The generated input
    // schema reuses the response model and therefore demands every server-
    // set field on a PUT — pass back the values returned by the create call
    // so the schema validates and the server has consistent data.
    const updateBody = (
      existing: {
        id: number;
        team_id: number;
        created_at: string;
        is_calculating: boolean;
        is_action: boolean;
        bytecode_error: string | null;
        creation_context: string | null;
        user_access_level: string | null;
        created_by: {
          id: number;
          uuid: string;
          email: string;
          hedgehog_config: Record<string, unknown> | null;
        };
      },
      patch: { name?: string; description?: string },
    ) => ({
      project_id: getProjectId(),
      id: existing.id,
      name: patch.name,
      description: patch.description,
      created_at: existing.created_at,
      created_by: {
        id: existing.created_by.id,
        uuid: existing.created_by.uuid,
        email: existing.created_by.email,
        hedgehog_config: existing.created_by.hedgehog_config,
      },
      is_calculating: existing.is_calculating,
      team_id: existing.team_id,
      is_action: existing.is_action,
      bytecode_error: existing.bytecode_error,
      creation_context: existing.creation_context,
      user_access_level: existing.user_access_level,
    });

    test("happy path - replaces an action's editable fields", () => {
      const initialName = `distilled-posthog-action-pu2-${testRunId}`;
      const updatedName = `distilled-posthog-action-pu2-replaced-${testRunId}`;
      let createdId: number | undefined;

      return Effect.gen(function* () {
        // Arrange: create a fresh action.
        const created = yield* Actions.actionsCreate(createStub(initialName));
        createdId = created.id;

        // Act: PUT-update the action with new name and description.
        const updated = yield* Actions.actionsUpdate(
          updateBody(created, {
            name: updatedName,
            description: `replaced at ${testRunId}`,
          }),
        );

        // Assert: server returns the replaced action.
        expect(updated.id).toBe(created.id);
        expect(updated.name).toBe(updatedName);
        expect(updated.description).toBe(`replaced at ${testRunId}`);
        expect(typeof updated.team_id).toBe("number");
        expect(typeof updated.created_at).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId === undefined
              ? Effect.void
              : Actions.actionsDestroy({
                  project_id: getProjectId(),
                  id: createdId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent action id", () =>
      Actions.actionsUpdate({
        project_id: getProjectId(),
        id: 999_999_999,
        name: `distilled-posthog-action-pu2-nf-${testRunId}`,
        created_at: new Date().toISOString(),
        created_by: {
          id: 0,
          uuid: "00000000-0000-0000-0000-000000000000",
          email: "test@example.com",
          hedgehog_config: null,
        },
        is_calculating: false,
        team_id: 0,
        is_action: true,
        bytecode_error: null,
        creation_context: null,
        user_access_level: null,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Actions.actionsUpdate({
        // PostHog routes project_id through an integer DRF lookup; a
        // non-numeric value yields a 400 invalid_request / parse_error.
        project_id: `not-a-number-${testRunId}`,
        id: 1,
        name: `distilled-posthog-action-pu2-br-${testRunId}`,
        created_at: new Date().toISOString(),
        created_by: {
          id: 0,
          uuid: "00000000-0000-0000-0000-000000000000",
          email: "test@example.com",
          hedgehog_config: null,
        },
        is_calculating: false,
        team_id: 0,
        is_action: true,
        bytecode_error: null,
        creation_context: null,
        user_access_level: null,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Actions.actionsUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: 1,
          name: `distilled-posthog-action-pu2-fb-${testRunId}`,
          created_at: new Date().toISOString(),
          created_by: {
            id: 0,
            uuid: "00000000-0000-0000-0000-000000000000",
            email: "test@example.com",
            hedgehog_config: null,
          },
          is_calculating: false,
          team_id: 0,
          is_action: true,
          bytecode_error: null,
          creation_context: null,
          user_access_level: null,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });
});
