import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  Forbidden,
  NotFound,
  Conflict,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export interface PostV1AppsInput {
  displayName: string;
  regionId?:
    | "us-east-1"
    | "us-west-1"
    | "eu-west-3"
    | "eu-central-1"
    | "ap-northeast-1"
    | "ap-southeast-1";
  branchId?: string | null;
  branchGitName?: string | null;
  projectId: string;
}
export const PostV1AppsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  displayName: Schema.String,
  regionId: Schema.optional(
    Schema.Literals([
      "us-east-1",
      "us-west-1",
      "eu-west-3",
      "eu-central-1",
      "ap-northeast-1",
      "ap-southeast-1",
    ]),
  ),
  branchId: Schema.optional(Schema.NullOr(Schema.String)),
  branchGitName: Schema.optional(Schema.NullOr(Schema.String)),
  projectId: Schema.String,
}).pipe(
  T.Http({ method: "POST", path: "/v1/apps" }),
) as unknown as Schema.Codec<PostV1AppsInput>;

// Output Schema
export interface PostV1AppsOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    region: { id: string; name: string };
    projectId: string;
    branchId: string | null;
    latestDeploymentId: string | null;
    appEndpointDomain: string;
    createdAt: string;
  };
}
export const PostV1AppsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  data: Schema.Struct({
    id: Schema.String,
    type: Schema.String,
    url: Schema.String,
    name: Schema.String,
    region: Schema.Struct({
      id: Schema.String,
      name: Schema.String,
    }),
    projectId: Schema.String,
    branchId: Schema.NullOr(Schema.String),
    latestDeploymentId: Schema.NullOr(Schema.String),
    appEndpointDomain: Schema.String,
    createdAt: Schema.String,
  }),
}) as unknown as Schema.Codec<PostV1AppsOutput>;

// The operation
/**
 * Create app
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Creates a new app under the specified project. The `projectId` is required in the request body. The app is placed in the given region (or the default region if omitted). Returns `409 Conflict` with the existing app's id, name, and branch if an app with the same name already exists on the resolved branch.
 */
export const postV1Apps = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PostV1AppsInput,
  outputSchema: PostV1AppsOutput,
  errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
}));
