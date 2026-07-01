import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface UsersTwoFactorStatusRetrieveInput {
  uuid: string;
}
export const UsersTwoFactorStatusRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{uuid}/two_factor_status/" }),
  ) as unknown as Schema.Codec<UsersTwoFactorStatusRetrieveInput>;

// Output Schema
export type UsersTwoFactorStatusRetrieveOutput = void;
export const UsersTwoFactorStatusRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<UsersTwoFactorStatusRetrieveOutput>;

// The operation
/**
 * Get current 2FA status including backup codes if enabled
 */
export const usersTwoFactorStatusRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: UsersTwoFactorStatusRetrieveInput,
    outputSchema: UsersTwoFactorStatusRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }));
