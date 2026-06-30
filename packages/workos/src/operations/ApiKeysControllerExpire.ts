import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, Conflict, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const ApiKeysControllerExpireInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(T.Http({ method: "POST", path: "/api_keys/{id}/expire" }));
export type ApiKeysControllerExpireInput =
  typeof ApiKeysControllerExpireInput.Type;

// Output Schema
export const ApiKeysControllerExpireOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    id: Schema.optional(Schema.String),
    owner: Schema.optional(Schema.Unknown),
    name: Schema.optional(Schema.String),
    obfuscated_value: Schema.optional(Schema.String),
    last_used_at: Schema.optional(Schema.NullOr(Schema.String)),
    expires_at: Schema.optional(Schema.NullOr(Schema.String)),
    permissions: Schema.optional(Schema.Array(Schema.String)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type ApiKeysControllerExpireOutput =
  typeof ApiKeysControllerExpireOutput.Type;

// The operation
/**
 * Expire an API key
 *
 * Expire an API key immediately, schedule a future expiration, or clear a scheduled future expiration.
 *
 * @param id - The unique ID of the API key.
 */
export const ApiKeysControllerExpire = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ApiKeysControllerExpireInput,
    outputSchema: ApiKeysControllerExpireOutput,
    errors: [NotFound, Conflict, UnprocessableEntity] as const,
  }),
);
