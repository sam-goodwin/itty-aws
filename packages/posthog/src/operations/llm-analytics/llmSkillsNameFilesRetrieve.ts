import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const LlmSkillsNameFilesRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    file_path: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_skills/name/{skill_name}/files/{file_path}/",
    }),
  );
export type LlmSkillsNameFilesRetrieveInput =
  typeof LlmSkillsNameFilesRetrieveInput.Type;

// Output Schema
export const LlmSkillsNameFilesRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    path: Schema.String,
    content: Schema.String,
    content_type: Schema.optional(Schema.String),
  });
export type LlmSkillsNameFilesRetrieveOutput =
  typeof LlmSkillsNameFilesRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version - Specific skill version to fetch. If omitted, the latest version is returned.
 */
export const llmSkillsNameFilesRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmSkillsNameFilesRetrieveInput,
    outputSchema: LlmSkillsNameFilesRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
