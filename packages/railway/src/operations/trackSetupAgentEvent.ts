import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation setupAgentEventTrack($input: SetupAgentEventTrackInput!) {\n  setupAgentEventTrack(input: $input)\n}";

// Input Schema (GraphQL variables)
export const TrackSetupAgentEventInput = Schema.Struct({
  input: Schema.Struct({
    agentSessionId: Schema.optional(Schema.NullOr(Schema.String)),
    arch: Schema.optional(Schema.NullOr(Schema.String)),
    caller: Schema.optional(Schema.NullOr(Schema.String)),
    cliVersion: Schema.optional(Schema.NullOr(Schema.String)),
    configuredClients: Schema.optional(
      Schema.NullOr(Schema.Array(Schema.String)),
    ),
    errorMessage: Schema.optional(Schema.NullOr(Schema.String)),
    installRequestId: Schema.optional(Schema.NullOr(Schema.String)),
    isCi: Schema.optional(Schema.NullOr(Schema.Boolean)),
    os: Schema.optional(Schema.NullOr(Schema.String)),
    phase: Schema.String,
    sessionId: Schema.optional(Schema.NullOr(Schema.String)),
    success: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "setupAgentEventTrack",
    type: "mutation",
  }),
);
export type TrackSetupAgentEventInput = typeof TrackSetupAgentEventInput.Type;

// Output Schema (GraphQL selection set)
export const TrackSetupAgentEventOutput = Schema.Boolean.pipe(
  T.ResponsePath("setupAgentEventTrack"),
);
export type TrackSetupAgentEventOutput = typeof TrackSetupAgentEventOutput.Type;

/**
 * Track setup agent lifecycle events from the Railway CLI
 */
export const trackSetupAgentEvent = API.make(() => ({
  inputSchema: TrackSetupAgentEventInput,
  outputSchema: TrackSetupAgentEventOutput,
}));
