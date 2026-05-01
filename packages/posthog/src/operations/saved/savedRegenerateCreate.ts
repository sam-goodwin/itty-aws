import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SavedRegenerateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String,
    name: Schema.optional(Schema.NullOr(Schema.String)),
    url: Schema.String,
    data_url: Schema.optional(Schema.NullOr(Schema.String)),
    target_widths: Schema.optional(Schema.Unknown),
    type: Schema.optional(
      Schema.Literals(["screenshot", "iframe", "recording"]),
    ),
    status: Schema.Literals(["processing", "completed", "failed"]),
    has_content: Schema.Boolean,
    snapshots: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    deleted: Schema.optional(Schema.Boolean),
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
    created_at: Schema.String,
    updated_at: Schema.String,
    exception: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/saved/{short_id}/regenerate/",
    }),
  );
export type SavedRegenerateCreateInput = typeof SavedRegenerateCreateInput.Type;

// Output Schema
export const SavedRegenerateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type SavedRegenerateCreateOutput =
  typeof SavedRegenerateCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const savedRegenerateCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SavedRegenerateCreateInput,
    outputSchema: SavedRegenerateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
