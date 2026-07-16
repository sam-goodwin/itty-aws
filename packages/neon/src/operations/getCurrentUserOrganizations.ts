import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetCurrentUserOrganizationsInput {}
export const GetCurrentUserOrganizationsInput =
  /*@__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/users/me/organizations" }),
  ) as unknown as Schema.Codec<GetCurrentUserOrganizationsInput>;

// Output Schema
export interface GetCurrentUserOrganizationsOutput {
  organizations: {
    id: string;
    name: string;
    handle: string;
    plan: string;
    created_at: string;
    managed_by: string;
    updated_at: string;
    allow_hipaa_projects?: boolean;
    require_mfa?: boolean;
  }[];
}
export const GetCurrentUserOrganizationsOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<GetCurrentUserOrganizationsOutput>;

// The operation
/**
 * List organizations for the current user
 *
 * Retrieves the organizations that the currently authenticated user belongs to.
 */
export const getCurrentUserOrganizations = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetCurrentUserOrganizationsInput,
  outputSchema: GetCurrentUserOrganizationsOutput,
}));
