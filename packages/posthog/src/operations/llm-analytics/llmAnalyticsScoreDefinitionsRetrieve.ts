import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmAnalyticsScoreDefinitionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_analytics/score_definitions/{id}/",
    }),
  );
export type LlmAnalyticsScoreDefinitionsRetrieveInput =
  typeof LlmAnalyticsScoreDefinitionsRetrieveInput.Type;

// Output Schema
export const LlmAnalyticsScoreDefinitionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    kind: Schema.optional(
      Schema.Literals(["categorical", "numeric", "boolean"]),
    ),
    archived: Schema.optional(Schema.Boolean),
    current_version: Schema.optional(Schema.Number),
    current_version_id: Schema.optional(Schema.NullOr(Schema.String)),
    config: Schema.optional(Schema.Unknown),
    created_by: Schema.optional(Schema.Unknown),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    team: Schema.optional(Schema.Number),
  });
export type LlmAnalyticsScoreDefinitionsRetrieveOutput =
  typeof LlmAnalyticsScoreDefinitionsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this score definition.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsScoreDefinitionsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsScoreDefinitionsRetrieveInput,
    outputSchema: LlmAnalyticsScoreDefinitionsRetrieveOutput,
  }));
