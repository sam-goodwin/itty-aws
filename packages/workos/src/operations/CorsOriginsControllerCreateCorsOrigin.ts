import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface CorsOriginsControllerCreateCorsOriginInput {
  origin?: string;
}
export const CorsOriginsControllerCreateCorsOriginInput =
  /*@__PURE__*/ Schema.Struct({
    origin: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/cors_origins" }),
  ) as unknown as Schema.Codec<CorsOriginsControllerCreateCorsOriginInput>;

// Output Schema
export interface CorsOriginsControllerCreateCorsOriginOutput {
  object?: string;
  id?: string;
  origin?: string;
  created_at?: string;
  updated_at?: string;
}
export const CorsOriginsControllerCreateCorsOriginOutput =
  /*@__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    origin: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<CorsOriginsControllerCreateCorsOriginOutput>;

// The operation
/**
 * Create a CORS origin
 *
 * Creates a new CORS origin for the current environment. CORS origins allow browser-based applications to make requests to the WorkOS API.
 */
export const CorsOriginsControllerCreateCorsOrigin =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: CorsOriginsControllerCreateCorsOriginInput,
    outputSchema: CorsOriginsControllerCreateCorsOriginOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
