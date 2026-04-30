import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation deviceRunSession {\n  deviceRunSession\n}";

// Input Schema (GraphQL variables)
export const DeviceRunSessionInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deviceRunSession",
    type: "mutation",
  }),
);
export type DeviceRunSessionInput = typeof DeviceRunSessionInput.Type;

// Output Schema (GraphQL selection set)
export const DeviceRunSessionOutput = Schema.Unknown;
export type DeviceRunSessionOutput = typeof DeviceRunSessionOutput.Type;

/**
 * Mutations that create and stop device run sessions
 */
export const deviceRunSession = API.make(() => ({
  inputSchema: DeviceRunSessionInput,
  outputSchema: DeviceRunSessionOutput,
}));
