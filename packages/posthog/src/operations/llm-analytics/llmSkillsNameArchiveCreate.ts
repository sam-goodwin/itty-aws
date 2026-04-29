import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmSkillsNameArchiveCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/environments/{project_id}/llm_skills/name/{skill_name}/archive/",
    }),
  );
export type LlmSkillsNameArchiveCreateInput =
  typeof LlmSkillsNameArchiveCreateInput.Type;

// Output Schema
export const LlmSkillsNameArchiveCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type LlmSkillsNameArchiveCreateOutput =
  typeof LlmSkillsNameArchiveCreateOutput.Type;

// The operation
/**
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const llmSkillsNameArchiveCreate = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: LlmSkillsNameArchiveCreateInput,
    outputSchema: LlmSkillsNameArchiveCreateOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
