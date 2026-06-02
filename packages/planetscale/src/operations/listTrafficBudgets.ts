import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ListTrafficBudgetsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    database: Schema.String.pipe(T.PathParam()),
    branch: Schema.String.pipe(T.PathParam()),
    page: Schema.optional(Schema.Number),
    per_page: Schema.optional(Schema.Number),
    period: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    fingerprint: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{organization}/databases/{database}/branches/{branch}/traffic/budgets",
    }),
  );
export type ListTrafficBudgetsInput = typeof ListTrafficBudgetsInput.Type;

// Output Schema
export const ListTrafficBudgetsOutput =
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
            kind: Schema.Literals(["match"]),
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
  });
export type ListTrafficBudgetsOutput = typeof ListTrafficBudgetsOutput.Type;

// The operation
/**
 * List traffic budgets
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param page - If provided, specifies the page offset of returned results
 * @param per_page - If provided, specifies the number of returned results
 * @param period - Time period filter (e.g., '1h', '24h', '7d')
 * @param created_at - Filter by creation date range (format: 'start..end')
 * @param fingerprint - Filter budgets by query fingerprint
 */
export const listTrafficBudgets = /*@__PURE__*/ /*#__PURE__*/ API.makePaginated(
  () => ({
    inputSchema: ListTrafficBudgetsInput,
    outputSchema: ListTrafficBudgetsOutput,
    errors: [Forbidden, NotFound] as const,
    pagination: {
      mode: "page",
      inputToken: "page",
      outputToken: "next_page",
      items: "data",
    },
  }),
);
