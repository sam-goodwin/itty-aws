import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

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
  count: Schema.Number,
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      name: Schema.String,
      prompt: Schema.Unknown,
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
      outline: Schema.Array(
        Schema.Struct({
          level: Schema.Number,
          text: Schema.String,
        }),
      ),
      prompt_preview: Schema.String,
      prompt_size_bytes: Schema.Number,
    }),
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
