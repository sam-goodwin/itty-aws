import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "query buildPublicDataById($id: ID!) {\n  buildPublicData {\n    byId(id: $id) {\n      artifacts {\n        applicationArchiveUrl\n        buildUrl\n      }\n      buildMode\n      distribution\n      id\n      isForIosSimulator\n      platform\n      project {\n        fullName\n        id\n      }\n      status\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const BuildPublicDataByIdInput = Schema.Struct({
  id: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "buildPublicDataById",
    type: "query",
  }),
);
export type BuildPublicDataByIdInput = typeof BuildPublicDataByIdInput.Type;

// Output Schema (GraphQL selection set)
export const BuildPublicDataByIdOutput = Schema.NullOr(
  Schema.Struct({
    artifacts: Schema.Struct({
      applicationArchiveUrl: Schema.NullOr(Schema.String),
      buildUrl: Schema.NullOr(Schema.String),
    }),
    buildMode: Schema.NullOr(
      Schema.Literals(["BUILD", "CUSTOM", "LOCAL", "REPACK", "RESIGN"]),
    ),
    distribution: Schema.NullOr(
      Schema.Literals(["INTERNAL", "SIMULATOR", "STORE"]),
    ),
    id: Schema.String,
    isForIosSimulator: Schema.Boolean,
    platform: Schema.Literals(["ANDROID", "IOS"]),
    project: Schema.Struct({
      fullName: Schema.String,
      id: Schema.String,
    }),
    status: Schema.Literals([
      "CANCELED",
      "ERRORED",
      "FINISHED",
      "IN_PROGRESS",
      "IN_QUEUE",
      "NEW",
      "PENDING_CANCEL",
    ]),
  }),
).pipe(T.ResponsePath("buildPublicData.byId"));
export type BuildPublicDataByIdOutput = typeof BuildPublicDataByIdOutput.Type;

export const buildPublicDataById = API.make(() => ({
  inputSchema: BuildPublicDataByIdInput,
  outputSchema: BuildPublicDataByIdOutput,
}));
