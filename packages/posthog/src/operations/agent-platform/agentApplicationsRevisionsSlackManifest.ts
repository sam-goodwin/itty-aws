import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsRevisionsSlackManifestInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{application_id}/revisions/{id}/slack_manifest/",
    }),
  );
export type AgentApplicationsRevisionsSlackManifestInput =
  typeof AgentApplicationsRevisionsSlackManifestInput.Type;

// Output Schema
export const AgentApplicationsRevisionsSlackManifestOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    revision_id: Schema.String,
    manifest: Schema.Unknown,
    notes: Schema.Array(Schema.String),
    events_url: Schema.NullOr(Schema.String),
    interactivity_url: Schema.NullOr(Schema.String),
  });
export type AgentApplicationsRevisionsSlackManifestOutput =
  typeof AgentApplicationsRevisionsSlackManifestOutput.Type;

// The operation
/**
 * Build a Slack app manifest for this revision's slack trigger.
 * Deterministic: the OAuth scopes and bot event subscriptions are derived
 * from the slack trigger config (`mention_only` / `auto_resume_threads` /
 * `ack_reaction`) and the agent's Slack tools, so the manifest already
 * subscribes to exactly the events the config needs. 400 if the revision
 * has no slack trigger.
 *
 * @param id - A UUID string identifying this agent revision.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsRevisionsSlackManifest =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsRevisionsSlackManifestInput,
    outputSchema: AgentApplicationsRevisionsSlackManifestOutput,
  }));
