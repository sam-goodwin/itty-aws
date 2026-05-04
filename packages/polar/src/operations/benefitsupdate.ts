import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitsupdateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "PATCH", path: "/v1/benefits/{id}" }));
export type BenefitsupdateInput = typeof BenefitsupdateInput.Type;

// Output Schema
export const BenefitsupdateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type BenefitsupdateOutput = typeof BenefitsupdateOutput.Type;

// The operation
/**
 * Update Benefit
 *
 * Update a benefit.
 * **Scopes**: `benefits:write`
 */
export const benefitsupdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitsupdateInput,
  outputSchema: BenefitsupdateOutput,
  errors: [NotFound, UnprocessableEntity] as const,
}));
