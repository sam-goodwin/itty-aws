import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface ListTrafficBudgetsForQueryInput {
  organization: string;
  database: string;
  branch: string;
  fingerprint: string;
  page?: number;
  per_page?: number;
  keyspace?: string;
}
export const ListTrafficBudgetsForQueryInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    fingerprint: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
    keyspace: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/{fingerprint}/traffic/budgets",
    }),
  ) as unknown as Schema.Codec<ListTrafficBudgetsForQueryInput>;

// Output Schema
export interface ListTrafficBudgetsForQueryOutput {
  type: string;
  current_page: number;
  next_page: number | null;
  next_page_url: string | null;
  prev_page: number | null;
  prev_page_url: string | null;
  data: ReadonlyArray<{
    id: string;
    name: string;
    mode: "enforce" | "warn" | "off";
    capacity?: number | null;
    rate?: number | null;
    burst?: number | null;
    concurrency?: number | null;
    warning_threshold?: number | null;
    actor: { id: string; display_name: string; avatar_url: string };
    rules: ReadonlyArray<{
      id: string;
      kind: "match" | "each";
      tags: ReadonlyArray<{
        key_id: string;
        key: string;
        value: string;
        source: "sql" | "system";
      }>;
      fingerprint?: string | null;
      keyspace?: string | null;
      actor: { id: string; display_name: string; avatar_url: string };
      syntax_highlighted_sql: string;
      created_at: string;
      updated_at: string;
    }>;
    created_at: string;
    updated_at: string;
  }>;
}
export const ListTrafficBudgetsForQueryOutput =
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
        name: Schema.String,
        mode: Schema.Literals(["enforce", "warn", "off"]),
        capacity: Schema.optional(Schema.NullOr(Schema.Number)),
        rate: Schema.optional(Schema.NullOr(Schema.Number)),
        burst: Schema.optional(Schema.NullOr(Schema.Number)),
        concurrency: Schema.optional(Schema.NullOr(Schema.Number)),
        warning_threshold: Schema.optional(Schema.NullOr(Schema.Number)),
        actor: Schema.Struct({
          id: Schema.String,
          display_name: Schema.String,
          avatar_url: Schema.String,
        }),
        rules: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            kind: Schema.Literals(["match", "each"]),
            tags: Schema.Array(
              Schema.Struct({
                key_id: Schema.String,
                key: Schema.String,
                value: Schema.String,
                source: Schema.Literals(["sql", "system"]),
              }),
            ),
            fingerprint: Schema.optional(Schema.NullOr(Schema.String)),
            keyspace: Schema.optional(Schema.NullOr(Schema.String)),
            actor: Schema.Struct({
              id: Schema.String,
              display_name: Schema.String,
              avatar_url: Schema.String,
            }),
            syntax_highlighted_sql: Schema.String,
            created_at: Schema.String,
            updated_at: Schema.String,
          }),
        ),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
  }) as unknown as Schema.Codec<ListTrafficBudgetsForQueryOutput>;

// The operation
/**
 * List traffic budgets affecting a query fingerprint
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param fingerprint - The query fingerprint
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 * @param keyspace - Optional keyspace filter
 */
export const listTrafficBudgetsForQuery =
  /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(() => ({
    inputSchema: ListTrafficBudgetsForQueryInput,
    outputSchema: ListTrafficBudgetsForQueryOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }));
