import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdatePgsodiumConfigInput {
  ref: string;
  root_key: string;
}
export const V1UpdatePgsodiumConfigInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    root_key: Schema.String,
  }).pipe(
    T.Http({ method: "PUT", path: "/v1/projects/{ref}/pgsodium" }),
  ) as unknown as Schema.Codec<V1UpdatePgsodiumConfigInput>;

// Output Schema
export interface V1UpdatePgsodiumConfigOutput {
  root_key: string;
}
export const V1UpdatePgsodiumConfigOutput =
  /*@__PURE__*/ Schema.Struct({
    root_key: Schema.String,
  }) as unknown as Schema.Codec<V1UpdatePgsodiumConfigOutput>;

// The operation
/**
 * [Beta] Updates project's pgsodium config. Updating the root_key can cause all data encrypted with the older key to become inaccessible.
 *
 * @param ref - Project ref
 */
export const v1UpdatePgsodiumConfig = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1UpdatePgsodiumConfigInput,
  outputSchema: V1UpdatePgsodiumConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));
