import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

const __document =
  "mutation appVersionCreateAppVersion($appVersionInput: AppVersionInput!) {\n  appVersion {\n    createAppVersion(appVersionInput: $appVersionInput) {\n      applicationIdentifier\n      buildVersion\n      id\n      platform\n      runtimeVersion\n      storeVersion\n    }\n  }\n}";

// Input Schema (GraphQL variables)
export const AppVersionCreateAppVersionInput = Schema.Struct({
  appVersionInput: Schema.Struct({
    appId: Schema.String,
    applicationIdentifier: Schema.String,
    buildVersion: Schema.String,
    platform: Schema.Literals(["ANDROID", "IOS"]),
    runtimeVersion: Schema.optional(Schema.NullOr(Schema.String)),
    storeVersion: Schema.String,
  }),
}).pipe(
  T.Http({ method: "POST", path: "/graphql" }),
  T.GraphQLOp({
    query: __document,
    operationName: "appVersionCreateAppVersion",
    type: "mutation",
  }),
);
export type AppVersionCreateAppVersionInput =
  typeof AppVersionCreateAppVersionInput.Type;

// Output Schema (GraphQL selection set)
export const AppVersionCreateAppVersionOutput = Schema.Struct({
  applicationIdentifier: Schema.String,
  buildVersion: Schema.String,
  id: Schema.String,
  platform: Schema.Literals(["ANDROID", "IOS"]),
  runtimeVersion: Schema.NullOr(Schema.String),
  storeVersion: Schema.String,
}).pipe(T.ResponsePath("appVersion.createAppVersion"));
export type AppVersionCreateAppVersionOutput =
  typeof AppVersionCreateAppVersionOutput.Type;

export const appVersionCreateAppVersion = API.make(() => ({
  inputSchema: AppVersionCreateAppVersionInput,
  outputSchema: AppVersionCreateAppVersionOutput,
}));
