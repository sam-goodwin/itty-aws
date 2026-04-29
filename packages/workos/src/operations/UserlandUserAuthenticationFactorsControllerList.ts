import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const UserlandUserAuthenticationFactorsControllerListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    userlandUserId: Schema.String.pipe(T.PathParam()),
    before: Schema.optional(Schema.String),
    after: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    order: Schema.optional(Schema.Literals(["normal", "desc", "asc"])),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/user_management/users/{userlandUserId}/auth_factors",
    }),
  );
export type UserlandUserAuthenticationFactorsControllerListInput =
  typeof UserlandUserAuthenticationFactorsControllerListInput.Type;

// Output Schema
export const UserlandUserAuthenticationFactorsControllerListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    data: Schema.Array(
      Schema.Struct({
        object: Schema.String,
        id: Schema.String,
        type: Schema.Literals(["generic_otp", "sms", "totp", "webauthn"]),
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
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    list_metadata: Schema.Struct({
      before: Schema.NullOr(Schema.String),
      after: Schema.NullOr(Schema.String),
    }),
  });
export type UserlandUserAuthenticationFactorsControllerListOutput =
  typeof UserlandUserAuthenticationFactorsControllerListOutput.Type;

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
export const UserlandUserAuthenticationFactorsControllerList =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UserlandUserAuthenticationFactorsControllerListInput,
    outputSchema: UserlandUserAuthenticationFactorsControllerListOutput,
    errors: [UnprocessableEntity] as const,
  }));
