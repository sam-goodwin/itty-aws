import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export interface UserlandUsersControllerGet0Input {
  id: string;
}
export const UserlandUsersControllerGet0Input =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/user_management/users/{id}" }),
  ) as unknown as Schema.Codec<UserlandUsersControllerGet0Input>;

// Output Schema
export interface UserlandUsersControllerGet0Output {
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
}
export const UserlandUsersControllerGet0Output =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<UserlandUsersControllerGet0Output>;

// The operation
/**
 * Get a user
 *
 * Get the details of an existing user.
 *
 * @param id - The unique ID of the user.
 */
export const UserlandUsersControllerGet0 = /*@__PURE__*/ API.make(() => ({
  inputSchema: UserlandUsersControllerGet0Input,
  outputSchema: UserlandUsersControllerGet0Output,
  errors: [NotFound] as const,
}));
