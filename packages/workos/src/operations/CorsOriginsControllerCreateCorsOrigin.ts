import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CorsOriginsControllerCreateCorsOriginInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    origin: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/user_management/cors_origins" }));
export type CorsOriginsControllerCreateCorsOriginInput =
  typeof CorsOriginsControllerCreateCorsOriginInput.Type;

// Output Schema
export const CorsOriginsControllerCreateCorsOriginOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    origin: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type CorsOriginsControllerCreateCorsOriginOutput =
  typeof CorsOriginsControllerCreateCorsOriginOutput.Type;

// The operation
/**
 * Create a CORS origin
 *
 * Creates a new CORS origin for the current environment. CORS origins allow browser-based applications to make requests to the WorkOS API.
 */
export const CorsOriginsControllerCreateCorsOrigin =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CorsOriginsControllerCreateCorsOriginInput,
    outputSchema: CorsOriginsControllerCreateCorsOriginOutput,
    errors: [Conflict, UnprocessableEntity] as const,
  }));
