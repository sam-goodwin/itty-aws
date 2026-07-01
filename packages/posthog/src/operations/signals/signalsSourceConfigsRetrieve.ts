import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface SignalsSourceConfigsRetrieveInput {
  id: string;
  project_id: string;
}
export const SignalsSourceConfigsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/source_configs/{id}/",
    }),
  ) as unknown as Schema.Codec<SignalsSourceConfigsRetrieveInput>;

// Output Schema
export interface SignalsSourceConfigsRetrieveOutput {
  id?: string;
  source_product?:
    | "session_replay"
    | "llm_analytics"
    | "github"
    | "linear"
    | "zendesk"
    | "conversations"
    | "error_tracking"
    | "pganalyze"
    | "signals_scout"
    | "logs"
    | "health_checks"
    | "endpoints"
    | "replay_vision";
  source_type?:
    | "session_analysis_cluster"
    | "evaluation"
    | "issue"
    | "ticket"
    | "issue_created"
    | "issue_reopened"
    | "issue_spiking"
    | "cross_source_issue"
    | "alert_state_change"
    | "health_issue"
    | "endpoint_execution_failed"
    | "endpoint_breakdown_limit_exceeded"
    | "scanner_finding";
  enabled?: boolean;
  config?: unknown;
  created_at?: string;
  updated_at?: string;
  status?: string | null;
}
export const SignalsSourceConfigsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    source_product: Schema.optional(
      Schema.Literals([
        "session_replay",
        "llm_analytics",
        "github",
        "linear",
        "zendesk",
        "conversations",
        "error_tracking",
        "pganalyze",
        "signals_scout",
        "logs",
        "health_checks",
        "endpoints",
        "replay_vision",
      ]),
    ),
    source_type: Schema.optional(
      Schema.Literals([
        "session_analysis_cluster",
        "evaluation",
        "issue",
        "ticket",
        "issue_created",
        "issue_reopened",
        "issue_spiking",
        "cross_source_issue",
        "alert_state_change",
        "health_issue",
        "endpoint_execution_failed",
        "endpoint_breakdown_limit_exceeded",
        "scanner_finding",
      ]),
    ),
    enabled: Schema.optional(Schema.Boolean),
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    status: Schema.optional(Schema.NullOr(Schema.String)),
  }) as unknown as Schema.Codec<SignalsSourceConfigsRetrieveOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this signal source config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsSourceConfigsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SignalsSourceConfigsRetrieveInput,
    outputSchema: SignalsSourceConfigsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
