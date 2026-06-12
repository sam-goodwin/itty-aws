import * as Schema from "effect/Schema";
import {
  account_capability_future_requirementsSchema,
  account_capability_requirementsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetAccountsAccountCapabilitiesCapabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    capability: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/accounts/{account}/capabilities/{capability}",
      contentType: "form-urlencoded",
    }),
  );
export type GetAccountsAccountCapabilitiesCapabilityInput =
  typeof GetAccountsAccountCapabilitiesCapabilityInput.Type;

// Output Schema
export const GetAccountsAccountCapabilitiesCapabilityOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.Unknown,
    future_requirements: Schema.optional(
      Schema.suspend(() => account_capability_future_requirementsSchema),
    ),
    id: Schema.String,
    object: Schema.Literals(["capability"]),
    requested: Schema.Boolean,
    requested_at: Schema.NullOr(Schema.Number),
    requirements: Schema.optional(
      Schema.suspend(() => account_capability_requirementsSchema),
    ),
    status: Schema.Literals(["active", "inactive", "pending", "unrequested"]),
  });
export type GetAccountsAccountCapabilitiesCapabilityOutput =
  typeof GetAccountsAccountCapabilitiesCapabilityOutput.Type;

// The operation
/**
 * Retrieve an Account Capability
 *
 * <p>Retrieves information about the specified Account Capability.</p>
 *
 * @param expand - Specifies which fields in the response should be expanded.
 */
export const GetAccountsAccountCapabilitiesCapability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetAccountsAccountCapabilitiesCapabilityInput,
    outputSchema: GetAccountsAccountCapabilitiesCapabilityOutput,
  }));
