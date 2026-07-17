import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmSkillsNameExportRetrieveInput {
  project_id: string;
  skill_name: string;
  version?: number;
}
export const LlmSkillsNameExportRetrieveInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_skills/name/{skill_name}/export/",
    }),
  ) as unknown as Schema.Codec<LlmSkillsNameExportRetrieveInput>;

// Output Schema
export type LlmSkillsNameExportRetrieveOutput = void;
export const LlmSkillsNameExportRetrieveOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<LlmSkillsNameExportRetrieveOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version - Specific skill version to fetch. If omitted, the latest version is returned.
 */
export const llmSkillsNameExportRetrieve = /*@__PURE__*/ API.make(() => ({
  inputSchema: LlmSkillsNameExportRetrieveInput,
  outputSchema: LlmSkillsNameExportRetrieveOutput,
}));
