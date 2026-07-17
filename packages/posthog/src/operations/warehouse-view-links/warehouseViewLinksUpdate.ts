import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WarehouseViewLinksUpdateInput {
  id: string;
  project_id: string;
  deleted?: boolean | null;
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
  created_at: string;
  source_table_name: string;
  source_table_key: string;
  joining_table_name: string;
  joining_table_key: string;
  field_name: string;
  configuration?: unknown;
}
export const WarehouseViewLinksUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
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
    created_at: Schema.String,
    source_table_name: Schema.String,
    source_table_key: Schema.String,
    joining_table_name: Schema.String,
    joining_table_key: Schema.String,
    field_name: Schema.String,
    configuration: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/warehouse_view_links/{id}/",
    }),
  ) as unknown as Schema.Codec<WarehouseViewLinksUpdateInput>;

// Output Schema
export interface WarehouseViewLinksUpdateOutput {
  id: string;
  deleted?: boolean | null;
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
  created_at: string;
  source_table_name: string;
  source_table_key: string;
  joining_table_name: string;
  joining_table_key: string;
  field_name: string;
  configuration?: unknown;
}
export const WarehouseViewLinksUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String,
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
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
    created_at: Schema.String,
    source_table_name: Schema.String,
    source_table_key: Schema.String,
    joining_table_name: Schema.String,
    joining_table_key: Schema.String,
    field_name: Schema.String,
    configuration: Schema.optional(Schema.Unknown),
  }) as unknown as Schema.Codec<WarehouseViewLinksUpdateOutput>;

// The operation
/**
 * Create, Read, Update and Delete View Columns.
 *
 * @param id - A UUID string identifying this data warehouse join.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseViewLinksUpdate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WarehouseViewLinksUpdateInput,
  outputSchema: WarehouseViewLinksUpdateOutput,
}));
