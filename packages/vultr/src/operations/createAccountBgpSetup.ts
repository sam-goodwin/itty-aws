import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";
import { SensitiveString } from "../sensitive.ts";

// Input Schema
export const CreateAccountBgpSetupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefixes: Schema.Array(Schema.String),
    asn: Schema.optional(Schema.Number),
    password: Schema.optional(SensitiveString),
    letter_of_authorization: Schema.optional(Schema.String),
    requested_routes: Schema.String,
    usecase: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/account/bgp/setup" }));
export type CreateAccountBgpSetupInput = typeof CreateAccountBgpSetupInput.Type;

// Output Schema
export const CreateAccountBgpSetupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ticket_reference: Schema.optional(Schema.String),
  });
export type CreateAccountBgpSetupOutput =
  typeof CreateAccountBgpSetupOutput.Type;

// The operation
/**
 * Setup BGP on your Account
 *
 * Request BGP setup on your account.
 */
export const createAccountBgpSetup = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateAccountBgpSetupInput,
    outputSchema: CreateAccountBgpSetupOutput,
    errors: [BadRequest] as const,
  }),
);
