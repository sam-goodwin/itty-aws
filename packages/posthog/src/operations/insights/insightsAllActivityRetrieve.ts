import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsAllActivityRetrieveInput {
  project_id: string;
  format?: "csv" | "json";
  limit?: number;
  page?: number;
}
export const InsightsAllActivityRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    limit: Schema.optional(Schema.Number),
    page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/activity/",
    }),
  ) as unknown as Schema.Codec<InsightsAllActivityRetrieveInput>;

// Output Schema
export interface InsightsAllActivityRetrieveOutput {
  results?: {
    id?: string;
    user?: unknown | null;
    activity?: string;
    scope?: string;
    item_id?: string;
    detail?: {
      id?: string;
      changes?: {
        type?: string;
        action?: string;
        field?: string;
        before?: unknown;
        after?: unknown;
      }[];
      merge?: { type?: string; source?: unknown; target?: unknown };
      trigger?: { job_type?: string; job_id?: string; payload?: unknown };
      name?: string;
      short_id?: string;
      type?: string;
    };
    created_at?: string;
  }[];
  next?: string | null;
  previous?: string | null;
  total_count?: number;
}
export const InsightsAllActivityRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          user: Schema.optional(Schema.NullOr(Schema.Unknown)),
          activity: Schema.optional(Schema.String),
          scope: Schema.optional(Schema.String),
          item_id: Schema.optional(Schema.String),
          detail: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              changes: Schema.optional(
                Schema.Array(
                  Schema.Struct({
                    type: Schema.optional(Schema.String),
                    action: Schema.optional(Schema.String),
                    field: Schema.optional(Schema.String),
                    before: Schema.optional(Schema.Unknown),
                    after: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
              merge: Schema.optional(
                Schema.Struct({
                  type: Schema.optional(Schema.String),
                  source: Schema.optional(Schema.Unknown),
                  target: Schema.optional(Schema.Unknown),
                }),
              ),
              trigger: Schema.optional(
                Schema.Struct({
                  job_type: Schema.optional(Schema.String),
                  job_id: Schema.optional(Schema.String),
                  payload: Schema.optional(Schema.Unknown),
                }),
              ),
              name: Schema.optional(Schema.String),
              short_id: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
            }),
          ),
          created_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    total_count: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<InsightsAllActivityRetrieveOutput>;

// The operation
/**
 * Project-wide audit trail across all insights — who created, edited, deleted, or restored insights, what changed (with before/after diffs), and when. Useful for surfacing what people (or agents) have been working on recently.
 *
 * @param limit - Page size. Defaults to 10.
 * @param page - 1-indexed page number. Defaults to 1.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsAllActivityRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: InsightsAllActivityRetrieveInput,
  outputSchema: InsightsAllActivityRetrieveOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
