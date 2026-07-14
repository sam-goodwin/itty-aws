import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";
import { SensitiveOutputString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface V1GetPostgrestServiceConfigInput {
  ref: string;
}
export const V1GetPostgrestServiceConfigInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/postgrest" }),
  ) as unknown as Schema.Codec<V1GetPostgrestServiceConfigInput>;

// Output Schema
export interface V1GetPostgrestServiceConfigOutput {
  db_schema: string;
  max_rows: number;
  db_extra_search_path: string;
  db_pool: number | null;
  jwt_secret?: Redacted.Redacted<string>;
}
export const V1GetPostgrestServiceConfigOutput =
  /*@__PURE__*/ Schema.Struct({
    db_schema: Schema.String,
    max_rows: Schema.Number,
    db_extra_search_path: Schema.String,
    db_pool: Schema.NullOr(Schema.Number),
    jwt_secret: Schema.optional(SensitiveOutputString),
  }) as unknown as Schema.Codec<V1GetPostgrestServiceConfigOutput>;

// The operation
/**
 * Gets project's postgrest config
 *
 * @param ref - Project ref
 */
export const v1GetPostgrestServiceConfig = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetPostgrestServiceConfigInput,
  outputSchema: V1GetPostgrestServiceConfigOutput,
  errors: [BadRequest, Forbidden] as const,
}));
