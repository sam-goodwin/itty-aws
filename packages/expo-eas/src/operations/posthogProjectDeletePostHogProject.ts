import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation posthogProjectDeletePostHogProject($id: ID!) {\n  posthogProject {\n    deletePostHogProject(id: $id) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const PosthogProjectDeletePostHogProjectInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "posthogProjectDeletePostHogProject",
    type: "mutation",
  }),
);
export type PosthogProjectDeletePostHogProjectInput =
  typeof PosthogProjectDeletePostHogProjectInput.Type;

// Output Schema (GraphQL selection set)
export const PosthogProjectDeletePostHogProjectOutput = Schema.String.pipe(
  T.ResponsePath("posthogProject.deletePostHogProject"),
);
export type PosthogProjectDeletePostHogProjectOutput =
  typeof PosthogProjectDeletePostHogProjectOutput.Type;

export const posthogProjectDeletePostHogProject = API.make(() => ({
  inputSchema: PosthogProjectDeletePostHogProjectInput,
  outputSchema: PosthogProjectDeletePostHogProjectOutput,
}));
