import * as Schema from "effect/Schema";
import { LLMPromptListSchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmPromptsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  content: Schema.optional(Schema.Literals(["full", "preview", "none"])),
  created_by_id: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
  search: Schema.optional(Schema.String),
}).pipe(
  T.Http({
    method: "GET",
    path: "/api/environments/{project_id}/llm_prompts/",
  }),
);
export type LlmPromptsListInput = typeof LlmPromptsListInput.Type;

// Output Schema
export const LlmPromptsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(Schema.suspend(() => LLMPromptListSchema)),
  ),
});
export type LlmPromptsListOutput = typeof LlmPromptsListOutput.Type;

// The operation
/**
 *
 * @param content - Controls how much prompt content is included in the response. 'full' includes the full prompt, 'preview' includes a short prompt_preview, and 'none' omits prompt content entirely. The outline field is always included.

* `full` - full
* `preview` - preview
* `none` - none
 * @param created_by_id - Filter prompts by the ID of the user who created them.
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - Optional substring filter applied to prompt names and prompt content.
 */
export const llmPromptsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LlmPromptsListInput,
  outputSchema: LlmPromptsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
