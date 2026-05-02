import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation preferencesUpdate($input: PreferencesUpdateData!) {\n  preferencesUpdate(input: $input) {\n    buildFailedEmail\n    changelogEmail\n    communityEmail\n    deployCrashedEmail\n    ephemeralEnvironmentEmail\n    id\n    marketingEmail\n    subprocessorUpdatesEmail\n    templateQueueEmail\n    usageEmail\n  }\n}";

// Input Schema (GraphQL variables)
export const PreferencesUpdateInput = Schema.Struct({
  input: Schema.Struct({
    buildFailedEmail: Schema.optional(Schema.NullOr(Schema.Boolean)),
    changelogEmail: Schema.optional(Schema.NullOr(Schema.Boolean)),
    communityEmail: Schema.optional(Schema.NullOr(Schema.Boolean)),
    deployCrashedEmail: Schema.optional(Schema.NullOr(Schema.Boolean)),
    ephemeralEnvironmentEmail: Schema.optional(Schema.NullOr(Schema.Boolean)),
    marketingEmail: Schema.optional(Schema.NullOr(Schema.Boolean)),
    subprocessorUpdatesEmail: Schema.optional(Schema.NullOr(Schema.Boolean)),
    templateQueueEmail: Schema.optional(Schema.NullOr(Schema.Boolean)),
    token: Schema.optional(Schema.NullOr(Schema.String)),
    usageEmail: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "preferencesUpdate",
    type: "mutation",
  }),
);
export type PreferencesUpdateInput = typeof PreferencesUpdateInput.Type;

// Output Schema (GraphQL selection set)
export const PreferencesUpdateOutput = Schema.Struct({
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
}).pipe(T.ResponsePath("preferencesUpdate"));
export type PreferencesUpdateOutput = typeof PreferencesUpdateOutput.Type;

/**
 * Update the email preferences for a user
 */
export const preferencesUpdate = API.make(() => ({
  inputSchema: PreferencesUpdateInput,
  outputSchema: PreferencesUpdateOutput,
}));
