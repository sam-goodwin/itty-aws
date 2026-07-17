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
export interface PostV1ProjectsByProjectIdComputeServicesInput {
  projectId: string;
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
}
export const PostV1ProjectsByProjectIdComputeServicesInput =
  /*@__PURE__*/ Schema.Struct({
    projectId: Schema.String.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/projects/{projectId}/compute-services",
    }),
  ) as unknown as Schema.Codec<PostV1ProjectsByProjectIdComputeServicesInput>;

// Output Schema
export interface PostV1ProjectsByProjectIdComputeServicesOutput {
  data: {
    id: string;
    type: string;
    url: string;
    name: string;
    region: { id: string; name: string };
    projectId: string;
    branchId: string | null;
    latestVersionId: string | null;
    serviceEndpointDomain: string;
    createdAt: string;
  };
}
export const PostV1ProjectsByProjectIdComputeServicesOutput =
  /*@__PURE__*/ Schema.Struct({
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
      latestVersionId: Schema.NullOr(Schema.String),
      serviceEndpointDomain: Schema.String,
      createdAt: Schema.String,
    }),
  }) as unknown as Schema.Codec<PostV1ProjectsByProjectIdComputeServicesOutput>;

// The operation
/**
 * Create compute service
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Creates a new compute service under the specified project. The service is placed in the given region (or the default region if omitted). Returns `409 Conflict` with the existing service's id, name, and branch if a service with the same name already exists on the resolved branch.
 */
export const postV1ProjectsByProjectIdComputeServices =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: PostV1ProjectsByProjectIdComputeServicesInput,
    outputSchema: PostV1ProjectsByProjectIdComputeServicesOutput,
    errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
  }));
