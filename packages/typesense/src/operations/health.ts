import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface HealthInput {}
export const HealthInput = /*@__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "GET", path: "/health" }),
) as unknown as Schema.Codec<HealthInput>;

// Output Schema
export interface HealthOutput {
  ok: boolean;
}
export const HealthOutput = /*@__PURE__*/ Schema.Struct({
  ok: Schema.Boolean,
}) as unknown as Schema.Codec<HealthOutput>;

// The operation
/**
 * Checks if Typesense server is ready to accept requests.
 */
export const health = /*@__PURE__*/ API.make(() => ({
  inputSchema: HealthInput,
  outputSchema: HealthOutput,
}));
