import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspaceTwoFactorEnforcementUpdate($enabled: Boolean!, $workspaceId: String!) {\n  workspaceTwoFactorEnforcementUpdate(enabled: $enabled, workspaceId: $workspaceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkspaceTwoFactorEnforcementUpdateInput = Schema.Struct({
  enabled: Schema.Boolean,
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "workspaceTwoFactorEnforcementUpdate",
    type: "mutation",
  }),
);
export type WorkspaceTwoFactorEnforcementUpdateInput =
  typeof WorkspaceTwoFactorEnforcementUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspaceTwoFactorEnforcementUpdateOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceTwoFactorEnforcementUpdate"),
);
export type WorkspaceTwoFactorEnforcementUpdateOutput =
  typeof WorkspaceTwoFactorEnforcementUpdateOutput.Type;

/**
 * Enable or disable 2FA enforcement for a workspace
 */
export const workspaceTwoFactorEnforcementUpdate = API.make(() => ({
  inputSchema: WorkspaceTwoFactorEnforcementUpdateInput,
  outputSchema: WorkspaceTwoFactorEnforcementUpdateOutput,
}));
