import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface LlmSkillsNameArchiveCreateInput {
  project_id: string;
  skill_name: string;
}
export const LlmSkillsNameArchiveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/llm_skills/name/{skill_name}/archive/",
    }),
  ) as unknown as Schema.Codec<LlmSkillsNameArchiveCreateInput>;

// Output Schema
export type LlmSkillsNameArchiveCreateOutput = void;
export const LlmSkillsNameArchiveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<LlmSkillsNameArchiveCreateOutput>;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmSkillsNameArchiveCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmSkillsNameArchiveCreateInput,
    outputSchema: LlmSkillsNameArchiveCreateOutput,
  }),
);
