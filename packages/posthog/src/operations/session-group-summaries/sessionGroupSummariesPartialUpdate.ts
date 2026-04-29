import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SessionGroupSummariesPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    title: Schema.optional(Schema.String),
    session_ids: Schema.optional(Schema.Array(Schema.String)),
    summary: Schema.optional(Schema.Unknown),
    extra_summary_context: Schema.optional(Schema.NullOr(Schema.Unknown)),
    run_metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(
      Schema.Struct({
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
    ),
    team: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/session_group_summaries/{id}/",
    }),
  );
export type SessionGroupSummariesPartialUpdateInput =
  typeof SessionGroupSummariesPartialUpdateInput.Type;

// Output Schema
export const SessionGroupSummariesPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    title: Schema.String,
    session_ids: Schema.Array(Schema.String),
    summary: Schema.Unknown,
    extra_summary_context: Schema.NullOr(Schema.Unknown),
    run_metadata: Schema.NullOr(Schema.Unknown),
    created_at: Schema.String,
    created_by: Schema.Struct({
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
    team: Schema.Number,
  });
export type SessionGroupSummariesPartialUpdateOutput =
  typeof SessionGroupSummariesPartialUpdateOutput.Type;

// The operation
/**
 * API for retrieving and managing stored group session summaries.
 *
 * @param id - A UUID string identifying this session group summary.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionGroupSummariesPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionGroupSummariesPartialUpdateInput,
    outputSchema: SessionGroupSummariesPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
