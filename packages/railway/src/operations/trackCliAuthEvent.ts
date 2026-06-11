import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation trackCliAuthEvent($input: CliAuthEventTrackInput!) {\n  cliAuthEventTrack(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const TrackCliAuthEventInput = Schema.Struct({
  input: Schema.Struct({
    agentSessionId: Schema.optional(Schema.NullOr(Schema.String)),
    arch: Schema.optional(Schema.NullOr(Schema.String)),
    caller: Schema.optional(Schema.NullOr(Schema.String)),
    cliVersion: Schema.optional(Schema.NullOr(Schema.String)),
    errorMessage: Schema.optional(Schema.NullOr(Schema.String)),
    installRequestId: Schema.optional(Schema.NullOr(Schema.String)),
    isCi: Schema.optional(Schema.NullOr(Schema.Boolean)),
    os: Schema.optional(Schema.NullOr(Schema.String)),
    outcome: Schema.String,
    sessionId: Schema.optional(Schema.NullOr(Schema.String)),
    success: Schema.Boolean,
    transport: Schema.String,
    transportReason: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "trackCliAuthEvent",
    type: "mutation",
  }),
);
export type TrackCliAuthEventInput = typeof TrackCliAuthEventInput.Type;

// Output Schema (GraphQL selection set)
export const TrackCliAuthEventOutput = Schema.Boolean.pipe(
  T.ResponsePath("cliAuthEventTrack"),
);
export type TrackCliAuthEventOutput = typeof TrackCliAuthEventOutput.Type;

/**
 * Track CLI authentication-attempt outcomes (signup / sign-in funnel)
 */
export const trackCliAuthEvent = API.make(() => ({
  inputSchema: TrackCliAuthEventInput,
  outputSchema: TrackCliAuthEventOutput,
}));
