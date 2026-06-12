import * as Schema from "effect/Schema";
import {
  account_capability_future_requirementsSchema,
  account_capability_requirementsSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const PostAccountsAccountCapabilitiesCapabilityInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    account: Schema.String.pipe(T.PathParam()),
    capability: Schema.String.pipe(T.PathParam()),
    expand: Schema.optional(Schema.Array(Schema.String)),
    requested: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/accounts/{account}/capabilities/{capability}",
      contentType: "form-urlencoded",
    }),
  );
export type PostAccountsAccountCapabilitiesCapabilityInput =
  typeof PostAccountsAccountCapabilitiesCapabilityInput.Type;

// Output Schema
export const PostAccountsAccountCapabilitiesCapabilityOutput =
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
export type PostAccountsAccountCapabilitiesCapabilityOutput =
  typeof PostAccountsAccountCapabilitiesCapabilityOutput.Type;

// The operation
/**
 * Update an Account Capability
 *
 * <p>Updates an existing Account Capability. Request or remove a capability by updating its <code>requested</code> parameter.</p>
 */
export const PostAccountsAccountCapabilitiesCapability =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostAccountsAccountCapabilitiesCapabilityInput,
    outputSchema: PostAccountsAccountCapabilitiesCapabilityOutput,
  }));
