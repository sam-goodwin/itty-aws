import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, UnprocessableEntity } from "../../../errors.ts";
import { SensitiveOutputString } from "../../../sensitive.ts";

// Input Schema
export const CreateInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.String,
  redirect_uris: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  callback_url: Schema.optional(Schema.NullOr(Schema.String)),
  scopes: Schema.optional(Schema.NullOr(Schema.String)),
  consent_screen_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
  pkce_required: Schema.optional(Schema.NullOr(Schema.Boolean)),
  public: Schema.optional(Schema.NullOr(Schema.Boolean)),
}).pipe(T.Http({ method: "POST", path: "/oauth_applications" }));
export type CreateInput = typeof CreateInput.Type;

// Output Schema
export const CreateOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["oauth_application"]),
  id: Schema.String,
  instance_id: Schema.String,
  name: Schema.String,
  client_id: Schema.String,
  client_uri: Schema.NullOr(Schema.String),
  client_image_url: Schema.NullOr(Schema.String),
  dynamically_registered: Schema.Boolean,
  consent_screen_enabled: Schema.Boolean,
  pkce_required: Schema.Boolean,
  public: Schema.Boolean,
  scopes: Schema.String,
  redirect_uris: Schema.Array(Schema.String),
  callback_url: Schema.String,
  authorize_url: Schema.String,
  token_fetch_url: Schema.String,
  user_info_url: Schema.String,
  discovery_url: Schema.String,
  token_introspection_url: Schema.String,
  created_at: Schema.Number,
  updated_at: Schema.Number,
  client_secret: Schema.optional(SensitiveOutputString),
});
export type CreateOutput = typeof CreateOutput.Type;

// The operation
/**
 * Create an OAuth application
 *
 * Creates a new OAuth application with the given name and callback URL for an instance.
 * The callback URL must be a valid URL.
 * All URL schemes are allowed such as `http://`, `https://`, `myapp://`, etc...
 */
export const create = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateInput,
  outputSchema: CreateOutput,
  errors: [BadRequest, Forbidden, UnprocessableEntity] as const,
}));
