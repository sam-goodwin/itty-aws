import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation workspacePolicyItemUpdate($enabled: Boolean, $input: WorkspacePolicyItemUpdateInput, $policy: WorkspacePolicyName, $workspaceId: String!) {\n  workspacePolicyItemUpdate(enabled: $enabled, input: $input, policy: $policy, workspaceId: $workspaceId) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const WorkspacePolicyItemUpdateInput = Schema.Struct({
  enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  input: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        enabled: Schema.Boolean,
        policy: Schema.Literals([
          "RESTRICT_PUBLIC_TCP_PROXIES",
          "RESTRICT_RAILWAY_DOMAIN_GENERATION",
        ]),
      }),
    ),
  ),
  policy: Schema.optional(
    Schema.NullOr(
      Schema.Literals([
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
    operationName: "workspacePolicyItemUpdate",
    type: "mutation",
  }),
);
export type WorkspacePolicyItemUpdateInput =
  typeof WorkspacePolicyItemUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const WorkspacePolicyItemUpdateOutput = Schema.Boolean.pipe(
  T.ResponsePath("workspacePolicyItemUpdate"),
);
export type WorkspacePolicyItemUpdateOutput =
  typeof WorkspacePolicyItemUpdateOutput.Type;

/**
 * Enable or disable a workspace policy. Enterprise workspaces only.
 */
export const workspacePolicyItemUpdate = API.make(() => ({
  inputSchema: WorkspacePolicyItemUpdateInput,
  outputSchema: WorkspacePolicyItemUpdateOutput,
}));
