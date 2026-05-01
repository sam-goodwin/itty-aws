import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SavedRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  short_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/projects/{project_id}/saved/{short_id}/",
  }),
);
export type SavedRetrieveInput = typeof SavedRetrieveInput.Type;

// Output Schema
export const SavedRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  short_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  url: Schema.optional(Schema.String),
  data_url: Schema.optional(Schema.NullOr(Schema.String)),
  target_widths: Schema.optional(Schema.Unknown),
  type: Schema.optional(Schema.Literals(["screenshot", "iframe", "recording"])),
  status: Schema.optional(
    Schema.Literals(["processing", "completed", "failed"]),
  ),
  has_content: Schema.optional(Schema.Boolean),
  snapshots: Schema.optional(
    Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  deleted: Schema.optional(Schema.Boolean),
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
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  exception: Schema.optional(Schema.NullOr(Schema.String)),
});
export type SavedRetrieveOutput = typeof SavedRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const savedRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavedRetrieveInput,
  outputSchema: SavedRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
