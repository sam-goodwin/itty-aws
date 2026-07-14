import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface FieldNotesRetrieveInput {
  id: string;
  project_id: string;
}
export const FieldNotesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/field_notes/{id}/",
    }),
  ) as unknown as Schema.Codec<FieldNotesRetrieveInput>;

// Output Schema
export interface FieldNotesRetrieveOutput {
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
}
export const FieldNotesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<FieldNotesRetrieveOutput>;

// The operation
/**
 * Create, read, update, and resolve toolbar field notes — UI feedback a user
 * points at on their own site, surfaced to coding agents over MCP.
 *
 * @param id - A UUID string identifying this field note.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const fieldNotesRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: FieldNotesRetrieveInput,
  outputSchema: FieldNotesRetrieveOutput,
}));
