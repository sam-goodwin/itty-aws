import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ActionsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  format: Schema.optional(Schema.Literals(["csv", "json"])),
  id: Schema.Number,
  name: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.Unknown)),
  post_to_slack: Schema.optional(Schema.Boolean),
  slack_message_format: Schema.optional(Schema.String),
  steps: Schema.optional(
    Schema.Array(
      Schema.Struct({
        event: Schema.optional(Schema.NullOr(Schema.String)),
        properties: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.Unknown)),
        ),
        selector: Schema.optional(Schema.NullOr(Schema.String)),
        selector_regex: Schema.NullOr(Schema.String),
        tag_name: Schema.optional(Schema.NullOr(Schema.String)),
        text: Schema.optional(Schema.NullOr(Schema.String)),
        text_matching: Schema.optional(Schema.Unknown),
        href: Schema.optional(Schema.NullOr(Schema.String)),
        href_matching: Schema.optional(Schema.Unknown),
        url: Schema.optional(Schema.NullOr(Schema.String)),
        url_matching: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
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
  deleted: Schema.optional(Schema.Boolean),
  is_calculating: Schema.Boolean,
  last_calculated_at: Schema.optional(Schema.String),
  team_id: Schema.Number,
  is_action: Schema.Boolean,
  bytecode_error: Schema.NullOr(Schema.String),
  pinned_at: Schema.optional(Schema.NullOr(Schema.String)),
  creation_context: Schema.NullOr(Schema.String),
  _create_in_folder: Schema.optional(Schema.String),
  user_access_level: Schema.NullOr(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/actions/" }),
);
export type ActionsCreateInput = typeof ActionsCreateInput.Type;

// Output Schema
export const ActionsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number,
  name: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.Unknown)),
  post_to_slack: Schema.optional(Schema.Boolean),
  slack_message_format: Schema.optional(Schema.String),
  steps: Schema.optional(
    Schema.Array(
      Schema.Struct({
        event: Schema.optional(Schema.NullOr(Schema.String)),
        properties: Schema.optional(
          Schema.NullOr(Schema.Array(Schema.Unknown)),
        ),
        selector: Schema.optional(Schema.NullOr(Schema.String)),
        selector_regex: Schema.NullOr(Schema.String),
        tag_name: Schema.optional(Schema.NullOr(Schema.String)),
        text: Schema.optional(Schema.NullOr(Schema.String)),
        text_matching: Schema.optional(Schema.Unknown),
        href: Schema.optional(Schema.NullOr(Schema.String)),
        href_matching: Schema.optional(Schema.Unknown),
        url: Schema.optional(Schema.NullOr(Schema.String)),
        url_matching: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
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
  deleted: Schema.optional(Schema.Boolean),
  is_calculating: Schema.Boolean,
  last_calculated_at: Schema.optional(Schema.String),
  team_id: Schema.Number,
  is_action: Schema.Boolean,
  bytecode_error: Schema.NullOr(Schema.String),
  pinned_at: Schema.optional(Schema.NullOr(Schema.String)),
  creation_context: Schema.NullOr(Schema.String),
  _create_in_folder: Schema.optional(Schema.String),
  user_access_level: Schema.NullOr(Schema.String),
});
export type ActionsCreateOutput = typeof ActionsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const actionsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ActionsCreateInput,
  outputSchema: ActionsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
