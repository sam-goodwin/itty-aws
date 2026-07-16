import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LogsViewsPartialUpdateInput {
  project_id: string;
  short_id: string;
  id?: string;
  name?: string;
  filters?: Record<string, unknown>;
  pinned?: boolean;
  created_at?: string;
  created_by?: {
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
  } | null;
  updated_at?: string | null;
}
export const LogsViewsPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    short_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    pinned: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
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
      ),
    ),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/logs/views/{short_id}/",
    }),
  ) as unknown as Schema.Codec<LogsViewsPartialUpdateInput>;

// Output Schema
export interface LogsViewsPartialUpdateOutput {
  id?: string;
  short_id?: string;
  name?: string;
  filters?: Record<string, unknown>;
  pinned?: boolean;
  created_at?: string;
  created_by?: {
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
  } | null;
  updated_at?: string | null;
}
export const LogsViewsPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    short_id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    pinned: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
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
      ),
    ),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<LogsViewsPartialUpdateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const logsViewsPartialUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: LogsViewsPartialUpdateInput,
  outputSchema: LogsViewsPartialUpdateOutput,
}));
