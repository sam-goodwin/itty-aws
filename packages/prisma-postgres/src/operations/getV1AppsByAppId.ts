import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetV1AppsByAppIdInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  appId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/apps/{appId}" }));
export type GetV1AppsByAppIdInput = typeof GetV1AppsByAppIdInput.Type;

// Output Schema
export const GetV1AppsByAppIdOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
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
  },
);
export type GetV1AppsByAppIdOutput = typeof GetV1AppsByAppIdOutput.Type;

// The operation
/**
 * Get app
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns an app by ID, including its region and active promoted deployment reference.
 */
export const getV1AppsByAppId = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetV1AppsByAppIdInput,
  outputSchema: GetV1AppsByAppIdOutput,
  errors: [Forbidden, NotFound] as const,
}));
