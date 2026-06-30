import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SessionGroupSummariesRetrieveInput {
  id: string;
  project_id: string;
}
export const SessionGroupSummariesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/session_group_summaries/{id}/",
    }),
  ) as unknown as Schema.Codec<SessionGroupSummariesRetrieveInput>;

// Output Schema
export interface SessionGroupSummariesRetrieveOutput {
  id?: string;
  title?: string;
  session_ids?: string[];
  summary?: unknown;
  extra_summary_context?: unknown;
  run_metadata?: unknown;
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
  team?: number;
}
export const SessionGroupSummariesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    title: Schema.optional(Schema.String),
    session_ids: Schema.optional(Schema.Array(Schema.String)),
    summary: Schema.optional(Schema.Unknown),
    extra_summary_context: Schema.optional(Schema.Unknown),
    run_metadata: Schema.optional(Schema.Unknown),
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
    team: Schema.optional(Schema.Number),
  }) as unknown as Schema.Codec<SessionGroupSummariesRetrieveOutput>;

// The operation
/**
 * API for retrieving and managing stored group session summaries.
 *
 * @param id - A UUID string identifying this session group summary.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const sessionGroupSummariesRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SessionGroupSummariesRetrieveInput,
    outputSchema: SessionGroupSummariesRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
