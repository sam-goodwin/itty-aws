import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const ExportsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/exports/{id}/" }),
);
export type ExportsRetrieveInput = typeof ExportsRetrieveInput.Type;

// Output Schema
export const ExportsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ExportsRetrieveOutput = typeof ExportsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this exported asset.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const exportsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExportsRetrieveInput,
  outputSchema: ExportsRetrieveOutput,
  errors: [Forbidden, NotFound] as const,
}));
