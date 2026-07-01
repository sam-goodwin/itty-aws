import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface PatchV1AppsByAppIdInput {
  appId: string;
  displayName?: string;
  branchId?: string | null;
  branchGitName?: string | null;
}
export const PatchV1AppsByAppIdInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
    displayName: Schema.optional(Schema.String),
    branchId: Schema.optional(Schema.NullOr(Schema.String)),
    branchGitName: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/apps/{appId}" }),
  ) as unknown as Schema.Codec<PatchV1AppsByAppIdInput>;

// Output Schema
export interface PatchV1AppsByAppIdOutput {
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
export const PatchV1AppsByAppIdOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<PatchV1AppsByAppIdOutput>;

// The operation
/**
 * Update app
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Updates the display name of an app.
 */
export const patchV1AppsByAppId = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: PatchV1AppsByAppIdInput,
  outputSchema: PatchV1AppsByAppIdOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
