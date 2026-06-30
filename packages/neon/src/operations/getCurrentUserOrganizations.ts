import * as Schema from "effect/Schema";
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
    organizations: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        handle: Schema.String,
        plan: Schema.String,
        created_at: Schema.String,
        managed_by: Schema.String,
        updated_at: Schema.String,
        allow_hipaa_projects: Schema.optional(Schema.Boolean),
        require_mfa: Schema.optional(Schema.Boolean),
      }),
    ),
  });
export type GetCurrentUserOrganizationsOutput =
  typeof GetCurrentUserOrganizationsOutput.Type;

// The operation
/**
 * List organizations for the current user
 *
 * Retrieves the organizations that the currently authenticated user belongs to.
 */
export const getCurrentUserOrganizations = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetCurrentUserOrganizationsInput,
    outputSchema: GetCurrentUserOrganizationsOutput,
  }),
);
