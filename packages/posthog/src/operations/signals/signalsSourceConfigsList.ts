import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SignalsSourceConfigsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/signals/source_configs/",
    }),
  );
export type SignalsSourceConfigsListInput =
  typeof SignalsSourceConfigsListInput.Type;

// Output Schema
export const SignalsSourceConfigsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  });
export type SignalsSourceConfigsListOutput =
  typeof SignalsSourceConfigsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const signalsSourceConfigsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SignalsSourceConfigsListInput,
    outputSchema: SignalsSourceConfigsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
