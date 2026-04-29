import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExportsCreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  id: Schema.Number,
  dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
  insight: Schema.optional(Schema.NullOr(Schema.Number)),
  export_format: Schema.Literals([
    "image/png",
    "application/pdf",
    "text/csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "video/webm",
    "video/mp4",
    "image/gif",
    "application/json",
  ]),
  created_at: Schema.String,
  has_content: Schema.Boolean,
  export_context: Schema.optional(Schema.NullOr(Schema.Unknown)),
  filename: Schema.String,
  expires_after: Schema.NullOr(Schema.String),
  exception: Schema.NullOr(Schema.String),
}).pipe(
  T.Http({ method: "POST", path: "/api/projects/{project_id}/exports/" }),
);
export type ExportsCreateInput = typeof ExportsCreateInput.Type;

// Output Schema
export const ExportsCreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number,
  dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
  insight: Schema.optional(Schema.NullOr(Schema.Number)),
  export_format: Schema.Literals([
    "image/png",
    "application/pdf",
    "text/csv",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "video/webm",
    "video/mp4",
    "image/gif",
    "application/json",
  ]),
  created_at: Schema.String,
  has_content: Schema.Boolean,
  export_context: Schema.optional(Schema.NullOr(Schema.Unknown)),
  filename: Schema.String,
  expires_after: Schema.NullOr(Schema.String),
  exception: Schema.NullOr(Schema.String),
});
export type ExportsCreateOutput = typeof ExportsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const exportsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExportsCreateInput,
  outputSchema: ExportsCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
