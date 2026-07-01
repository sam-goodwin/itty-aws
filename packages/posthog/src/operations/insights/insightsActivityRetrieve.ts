import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InsightsActivityRetrieveInput {
  id: number;
  project_id: string;
  format?: "csv" | "json";
  limit?: number;
  page?: number;
}
export const InsightsActivityRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    format: Schema.optional(Schema.Literals(["csv", "json"])),
    limit: Schema.optional(Schema.Number),
    page: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/insights/{id}/activity/",
    }),
  ) as unknown as Schema.Codec<InsightsActivityRetrieveInput>;

// Output Schema
export interface InsightsActivityRetrieveOutput {
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
export const InsightsActivityRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<InsightsActivityRetrieveOutput>;

// The operation
/**
 * Audit trail for a single insight — every change made to it, by whom, and when. Use this when you want the change history of a specific insight; use the project-wide activity endpoint for a broader view.
 *
 * @param id - A unique integer value identifying this insight.
 * @param limit - Page size. Defaults to 10.
 * @param page - 1-indexed page number. Defaults to 1.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const insightsActivityRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: InsightsActivityRetrieveInput,
    outputSchema: InsightsActivityRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
