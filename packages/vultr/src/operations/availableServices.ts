import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const AvailableServicesInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/databases/available-services" }));
export type AvailableServicesInput = typeof AvailableServicesInput.Type;

// Output Schema
export const AvailableServicesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    databases: Schema.optional(
      Schema.Array(
        Schema.Struct({
          kafka: Schema.optional(Schema.Array(Schema.Unknown)),
          mysql: Schema.optional(Schema.Array(Schema.Unknown)),
          pg: Schema.optional(Schema.Array(Schema.Unknown)),
          valkey: Schema.optional(Schema.Array(Schema.Unknown)),
        }),
      ),
    ),
  });
export type AvailableServicesOutput = typeof AvailableServicesOutput.Type;

// The operation
/**
 * Get Available Services
 *
 * Get a list of available services
 */
export const availableServices = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: AvailableServicesInput,
  outputSchema: AvailableServicesOutput,
  errors: [BadRequest] as const,
}));
