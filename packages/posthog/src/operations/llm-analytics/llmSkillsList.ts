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
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      description: Schema.String,
      license: Schema.optional(Schema.String),
      compatibility: Schema.optional(Schema.String),
      allowed_tools: Schema.optional(Schema.Array(Schema.String)),
      metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
      outline: Schema.Array(
        Schema.Struct({
          level: Schema.Number,
          text: Schema.String,
        }),
      ),
      version: Schema.Number,
      created_by: Schema.Struct({
        id: Schema.Number,
        uuid: Schema.String,
        distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
        first_name: Schema.optional(Schema.String),
        last_name: Schema.optional(Schema.String),
        email: Schema.String,
        is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
        hedgehog_config: Schema.NullOr(
          Schema.Record(Schema.String, Schema.Unknown),
        ),
        role_at_organization: Schema.optional(Schema.Unknown),
      }),
      created_at: Schema.String,
      updated_at: Schema.String,
      deleted: Schema.Boolean,
      is_latest: Schema.Boolean,
      latest_version: Schema.Number,
      version_count: Schema.Number,
      first_version_created_at: Schema.String,
    }),
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
