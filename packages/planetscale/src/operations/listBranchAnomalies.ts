import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListBranchAnomaliesInput {
  organization: string;
  database: string;
  branch: string;
  from?: string;
  to?: string;
  period?: string;
  page?: number;
  per_page?: number;
}
export const ListBranchAnomaliesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
    period: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/anomalies",
    }),
  ) as unknown as Schema.Codec<ListBranchAnomaliesInput>;

// Output Schema
export interface ListBranchAnomaliesOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    period_start: string;
    period_end: string;
    minutes_in_violation: number;
    active: boolean;
    duration: number;
    metrics_start: string;
    metrics_end: string;
    correlations?: ReadonlyArray<{
      id: string;
      r: number;
      keyspace: string;
      fingerprint: string;
      normalized_sql: string;
      syntax_highlighted_sql: string;
      tablet_type: "primary" | "replica" | "rdonly";
    }> | null;
  }>;
}
export const ListBranchAnomaliesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    current_page: Schema.Number,
    next_page: Schema.NullOr(Schema.Number),
    next_page_url: Schema.NullOr(Schema.String),
    prev_page: Schema.NullOr(Schema.Number),
    prev_page_url: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        period_start: Schema.String,
        period_end: Schema.String,
        minutes_in_violation: Schema.Number,
        active: Schema.Boolean,
        duration: Schema.Number,
        metrics_start: Schema.String,
        metrics_end: Schema.String,
        correlations: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.Struct({
                id: Schema.String,
                r: Schema.Number,
                keyspace: Schema.String,
                fingerprint: Schema.String,
                normalized_sql: Schema.String,
                syntax_highlighted_sql: Schema.String,
                tablet_type: Schema.Literals(["primary", "replica", "rdonly"]),
              }),
            ),
          ),
        ),
      }),
    ),
  }) as unknown as Schema.Codec<ListBranchAnomaliesOutput>;

// The operation
/**
 * List branch anomalies
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param from - Start time for filtering anomalies (ISO 8601 timestamp)
 * @param to - End time for filtering anomalies (ISO 8601 timestamp)
 * @param period - Time period for filtering anomalies (e.g., '1h', '24h')
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listBranchAnomalies =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListBranchAnomaliesInput,
    outputSchema: ListBranchAnomaliesOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
