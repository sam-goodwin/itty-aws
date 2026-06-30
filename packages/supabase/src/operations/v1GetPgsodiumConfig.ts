import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetPgsodiumConfigInput {
  ref: string;
}
export const V1GetPgsodiumConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/pgsodium" }),
  ) as unknown as Schema.Codec<V1GetPgsodiumConfigInput>;

// Output Schema
export interface V1GetPgsodiumConfigOutput {
  root_key: string;
}
export const V1GetPgsodiumConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    root_key: Schema.String,
  }) as unknown as Schema.Codec<V1GetPgsodiumConfigOutput>;

// The operation
/**
 * [Beta] Gets project's pgsodium config
 *
 * @param ref - Project ref
 */
export const v1GetPgsodiumConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetPgsodiumConfigInput,
  outputSchema: V1GetPgsodiumConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));
