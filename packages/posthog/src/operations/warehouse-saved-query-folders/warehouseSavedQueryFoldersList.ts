import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface WarehouseSavedQueryFoldersListInput {
  project_id: string;
}
export const WarehouseSavedQueryFoldersListInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_saved_query_folders/",
    }),
  ) as unknown as Schema.Codec<WarehouseSavedQueryFoldersListInput>;

// Output Schema
export type WarehouseSavedQueryFoldersListOutput = {
  id?: string;
  name?: string;
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
  view_count?: number;
  user_access_level?: string | null;
}[];
export const WarehouseSavedQueryFoldersListOutput =
  /*@__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
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
      view_count: Schema.optional(Schema.Number),
      user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
    }),
  ) as unknown as Schema.Codec<WarehouseSavedQueryFoldersListOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseSavedQueryFoldersList =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: WarehouseSavedQueryFoldersListInput,
    outputSchema: WarehouseSavedQueryFoldersListOutput,
    errors: [Forbidden, NotFound] as const,
  }));
