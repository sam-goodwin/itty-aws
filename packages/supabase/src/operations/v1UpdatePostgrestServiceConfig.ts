import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden } from "../errors.ts";

// Input Schema
export interface V1UpdatePostgrestServiceConfigInput {
  ref: string;
  db_extra_search_path?: string;
  db_schema?: string;
  max_rows?: number;
  db_pool?: number;
}
export const V1UpdatePostgrestServiceConfigInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    db_extra_search_path: Schema.optional(Schema.String),
    db_schema: Schema.optional(Schema.String),
    max_rows: Schema.optional(Schema.Number),
    db_pool: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({ method: "PATCH", path: "/v1/projects/{ref}/postgrest" }),
  ) as unknown as Schema.Codec<V1UpdatePostgrestServiceConfigInput>;

// Output Schema
export interface V1UpdatePostgrestServiceConfigOutput {
  db_schema: string;
  max_rows: number;
  db_extra_search_path: string;
  db_pool: number | null;
}
export const V1UpdatePostgrestServiceConfigOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    db_schema: Schema.String,
    max_rows: Schema.Number,
    db_extra_search_path: Schema.String,
    db_pool: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<V1UpdatePostgrestServiceConfigOutput>;

// The operation
/**
 * Updates project's postgrest config
 *
 * @param ref - Project ref
 */
export const v1UpdatePostgrestServiceConfig =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: V1UpdatePostgrestServiceConfigInput,
    outputSchema: V1UpdatePostgrestServiceConfigOutput,
    errors: [BadRequest, Forbidden] as const,
  }));
