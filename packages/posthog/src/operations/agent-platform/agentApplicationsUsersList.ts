import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const AgentApplicationsUsersListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/agent_applications/{id}/users/",
    }),
  );
export type AgentApplicationsUsersListInput =
  typeof AgentApplicationsUsersListInput.Type;

// Output Schema
export const AgentApplicationsUsersListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        principal_kind: Schema.String,
        principal_id: Schema.String,
        metadata: Schema.optional(Schema.Unknown),
        created_at: Schema.String,
        connections: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            provider: Schema.String,
            scopes: Schema.Array(Schema.String),
            state: Schema.String,
            subject: Schema.optional(Schema.NullOr(Schema.String)),
            access_expires_at: Schema.optional(Schema.NullOr(Schema.String)),
            created_at: Schema.String,
            updated_at: Schema.String,
            revoked_at: Schema.optional(Schema.NullOr(Schema.String)),
          }),
        ),
      }),
    ),
  });
export type AgentApplicationsUsersListOutput =
  typeof AgentApplicationsUsersListOutput.Type;

// The operation
/**
 * List this agent's end-users (the stable identities behind inbound principals) and each user's linked external connections. Connection metadata only — credential material is never returned.
 *
 * @param id - A UUID string identifying this agent application.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const agentApplicationsUsersList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: AgentApplicationsUsersListInput,
    outputSchema: AgentApplicationsUsersListOutput,
  }),
);
