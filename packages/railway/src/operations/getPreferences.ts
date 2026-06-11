import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query preferences($token: String) {\n  preferences(token: $token) {\n    buildFailedEmail\n    changelogEmail\n    communityEmail\n    deployCrashedEmail\n    ephemeralEnvironmentEmail\n    id\n    marketingEmail\n    subprocessorUpdatesEmail\n    templateQueueEmail\n    usageEmail\n  }\n}";

// Input Schema (GraphQL variables)
export const GetPreferencesInput = Schema.Struct({
  token: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "preferences",
    type: "query",
  }),
);
export type GetPreferencesInput = typeof GetPreferencesInput.Type;

// Output Schema (GraphQL selection set)
export const GetPreferencesOutput = Schema.Struct({
  buildFailedEmail: Schema.Boolean,
  changelogEmail: Schema.Boolean,
  communityEmail: Schema.Boolean,
  deployCrashedEmail: Schema.Boolean,
  ephemeralEnvironmentEmail: Schema.Boolean,
  id: Schema.String,
  marketingEmail: Schema.Boolean,
  subprocessorUpdatesEmail: Schema.Boolean,
  templateQueueEmail: Schema.Boolean,
  usageEmail: Schema.Boolean,
}).pipe(T.ResponsePath("preferences"));
export type GetPreferencesOutput = typeof GetPreferencesOutput.Type;

/**
 * Get the email preferences for a user
 */
export const getPreferences = API.make(() => ({
  inputSchema: GetPreferencesInput,
  outputSchema: GetPreferencesOutput,
}));
