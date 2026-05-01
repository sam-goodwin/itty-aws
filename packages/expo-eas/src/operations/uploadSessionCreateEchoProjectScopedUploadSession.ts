import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation uploadSessionCreateEchoProjectScopedUploadSession($echoProjectID: ID!, $type: EchoProjectUploadSessionType!) {\n  uploadSession {\n    createEchoProjectScopedUploadSession(echoProjectID: $echoProjectID, type: $type) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UploadSessionCreateEchoProjectScopedUploadSessionInput =
  Schema.Struct({
    echoProjectID: Schema.String,
    type: Schema.Literals(["IMAGE_UPLOAD"]),
  }).pipe(
    T.Http({ method: "POST", path: "/graphql" }),
    T.GraphQLOp({
      query: __document,
      operationName: "uploadSessionCreateEchoProjectScopedUploadSession",
      type: "mutation",
    }),
  );
export type UploadSessionCreateEchoProjectScopedUploadSessionInput =
  typeof UploadSessionCreateEchoProjectScopedUploadSessionInput.Type;

// Output Schema (GraphQL selection set)
export const UploadSessionCreateEchoProjectScopedUploadSessionOutput =
  Schema.Unknown.pipe(
    T.ResponsePath("uploadSession.createEchoProjectScopedUploadSession"),
  );
export type UploadSessionCreateEchoProjectScopedUploadSessionOutput =
  typeof UploadSessionCreateEchoProjectScopedUploadSessionOutput.Type;

export const uploadSessionCreateEchoProjectScopedUploadSession = API.make(
  () => ({
    inputSchema: UploadSessionCreateEchoProjectScopedUploadSessionInput,
    outputSchema: UploadSessionCreateEchoProjectScopedUploadSessionOutput,
  }),
);
