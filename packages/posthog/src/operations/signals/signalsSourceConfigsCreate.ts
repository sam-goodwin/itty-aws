import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsSourceConfigsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
      ]),
    ),
    enabled: Schema.optional(Schema.Boolean),
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    status: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/signals/source_configs/",
    }),
  );
export type SignalsSourceConfigsCreateInput =
  typeof SignalsSourceConfigsCreateInput.Type;

// Output Schema
export const SignalsSourceConfigsCreateOutput =
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
      ]),
    ),
    enabled: Schema.optional(Schema.Boolean),
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    status: Schema.optional(Schema.NullOr(Schema.String)),
  });
export type SignalsSourceConfigsCreateOutput =
  typeof SignalsSourceConfigsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsSourceConfigsCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsSourceConfigsCreateInput,
    outputSchema: SignalsSourceConfigsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
