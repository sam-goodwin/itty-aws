import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation uploadSessionCreateAccountScopedUploadSession($accountID: ID!, $type: AccountUploadSessionType!) {\n  uploadSession {\n    createAccountScopedUploadSession(accountID: $accountID, type: $type) {\n      __typename\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const UploadSessionCreateAccountScopedUploadSessionInput = Schema.Struct(
  {
    accountID: Schema.String,
    type: Schema.Literals([
      "PROFILE_IMAGE_UPLOAD",
      "WORKFLOWS_PROJECT_SOURCES",
    ]),
  },
).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "uploadSessionCreateAccountScopedUploadSession",
    type: "mutation",
  }),
);
export type UploadSessionCreateAccountScopedUploadSessionInput =
  typeof UploadSessionCreateAccountScopedUploadSessionInput.Type;

// Output Schema (GraphQL selection set)
export const UploadSessionCreateAccountScopedUploadSessionOutput =
  Schema.Unknown.pipe(
    T.ResponsePath("uploadSession.createAccountScopedUploadSession"),
  );
export type UploadSessionCreateAccountScopedUploadSessionOutput =
  typeof UploadSessionCreateAccountScopedUploadSessionOutput.Type;

export const uploadSessionCreateAccountScopedUploadSession = API.make(() => ({
  inputSchema: UploadSessionCreateAccountScopedUploadSessionInput,
  outputSchema: UploadSessionCreateAccountScopedUploadSessionOutput,
}));
