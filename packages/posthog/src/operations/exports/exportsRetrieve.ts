import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExportsRetrieveInput {
  id: number;
  project_id: string;
}
export const ExportsRetrieveInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.Number.pipe(T.PathParam()),
  project_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/exports/{id}/" }),
) as unknown as Schema.Codec<ExportsRetrieveInput>;

// Output Schema
export interface ExportsRetrieveOutput {
  id?: number;
  dashboard?: number | null;
  insight?: number | null;
  export_format?:
    | "image/png"
    | "application/pdf"
    | "text/csv"
    | "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    | "video/webm"
    | "video/mp4"
    | "image/gif"
    | "application/json";
  created_at?: string;
  has_content?: boolean;
  export_context?: unknown;
  filename?: string;
  expires_after?: string | null;
  exception?: string | null;
  user_access_level?: string | null;
}
export const ExportsRetrieveOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  dashboard: Schema.optional(Schema.NullOr(Schema.Number)),
  insight: Schema.optional(Schema.NullOr(Schema.Number)),
  export_format: Schema.optional(
    Schema.Literals([
      "image/png",
      "application/pdf",
      "text/csv",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "video/webm",
      "video/mp4",
      "image/gif",
      "application/json",
    ]),
  ),
  created_at: Schema.optional(Schema.String),
  has_content: Schema.optional(Schema.Boolean),
  export_context: Schema.optional(Schema.Unknown),
  filename: Schema.optional(Schema.String),
  expires_after: Schema.optional(Schema.NullOr(Schema.String)),
  exception: Schema.optional(Schema.NullOr(Schema.String)),
  user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
}) as unknown as Schema.Codec<ExportsRetrieveOutput>;

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
