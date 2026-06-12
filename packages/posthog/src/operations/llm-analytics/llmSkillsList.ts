import * as Schema from "effect/Schema";
import { LLMSkillListSchema } from "./_schemas.ts";
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
    Schema.Array(Schema.suspend(() => LLMSkillListSchema)),
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
