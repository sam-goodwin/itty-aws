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
export interface PostV1AppsByAppIdRollbackInput {
  appId: string;
  deploymentId?: string;
  versionId?: string;
}
export const PostV1AppsByAppIdRollbackInput =
  /*@__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
    deploymentId: Schema.optional(Schema.String),
    versionId: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/v1/apps/{appId}/rollback" }),
  ) as unknown as Schema.Codec<PostV1AppsByAppIdRollbackInput>;

// Output Schema
export interface PostV1AppsByAppIdRollbackOutput {
  data: { appEndpointDomain: string; reassignedDomains: number };
}
export const PostV1AppsByAppIdRollbackOutput =
  /*@__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      appEndpointDomain: Schema.String,
      reassignedDomains: Schema.Number,
    }),
  }) as unknown as Schema.Codec<PostV1AppsByAppIdRollbackOutput>;

// The operation
/**
 * Roll an app back to an existing deployment
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Makes any eligible existing deployment live behind the app's stable endpoint (rollback or roll-forward). Unlike promote, a stopped target is started and waited until it is running before the endpoint is switched, so the currently-live deployment keeps serving with zero downtime. Returns the app endpoint domain.
 */
export const postV1AppsByAppIdRollback = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostV1AppsByAppIdRollbackInput,
  outputSchema: PostV1AppsByAppIdRollbackOutput,
  errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
}));
