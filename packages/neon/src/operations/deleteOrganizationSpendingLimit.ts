import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DeleteOrganizationSpendingLimitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{org_id}/billing/spending_limit",
    }),
  );
export type DeleteOrganizationSpendingLimitInput =
  typeof DeleteOrganizationSpendingLimitInput.Type;

// Output Schema
export const DeleteOrganizationSpendingLimitOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({});
export type DeleteOrganizationSpendingLimitOutput =
  typeof DeleteOrganizationSpendingLimitOutput.Type;

// The operation
/**
 * Clear the organization's monthly spending limit
 *
 * Removes a previously configured spending limit for a V3 paid
 * organization. Idempotent — deleting an already-unset limit still
 * succeeds. Available to organization admins on Launch and Scale plans
 * only.
 *
 * @param org_id - The Neon organization ID
 */
export const deleteOrganizationSpendingLimit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteOrganizationSpendingLimitInput,
    outputSchema: DeleteOrganizationSpendingLimitOutput,
  }));
