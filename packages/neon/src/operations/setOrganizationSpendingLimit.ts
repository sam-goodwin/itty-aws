import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const SetOrganizationSpendingLimitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    spending_limit_cents: Schema.Number,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/organizations/{org_id}/billing/spending_limit",
    }),
  );
export type SetOrganizationSpendingLimitInput =
  typeof SetOrganizationSpendingLimitInput.Type;

// Output Schema
export const SetOrganizationSpendingLimitOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spending_limit_cents: Schema.NullOr(Schema.Number),
  });
export type SetOrganizationSpendingLimitOutput =
  typeof SetOrganizationSpendingLimitOutput.Type;

// The operation
/**
 * Set the organization's monthly spending limit
 *
 * Sets the spending limit for a V3 paid organization. To remove a
 * previously configured limit, send a DELETE request to this endpoint.
 * When a limit is configured, email notifications are sent at 80% and
 * 100% of the limit. Computes are not suspended by this feature.
 * Available to organization admins on Launch and Scale plans only.
 *
 * @param org_id - The Neon organization ID
 */
export const setOrganizationSpendingLimit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: SetOrganizationSpendingLimitInput,
    outputSchema: SetOrganizationSpendingLimitOutput,
  }));
