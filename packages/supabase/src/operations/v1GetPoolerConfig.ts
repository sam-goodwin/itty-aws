import * as Schema from "effect/Schema";
import { SupavisorConfigResponseSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export const V1GetPoolerConfigInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    ref: Schema.String.pipe(T.PathParam()),
  },
).pipe(
  T.Http({ method: "GET", path: "/v1/projects/{ref}/config/database/pooler" }),
);
export type V1GetPoolerConfigInput = typeof V1GetPoolerConfigInput.Type;

// Output Schema
export const V1GetPoolerConfigOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => SupavisorConfigResponseSchema),
);
export type V1GetPoolerConfigOutput = typeof V1GetPoolerConfigOutput.Type;

// The operation
/**
 * Gets project's supavisor config
 *
 * @param ref - Project ref
 */
export const v1GetPoolerConfig = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: V1GetPoolerConfigInput,
  outputSchema: V1GetPoolerConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));
