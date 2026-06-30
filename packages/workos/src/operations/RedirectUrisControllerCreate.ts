import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface RedirectUrisControllerCreateInput {
  uri?: string;
}
export const RedirectUrisControllerCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uri: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/redirect_uris" }),
  ) as unknown as Schema.Codec<RedirectUrisControllerCreateInput>;

// Output Schema
export interface RedirectUrisControllerCreateOutput {
  object?: string;
  id?: string;
  uri?: string;
  default?: boolean;
  created_at?: string;
  updated_at?: string;
}
export const RedirectUrisControllerCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    uri: Schema.optional(Schema.String),
    default: Schema.optional(Schema.Boolean),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<RedirectUrisControllerCreateOutput>;

// The operation
/**
 * Create a redirect URI
 *
 * Creates a new redirect URI for an application.
 */
export const RedirectUrisControllerCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: RedirectUrisControllerCreateInput,
    outputSchema: RedirectUrisControllerCreateOutput,
    errors: [BadRequest, UnprocessableEntity] as const,
  }));
