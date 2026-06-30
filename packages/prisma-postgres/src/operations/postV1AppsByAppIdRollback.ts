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
export const PostV1AppsByAppIdRollbackInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
    deploymentId: Schema.optional(Schema.String),
    versionId: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v1/apps/{appId}/rollback" }));
export type PostV1AppsByAppIdRollbackInput =
  typeof PostV1AppsByAppIdRollbackInput.Type;

// Output Schema
export const PostV1AppsByAppIdRollbackOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      appEndpointDomain: Schema.String,
      reassignedDomains: Schema.Number,
    }),
  });
export type PostV1AppsByAppIdRollbackOutput =
  typeof PostV1AppsByAppIdRollbackOutput.Type;

// The operation
/**
 * Roll an app back to an existing deployment
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Makes any eligible existing deployment live behind the app's stable endpoint (rollback or roll-forward). Unlike promote, a stopped target is started and waited until it is running before the endpoint is switched, so the currently-live deployment keeps serving with zero downtime. Returns the app endpoint domain.
 */
export const postV1AppsByAppIdRollback = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostV1AppsByAppIdRollbackInput,
    outputSchema: PostV1AppsByAppIdRollbackOutput,
    errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
