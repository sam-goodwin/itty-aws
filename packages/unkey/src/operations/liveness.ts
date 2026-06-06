import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { PreconditionFailed } from "../errors.ts";

// Input Schema
export const LivenessInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/v2/liveness" }),
);
export type LivenessInput = typeof LivenessInput.Type;

// Output Schema
export const LivenessOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  meta: Schema.Struct({
    requestId: Schema.String,
  }),
  data: Schema.Struct({
    message: Schema.String,
  }),
});
export type LivenessOutput = typeof LivenessOutput.Type;

// The operation
/**
 * Health check
 *
 * Check if the Unkey API service is healthy and ready to handle requests.
 * Use this for load balancer health checks, monitoring systems, and orchestration platforms. No authentication required with minimal processing overhead.
 * **Required Permissions**
 * None - this endpoint requires no authentication.
 * **Side Effects**
 * None - this is a read-only health check that does not modify any data or state.
 */
export const liveness = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: LivenessInput,
  outputSchema: LivenessOutput,
  errors: [PreconditionFailed] as const,
}));
