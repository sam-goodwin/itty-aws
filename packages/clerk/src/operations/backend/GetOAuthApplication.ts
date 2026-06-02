import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const GetOAuthApplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauth_application_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/oauth_applications/{oauth_application_id}",
    }),
  );
export type GetOAuthApplicationInput = typeof GetOAuthApplicationInput.Type;

// Output Schema
export const GetOAuthApplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type GetOAuthApplicationOutput = typeof GetOAuthApplicationOutput.Type;

// The operation
/**
 * Retrieve an OAuth application by ID
 *
 * Fetches the OAuth application whose ID matches the provided `id` in the path.
 *
 * @param oauth_application_id - The ID of the OAuth application
 */
export const GetOAuthApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOAuthApplicationInput,
  outputSchema: GetOAuthApplicationOutput,
  errors: [Forbidden, NotFound] as const,
}));
