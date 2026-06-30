import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation deviceRunSessionCreateArtifactUploadSession($deviceRunSessionId: ID!, $input: CreateDeviceRunSessionArtifactUploadSessionInput!) {\n  deviceRunSession {\n    createArtifactUploadSession(deviceRunSessionId: $deviceRunSessionId, input: $input) {\n      uploadSession {\n        headers\n        url\n      }\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const DeviceRunSessionCreateArtifactUploadSessionInput = Schema.Struct({
  deviceRunSessionId: Schema.String,
  input: Schema.Struct({
    filename: Schema.String,
    metadata: Schema.optional(Schema.NullOr(Schema.Unknown)),
    name: Schema.String,
    size: Schema.Number,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "deviceRunSessionCreateArtifactUploadSession",
    type: "mutation",
  }),
);
export type DeviceRunSessionCreateArtifactUploadSessionInput =
  typeof DeviceRunSessionCreateArtifactUploadSessionInput.Type;

// Output Schema (GraphQL selection set)
export const DeviceRunSessionCreateArtifactUploadSessionOutput = Schema.Struct({
  uploadSession: Schema.Struct({
    headers: Schema.Unknown,
    url: Schema.String,
  }),
}).pipe(T.ResponsePath("deviceRunSession.createArtifactUploadSession"));
export type DeviceRunSessionCreateArtifactUploadSessionOutput =
  typeof DeviceRunSessionCreateArtifactUploadSessionOutput.Type;

export const deviceRunSessionCreateArtifactUploadSession = API.make(() => ({
  inputSchema: DeviceRunSessionCreateArtifactUploadSessionInput,
  outputSchema: DeviceRunSessionCreateArtifactUploadSessionOutput,
}));
