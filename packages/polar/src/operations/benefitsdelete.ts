import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface BenefitsdeleteInput {
  id: string;
}
export const BenefitsdeleteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({ method: "DELETE", path: "/v1/benefits/{id}" }),
) as unknown as Schema.Codec<BenefitsdeleteInput>;

// Output Schema
export type BenefitsdeleteOutput = void;
export const BenefitsdeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<BenefitsdeleteOutput>;

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
}));
