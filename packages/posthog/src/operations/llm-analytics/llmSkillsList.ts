import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmSkillsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({ method: "GET", path: "/api/environments/{project_id}/llm_skills/" }),
);
export type LlmSkillsListInput = typeof LlmSkillsListInput.Type;

// Output Schema
export const LlmSkillsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        license: Schema.optional(Schema.String),
        compatibility: Schema.optional(Schema.String),
        allowed_tools: Schema.optional(Schema.Array(Schema.String)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
        outline: Schema.optional(
          Schema.Array(
            Schema.Struct({
              level: Schema.optional(Schema.Number),
              text: Schema.optional(Schema.String),
            }),
          ),
        ),
        version: Schema.optional(Schema.Number),
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
        updated_at: Schema.optional(Schema.String),
        deleted: Schema.optional(Schema.Boolean),
        is_latest: Schema.optional(Schema.Boolean),
        latest_version: Schema.optional(Schema.Number),
        version_count: Schema.optional(Schema.Number),
        first_version_created_at: Schema.optional(Schema.String),
      }),
    ),
  ),
});
export type LlmSkillsListOutput = typeof LlmSkillsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Optional substring filter applied to skill names and descriptions.
 */
export const llmSkillsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LlmSkillsListInput,
  outputSchema: LlmSkillsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
