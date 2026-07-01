import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ExportsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const ExportsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/exports/" }),
) as unknown as Schema.Codec<ExportsListInput>;

// Output Schema
export interface ExportsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
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
  }[];
}
export const ExportsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
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
      }),
    ),
  ),
}) as unknown as Schema.Codec<ExportsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const exportsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ExportsListInput,
  outputSchema: ExportsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
