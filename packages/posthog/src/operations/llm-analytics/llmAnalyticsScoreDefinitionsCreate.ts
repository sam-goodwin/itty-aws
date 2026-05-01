import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsScoreDefinitionsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    kind: Schema.optional(
      Schema.Literals(["categorical", "numeric", "boolean"]),
    ),
    archived: Schema.optional(Schema.Boolean),
    config: Schema.optional(Schema.Unknown),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_analytics/score_definitions/",
    }),
  );
export type LlmAnalyticsScoreDefinitionsCreateInput =
  typeof LlmAnalyticsScoreDefinitionsCreateInput.Type;

// Output Schema
export const LlmAnalyticsScoreDefinitionsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.String),
    kind: Schema.optional(
      Schema.Literals(["categorical", "numeric", "boolean"]),
    ),
    archived: Schema.optional(Schema.Boolean),
    current_version: Schema.optional(Schema.Number),
    config: Schema.optional(Schema.Unknown),
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
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
    team: Schema.optional(Schema.Number),
  });
export type LlmAnalyticsScoreDefinitionsCreateOutput =
  typeof LlmAnalyticsScoreDefinitionsCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmAnalyticsScoreDefinitionsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsScoreDefinitionsCreateInput,
    outputSchema: LlmAnalyticsScoreDefinitionsCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
