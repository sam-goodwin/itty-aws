import * as Schema from "effect/Schema";
import { OrganizationPlanSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListOrganizationPlansInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/plans",
    }),
  );
export type ListOrganizationPlansInput = typeof ListOrganizationPlansInput.Type;

// Output Schema
export const ListOrganizationPlansOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    plans: Schema.optional(
      Schema.Array(Schema.suspend(() => OrganizationPlanSchema)),
    ),
  });
export type ListOrganizationPlansOutput =
  typeof ListOrganizationPlansOutput.Type;

// The operation
/**
 * List Plans
 *
 * Returns a list of available plans and their quotas.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const listOrganizationPlans = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListOrganizationPlansInput,
    outputSchema: ListOrganizationPlansOutput,
  }),
);
