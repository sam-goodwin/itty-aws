import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation uploadSessionCreateUploadSession($filename: String, $type: UploadSessionType!) {\n  uploadSession {\n    createUploadSession(filename: $filename, type: $type) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UploadSessionCreateUploadSessionInput = Schema.Struct({
  filename: Schema.optional(Schema.NullOr(Schema.String)),
  type: Schema.Literals([
    "EAS_BUILD_GCS_PROJECT_METADATA",
    "EAS_BUILD_GCS_PROJECT_SOURCES",
    "EAS_BUILD_PROJECT_SOURCES",
    "EAS_SHARE_GCS_APP_ARCHIVE",
    "EAS_SUBMIT_APP_ARCHIVE",
    "EAS_SUBMIT_GCS_APP_ARCHIVE",
    "EAS_UPDATE_ASSETS_METADATA",
    "EAS_UPDATE_FINGERPRINT",
  ]),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "uploadSessionCreateUploadSession",
    type: "mutation",
  }),
);
export type UploadSessionCreateUploadSessionInput =
  typeof UploadSessionCreateUploadSessionInput.Type;

// Output Schema (GraphQL selection set)
export const UploadSessionCreateUploadSessionOutput = Schema.Unknown.pipe(
  T.ResponsePath("uploadSession.createUploadSession"),
);
export type UploadSessionCreateUploadSessionOutput =
  typeof UploadSessionCreateUploadSessionOutput.Type;

export const uploadSessionCreateUploadSession = API.make(() => ({
  inputSchema: UploadSessionCreateUploadSessionInput,
  outputSchema: UploadSessionCreateUploadSessionOutput,
}));
