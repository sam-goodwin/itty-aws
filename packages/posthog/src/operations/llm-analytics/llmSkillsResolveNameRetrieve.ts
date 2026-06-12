import * as Schema from "effect/Schema";
import { LLMSkillSchema, LLMSkillVersionSummarySchema } from "./_schemas.ts";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const LlmSkillsResolveNameRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    skill_name: Schema.String.pipe(T.PathParam()),
    before_version: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    version: Schema.optional(Schema.Number),
    version_id: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/environments/{project_id}/llm_skills/resolve/name/{skill_name}/",
    }),
  );
export type LlmSkillsResolveNameRetrieveInput =
  typeof LlmSkillsResolveNameRetrieveInput.Type;

// Output Schema
export const LlmSkillsResolveNameRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    skill: Schema.optional(Schema.suspend(() => LLMSkillSchema)),
    versions: Schema.optional(
      Schema.Array(Schema.suspend(() => LLMSkillVersionSummarySchema)),
    ),
    has_more: Schema.optional(Schema.Boolean),
  });
export type LlmSkillsResolveNameRetrieveOutput =
  typeof LlmSkillsResolveNameRetrieveOutput.Type;

// The operation
/**
 *
 * @param before_version - Return versions older than this version number. Mutually exclusive with offset.
 * @param limit - Maximum number of versions to return per page (1-100).
 * @param offset - Zero-based offset into version history for pagination. Mutually exclusive with before_version.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param version - Specific skill version to fetch. If omitted, the latest version is returned.
 * @param version_id - Exact skill version UUID to resolve.
 */
export const llmSkillsResolveNameRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: LlmSkillsResolveNameRetrieveInput,
    outputSchema: LlmSkillsResolveNameRetrieveOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
