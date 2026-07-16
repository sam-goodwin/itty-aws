import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export interface V1GetDatabaseOpenapiInput {
  ref: string;
  schema?: string;
}
export const V1GetDatabaseOpenapiInput =
  /*@__PURE__*/ Schema.Struct({
    ref: Schema.String.pipe(T.PathParam()),
    schema: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/projects/{ref}/database/openapi" }),
  ) as unknown as Schema.Codec<V1GetDatabaseOpenapiInput>;

// Output Schema
export type V1GetDatabaseOpenapiOutput = unknown;
export const V1GetDatabaseOpenapiOutput =
  /*@__PURE__*/ Schema.Unknown as unknown as Schema.Codec<V1GetDatabaseOpenapiOutput>;

// The operation
/**
 * Get PostgREST OpenAPI spec
 *
 * Returns the PostgREST OpenAPI specification for the project. This is the replacement for querying `/rest/v1/` directly with the anon key.
 *
 * @param ref - Project ref
 * @param schema - The database schema to generate the OpenAPI spec for
 */
export const v1GetDatabaseOpenapi = /*@__PURE__*/ API.make(() => ({
  inputSchema: V1GetDatabaseOpenapiInput,
  outputSchema: V1GetDatabaseOpenapiOutput,
  errors: [Forbidden] as const,
}));
