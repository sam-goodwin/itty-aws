import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetV1AppsByAppIdDeploymentsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
    cursor: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/v1/apps/{appId}/deployments" }));
export type GetV1AppsByAppIdDeploymentsInput =
  typeof GetV1AppsByAppIdDeploymentsInput.Type;

// Output Schema
export const GetV1AppsByAppIdDeploymentsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        type: Schema.String,
        url: Schema.String,
        foundryVersionId: Schema.String,
        createdAt: Schema.String,
      }),
    ),
    pagination: Schema.Struct({
      nextCursor: Schema.NullOr(Schema.String),
      hasMore: Schema.Boolean,
    }),
  });
export type GetV1AppsByAppIdDeploymentsOutput =
  typeof GetV1AppsByAppIdDeploymentsOutput.Type;

// The operation
/**
 * List deployments
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Returns all deployments belonging to an app, ordered by creation time (newest first). Supports cursor-based pagination.
 */
export const getV1AppsByAppIdDeployments = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetV1AppsByAppIdDeploymentsInput,
    outputSchema: GetV1AppsByAppIdDeploymentsOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
