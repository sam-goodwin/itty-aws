import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmPromptsNameDuplicateCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    prompt_name: Schema.String.pipe(T.PathParam()),
    new_name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_prompts/name/{prompt_name}/duplicate/",
    }),
  );
export type LlmPromptsNameDuplicateCreateInput =
  typeof LlmPromptsNameDuplicateCreateInput.Type;

// Output Schema
export const LlmPromptsNameDuplicateCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    prompt: Schema.optional(Schema.Unknown),
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
    outline: Schema.optional(
      Schema.Array(
        Schema.Struct({
          level: Schema.optional(Schema.Number),
          text: Schema.optional(Schema.String),
        }),
      ),
    ),
  });
export type LlmPromptsNameDuplicateCreateOutput =
  typeof LlmPromptsNameDuplicateCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmPromptsNameDuplicateCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmPromptsNameDuplicateCreateInput,
    outputSchema: LlmPromptsNameDuplicateCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
