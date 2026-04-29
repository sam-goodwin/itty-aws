import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const AdvancedActivityLogsExportCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
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
    unread: Schema.Boolean,
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    was_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
    is_system: Schema.optional(Schema.NullOr(Schema.Boolean)),
    client: Schema.optional(Schema.NullOr(Schema.String)),
    activity: Schema.String,
    item_id: Schema.optional(Schema.NullOr(Schema.String)),
    scope: Schema.String,
    detail: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/advanced_activity_logs/export/",
    }),
  );
export type AdvancedActivityLogsExportCreateInput =
  typeof AdvancedActivityLogsExportCreateInput.Type;

// Output Schema
export const AdvancedActivityLogsExportCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
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
    unread: Schema.Boolean,
    organization_id: Schema.optional(Schema.NullOr(Schema.String)),
    was_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
    is_system: Schema.optional(Schema.NullOr(Schema.Boolean)),
    client: Schema.optional(Schema.NullOr(Schema.String)),
    activity: Schema.String,
    item_id: Schema.optional(Schema.NullOr(Schema.String)),
    scope: Schema.String,
    detail: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
  });
export type AdvancedActivityLogsExportCreateOutput =
  typeof AdvancedActivityLogsExportCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const advancedActivityLogsExportCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AdvancedActivityLogsExportCreateInput,
    outputSchema: AdvancedActivityLogsExportCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
