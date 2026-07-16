import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface GetBranchAnomalyInput {
  organization: string;
  database: string;
  branch: string;
  id: string;
}
export const GetBranchAnomalyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization: Schema.String.pipe(T.PathParam()),
  database: Schema.String.pipe(T.PathParam()),
  branch: Schema.String.pipe(T.PathParam()),
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "GET",
    path: "/organizations/{organization}/databases/{database}/branches/{branch}/insights/anomalies/{id}",
  }),
) as unknown as Schema.Codec<GetBranchAnomalyInput>;

// Output Schema
export interface GetBranchAnomalyOutput {
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
}
export const GetBranchAnomalyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
) as unknown as Schema.Codec<GetBranchAnomalyOutput>;

// The operation
/**
 * Retrieve a branch anomaly
 *
 * @param organization - Organization name slug from `list_organizations`. Example: `acme`.
 * @param database - Database name slug from `list_databases`. Example: `app-db`.
 * @param branch - Branch name from `list_branches`. Example: `main`.
 * @param id - The anomaly ID
 */
export const getBranchAnomaly = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetBranchAnomalyInput,
  outputSchema: GetBranchAnomalyOutput,
  errors: [Forbidden, NotFound] as const,
}));
