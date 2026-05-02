import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation cliEventTrack($input: CliEventTrackInput!) {\n  cliEventTrack(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const CliEventTrackInput = Schema.Struct({
  input: Schema.Struct({
    arch: Schema.String,
    cliVersion: Schema.String,
    command: Schema.String,
    durationMs: Schema.Number,
    errorMessage: Schema.optional(Schema.NullOr(Schema.String)),
    isCi: Schema.Boolean,
    os: Schema.String,
    subCommand: Schema.optional(Schema.NullOr(Schema.String)),
    success: Schema.Boolean,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "cliEventTrack",
    type: "mutation",
  }),
);
export type CliEventTrackInput = typeof CliEventTrackInput.Type;

// Output Schema (GraphQL selection set)
export const CliEventTrackOutput = Schema.Boolean.pipe(
  T.ResponsePath("cliEventTrack"),
);
export type CliEventTrackOutput = typeof CliEventTrackOutput.Type;

/**
 * Track events from the Railway CLI
 */
export const cliEventTrack = API.make(() => ({
  inputSchema: CliEventTrackInput,
  outputSchema: CliEventTrackOutput,
}));
