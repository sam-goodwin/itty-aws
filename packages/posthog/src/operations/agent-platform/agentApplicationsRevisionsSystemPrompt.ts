import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsRevisionsSystemPromptInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/system_prompt/",
    }),
  );
export type AgentApplicationsRevisionsSystemPromptInput =
  typeof AgentApplicationsRevisionsSystemPromptInput.Type;

// Output Schema
export const AgentApplicationsRevisionsSystemPromptOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revision_id: Schema.String,
    framework_prompt_version: Schema.Number,
    system_prompt: Schema.String,
  });
export type AgentApplicationsRevisionsSystemPromptOutput =
  typeof AgentApplicationsRevisionsSystemPromptOutput.Type;

// The operation
/**
 * Return the fully-assembled system prompt for this revision.
 * Authoring tools call this to preview what the model will actually
 * see at session start — the platform framework preamble plus the
 * bundle's `agent.md` plus the skills index. Useful for debugging
 * author-vs-framework precedence conflicts and verifying
 * `spec.framework_prompt.omit` overrides took effect.
 *
 * @param id - A UUID string identifying this agent revision.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsRevisionsSystemPrompt =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsRevisionsSystemPromptInput,
    outputSchema: AgentApplicationsRevisionsSystemPromptOutput,
  }));
