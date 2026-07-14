import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdatePoolerConfigInput {
  ref: string;
  default_pool_size?: number | null;
  pool_mode?: "transaction" | "session";
}
export const V1UpdatePoolerConfigInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    default_pool_size: Schema.optional(Schema.NullOr(Schema.Number)),
    pool_mode: Schema.optional(Schema.Literals(["transaction", "session"])),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/v1/projects/{ref}/config/database/pooler",
    }),
  ) as unknown as Schema.Codec<V1UpdatePoolerConfigInput>;

// Output Schema
export interface V1UpdatePoolerConfigOutput {
  default_pool_size: number | null;
  pool_mode: string;
}
export const V1UpdatePoolerConfigOutput =
  /*@__PURE__*/ Schema.Struct({
    default_pool_size: Schema.NullOr(Schema.Number),
    pool_mode: Schema.String,
  }) as unknown as Schema.Codec<V1UpdatePoolerConfigOutput>;

// The operation
/**
 * Updates project's supavisor config
 *
 * @param ref - Project ref
 */
export const v1UpdatePoolerConfig = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1UpdatePoolerConfigInput,
  outputSchema: V1UpdatePoolerConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));
