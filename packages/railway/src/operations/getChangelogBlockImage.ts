import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query getChangelogBlockImage($id: String!) {\n  changelogBlockImage(id: $id) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const GetChangelogBlockImageInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "getChangelogBlockImage",
    type: "query",
  }),
);
export type GetChangelogBlockImageInput =
  typeof GetChangelogBlockImageInput.Type;

// Output Schema (GraphQL selection set)
export const GetChangelogBlockImageOutput = Schema.String.pipe(
  T.ResponsePath("changelogBlockImage"),
);
export type GetChangelogBlockImageOutput =
  typeof GetChangelogBlockImageOutput.Type;

/**
 * Gets the image URL for a Notion image block
 */
export const getChangelogBlockImage = API.make(() => ({
  inputSchema: GetChangelogBlockImageInput,
  outputSchema: GetChangelogBlockImageOutput,
}));
