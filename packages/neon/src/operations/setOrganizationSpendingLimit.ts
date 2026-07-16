import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface SetOrganizationSpendingLimitInput {
  org_id: string;
  spending_limit_cents: number;
}
export const SetOrganizationSpendingLimitInput =
  /*@__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
    spending_limit_cents: Schema.Number,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/organizations/{org_id}/billing/spending_limit",
    }),
  ) as unknown as Schema.Codec<SetOrganizationSpendingLimitInput>;

// Output Schema
export interface SetOrganizationSpendingLimitOutput {
  spending_limit_cents: number | null;
}
export const SetOrganizationSpendingLimitOutput =
  /*@__PURE__*/ Schema.Struct({
    spending_limit_cents: Schema.NullOr(Schema.Number),
  }) as unknown as Schema.Codec<SetOrganizationSpendingLimitOutput>;

// The operation
/**
 * Set organization spending limit
 *
 * Sets the monthly spending limit for the specified organization.
 * To remove a previously configured limit, send a DELETE request to this endpoint.
 * When a limit is configured, email notifications are sent at 80% and 100% of the limit.
 * Computes are not suspended when the limit is reached.
 * Available to organization admins on Launch and Scale plans only.
 *
 * @param org_id - The Neon organization ID
 */
export const setOrganizationSpendingLimit =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: SetOrganizationSpendingLimitInput,
    outputSchema: SetOrganizationSpendingLimitOutput,
  }));
