import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmPromptsNameRetrieveInput {
  project_id: string;
  prompt_name: string;
  content?: "full" | "preview" | "none";
  version?: number;
}
export const LlmPromptsNameRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    prompt_name: Schema.String.pipe(T.PathParam()),
    content: Schema.optional(Schema.Literals(["full", "preview", "none"])),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_prompts/name/{prompt_name}/",
    }),
  ) as unknown as Schema.Codec<LlmPromptsNameRetrieveInput>;

// Output Schema
export interface LlmPromptsNameRetrieveOutput {
  id?: string;
  name?: string;
  prompt?: unknown;
  prompt_preview?: string;
  outline?: { level?: number; text?: string }[];
  version?: number;
  created_at?: string;
  updated_at?: string;
  deleted?: boolean;
  is_latest?: boolean;
  latest_version?: number;
  version_count?: number;
  first_version_created_at?: string;
}
export const LlmPromptsNameRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    prompt: Schema.optional(Schema.Unknown),
    prompt_preview: Schema.optional(Schema.String),
    outline: Schema.optional(
      Schema.Array(
        Schema.Struct({
          level: Schema.optional(Schema.Number),
          text: Schema.optional(Schema.String),
        }),
      ),
    ),
    version: Schema.optional(Schema.Number),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
    deleted: Schema.optional(Schema.Boolean),
    is_latest: Schema.optional(Schema.Boolean),
    latest_version: Schema.optional(Schema.Number),
    version_count: Schema.optional(Schema.Number),
    first_version_created_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LlmPromptsNameRetrieveOutput>;

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
export const llmPromptsNameRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: LlmPromptsNameRetrieveInput,
  outputSchema: LlmPromptsNameRetrieveOutput,
}));
