import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation updateWorkspacePolicyItem($enabled: Boolean, $input: WorkspacePolicyItemUpdateInput, $policy: WorkspacePolicyName, $workspaceId: String!) {\n  workspacePolicyItemUpdate(enabled: $enabled, input: $input, policy: $policy, workspaceId: $workspaceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const UpdateWorkspacePolicyItemInput = Schema.Struct({
  enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  input: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        enabled: Schema.Boolean,
        policy: Schema.Literals([
          "RESTRICT_DEPLOYS_TO_ALLOWED_SOURCES",
          "RESTRICT_PUBLIC_TCP_PROXIES",
          "RESTRICT_RAILWAY_DOMAIN_GENERATION",
        ]),
      }),
    ),
  ),
  policy: Schema.optional(
    Schema.NullOr(
      Schema.Literals([
        "RESTRICT_DEPLOYS_TO_ALLOWED_SOURCES",
        "RESTRICT_PUBLIC_TCP_PROXIES",
        "RESTRICT_RAILWAY_DOMAIN_GENERATION",
      ]),
    ),
  ),
  workspaceId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "updateWorkspacePolicyItem",
    type: "mutation",
  }),
);
export type UpdateWorkspacePolicyItemInput =
  typeof UpdateWorkspacePolicyItemInput.Type;

// Output Schema (GraphQL selection set)
export const UpdateWorkspacePolicyItemOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspacePolicyItemUpdate"),
);
export type UpdateWorkspacePolicyItemOutput =
  typeof UpdateWorkspacePolicyItemOutput.Type;

/**
 * Enable or disable a workspace policy. Enterprise workspaces only.
 */
export const updateWorkspacePolicyItem = API.make(() => ({
  inputSchema: UpdateWorkspacePolicyItemInput,
  outputSchema: UpdateWorkspacePolicyItemOutput,
}));
