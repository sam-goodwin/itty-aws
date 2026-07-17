import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListSchemaRecommendationsInput {
  organization: string;
  database: string;
  state?: "open" | "closed";
  page?: number;
  per_page?: number;
}
export const ListSchemaRecommendationsInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    state: Schema.optional(Schema.Literals(["open", "closed"])),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/schema-recommendations",
    }),
  ) as unknown as Schema.Codec<ListSchemaRecommendationsInput>;

// Output Schema
export interface ListSchemaRecommendationsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    html_url: string;
    title: string;
    table_name: string;
    keyspace: string;
    ddl_statement: string;
    number: number;
    state: "open" | "applied" | "dismissed" | "stale";
    recommendation_type:
      | "unused_table"
      | "unused_index"
      | "duplicate_index"
      | "sequence_overflow"
      | "sequence_overflow_foreign_key"
      | "new_index"
      | "encoding_upgrade"
      | "bloated_table"
      | "bloated_index";
    created_at: string;
    updated_at: string;
    applied_at: string | null;
    dismissed_at: string | null;
    closed_by_deploy_request: {
      id: string;
      branch_id: string;
      number: number;
    } | null;
    dismissed_by: {
      id: string;
      display_name: string;
      avatar_url: string;
    } | null;
  }>;
}
export const ListSchemaRecommendationsOutput =
  /*@__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        html_url: Schema.String,
        title: Schema.String,
        table_name: Schema.String,
        keyspace: Schema.String,
        ddl_statement: Schema.String,
        number: Schema.Number,
        state: Schema.Literals(["open", "applied", "dismissed", "stale"]),
        recommendation_type: Schema.Literals([
          "unused_table",
          "unused_index",
          "duplicate_index",
          "sequence_overflow",
          "sequence_overflow_foreign_key",
          "new_index",
          "encoding_upgrade",
          "bloated_table",
          "bloated_index",
        ]),
        created_at: Schema.String,
        updated_at: Schema.String,
        applied_at: Schema.NullOr(Schema.String),
        dismissed_at: Schema.NullOr(Schema.String),
        closed_by_deploy_request: Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            branch_id: Schema.String,
            number: Schema.Number,
          }),
        ),
        dismissed_by: Schema.NullOr(
          Schema.Struct({
            id: Schema.String,
            display_name: Schema.String,
            avatar_url: Schema.String,
          }),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ListSchemaRecommendationsOutput>;

// The operation
/**
 * List schema recommendations
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param state - Filter by recommendation state
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listSchemaRecommendations =
  /*@__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListSchemaRecommendationsInput,
    outputSchema: ListSchemaRecommendationsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
