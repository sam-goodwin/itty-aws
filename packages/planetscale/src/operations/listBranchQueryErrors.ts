import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListBranchQueryErrorsInput {
  organization: string;
  database: string;
  branch: string;
  q?: string;
  from?: string;
  to?: string;
  period?: string;
  sort?: "error" | "lastRun" | "count" | "totalTime" | "timePerQuery";
  dir?: "asc" | "desc";
  tablet_type?: "primary" | "replica" | "rdonly";
  page?: number;
  per_page?: number;
}
export const ListBranchQueryErrorsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    q: Schema.optional(Schema.String),
    from: Schema.optional(Schema.String),
    to: Schema.optional(Schema.String),
    period: Schema.optional(Schema.String),
    sort: Schema.optional(
      Schema.Literals([
        "error",
        "lastRun",
        "count",
        "totalTime",
        "timePerQuery",
      ]),
    ),
    dir: Schema.optional(Schema.Literals(["asc", "desc"])),
    tablet_type: Schema.optional(
      Schema.Literals(["primary", "replica", "rdonly"]),
    ),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/errors",
    }),
  ) as unknown as Schema.Codec<ListBranchQueryErrorsInput>;

// Output Schema
export interface ListBranchQueryErrorsOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    error_fingerprint: string;
    started_at: string;
    total_duration_millis: number;
    time_per_query: number;
    error_count: number;
    error_message: string;
  }>;
}
export const ListBranchQueryErrorsOutput =
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
        error_fingerprint: Schema.String,
        started_at: Schema.String,
        total_duration_millis: Schema.Number,
        time_per_query: Schema.Number,
        error_count: Schema.Number,
        error_message: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ListBranchQueryErrorsOutput>;

// The operation
/**
 * List branch query errors
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param q - Search query errors by error message
 * @param from - Start time for filtering query errors (ISO 8601 timestamp)
 * @param to - End time for filtering query errors (ISO 8601 timestamp)
 * @param period - Time period for filtering query errors (e.g., '1h', '24h')
 * @param sort - Field to sort by
 * @param dir - Sort direction
 * @param tablet_type - Filter by tablet type
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 */
export const listBranchQueryErrors =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListBranchQueryErrorsInput,
    outputSchema: ListBranchQueryErrorsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
