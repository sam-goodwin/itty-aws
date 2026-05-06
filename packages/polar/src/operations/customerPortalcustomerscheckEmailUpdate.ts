import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomerPortalcustomerscheckEmailUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    token: Schema.String.pipe(T.QueryParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/customer-portal/customers/me/email-update/check",
    }),
  );
export type CustomerPortalcustomerscheckEmailUpdateInput =
  typeof CustomerPortalcustomerscheckEmailUpdateInput.Type;

// Output Schema
export const CustomerPortalcustomerscheckEmailUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type CustomerPortalcustomerscheckEmailUpdateOutput =
  typeof CustomerPortalcustomerscheckEmailUpdateOutput.Type;

// The operation
/**
 * Check Email Change Token
 *
 * Check if an email change verification token is still valid.
 */
export const customerPortalcustomerscheckEmailUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomerPortalcustomerscheckEmailUpdateInput,
    outputSchema: CustomerPortalcustomerscheckEmailUpdateOutput,
    errors: [UnprocessableEntity] as const,
  }));
