import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsViewsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  id: Schema.optional(Schema.String),
  short_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  pinned: Schema.optional(Schema.Boolean),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({
    method: "POST",
    path: "/api/environments/{project_id}/logs/views/",
  }),
);
export type LogsViewsCreateInput = typeof LogsViewsCreateInput.Type;

// Output Schema
export const LogsViewsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  short_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.String),
  filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  pinned: Schema.optional(Schema.Boolean),
  created_at: Schema.optional(Schema.String),
  created_by: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        uuid: Schema.optional(Schema.String),
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
  updated_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export type LogsViewsCreateOutput = typeof LogsViewsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsViewsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsViewsCreateInput,
  outputSchema: LogsViewsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
