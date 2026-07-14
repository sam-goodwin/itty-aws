import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export interface V1RemoveProjectAddonInput {
  ref: string;
  addon_variant: string;
}
export const V1RemoveProjectAddonInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    addon_variant: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/projects/{ref}/billing/addons/{addon_variant}",
    }),
  ) as unknown as Schema.Codec<V1RemoveProjectAddonInput>;

// Output Schema
export type V1RemoveProjectAddonOutput = void;
export const V1RemoveProjectAddonOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<V1RemoveProjectAddonOutput>;

// The operation
/**
 * Remove billing addons or revert compute instance sizing
 *
 * Disables the selected addon variant, including rolling the compute instance back to its previous size.
 *
 * @param ref - Project ref
 */
export const v1RemoveProjectAddon = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1RemoveProjectAddonInput,
  outputSchema: V1RemoveProjectAddonOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
