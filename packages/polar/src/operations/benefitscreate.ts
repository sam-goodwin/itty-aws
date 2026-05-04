import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitscreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "POST", path: "/v1/benefits/" }));
export type BenefitscreateInput = typeof BenefitscreateInput.Type;

// Output Schema
export const BenefitscreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type BenefitscreateOutput = typeof BenefitscreateOutput.Type;

// The operation
/**
 * Create Benefit
 *
 * Create a benefit.
 * **Scopes**: `benefits:write`
 */
export const benefitscreate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitscreateInput,
  outputSchema: BenefitscreateOutput,
  errors: [UnprocessableEntity] as const,
}));
