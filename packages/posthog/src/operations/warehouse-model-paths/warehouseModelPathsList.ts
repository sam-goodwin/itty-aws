import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface WarehouseModelPathsListInput {
  project_id: string;
  limit?: number;
  offset?: number;
}
export const WarehouseModelPathsListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_model_paths/",
    }),
  ) as unknown as Schema.Codec<WarehouseModelPathsListInput>;

// Output Schema
export interface WarehouseModelPathsListOutput {
  count: number;
  next?: string | null;
  previous?: string | null;
  results: {
    id: string;
    path: string[];
    team: number;
    table?: string | null;
    saved_query?: string | null;
    created_at: string;
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
    updated_at: string | null;
  }[];
}
export const WarehouseModelPathsListOutput =
  /*@__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        path: Schema.Array(Schema.String),
        team: Schema.Number,
        table: Schema.optional(Schema.NullOr(Schema.String)),
        saved_query: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.String,
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
        updated_at: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<WarehouseModelPathsListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseModelPathsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: WarehouseModelPathsListInput,
  outputSchema: WarehouseModelPathsListOutput,
}));
