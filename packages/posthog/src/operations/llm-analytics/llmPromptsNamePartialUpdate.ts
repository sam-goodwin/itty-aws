import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmPromptsNamePartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    prompt_name: Schema.String.pipe(T.PathParam()),
    prompt: Schema.optional(Schema.Unknown),
    edits: Schema.optional(
      Schema.Array(
        Schema.Struct({
          old: Schema.String,
          new: Schema.String,
        }),
      ),
    ),
    base_version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/environments/{project_id}/llm_prompts/name/{prompt_name}/",
    }),
  );
export type LlmPromptsNamePartialUpdateInput =
  typeof LlmPromptsNamePartialUpdateInput.Type;

// Output Schema
export const LlmPromptsNamePartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type LlmPromptsNamePartialUpdateOutput =
  typeof LlmPromptsNamePartialUpdateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmPromptsNamePartialUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmPromptsNamePartialUpdateInput,
    outputSchema: LlmPromptsNamePartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
