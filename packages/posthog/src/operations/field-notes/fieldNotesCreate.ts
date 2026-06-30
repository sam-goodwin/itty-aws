import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const FieldNotesCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  id: Schema.String,
  comment: Schema.String,
  field_note_status: Schema.optional(
    Schema.Literals(["pending", "acknowledged", "resolved", "dismissed"]),
  ),
  resolution: Schema.optional(Schema.NullOr(Schema.String)),
  url: Schema.String,
  host: Schema.String,
  pathname: Schema.optional(Schema.NullOr(Schema.String)),
  selector: Schema.String,
  element_text: Schema.optional(Schema.NullOr(Schema.String)),
  element_chain: Schema.optional(Schema.NullOr(Schema.String)),
  element_context: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  viewport: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        width: Schema.optional(Schema.Number),
        height: Schema.optional(Schema.Number),
      }),
    ),
  ),
  screenshot_url: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.String,
  updated_at: Schema.NullOr(Schema.String),
  created_by: Schema.Struct({
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
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/field_notes/" }),
);
export type FieldNotesCreateInput = typeof FieldNotesCreateInput.Type;

// Output Schema
export const FieldNotesCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    id: Schema.String,
    comment: Schema.String,
    field_note_status: Schema.optional(
      Schema.Literals(["pending", "acknowledged", "resolved", "dismissed"]),
    ),
    resolution: Schema.optional(Schema.NullOr(Schema.String)),
    url: Schema.String,
    host: Schema.String,
    pathname: Schema.optional(Schema.NullOr(Schema.String)),
    selector: Schema.String,
    element_text: Schema.optional(Schema.NullOr(Schema.String)),
    element_chain: Schema.optional(Schema.NullOr(Schema.String)),
    element_context: Schema.optional(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    viewport: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          width: Schema.optional(Schema.Number),
          height: Schema.optional(Schema.Number),
        }),
      ),
    ),
    screenshot_url: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.String,
    updated_at: Schema.NullOr(Schema.String),
    created_by: Schema.Struct({
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
  },
);
export type FieldNotesCreateOutput = typeof FieldNotesCreateOutput.Type;

// The operation
/**
 * Create, read, update, and resolve toolbar field notes — UI feedback a user
 * points at on their own site, surfaced to coding agents over MCP.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fieldNotesCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: FieldNotesCreateInput,
  outputSchema: FieldNotesCreateOutput,
}));
