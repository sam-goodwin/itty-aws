import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LogsViewsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({
    method: "GET",
    path: "/api/environments/{project_id}/logs/views/{short_id}/",
  }),
);
export type LogsViewsRetrieveInput = typeof LogsViewsRetrieveInput.Type;

// Output Schema
export const LogsViewsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type LogsViewsRetrieveOutput = typeof LogsViewsRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsViewsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LogsViewsRetrieveInput,
  outputSchema: LogsViewsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
