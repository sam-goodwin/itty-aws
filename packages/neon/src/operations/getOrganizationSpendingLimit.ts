import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetOrganizationSpendingLimitInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    org_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/organizations/{org_id}/billing/spending_limit",
    }),
  );
export type GetOrganizationSpendingLimitInput =
  typeof GetOrganizationSpendingLimitInput.Type;

// Output Schema
export const GetOrganizationSpendingLimitOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    spending_limit_cents: Schema.NullOr(Schema.Number),
  });
export type GetOrganizationSpendingLimitOutput =
  typeof GetOrganizationSpendingLimitOutput.Type;

// The operation
/**
 * Retrieve the organization's monthly spending limit
 *
 * Returns the configured spending limit for a V3 paid organization.
 * `spending_limit_cents: null` indicates that no limit is currently
 * set. Available to organization members with read access on Launch
 * and Scale plans only.
 *
 * @param org_id - The Neon organization ID
 */
export const getOrganizationSpendingLimit =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: GetOrganizationSpendingLimitInput,
    outputSchema: GetOrganizationSpendingLimitOutput,
  }));
