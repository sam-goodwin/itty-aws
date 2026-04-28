import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const UsersTwoFactorStatusRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/api/users/{uuid}/two_factor_status/" }),
  );
export type UsersTwoFactorStatusRetrieveInput =
  typeof UsersTwoFactorStatusRetrieveInput.Type;

// Output Schema
export const UsersTwoFactorStatusRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UsersTwoFactorStatusRetrieveOutput =
  typeof UsersTwoFactorStatusRetrieveOutput.Type;

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
