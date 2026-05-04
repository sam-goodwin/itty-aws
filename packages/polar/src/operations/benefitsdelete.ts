import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitsdeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "DELETE", path: "/v1/benefits/{id}" }));
export type BenefitsdeleteInput = typeof BenefitsdeleteInput.Type;

// Output Schema
export const BenefitsdeleteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BenefitsdeleteOutput = typeof BenefitsdeleteOutput.Type;

// The operation
/**
 * Delete Benefit
 *
 * Delete a benefit.
 * > [!WARNING]
 * > Every grants associated with the benefit will be revoked.
 * > Users will lose access to the benefit.
 * **Scopes**: `benefits:write`
 */
export const benefitsdelete = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitsdeleteInput,
  outputSchema: BenefitsdeleteOutput,
  errors: [Forbidden, NotFound, UnprocessableEntity] as const,
}));
