import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation uploadSessionCreateAppScopedUploadSession($appID: ID!, $type: AppUploadSessionType!) {\n  uploadSession {\n    createAppScopedUploadSession(appID: $appID, type: $type) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UploadSessionCreateAppScopedUploadSessionInput = Schema.Struct({
  appID: Schema.String,
  type: Schema.Literals(["PROFILE_IMAGE_UPLOAD"]),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "uploadSessionCreateAppScopedUploadSession",
    type: "mutation",
  }),
);
export type UploadSessionCreateAppScopedUploadSessionInput =
  typeof UploadSessionCreateAppScopedUploadSessionInput.Type;

// Output Schema (GraphQL selection set)
export const UploadSessionCreateAppScopedUploadSessionOutput =
  Schema.Unknown.pipe(
    T.ResponsePath("uploadSession.createAppScopedUploadSession"),
  );
export type UploadSessionCreateAppScopedUploadSessionOutput =
  typeof UploadSessionCreateAppScopedUploadSessionOutput.Type;

export const uploadSessionCreateAppScopedUploadSession = API.make(() => ({
  inputSchema: UploadSessionCreateAppScopedUploadSessionInput,
  outputSchema: UploadSessionCreateAppScopedUploadSessionOutput,
}));
