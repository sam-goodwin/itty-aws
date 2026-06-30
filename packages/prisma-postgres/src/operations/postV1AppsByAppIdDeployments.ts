import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PostV1AppsByAppIdDeploymentsInput {
  appId: string;
  portMapping?: { http?: number | null };
  skipCodeUpload?: boolean;
}
export const PostV1AppsByAppIdDeploymentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
    portMapping: Schema.optional(
      Schema.Struct({
        http: Schema.optional(Schema.NullOr(Schema.Number)),
      }),
    ),
    skipCodeUpload: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/apps/{appId}/deployments" }),
  ) as unknown as Schema.Codec<PostV1AppsByAppIdDeploymentsInput>;

// Output Schema
export interface PostV1AppsByAppIdDeploymentsOutput {
  data: {
    id: string;
    type: string;
    url: string;
    foundryVersionId: string;
    uploadUrl: string | null;
  };
}
export const PostV1AppsByAppIdDeploymentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      id: Schema.String,
      type: Schema.String,
      url: Schema.String,
      foundryVersionId: Schema.String,
      uploadUrl: Schema.NullOr(Schema.String),
    }),
  }) as unknown as Schema.Codec<PostV1AppsByAppIdDeploymentsOutput>;

// The operation
/**
 * Create deployment
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Creates a new deployment under the specified app. Returns a pre-signed upload URL for the artifact unless `skipCodeUpload` is set (which forks the active promoted deployment's artifact). Environment variables are resolved automatically from the app's attached Branch (production-class templates for the production Branch; preview-class templates for preview Branches). Manage env vars via the `/v1/environment-variables` endpoints, not as part of the deploy payload.
 */
export const postV1AppsByAppIdDeployments =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV1AppsByAppIdDeploymentsInput,
    outputSchema: PostV1AppsByAppIdDeploymentsOutput,
    errors: [Forbidden, NotFound, UnprocessableEntity] as const,
  }));
