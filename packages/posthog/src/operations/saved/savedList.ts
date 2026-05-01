import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SavedListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(T.Http({ method: "GET", path: "/api/projects/{project_id}/saved/" }));
export type SavedListInput = typeof SavedListInput.Type;

// Output Schema
export const SavedListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      short_id: Schema.String,
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
    }),
  ),
});
export type SavedListOutput = typeof SavedListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const savedList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SavedListInput,
  outputSchema: SavedListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
