import * as Schema from "effect/Schema";
import { OrganizationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCurrentUserOrganizationsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/users/me/organizations" }),
  );
export type GetCurrentUserOrganizationsInput =
  typeof GetCurrentUserOrganizationsInput.Type;

// Output Schema
export const GetCurrentUserOrganizationsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organizations: Schema.Array(Schema.suspend(() => OrganizationSchema)),
  });
export type GetCurrentUserOrganizationsOutput =
  typeof GetCurrentUserOrganizationsOutput.Type;

// The operation
/**
 * Retrieve current user organizations list
 *
 * Retrieves information about the current Neon user's organizations
 */
export const getCurrentUserOrganizations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetCurrentUserOrganizationsInput,
    outputSchema: GetCurrentUserOrganizationsOutput,
  }),
);
