import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query changelogBlockImage($id: String!) {\n  changelogBlockImage(id: $id)\n}";

// Input Schema (GraphQL variables)
export const ChangelogBlockImageInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "changelogBlockImage",
    type: "query",
  }),
);
export type ChangelogBlockImageInput = typeof ChangelogBlockImageInput.Type;

// Output Schema (GraphQL selection set)
export const ChangelogBlockImageOutput = Schema.String.pipe(
  T.ResponsePath("changelogBlockImage"),
);
export type ChangelogBlockImageOutput = typeof ChangelogBlockImageOutput.Type;

/**
 * Gets the image URL for a Notion image block
 */
export const changelogBlockImage = API.make(() => ({
  inputSchema: ChangelogBlockImageInput,
  outputSchema: ChangelogBlockImageOutput,
}));
