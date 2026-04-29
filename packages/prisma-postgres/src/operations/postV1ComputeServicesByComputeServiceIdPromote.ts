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
export const PostV1ComputeServicesByComputeServiceIdPromoteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    computeServiceId: Schema.String.pipe(T.PathParam()),
    versionId: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/compute-services/{computeServiceId}/promote",
    }),
  );
export type PostV1ComputeServicesByComputeServiceIdPromoteInput =
  typeof PostV1ComputeServicesByComputeServiceIdPromoteInput.Type;

// Output Schema
export const PostV1ComputeServicesByComputeServiceIdPromoteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Struct({
      serviceEndpointDomain: Schema.String,
    }),
  });
export type PostV1ComputeServicesByComputeServiceIdPromoteOutput =
  typeof PostV1ComputeServicesByComputeServiceIdPromoteOutput.Type;

// The operation
/**
 * Promote compute version
 *
 * ⚠️ Experimental endpoint: this API is in active development and may change at any time without notice. ⚠️
 * Promotes a compute version to be the active version behind the service's stable endpoint. The version must be running. Returns the service endpoint domain.
 */
export const postV1ComputeServicesByComputeServiceIdPromote =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostV1ComputeServicesByComputeServiceIdPromoteInput,
    outputSchema: PostV1ComputeServicesByComputeServiceIdPromoteOutput,
    errors: [Forbidden, NotFound, Conflict, UnprocessableEntity] as const,
  }));
