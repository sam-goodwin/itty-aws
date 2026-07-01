import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1DeleteHostnameConfigInput {
  ref: string;
  remove_addon?: boolean;
}
export const V1DeleteHostnameConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    remove_addon: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v1/projects/{ref}/custom-hostname" }),
  ) as unknown as Schema.Codec<V1DeleteHostnameConfigInput>;

// Output Schema
export type V1DeleteHostnameConfigOutput = void;
export const V1DeleteHostnameConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<V1DeleteHostnameConfigOutput>;

// The operation
/**
 * [Beta] Deletes a project's custom hostname configuration
 *
 * @param ref - Project ref
 * @param remove_addon - If true, also removes the custom domain add-on from the project subscription.
 */
export const v1DeleteHostnameConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: V1DeleteHostnameConfigInput,
    outputSchema: V1DeleteHostnameConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }),
);
