import * as Schema from "effect/Schema";
import { OrganizationSchema } from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListOrganizationsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {},
).pipe(T.Http({ method: "GET", path: "/v1/organizations" }));
export type ListOrganizationsInput = typeof ListOrganizationsInput.Type;

// Output Schema
export const ListOrganizationsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
  Schema.suspend(() => OrganizationSchema),
);
export type ListOrganizationsOutput = typeof ListOrganizationsOutput.Type;

// The operation
/**
 * List Organizations
 *
 * Returns a list of organizations the authenticated user owns or is a member of.
 */
export const listOrganizations = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListOrganizationsInput,
  outputSchema: ListOrganizationsOutput,
}));
