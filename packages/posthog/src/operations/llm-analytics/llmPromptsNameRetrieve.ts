import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmPromptsNameRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    prompt_name: Schema.String.pipe(T.PathParam()),
    content: Schema.optional(Schema.Literals(["full", "preview", "none"])),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_prompts/name/{prompt_name}/",
    }),
  );
export type LlmPromptsNameRetrieveInput =
  typeof LlmPromptsNameRetrieveInput.Type;

// Output Schema
export const LlmPromptsNameRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    prompt: Schema.optional(Schema.Unknown),
    prompt_preview: Schema.optional(Schema.String),
    outline: Schema.Array(
      Schema.Struct({
        level: Schema.Number,
        text: Schema.String,
      }),
    ),
    version: Schema.Number,
    created_at: Schema.String,
    updated_at: Schema.String,
    deleted: Schema.Boolean,
    is_latest: Schema.Boolean,
    latest_version: Schema.Number,
    version_count: Schema.Number,
    first_version_created_at: Schema.String,
  });
export type LlmPromptsNameRetrieveOutput =
  typeof LlmPromptsNameRetrieveOutput.Type;

// The operation
/**
 *
 * @param content - Controls how much prompt content is included in the response. 'full' includes the full prompt, 'preview' includes a short prompt_preview, and 'none' omits prompt content entirely. The outline field is always included.

* `full` - full
* `preview` - preview
* `none` - none
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version - Specific prompt version to fetch. If omitted, the latest version is returned.
 */
export const llmPromptsNameRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmPromptsNameRetrieveInput,
    outputSchema: LlmPromptsNameRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
