import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateAccountBgpPrefixesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    prefixes: Schema.Array(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/account/bgp/prefixes" }));
export type CreateAccountBgpPrefixesInput =
  typeof CreateAccountBgpPrefixesInput.Type;

// Output Schema
export const CreateAccountBgpPrefixesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    ticket_reference: Schema.optional(Schema.String),
  });
export type CreateAccountBgpPrefixesOutput =
  typeof CreateAccountBgpPrefixesOutput.Type;

// The operation
/**
 * Add new BGP prefixes.
 *
 * Open a request to add new BGP prefixes.
 */
export const createAccountBgpPrefixes = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateAccountBgpPrefixesInput,
    outputSchema: CreateAccountBgpPrefixesOutput,
    errors: [BadRequest] as const,
  }),
);
