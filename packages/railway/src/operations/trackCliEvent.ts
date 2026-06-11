import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation trackCliEvent($input: CliEventTrackInput!) {\n  cliEventTrack(input: $input) {\n    __typename\n  }\n}";

// Input Schema (GraphQL variables)
export const TrackCliEventInput = Schema.Struct({
  input: Schema.Struct({
    agentSessionId: Schema.optional(Schema.NullOr(Schema.String)),
    arch: Schema.String,
    caller: Schema.optional(Schema.NullOr(Schema.String)),
    cliVersion: Schema.String,
    command: Schema.String,
    durationMs: Schema.Number,
    environmentId: Schema.optional(Schema.NullOr(Schema.String)),
    errorClass: Schema.optional(Schema.NullOr(Schema.String)),
    errorMessage: Schema.optional(Schema.NullOr(Schema.String)),
    installRequestId: Schema.optional(Schema.NullOr(Schema.String)),
    isCi: Schema.Boolean,
    os: Schema.String,
    projectId: Schema.optional(Schema.NullOr(Schema.String)),
    serviceId: Schema.optional(Schema.NullOr(Schema.String)),
    sessionId: Schema.optional(Schema.NullOr(Schema.String)),
    subCommand: Schema.optional(Schema.NullOr(Schema.String)),
    success: Schema.Boolean,
    workspaceId: Schema.optional(Schema.NullOr(Schema.String)),
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql/v2" }),
  T.GraphQLOp({
    query: __document,
    operationName: "trackCliEvent",
    type: "mutation",
  }),
);
export type TrackCliEventInput = typeof TrackCliEventInput.Type;

// Output Schema (GraphQL selection set)
export const TrackCliEventOutput = Schema.Boolean.pipe(
  T.ResponsePath("cliEventTrack"),
);
export type TrackCliEventOutput = typeof TrackCliEventOutput.Type;

/**
 * Track events from the Railway CLI
 */
export const trackCliEvent = API.make(() => ({
  inputSchema: TrackCliEventInput,
  outputSchema: TrackCliEventOutput,
}));
