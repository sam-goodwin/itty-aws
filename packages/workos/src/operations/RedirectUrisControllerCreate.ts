import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const RedirectUrisControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/user_management/redirect_uris" }));
export type RedirectUrisControllerCreateInput =
  typeof RedirectUrisControllerCreateInput.Type;

// Output Schema
export const RedirectUrisControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.String,
    uri: Schema.String,
    default: Schema.Boolean,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type RedirectUrisControllerCreateOutput =
  typeof RedirectUrisControllerCreateOutput.Type;

// The operation
/**
 * Create a redirect URI
 *
 * Creates a new redirect URI for an environment.
 */
export const RedirectUrisControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RedirectUrisControllerCreateInput,
    outputSchema: RedirectUrisControllerCreateOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
