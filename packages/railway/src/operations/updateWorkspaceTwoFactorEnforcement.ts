import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation updateWorkspaceTwoFactorEnforcement($enabled: Boolean!, $workspaceId: String!) {\n  workspaceTwoFactorEnforcementUpdate(enabled: $enabled, workspaceId: $workspaceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateWorkspaceTwoFactorEnforcementInput = Schema.Struct({
  enabled: Schema.Boolean,
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "updateWorkspaceTwoFactorEnforcement",
    type: "mutation",
  }),
);
export type UpdateWorkspaceTwoFactorEnforcementInput =
  typeof UpdateWorkspaceTwoFactorEnforcementInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateWorkspaceTwoFactorEnforcementOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspaceTwoFactorEnforcementUpdate"),
);
export type UpdateWorkspaceTwoFactorEnforcementOutput =
  typeof UpdateWorkspaceTwoFactorEnforcementOutput.Type;

/**
 * Enable or disable 2FA enforcement for a workspace
 */
export const updateWorkspaceTwoFactorEnforcement = API.make(() => ({
  inputSchema: UpdateWorkspaceTwoFactorEnforcementInput,
  outputSchema: UpdateWorkspaceTwoFactorEnforcementOutput,
}));
