import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface ProductToursListInput {
  project_id: string;
  limit?: number;
  offset?: number;
  search?: string;
}
export const ProductToursListInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/product_tours/" }),
) as unknown as Schema.Codec<ProductToursListInput>;

// Output Schema
export interface ProductToursListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: string;
    name?: string;
    description?: string;
    internal_targeting_flag?: {
      id?: number;
      team_id?: number;
      name?: string;
      key?: string;
      filters?: Record<string, unknown>;
      deleted?: boolean;
      active?: boolean;
      ensure_experience_continuity?: boolean | null;
      version?: number | null;
      evaluation_runtime?: "server" | "client" | "all" | "" | null;
      bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
      evaluation_contexts?: string[];
    };
    linked_flag?: {
      id?: number;
      team_id?: number;
      name?: string;
      key?: string;
      filters?: Record<string, unknown>;
      deleted?: boolean;
      active?: boolean;
      ensure_experience_continuity?: boolean | null;
      version?: number | null;
      evaluation_runtime?: "server" | "client" | "all" | "" | null;
      bucketing_identifier?: "distinct_id" | "device_id" | "" | null;
      evaluation_contexts?: string[];
    };
    targeting_flag_filters?: Record<string, unknown> | null;
    content?: unknown;
    draft_content?: unknown;
    has_draft?: boolean;
    auto_launch?: boolean;
    start_date?: string | null;
    end_date?: string | null;
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
    updated_at?: string;
    archived?: boolean;
    search_match_type?: "exact" | "similar" | null;
  }[];
}
export const ProductToursListOutput = /*@__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        internal_targeting_flag: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.Number),
            team_id: Schema.optional(Schema.Number),
            name: Schema.optional(Schema.String),
            key: Schema.optional(Schema.String),
            filters: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            deleted: Schema.optional(Schema.Boolean),
            active: Schema.optional(Schema.Boolean),
            ensure_experience_continuity: Schema.optional(
              Schema.NullOr(Schema.Boolean),
            ),
            version: Schema.optional(Schema.NullOr(Schema.Number)),
            evaluation_runtime: Schema.optional(
              Schema.NullOr(
                Schema.Union([
                  Schema.Literals(["server", "client", "all"]),
                  Schema.Literals([""]),
                ]),
              ),
            ),
            bucketing_identifier: Schema.optional(
              Schema.NullOr(
                Schema.Union([
                  Schema.Literals(["distinct_id", "device_id"]),
                  Schema.Literals([""]),
                ]),
              ),
            ),
            evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        linked_flag: Schema.optional(
          Schema.Struct({
            id: Schema.optional(Schema.Number),
            team_id: Schema.optional(Schema.Number),
            name: Schema.optional(Schema.String),
            key: Schema.optional(Schema.String),
            filters: Schema.optional(
              Schema.Record(Schema.String, Schema.Unknown),
            ),
            deleted: Schema.optional(Schema.Boolean),
            active: Schema.optional(Schema.Boolean),
            ensure_experience_continuity: Schema.optional(
              Schema.NullOr(Schema.Boolean),
            ),
            version: Schema.optional(Schema.NullOr(Schema.Number)),
            evaluation_runtime: Schema.optional(
              Schema.NullOr(
                Schema.Union([
                  Schema.Literals(["server", "client", "all"]),
                  Schema.Literals([""]),
                ]),
              ),
            ),
            bucketing_identifier: Schema.optional(
              Schema.NullOr(
                Schema.Union([
                  Schema.Literals(["distinct_id", "device_id"]),
                  Schema.Literals([""]),
                ]),
              ),
            ),
            evaluation_contexts: Schema.optional(Schema.Array(Schema.String)),
          }),
        ),
        targeting_flag_filters: Schema.optional(
          Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
        ),
        content: Schema.optional(Schema.Unknown),
        draft_content: Schema.optional(Schema.Unknown),
        has_draft: Schema.optional(Schema.Boolean),
        auto_launch: Schema.optional(Schema.Boolean),
        start_date: Schema.optional(Schema.NullOr(Schema.String)),
        end_date: Schema.optional(Schema.NullOr(Schema.String)),
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
        updated_at: Schema.optional(Schema.String),
        archived: Schema.optional(Schema.Boolean),
        search_match_type: Schema.optional(
          Schema.NullOr(Schema.Literals(["exact", "similar"])),
        ),
      }),
    ),
  ),
}) as unknown as Schema.Codec<ProductToursListOutput>;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Fuzzy match against product tour `name` and `description` using Postgres trigram word similarity. Supports typos and prefix-as-you-type.
 */
export const productToursList = /*@__PURE__*/ API.make(() => ({
  inputSchema: ProductToursListInput,
  outputSchema: ProductToursListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
