import { describe, expect } from "vitest";
import * as Effect from "effect/Effect";
import { test, getProjectId, testRunId } from "./test.ts";
import * as Conversations from "~/operations/conversations";

describe("Conversations", () => {
  // --------------------------------------------------------------------------
  // conversationsTicketsBulkUpdateTagsCreate
  // --------------------------------------------------------------------------
  describe("conversationsTicketsBulkUpdateTagsCreate", () => {
    // POST bulk-updates tags across multiple conversation tickets in a
    // project. Requires:
    //   POSTHOG_CONVERSATION_TICKET_ID — numeric id of an existing ticket
    // for happy-path coverage. Without it, the happy path is skipped, but
    // error paths still run.
    //
    // The schema declares `action` as an empty Struct, but PostHog accepts
    // a string discriminator on the wire ("add" | "remove" | "set"). We
    // pass the literal as `never` to satisfy the decoder.
    //
    // The happy path adds a unique throwaway tag and then removes it in
    // cleanup so the ticket's tag set returns to its original state.
    const ticketId = (): number =>
      Number(process.env.POSTHOG_CONVERSATION_TICKET_ID ?? "0");

    const stubBody = (overrides: {
      project_id?: string;
      ids?: ReadonlyArray<number>;
      action?: "add" | "remove" | "set";
      tags?: ReadonlyArray<string>;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      ids: overrides.ids ?? [ticketId()],
      action: (overrides.action ?? "add") as never,
      tags: overrides.tags ?? [`distilled-tag-${testRunId}`],
    });

    test.skipIf(!process.env.POSTHOG_CONVERSATION_TICKET_ID)(
      "happy path - bulk-adds a tag to an existing ticket",
      () => {
        const tag = `distilled-tag-${testRunId}`;
        return Effect.gen(function* () {
          const result =
            yield* Conversations.conversationsTicketsBulkUpdateTagsCreate(
              stubBody({ tags: [tag], action: "add" }),
            );

          expect(result).toBeDefined();
          expect(Array.isArray(result.updated)).toBe(true);
          expect(Array.isArray(result.skipped)).toBe(true);
          // The targeted ticket should appear in either updated or skipped.
          const total = result.updated.length + result.skipped.length;
          expect(total).toBeGreaterThanOrEqual(1);
          for (const u of result.updated) {
            expect(typeof u.id).toBe("number");
            expect(Array.isArray(u.tags)).toBe(true);
          }
          for (const s of result.skipped) {
            expect(typeof s.id).toBe("number");
            expect(typeof s.reason).toBe("string");
          }
        }).pipe(
          Effect.ensuring(
            Conversations.conversationsTicketsBulkUpdateTagsCreate(
              stubBody({ tags: [tag], action: "remove" }),
            ).pipe(Effect.ignore),
          ),
        );
      },
    );

    test("error - NotFound for non-existent project_id", () =>
      Conversations.conversationsTicketsBulkUpdateTagsCreate(
        stubBody({
          project_id: "99999999999",
          ids: [1],
          tags: [`distilled-tag-nf-${testRunId}`],
        }),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("Forbidden");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Conversations.conversationsTicketsBulkUpdateTagsCreate(
        stubBody({
          project_id: `not-a-number-${testRunId}`,
          ids: [1],
          tags: [`distilled-tag-bad-${testRunId}`],
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("Forbidden")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Conversations.conversationsTicketsBulkUpdateTagsCreate(
          stubBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            ids: [1],
            tags: [`distilled-tag-fb-${testRunId}`],
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // conversationsTicketsCreate
  // --------------------------------------------------------------------------
  describe("conversationsTicketsCreate", () => {
    // POST creates a conversation ticket. The happy path is opt-in via
    // POSTHOG_RUN_CONVERSATION_CREATE_TEST because:
    //   1. The endpoint creates real ticket records in the project
    //   2. There is no destroy operation in the SDK for cleanup
    //   3. PostHog requires a real Person and channel context
    // so it should only run in dedicated test projects. Error paths still
    // run unconditionally — they don't create real resources.
    //
    // The generated input schema reuses the response model and therefore
    // demands many server-set fields (id, ticket_number, created_at,
    // updated_at, message_count, slack/email metadata, person, …). PostHog
    // ignores client-set values for server fields; we pass placeholders to
    // satisfy the schema decoder. The assignee/channel_source schemas are
    // declared as empty Structs but accept string discriminators on the
    // wire — passed via `as never`.
    const stubBody = (overrides: {
      project_id?: string;
      distinct_id?: string;
    }) => ({
      project_id: overrides.project_id ?? getProjectId(),
      // Server-set placeholders — required by the schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      ticket_number: 0,
      channel_source: "widget",
      channel_detail: {},
      distinct_id:
        overrides.distinct_id ?? `distilled-conv-${testRunId}`,
      assignee: {
        id: null,
        type: "unassigned",
        user: null,
        role: null,
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      message_count: 0,
      last_message_at: null,
      last_message_text: null,
      unread_team_count: 0,
      unread_customer_count: 0,
      session_id: null,
      session_context: {},
      slack_channel_id: null,
      slack_thread_ts: null,
      slack_team_id: null,
      email_subject: null,
      email_from: null,
      email_to: null,
      cc_participants: [],
      person: {
        id: "00000000-0000-0000-0000-000000000000",
        name: `distilled-conv-person-${testRunId}`,
        distinct_ids: [overrides.distinct_id ?? `distilled-conv-${testRunId}`],
        properties: {} as Record<string, never>,
        created_at: new Date().toISOString(),
        is_identified: false,
      },
    });

    test.skipIf(!process.env.POSTHOG_RUN_CONVERSATION_CREATE_TEST)(
      "happy path - creates a conversation ticket",
      () =>
        Effect.gen(function* () {
          const result = yield* Conversations.conversationsTicketsCreate(
            stubBody({}),
          );

          expect(result).toBeDefined();
          expect(typeof result.id).toBe("string");
          expect(result.id.length).toBeGreaterThan(0);
          expect(typeof result.ticket_number).toBe("number");
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.updated_at).toBe("string");
          expect(typeof result.message_count).toBe("number");
          expect(typeof result.distinct_id).toBe("string");
          expect(result.person).toBeDefined();
          expect(typeof result.person.id).toBe("string");
        }),
    );

    test("error - NotFound for non-existent project_id", () =>
      Conversations.conversationsTicketsCreate(
        stubBody({
          project_id: "99999999999",
          distinct_id: `distilled-conv-nf-${testRunId}`,
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
      Conversations.conversationsTicketsCreate(
        stubBody({
          project_id: `not-a-number-${testRunId}`,
          distinct_id: `distilled-conv-bad-${testRunId}`,
        }),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Conversations.conversationsTicketsCreate(
          stubBody({
            project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            distinct_id: `distilled-conv-fb-${testRunId}`,
          }),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // conversationsTicketsDestroy
  // --------------------------------------------------------------------------
  describe("conversationsTicketsDestroy", () => {
    // DELETE removes a conversation ticket. The happy path creates a real
    // ticket and then deletes it, so it shares the opt-in gate
    // POSTHOG_RUN_CONVERSATION_CREATE_TEST with conversationsTicketsCreate
    // (the create endpoint touches real ticket records). Error paths still
    // run unconditionally.
    //
    // The create body reuses the schema-as-request anti-pattern: server-set
    // fields are required by the decoder and ignored by PostHog server-side.
    //
    // Output schema is Schema.Void — successful response decodes to
    // `undefined`.
    const createStub = (distinctId: string) => ({
      project_id: getProjectId(),
      // Server-set placeholders — required by the create schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      ticket_number: 0,
      channel_source: "widget",
      channel_detail: {},
      distinct_id: distinctId,
      assignee: {
        id: null,
        type: "unassigned",
        user: null,
        role: null,
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      message_count: 0,
      last_message_at: null,
      last_message_text: null,
      unread_team_count: 0,
      unread_customer_count: 0,
      session_id: null,
      session_context: {},
      slack_channel_id: null,
      slack_thread_ts: null,
      slack_team_id: null,
      email_subject: null,
      email_from: null,
      email_to: null,
      cc_participants: [],
      person: {
        id: "00000000-0000-0000-0000-000000000000",
        name: `distilled-conv-person-${testRunId}`,
        distinct_ids: [distinctId],
        properties: {} as Record<string, never>,
        created_at: new Date().toISOString(),
        is_identified: false,
      },
    });

    test.skipIf(!process.env.POSTHOG_RUN_CONVERSATION_CREATE_TEST)(
      "happy path - deletes an existing conversation ticket",
      () =>
        Effect.gen(function* () {
          // Arrange: create a ticket to delete.
          const created = yield* Conversations.conversationsTicketsCreate(
            createStub(`distilled-conv-del-${testRunId}`),
          );
          expect(typeof created.id).toBe("string");
          expect(created.id.length).toBeGreaterThan(0);

          // Act: destroy it. Output schema is Schema.Void → undefined.
          const result = yield* Conversations.conversationsTicketsDestroy({
            project_id: getProjectId(),
            id: created.id,
          });
          expect(result).toBeUndefined();

          // Assert: deleting again returns NotFound.
          const followUp = yield* Conversations.conversationsTicketsDestroy({
            project_id: getProjectId(),
            id: created.id,
          }).pipe(Effect.flip);
          expect(followUp._tag).toBe("NotFound");
        }),
    );

    test("error - NotFound for non-existent ticket id", () =>
      Conversations.conversationsTicketsDestroy({
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
        Conversations.conversationsTicketsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // conversationsTicketsList
  // --------------------------------------------------------------------------
  describe("conversationsTicketsList", () => {
    // GET lists conversation tickets in the project. Always available
    // against any valid project — no resource prerequisites needed beyond
    // auth. Output is offset-paginated with count + results array.

    test("happy path - returns paginated tickets for the project", () =>
      Effect.gen(function* () {
        const result = yield* Conversations.conversationsTicketsList({
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
          expect(typeof entry.ticket_number).toBe("number");
          expect(typeof entry.distinct_id).toBe("string");
          expect(typeof entry.created_at).toBe("string");
          expect(typeof entry.updated_at).toBe("string");
          expect(typeof entry.message_count).toBe("number");
          expect(entry.person).toBeDefined();
          expect(typeof entry.person.id).toBe("string");
        }
      }));

    test("happy path - respects order_by + offset", () =>
      Effect.gen(function* () {
        const result = yield* Conversations.conversationsTicketsList({
          project_id: getProjectId(),
          limit: 1,
          offset: 0,
          order_by: "-created_at",
        });

        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results.length).toBeLessThanOrEqual(1);
      }));

    test("happy path - respects sla + channel_source filters", () =>
      Effect.gen(function* () {
        const result = yield* Conversations.conversationsTicketsList({
          project_id: getProjectId(),
          limit: 5,
          sla: "on-track",
          channel_source: "email",
        });

        expect(result).toBeDefined();
        expect(Array.isArray(result.results)).toBe(true);
      }));

    test("error - NotFound for non-existent project_id", () =>
      Conversations.conversationsTicketsList({
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
      Conversations.conversationsTicketsList({
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Conversations.conversationsTicketsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // conversationsTicketsPartialUpdate
  // --------------------------------------------------------------------------
  describe("conversationsTicketsPartialUpdate", () => {
    // PATCH updates fields on an existing conversation ticket. The happy
    // path creates a real ticket to patch, so it shares the opt-in gate
    // POSTHOG_RUN_CONVERSATION_CREATE_TEST with conversationsTicketsCreate.
    // Error paths still run unconditionally.
    //
    // PATCH input is fully optional (apart from path params), so we only
    // pass the fields under test. We clean up the created ticket via
    // conversationsTicketsDestroy in Effect.ensuring.
    const createStub = (distinctId: string) => ({
      project_id: getProjectId(),
      // Server-set placeholders — required by the create schema decoder.
      id: "00000000-0000-0000-0000-000000000000",
      ticket_number: 0,
      channel_source: "widget",
      channel_detail: {},
      distinct_id: distinctId,
      assignee: {
        id: null,
        type: "unassigned",
        user: null,
        role: null,
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      message_count: 0,
      last_message_at: null,
      last_message_text: null,
      unread_team_count: 0,
      unread_customer_count: 0,
      session_id: null,
      session_context: {},
      slack_channel_id: null,
      slack_thread_ts: null,
      slack_team_id: null,
      email_subject: null,
      email_from: null,
      email_to: null,
      cc_participants: [],
      person: {
        id: "00000000-0000-0000-0000-000000000000",
        name: `distilled-conv-person-${testRunId}`,
        distinct_ids: [distinctId],
        properties: {} as Record<string, never>,
        created_at: new Date().toISOString(),
        is_identified: false,
      },
    });

    test.skipIf(!process.env.POSTHOG_RUN_CONVERSATION_CREATE_TEST)(
      "happy path - patches an existing ticket's email_subject",
      () => {
        let createdId: string | undefined;
        const updatedSubject = `distilled-conv-subject-${testRunId}`;

        return Effect.gen(function* () {
          // Arrange: create a ticket to patch.
          const created = yield* Conversations.conversationsTicketsCreate(
            createStub(`distilled-conv-patch-${testRunId}`),
          );
          createdId = created.id;

          // Act: PATCH only the email_subject field.
          const result =
            yield* Conversations.conversationsTicketsPartialUpdate({
              project_id: getProjectId(),
              id: created.id,
              email_subject: updatedSubject,
            });

          // Assert: server reflects the partial update; identity preserved.
          expect(result).toBeDefined();
          expect(result.id).toBe(created.id);
          expect(result.email_subject).toBe(updatedSubject);
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.updated_at).toBe("string");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Conversations.conversationsTicketsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent ticket id", () =>
      Conversations.conversationsTicketsPartialUpdate({
        project_id: getProjectId(),
        id: "00000000-0000-0000-0000-000000000000",
        email_subject: `distilled-conv-subject-missing-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Conversations.conversationsTicketsPartialUpdate({
        project_id: `not-a-number-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
        email_subject: `distilled-conv-subject-bad-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Conversations.conversationsTicketsPartialUpdate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
          email_subject: `distilled-conv-subject-fb-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // conversationsTicketsRetrieve
  // --------------------------------------------------------------------------
  describe("conversationsTicketsRetrieve", () => {
    // GET retrieves a single conversation ticket by id and marks it as
    // read by the team. Requires:
    //   POSTHOG_CONVERSATION_TICKET_UUID — UUID of an existing ticket
    // for happy-path coverage. Without it, the happy path is skipped, but
    // error paths still run.
    //
    // Note: ticket numbers (numeric) are exposed via list filters, but the
    // retrieve endpoint identifies tickets by UUID. The env var must be a
    // UUID, not the numeric ticket_number used by bulk_update_tags.
    //
    // Typed errors are only Forbidden + NotFound. Path params are all
    // Schema.String so a non-numeric project_id surfaces as NotFound (DRF
    // catch-all) rather than BadRequest — there is no BadRequest path
    // documented for this operation.
    const ticketUuid = (): string =>
      process.env.POSTHOG_CONVERSATION_TICKET_UUID ??
      "00000000-0000-0000-0000-000000000000";

    test.skipIf(!process.env.POSTHOG_CONVERSATION_TICKET_UUID)(
      "happy path - retrieves an existing ticket by id",
      () =>
        Effect.gen(function* () {
          const result = yield* Conversations.conversationsTicketsRetrieve({
            project_id: getProjectId(),
            id: ticketUuid(),
          });

          expect(result).toBeDefined();
          expect(result.id).toBe(ticketUuid());
          expect(typeof result.ticket_number).toBe("number");
          expect(typeof result.distinct_id).toBe("string");
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.updated_at).toBe("string");
          expect(typeof result.message_count).toBe("number");
          expect(result.person).toBeDefined();
          expect(typeof result.person.id).toBe("string");
        }),
    );

    test("error - NotFound for non-existent ticket id", () =>
      Conversations.conversationsTicketsRetrieve({
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
        Conversations.conversationsTicketsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  describe("conversationsTicketsSuggestReplyCreate", () => {
    const ticketUuid = () => process.env.POSTHOG_CONVERSATION_TICKET_UUID!;

    test.skipIf(!process.env.POSTHOG_CONVERSATION_TICKET_UUID)(
      "happy path - returns a suggested reply for a ticket",
      () =>
        Effect.gen(function* () {
          const result =
            yield* Conversations.conversationsTicketsSuggestReplyCreate({
              project_id: getProjectId(),
              id: ticketUuid(),
            });

          expect(result).toBeDefined();
          expect(typeof result.suggestion).toBe("string");
        }),
    );

    test("error - NotFound for non-existent ticket id", () =>
      Conversations.conversationsTicketsSuggestReplyCreate({
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
      Conversations.conversationsTicketsSuggestReplyCreate({
        project_id: `not-a-number-${testRunId}`,
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(
        Effect.flip,
        Effect.map((e) =>
          expect(["BadRequest", "NotFound", "Forbidden"]).toContain(e._tag),
        ),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Conversations.conversationsTicketsSuggestReplyCreate({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });
  // --------------------------------------------------------------------------
  // conversationsTicketsUpdate
  // --------------------------------------------------------------------------
  describe("conversationsTicketsUpdate", () => {
    // PUT replaces a conversation ticket. The schema reuses the response
    // model as the request body, so server-set fields (id, ticket_number,
    // created_at, updated_at, message_count, person.id, etc.) need
    // placeholder values that the API will ignore/replace.
    //
    // The happy path creates a real ticket to update, so it shares the
    // opt-in gate POSTHOG_RUN_CONVERSATION_CREATE_TEST. Error paths still
    // run unconditionally with zero-UUIDs and placeholder bodies.
    const createStub = (distinctId: string) => ({
      project_id: getProjectId(),
      id: "00000000-0000-0000-0000-000000000000",
      ticket_number: 0,
      channel_source: "widget",
      channel_detail: {},
      distinct_id: distinctId,
      assignee: {
        id: null,
        type: "unassigned",
        user: null,
        role: null,
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      message_count: 0,
      last_message_at: null,
      last_message_text: null,
      unread_team_count: 0,
      unread_customer_count: 0,
      session_id: null,
      session_context: {},
      slack_channel_id: null,
      slack_thread_ts: null,
      slack_team_id: null,
      email_subject: null,
      email_from: null,
      email_to: null,
      cc_participants: [],
      person: {
        id: "00000000-0000-0000-0000-000000000000",
        name: `distilled-conv-person-${testRunId}`,
        distinct_ids: [distinctId],
        properties: {} as Record<string, never>,
        created_at: new Date().toISOString(),
        is_identified: false,
      },
    });

    const putStub = (
      id: string,
      project_id: string,
      distinctId: string,
      overrides: { email_subject?: string | null } = {},
    ) => ({
      project_id,
      id,
      ticket_number: 0,
      channel_source: "widget" as never,
      channel_detail: {},
      distinct_id: distinctId,
      assignee: {
        id: null,
        type: "unassigned",
        user: null,
        role: null,
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      message_count: 0,
      last_message_at: null,
      last_message_text: null,
      unread_team_count: 0,
      unread_customer_count: 0,
      session_id: null,
      session_context: {},
      slack_channel_id: null,
      slack_thread_ts: null,
      slack_team_id: null,
      email_subject: overrides.email_subject ?? null,
      email_from: null,
      email_to: null,
      cc_participants: [],
      person: {
        id: "00000000-0000-0000-0000-000000000000",
        name: `distilled-conv-person-${testRunId}`,
        distinct_ids: [distinctId],
        properties: {} as Record<string, never>,
        created_at: new Date().toISOString(),
        is_identified: false,
      },
    });

    test.skipIf(!process.env.POSTHOG_RUN_CONVERSATION_CREATE_TEST)(
      "happy path - replaces an existing ticket via PUT",
      () => {
        let createdId: string | undefined;
        const distinctId = `distilled-conv-put-${testRunId}`;
        const updatedSubject = `distilled-conv-put-subject-${testRunId}`;

        return Effect.gen(function* () {
          // Arrange: create a ticket to update.
          const created = yield* Conversations.conversationsTicketsCreate(
            createStub(distinctId),
          );
          createdId = created.id;

          // Act: PUT a replacement body that updates email_subject.
          const result = yield* Conversations.conversationsTicketsUpdate(
            putStub(created.id, getProjectId(), distinctId, {
              email_subject: updatedSubject,
            }),
          );

          // Assert: server returns the updated representation.
          expect(result).toBeDefined();
          expect(result.id).toBe(created.id);
          expect(result.email_subject).toBe(updatedSubject);
          expect(typeof result.ticket_number).toBe("number");
          expect(typeof result.created_at).toBe("string");
          expect(typeof result.updated_at).toBe("string");
          expect(typeof result.message_count).toBe("number");
          expect(result.person).toBeDefined();
          expect(typeof result.person.id).toBe("string");
        }).pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId === undefined
                ? Effect.void
                : Conversations.conversationsTicketsDestroy({
                    project_id: getProjectId(),
                    id: createdId,
                  }).pipe(Effect.ignore),
            ),
          ),
        );
      },
    );

    test("error - NotFound for non-existent ticket id", () =>
      Conversations.conversationsTicketsUpdate(
        putStub(
          "00000000-0000-0000-0000-000000000000",
          getProjectId(),
          `distilled-conv-put-nf-${testRunId}`,
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
      Conversations.conversationsTicketsUpdate(
        putStub(
          "00000000-0000-0000-0000-000000000000",
          `not-a-number-${testRunId}`,
          `distilled-conv-put-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Conversations.conversationsTicketsUpdate(
          putStub(
            "00000000-0000-0000-0000-000000000000",
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-conv-put-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // conversationsViewsCreate
  // --------------------------------------------------------------------------
  describe("conversationsViewsCreate", () => {
    // POST creates a saved conversation view (named filter set) under a
    // project. The schema reuses the response model as the request body, so
    // server-set fields (id, short_id, created_at, created_by) take
    // placeholder values that the API ignores/replaces. The happy path
    // cleans up via conversationsViewsDestroy in Effect.ensuring.
    const createStub = (
      project_id: string,
      name: string,
      overrides: { filters?: Record<string, unknown> } = {},
    ) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      short_id: "placeholder",
      name,
      filters: overrides.filters ?? { status: "open" },
      created_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
    });

    test("happy path - creates a conversation view and returns its id", () => {
      let createdShortId: string | undefined;
      const name = `distilled-conv-view-${testRunId}`;

      return Effect.gen(function* () {
        const result = yield* Conversations.conversationsViewsCreate(
          createStub(getProjectId(), name),
        );
        createdShortId = result.short_id;

        expect(result).toBeDefined();
        expect(typeof result.id).toBe("string");
        expect(typeof result.short_id).toBe("string");
        expect(result.short_id.length).toBeGreaterThan(0);
        expect(result.name).toBe(name);
        expect(typeof result.created_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.uuid).toBe("string");
        expect(typeof result.created_by.email).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdShortId === undefined
              ? Effect.void
              : Conversations.conversationsViewsDestroy({
                  project_id: getProjectId(),
                  short_id: createdShortId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Conversations.conversationsViewsCreate(
        createStub("99999999999", `distilled-conv-view-nf-${testRunId}`),
      ).pipe(
        Effect.flip,
        Effect.tap((e) =>
          Effect.sync(() => {
            expect(e._tag, `run ${testRunId}`).toBe("NotFound");
          }),
        ),
      ));

    test("error - BadRequest for non-numeric project_id", () =>
      Conversations.conversationsViewsCreate(
        createStub(
          `not-a-number-${testRunId}`,
          `distilled-conv-view-bad-${testRunId}`,
        ),
      ).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Conversations.conversationsViewsCreate(
          createStub(
            process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
            `distilled-conv-view-fb-${testRunId}`,
          ),
        ).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // conversationsViewsDestroy
  // --------------------------------------------------------------------------
  describe("conversationsViewsDestroy", () => {
    // DELETE removes a saved conversation view by short_id. The happy path
    // creates a real view to delete (no opt-in gate needed — views are
    // cheap, project-scoped, and fully cleaned up by the test itself).
    // Error paths use a placeholder short_id that does not exist.
    const createStub = (project_id: string, name: string) => ({
      project_id,
      id: "00000000-0000-0000-0000-000000000000",
      short_id: "placeholder",
      name,
      filters: { status: "open" },
      created_at: new Date().toISOString(),
      created_by: {
        id: 0,
        uuid: "00000000-0000-0000-0000-000000000000",
        email: "placeholder@example.com",
        hedgehog_config: null,
      },
    });

    test("happy path - deletes a previously-created view", () => {
      let createdShortId: string | undefined;
      const name = `distilled-conv-view-del-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create a view to delete.
        const created = yield* Conversations.conversationsViewsCreate(
          createStub(getProjectId(), name),
        );
        createdShortId = created.short_id;

        // Act: delete it.
        yield* Conversations.conversationsViewsDestroy({
          project_id: getProjectId(),
          short_id: created.short_id,
        });

        // Mark cleanup as already done so the ensuring block is a no-op.
        createdShortId = undefined;

        // Assert: subsequent destroy of the same short_id surfaces NotFound.
        const err = yield* Conversations.conversationsViewsDestroy({
          project_id: getProjectId(),
          short_id: created.short_id,
        }).pipe(Effect.flip);
        expect(err._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdShortId === undefined
              ? Effect.void
              : Conversations.conversationsViewsDestroy({
                  project_id: getProjectId(),
                  short_id: createdShortId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent short_id", () =>
      Conversations.conversationsViewsDestroy({
        project_id: getProjectId(),
        short_id: `does-not-exist-${testRunId}`,
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
        Conversations.conversationsViewsDestroy({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          short_id: `does-not-exist-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // conversationsViewsList
  // --------------------------------------------------------------------------
  describe("conversationsViewsList", () => {
    // GET lists saved conversation views (paginated). Happy path creates a
    // throwaway view first to guarantee at least one result, then asserts
    // it appears in the list. Cleanup destroys the created view via
    // Effect.ensuring.
    test("happy path - lists views and includes a freshly created one", () => {
      let createdShortId: string | undefined;
      const name = `distilled-conv-view-list-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create a view we can look for in the list response.
        const created = yield* Conversations.conversationsViewsCreate({
          project_id: getProjectId(),
          id: "00000000-0000-0000-0000-000000000000",
          short_id: "placeholder",
          name,
          filters: { status: "open" },
          created_at: new Date().toISOString(),
          created_by: {
            id: 0,
            uuid: "00000000-0000-0000-0000-000000000000",
            email: "placeholder@example.com",
            hedgehog_config: null,
          },
        });
        createdShortId = created.short_id;

        // Act: list views.
        const result = yield* Conversations.conversationsViewsList({
          project_id: getProjectId(),
          limit: 100,
        });

        // Assert: pagination shape and that our created view is present.
        expect(result).toBeDefined();
        expect(typeof result.count).toBe("number");
        expect(result.count).toBeGreaterThanOrEqual(1);
        expect(Array.isArray(result.results)).toBe(true);
        const found = result.results.find((v) => v.short_id === created.short_id);
        expect(found).toBeDefined();
        expect(found?.name).toBe(name);
        for (const v of result.results) {
          expect(typeof v.id).toBe("string");
          expect(typeof v.short_id).toBe("string");
          expect(typeof v.name).toBe("string");
          expect(typeof v.created_at).toBe("string");
          expect(v.created_by).toBeDefined();
          expect(typeof v.created_by.id).toBe("number");
          expect(typeof v.created_by.uuid).toBe("string");
          expect(typeof v.created_by.email).toBe("string");
        }
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdShortId === undefined
              ? Effect.void
              : Conversations.conversationsViewsDestroy({
                  project_id: getProjectId(),
                  short_id: createdShortId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent project_id", () =>
      Conversations.conversationsViewsList({
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
      Conversations.conversationsViewsList({
        project_id: `not-a-number-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.map((e) => expect(e._tag).toBe("NotFound")),
      ));

    test.skipIf(!process.env.POSTHOG_FORBIDDEN_PROJECT_ID)(
      "error - Forbidden when project is outside key scope",
      () =>
        Conversations.conversationsViewsList({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });

  // --------------------------------------------------------------------------
  // conversationsViewsRetrieve
  // --------------------------------------------------------------------------
  describe("conversationsViewsRetrieve", () => {
    // GET retrieves a single saved conversation view by short_id. The
    // happy path creates a throwaway view, retrieves it, asserts identity
    // and shape, and cleans up via destroy in Effect.ensuring.
    test("happy path - retrieves a freshly created view by short_id", () => {
      let createdShortId: string | undefined;
      const name = `distilled-conv-view-get-${testRunId}`;

      return Effect.gen(function* () {
        // Arrange: create a view to retrieve.
        const created = yield* Conversations.conversationsViewsCreate({
          project_id: getProjectId(),
          id: "00000000-0000-0000-0000-000000000000",
          short_id: "placeholder",
          name,
          filters: { status: "open" },
          created_at: new Date().toISOString(),
          created_by: {
            id: 0,
            uuid: "00000000-0000-0000-0000-000000000000",
            email: "placeholder@example.com",
            hedgehog_config: null,
          },
        });
        createdShortId = created.short_id;

        // Act: retrieve it.
        const result = yield* Conversations.conversationsViewsRetrieve({
          project_id: getProjectId(),
          short_id: created.short_id,
        });

        // Assert: identity and shape.
        expect(result).toBeDefined();
        expect(result.id).toBe(created.id);
        expect(result.short_id).toBe(created.short_id);
        expect(result.name).toBe(name);
        expect(typeof result.created_at).toBe("string");
        expect(result.created_by).toBeDefined();
        expect(typeof result.created_by.id).toBe("number");
        expect(typeof result.created_by.uuid).toBe("string");
        expect(typeof result.created_by.email).toBe("string");
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdShortId === undefined
              ? Effect.void
              : Conversations.conversationsViewsDestroy({
                  project_id: getProjectId(),
                  short_id: createdShortId,
                }).pipe(Effect.ignore),
          ),
        ),
      );
    });

    test("error - NotFound for non-existent short_id", () =>
      Conversations.conversationsViewsRetrieve({
        project_id: getProjectId(),
        short_id: `does-not-exist-${testRunId}`,
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
        Conversations.conversationsViewsRetrieve({
          project_id: process.env.POSTHOG_FORBIDDEN_PROJECT_ID!,
          short_id: `does-not-exist-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.map((e) => expect(e._tag).toBe("Forbidden")),
        ),
    );
  });
});
