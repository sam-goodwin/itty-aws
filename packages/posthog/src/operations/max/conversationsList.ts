import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ConversationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/api/environments/{project_id}/conversations/",
  }),
);
export type ConversationsListInput = typeof ConversationsListInput.Type;

// Output Schema
export const ConversationsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        status: Schema.Literals(["idle", "in_progress", "canceling"]),
        title: Schema.NullOr(Schema.String),
        user: Schema.Struct({
          id: Schema.Number,
          uuid: Schema.String,
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.String,
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.NullOr(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
        created_at: Schema.NullOr(Schema.String),
        updated_at: Schema.NullOr(Schema.String),
        type: Schema.Literals([
          "assistant",
          "tool_call",
          "deep_research",
          "slack",
        ]),
        is_internal: Schema.NullOr(Schema.Boolean),
        slack_thread_key: Schema.NullOr(Schema.String),
        slack_workspace_domain: Schema.NullOr(Schema.String),
      }),
    ),
  });
export type ConversationsListOutput = typeof ConversationsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ConversationsListInput,
  outputSchema: ConversationsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
