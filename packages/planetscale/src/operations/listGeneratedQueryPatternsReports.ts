import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListGeneratedQueryPatternsReportsInput {
  organization: string;
  database: string;
  branch: string;
  starting_after?: string;
  ending_before?: string;
  limit?: number;
}
export const ListGeneratedQueryPatternsReportsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    starting_after: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/query-patterns",
    }),
  ) as unknown as Schema.Codec<ListGeneratedQueryPatternsReportsInput>;

// Output Schema
export interface ListGeneratedQueryPatternsReportsOutput {
  type: string;
  has_next: boolean;
  has_prev: boolean;
  cursor_start: string | null;
  cursor_end: string | null;
  data: {
    id: string;
    state: "pending" | "completed" | "failed";
    created_at: string;
    finished_at: string | null;
    url: string;
    download_url: string;
    actor: { id: string; display_name: string; avatar_url: string };
  }[];
}
export const ListGeneratedQueryPatternsReportsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    type: Schema.String,
    has_next: Schema.Boolean,
    has_prev: Schema.Boolean,
    cursor_start: Schema.NullOr(Schema.String),
    cursor_end: Schema.NullOr(Schema.String),
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        state: Schema.Literals(["pending", "completed", "failed"]),
        created_at: Schema.String,
        finished_at: Schema.NullOr(Schema.String),
        url: Schema.String,
        download_url: Schema.String,
        actor: Schema.Struct({
          id: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
        }),
      }),
    ),
  }) as unknown as Schema.Codec<ListGeneratedQueryPatternsReportsOutput>;

// The operation
/**
 * List generated query patterns reports
 *
 * @param organization - The name of the organization the branch belongs to
 * @param database - The name of the database the branch belongs to
 * @param branch - The name of the branch
 * @param starting_after - If provided, returns results after the specified cursor
 * @param ending_before - If provided, returns results before the specified cursor
 * @param limit - If provided, specifies the number of returned results (max 100)
 */
export const listGeneratedQueryPatternsReports =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ListGeneratedQueryPatternsReportsInput,
    outputSchema: ListGeneratedQueryPatternsReportsOutput,
    errors: [Forbidden, NotFound] as const,
  }));
