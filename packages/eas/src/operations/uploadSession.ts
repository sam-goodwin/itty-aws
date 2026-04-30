import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document = "mutation uploadSession {\n  uploadSession\n}";

// Input Schema (GraphQL variables)
export const UploadSessionInput = Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "uploadSession",
    type: "mutation",
  }),
);
export type UploadSessionInput = typeof UploadSessionInput.Type;

// Output Schema (GraphQL selection set)
export const UploadSessionOutput = Schema.Unknown;
export type UploadSessionOutput = typeof UploadSessionOutput.Type;

export const uploadSession = API.make(() => ({
  inputSchema: UploadSessionInput,
  outputSchema: UploadSessionOutput,
}));
