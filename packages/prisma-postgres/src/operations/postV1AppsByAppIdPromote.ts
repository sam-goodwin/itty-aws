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
export const PostV1AppsByAppIdPromoteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    appId: Schema.String.pipe(T.PathParam()),
    deploymentId: Schema.optional(Schema.String),
    versionId: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/v1/apps/{appId}/promote" }));
export type PostV1AppsByAppIdPromoteInput =
  typeof PostV1AppsByAppIdPromoteInput.Type;

// Output Schema
export const PostV1AppsByAppIdPromoteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      appEndpointDomain: Schema.String,
      reassignedDomains: Schema.Number,
    }),
  });
export type PostV1AppsByAppIdPromoteOutput =
  typeof PostV1AppsByAppIdPromoteOutput.Type;

// The operation
/**
 * Promote deployment
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Promotes a deployment to be the active deployment behind the app's stable endpoint. The deployment must be running. Returns the app endpoint domain.
 */
export const postV1AppsByAppIdPromote = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PostV1AppsByAppIdPromoteInput,
    outputSchema: PostV1AppsByAppIdPromoteOutput,
    errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
