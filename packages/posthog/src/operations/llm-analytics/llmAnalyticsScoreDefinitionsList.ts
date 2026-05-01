import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmAnalyticsScoreDefinitionsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    archived: Schema.optional(Schema.Boolean),
    kind: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    order_by: Schema.optional(Schema.String),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_analytics/score_definitions/",
    }),
  );
export type LlmAnalyticsScoreDefinitionsListInput =
  typeof LlmAnalyticsScoreDefinitionsListInput.Type;

// Output Schema
export const LlmAnalyticsScoreDefinitionsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
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
        }),
      ),
    ),
  });
export type LlmAnalyticsScoreDefinitionsListOutput =
  typeof LlmAnalyticsScoreDefinitionsListOutput.Type;

// The operation
/**
 *
 * @param archived - Filter by archived state.
 * @param kind - Filter by scorer kind.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param order_by - Sort by name, kind, created_at, updated_at, or current_version.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Search scorers by name or description.
 */
export const llmAnalyticsScoreDefinitionsList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmAnalyticsScoreDefinitionsListInput,
    outputSchema: LlmAnalyticsScoreDefinitionsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
