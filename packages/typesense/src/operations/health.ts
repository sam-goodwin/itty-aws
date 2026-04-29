import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const HealthInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/health" }),
);
export type HealthInput = typeof HealthInput.Type;

// Output Schema
export const HealthOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  ok: Schema.Boolean,
});
export type HealthOutput = typeof HealthOutput.Type;

// The operation
/**
 * Checks if Typesense server is ready to accept requests.
 */
export const health = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: HealthInput,
  outputSchema: HealthOutput,
}));
