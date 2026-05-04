import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitsgetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/v1/benefits/{id}" }));
export type BenefitsgetInput = typeof BenefitsgetInput.Type;

// Output Schema
export const BenefitsgetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type BenefitsgetOutput = typeof BenefitsgetOutput.Type;

// The operation
/**
 * Get Benefit
 *
 * Get a benefit by ID.
 * **Scopes**: `benefits:read` `benefits:write`
 */
export const benefitsget = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitsgetInput,
  outputSchema: BenefitsgetOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
