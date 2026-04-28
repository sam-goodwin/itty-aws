import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const SignalsSourceConfigsUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    source_product: Schema.Literals([
      "session_replay",
      "llm_analytics",
      "github",
      "linear",
      "zendesk",
      "conversations",
      "error_tracking",
    ]),
    source_type: Schema.Literals([
      "session_analysis_cluster",
      "evaluation",
      "issue",
      "ticket",
      "issue_created",
      "issue_reopened",
      "issue_spiking",
    ]),
    enabled: Schema.optional(Schema.Boolean),
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    updated_at: Schema.String,
    status: Schema.NullOr(Schema.String),
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/signals/source_configs/{id}/",
    }),
  );
export type SignalsSourceConfigsUpdateInput =
  typeof SignalsSourceConfigsUpdateInput.Type;

// Output Schema
export const SignalsSourceConfigsUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    source_product: Schema.Literals([
      "session_replay",
      "llm_analytics",
      "github",
      "linear",
      "zendesk",
      "conversations",
      "error_tracking",
    ]),
    source_type: Schema.Literals([
      "session_analysis_cluster",
      "evaluation",
      "issue",
      "ticket",
      "issue_created",
      "issue_reopened",
      "issue_spiking",
    ]),
    enabled: Schema.optional(Schema.Boolean),
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    updated_at: Schema.String,
    status: Schema.NullOr(Schema.String),
  });
export type SignalsSourceConfigsUpdateOutput =
  typeof SignalsSourceConfigsUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this signal source config.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsSourceConfigsUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsSourceConfigsUpdateInput,
    outputSchema: SignalsSourceConfigsUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
