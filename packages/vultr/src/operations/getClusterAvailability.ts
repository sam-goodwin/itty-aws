import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetClusterAvailabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    region: Schema.String,
    type: Schema.optional(Schema.Literals(["vps", "bare-metal", "gpu-fabric"])),
  }).pipe(T.Http({ method: "GET", path: "/clusters/availability" }));
export type GetClusterAvailabilityInput =
  typeof GetClusterAvailabilityInput.Type;

// Output Schema
export const GetClusterAvailabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    availability: Schema.optional(
      Schema.Record(
        Schema.String,
        Schema.Array(
          Schema.Struct({
            id: Schema.optional(Schema.String),
            description: Schema.optional(Schema.String),
            automation_type: Schema.optional(Schema.String),
            available: Schema.optional(Schema.Boolean),
            gpu_fabric: Schema.optional(Schema.Boolean),
            requires_fabric_manager: Schema.optional(Schema.Boolean),
            key_type: Schema.optional(Schema.String),
          }),
        ),
      ),
    ),
  });
export type GetClusterAvailabilityOutput =
  typeof GetClusterAvailabilityOutput.Type;

// The operation
/**
 * Get Cluster Availability
 *
 * Returns available cluster types for a region. The request body is required on this GET endpoint.
 * **Note:** This endpoint accepts a JSON body on a `GET` request. Some HTTP clients and proxies may strip the body from `GET` requests.
 */
export const getClusterAvailability = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetClusterAvailabilityInput,
    outputSchema: GetClusterAvailabilityOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
