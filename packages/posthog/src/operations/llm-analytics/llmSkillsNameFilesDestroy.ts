import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmSkillsNameFilesDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file_path: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
    base_version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/environments/{project_id}/llm_skills/name/{skill_name}/files/{file_path}/",
    }),
  );
export type LlmSkillsNameFilesDestroyInput =
  typeof LlmSkillsNameFilesDestroyInput.Type;

// Output Schema
export const LlmSkillsNameFilesDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.String,
    body: Schema.String,
    license: Schema.optional(Schema.String),
    compatibility: Schema.optional(Schema.String),
    allowed_tools: Schema.optional(Schema.Array(Schema.String)),
    metadata: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    files: Schema.Array(
      Schema.Struct({
        path: Schema.String,
        content_type: Schema.optional(Schema.String),
      }),
    ),
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
  });
export type LlmSkillsNameFilesDestroyOutput =
  typeof LlmSkillsNameFilesDestroyOutput.Type;

// The operation
/**
 *
 * @param base_version - Latest version you are editing from. If provided, the request fails with 409 when another write has landed in the meantime.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmSkillsNameFilesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmSkillsNameFilesDestroyInput,
    outputSchema: LlmSkillsNameFilesDestroyOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
