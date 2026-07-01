import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export interface UserlandUserAuthenticationFactorsControllerList0Input {
  userlandUserId: string;
  before?: string;
  after?: string;
  limit?: number;
  order?: string;
}
export const UserlandUserAuthenticationFactorsControllerList0Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userlandUserId: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/users/{userlandUserId}/auth_factors",
    }),
  ) as unknown as Schema.Codec<UserlandUserAuthenticationFactorsControllerList0Input>;

// Output Schema
export interface UserlandUserAuthenticationFactorsControllerList0Output {
  object?: string;
  data?: ReadonlyArray<{
    object?: string;
    id?: string;
    type?: "generic_otp" | "sms" | "totp" | "webauthn";
    user_id?: string;
    sms?: { phone_number: string };
    totp?: { issuer: string; user: string };
    created_at?: string;
    updated_at?: string;
  }>;
  list_metadata?: { before: string | null; after: string | null };
}
export const UserlandUserAuthenticationFactorsControllerList0Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.String),
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          object: Schema.optional(Schema.String),
          id: Schema.optional(Schema.String),
          type: Schema.optional(
            Schema.Literals(["generic_otp", "sms", "totp", "webauthn"]),
          ),
          user_id: Schema.optional(Schema.String),
          sms: Schema.optional(
            Schema.Struct({
              phone_number: Schema.String,
            }),
          ),
          totp: Schema.optional(
            Schema.Struct({
              issuer: Schema.String,
              user: Schema.String,
            }),
          ),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
        }),
      ),
    ),
    list_metadata: Schema.optional(
      Schema.Struct({
        before: Schema.NullOr(Schema.String),
        after: Schema.NullOr(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<UserlandUserAuthenticationFactorsControllerList0Output>;

// The operation
/**
 * List authentication factors
 *
 * Lists the [authentication factors](/reference/authkit/mfa/authentication-factor) for a user.
 *
 * @param userlandUserId - The ID of the [user](/reference/authkit/user).
 * @param before - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param after - An object ID that defines your place in the list. When the ID is not present, you are at the end of the list.
 * @param limit - Upper limit on the number of objects to return, between `1` and `100`.
 * @param order - Order the results by the creation time.
 */
export const UserlandUserAuthenticationFactorsControllerList0 =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserAuthenticationFactorsControllerList0Input,
    outputSchema: UserlandUserAuthenticationFactorsControllerList0Output,
    errors: [UnprocessableEntity] as const,
  }));
