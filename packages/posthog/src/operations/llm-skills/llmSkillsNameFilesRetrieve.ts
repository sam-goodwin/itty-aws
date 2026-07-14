import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmSkillsNameFilesRetrieveInput {
  file_path: string;
  project_id: string;
  skill_name: string;
  version?: number;
}
export const LlmSkillsNameFilesRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    file_path: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_skills/name/{skill_name}/files/{file_path}/",
    }),
  ) as unknown as Schema.Codec<LlmSkillsNameFilesRetrieveInput>;

// Output Schema
export interface LlmSkillsNameFilesRetrieveOutput {
  path?: string;
  content?: string;
  content_type?: string;
}
export const LlmSkillsNameFilesRetrieveOutput =
  /*@__PURE__*/ Schema.Struct({
    path: Schema.optional(Schema.String),
    content: Schema.optional(Schema.String),
    content_type: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<LlmSkillsNameFilesRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version - Specific skill version to fetch. If omitted, the latest version is returned.
 */
export const llmSkillsNameFilesRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: LlmSkillsNameFilesRetrieveInput,
  outputSchema: LlmSkillsNameFilesRetrieveOutput,
}));
