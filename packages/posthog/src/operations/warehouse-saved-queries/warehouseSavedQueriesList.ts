import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WarehouseSavedQueriesListInput {
  project_id: string;
  page?: number;
  search?: string;
}
export const WarehouseSavedQueriesListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_saved_queries/",
    }),
  ) as unknown as Schema.Codec<WarehouseSavedQueriesListInput>;

// Output Schema
export interface WarehouseSavedQueriesListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    deleted?: boolean | null;
    name?: string;
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
    created_at?: string;
    sync_frequency?: string | null;
    columns?: Record<string, unknown>[];
    status?:
      | "Cancelled"
      | "Modified"
      | "Completed"
      | "Failed"
      | "Running"
      | null;
    last_run_at?: string | null;
    managed_viewset_kind?: string | null;
    folder_id?: string | null;
    folder_name?: string | null;
    latest_error?: string | null;
    is_materialized?: boolean | null;
    origin?: "data_warehouse" | "endpoint" | "managed_viewset" | null;
    is_test?: boolean;
    expires_at?: string | null;
    user_access_level?: string | null;
  }[];
}
export const WarehouseSavedQueriesListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
          name: Schema.optional(Schema.String),
          created_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                uuid: Schema.optional(Schema.String),
                distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.String),
                last_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
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
          created_at: Schema.optional(Schema.String),
          sync_frequency: Schema.optional(Schema.NullOr(Schema.String)),
          columns: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          status: Schema.optional(
            Schema.NullOr(
              Schema.Literals([
                "Cancelled",
                "Modified",
                "Completed",
                "Failed",
                "Running",
              ]),
            ),
          ),
          last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
          managed_viewset_kind: Schema.optional(Schema.NullOr(Schema.String)),
          folder_id: Schema.optional(Schema.NullOr(Schema.String)),
          folder_name: Schema.optional(Schema.NullOr(Schema.String)),
          latest_error: Schema.optional(Schema.NullOr(Schema.String)),
          is_materialized: Schema.optional(Schema.NullOr(Schema.Boolean)),
          origin: Schema.optional(
            Schema.NullOr(
              Schema.Literals([
                "data_warehouse",
                "endpoint",
                "managed_viewset",
              ]),
            ),
          ),
          is_test: Schema.optional(Schema.Boolean),
          expires_at: Schema.optional(Schema.NullOr(Schema.String)),
          user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
  }) as unknown as Schema.Codec<WarehouseSavedQueriesListOutput>;

// The operation
/**
 * Create, Read, Update and Delete Warehouse Tables.
 *
 * @param page - A page number within the paginated result set.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const warehouseSavedQueriesList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WarehouseSavedQueriesListInput,
  outputSchema: WarehouseSavedQueriesListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
