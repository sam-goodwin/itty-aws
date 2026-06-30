import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const LlmSkillsNameExportRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
    version: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/llm_skills/name/{skill_name}/export/",
    }),
  );
export type LlmSkillsNameExportRetrieveInput =
  typeof LlmSkillsNameExportRetrieveInput.Type;

// Output Schema
export const LlmSkillsNameExportRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LlmSkillsNameExportRetrieveOutput =
  typeof LlmSkillsNameExportRetrieveOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version - Specific skill version to fetch. If omitted, the latest version is returned.
 */
export const llmSkillsNameExportRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmSkillsNameExportRetrieveInput,
    outputSchema: LlmSkillsNameExportRetrieveOutput,
  }),
);
