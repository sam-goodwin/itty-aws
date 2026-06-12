import * as Schema from "effect/Schema";
import { capabilitySchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAccountsAccountCapabilitiesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/accounts/{account}/capabilities",
      contentType: "form-urlencoded",
    }),
  );
export type GetAccountsAccountCapabilitiesInput =
  typeof GetAccountsAccountCapabilitiesInput.Type;

// Output Schema
export const GetAccountsAccountCapabilitiesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(Schema.suspend(() => capabilitySchema)),
    has_more: Schema.Boolean,
    object: Schema.Literals(["list"]),
    url: Schema.String,
  });
export type GetAccountsAccountCapabilitiesOutput =
  typeof GetAccountsAccountCapabilitiesOutput.Type;

// The operation
/**
 * List all account capabilities
 *
 * <p>Returns a list of capabilities associated with the account. The capabilities are returned sorted by creation date, with the most recent capability appearing first.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetAccountsAccountCapabilities =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetAccountsAccountCapabilitiesInput,
    outputSchema: GetAccountsAccountCapabilitiesOutput,
  }));
