import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const UpdateOAuthApplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauth_application_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    redirect_uris: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
    callback_url: Schema.optional(Schema.NullOr(Schema.String)),
    scopes: Schema.optional(Schema.NullOr(Schema.String)),
    consent_screen_enabled: Schema.optional(Schema.NullOr(Schema.Boolean)),
    pkce_required: Schema.optional(Schema.NullOr(Schema.Boolean)),
    public: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/oauth_applications/{oauth_application_id}",
    }),
  );
export type UpdateOAuthApplicationInput =
  typeof UpdateOAuthApplicationInput.Type;

// Output Schema
export const UpdateOAuthApplicationOutput =
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
export type UpdateOAuthApplicationOutput =
  typeof UpdateOAuthApplicationOutput.Type;

// The operation
/**
 * Update an OAuth application
 *
 * Updates an existing OAuth application
 *
 * @param oauth_application_id - The ID of the OAuth application to update
 */
export const UpdateOAuthApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateOAuthApplicationInput,
    outputSchema: UpdateOAuthApplicationOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }),
);
