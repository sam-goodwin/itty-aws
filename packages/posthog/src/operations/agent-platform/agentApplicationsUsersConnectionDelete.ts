import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface AgentApplicationsUsersConnectionDeleteInput {
  agent_user_id: string;
  id: string;
  project_id: string;
  provider: string;
}
export const AgentApplicationsUsersConnectionDeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    agent_user_id: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    provider: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/agent_applications/{id}/users/{agent_user_id}/connections/{provider}/",
    }),
  ) as unknown as Schema.Codec<AgentApplicationsUsersConnectionDeleteInput>;

// Output Schema
export type AgentApplicationsUsersConnectionDeleteOutput = void;
export const AgentApplicationsUsersConnectionDeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<AgentApplicationsUsersConnectionDeleteOutput>;

// The operation
/**
 * Revoke one of an end-user's linked connections. The credential is marked revoked (kept for audit), so the agent can no longer act as that user on the provider.
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param provider - Identity provider id (e.g. 'posthog', 'github').
 */
export const agentApplicationsUsersConnectionDelete =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: AgentApplicationsUsersConnectionDeleteInput,
    outputSchema: AgentApplicationsUsersConnectionDeleteOutput,
  }));
