import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface FieldNotesListInput {
  project_id: string;
  field_note_status?: "acknowledged" | "dismissed" | "pending" | "resolved";
  host?: string;
  limit?: number;
  offset?: number;
}
export const FieldNotesListInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  field_note_status: Schema.optional(
    Schema.Literals(["acknowledged", "dismissed", "pending", "resolved"]),
  ),
  host: Schema.optional(Schema.String),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/field_notes/" }),
) as unknown as Schema.Codec<FieldNotesListInput>;

// Output Schema
export interface FieldNotesListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    comment: string;
    field_note_status?: "pending" | "acknowledged" | "resolved" | "dismissed";
    resolution?: string | null;
    url: string;
    host: string;
    pathname?: string | null;
    selector: string;
    element_text?: string | null;
    element_chain?: string | null;
    element_context?: Record<string, unknown>;
    viewport?: { width?: number; height?: number } | null;
    screenshot_url?: string | null;
    created_at: string;
    updated_at: string | null;
    created_by: {
      id?: number;
      uuid?: string;
      distinct_id?: string | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?:
        | "engineering"
        | "data"
        | "product"
        | "founder"
        | "leadership"
        | "marketing"
        | "sales"
        | "other"
        | ""
        | null;
    };
  }[];
}
export const FieldNotesListOutput = /*@__PURE__*/ Schema.Struct({
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
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
        role_at_organization: Schema.optional(
          Schema.NullOr(
            Schema.Union([
              Schema.Literals([
                "engineering",
                "data",
                "product",
                "founder",
                "leadership",
                "marketing",
                "sales",
                "other",
              ]),
              Schema.Literals([""]),
            ]),
          ),
        ),
      }),
    }),
  ),
}) as unknown as Schema.Codec<FieldNotesListOutput>;

// The operation
/**
 * Create, read, update, and resolve toolbar field notes — UI feedback a user
 * points at on their own site, surfaced to coding agents over MCP.
 *
 * @param field_note_status - Filter to field notes in this lifecycle state (e.g. `pending` for unaddressed feedback).
 * @param host - Filter to field notes made on this hostname (e.g. `app.example.com`).
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fieldNotesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: FieldNotesListInput,
  outputSchema: FieldNotesListOutput,
}));
