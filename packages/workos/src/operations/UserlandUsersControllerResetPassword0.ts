import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface UserlandUsersControllerResetPassword0Input {
  token?: string;
  new_password?: string | Redacted.Redacted<string>;
}
export const UserlandUsersControllerResetPassword0Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.optional(Schema.String),
    new_password: Schema.optional(SensitiveString),
  }).pipe(
    T.Http({ method: "POST", path: "/user_management/password_reset/confirm" }),
  ) as unknown as Schema.Codec<UserlandUsersControllerResetPassword0Input>;

// Output Schema
export interface UserlandUsersControllerResetPassword0Output {
  user?: {
    object?: string;
    id?: string;
    first_name?: string | null;
    last_name?: string | null;
    name?: string | null;
    profile_picture_url?: string | null;
    email?: string;
    email_verified?: boolean;
    external_id?: string | null;
    metadata?: Record<string, string>;
    last_sign_in_at?: string | null;
    locale?: string | null;
    created_at?: string;
    updated_at?: string;
  };
}
export const UserlandUsersControllerResetPassword0Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user: Schema.optional(
      Schema.Struct({
        object: Schema.optional(Schema.String),
        id: Schema.optional(Schema.String),
        first_name: Schema.optional(Schema.NullOr(Schema.String)),
        last_name: Schema.optional(Schema.NullOr(Schema.String)),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        profile_picture_url: Schema.optional(Schema.NullOr(Schema.String)),
        email: Schema.optional(Schema.String),
        email_verified: Schema.optional(Schema.Boolean),
        external_id: Schema.optional(Schema.NullOr(Schema.String)),
        metadata: Schema.optional(Schema.Record(Schema.String, Schema.String)),
        last_sign_in_at: Schema.optional(Schema.NullOr(Schema.String)),
        locale: Schema.optional(Schema.NullOr(Schema.String)),
        created_at: Schema.optional(Schema.String),
        updated_at: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<UserlandUsersControllerResetPassword0Output>;

// The operation
/**
 * Reset the password
 *
 * Sets a new password using the `token` query parameter from the link that the user received. Successfully resetting the password will verify a user's email, if it hasn't been verified yet.
 */
export const UserlandUsersControllerResetPassword0 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUsersControllerResetPassword0Input,
    outputSchema: UserlandUsersControllerResetPassword0Output,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
