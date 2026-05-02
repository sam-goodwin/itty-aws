import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query preferences($token: String) {\n  preferences(token: $token) {\n    buildFailedEmail\n    changelogEmail\n    communityEmail\n    deployCrashedEmail\n    ephemeralEnvironmentEmail\n    id\n    marketingEmail\n    subprocessorUpdatesEmail\n    templateQueueEmail\n    usageEmail\n  }\n}";

// Input Schema (GraphQL variables)
export const PreferencesInput = Schema.Struct({
  token: Schema.optional(Schema.NullOr(Schema.String)),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "preferences",
    type: "query",
  }),
);
export type PreferencesInput = typeof PreferencesInput.Type;

// Output Schema (GraphQL selection set)
export const PreferencesOutput = Schema.Struct({
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
export type PreferencesOutput = typeof PreferencesOutput.Type;

/**
 * Get the email preferences for a user
 */
export const preferences = API.make(() => ({
  inputSchema: PreferencesInput,
  outputSchema: PreferencesOutput,
}));
