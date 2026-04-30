import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "query deviceRunSessions {\n  deviceRunSessions\n}";

// Input Schema (GraphQL variables)
export const DeviceRunSessionsInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deviceRunSessions",
    type: "query",
  }),
);
export type DeviceRunSessionsInput = typeof DeviceRunSessionsInput.Type;

// Output Schema (GraphQL selection set)
export const DeviceRunSessionsOutput = Schema.Unknown;
export type DeviceRunSessionsOutput = typeof DeviceRunSessionsOutput.Type;

export const deviceRunSessions = API.make(() => ({
  inputSchema: DeviceRunSessionsInput,
  outputSchema: DeviceRunSessionsOutput,
}));
