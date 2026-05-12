import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetOrganizationScimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/v2/organizations/{id}/scim" }));
export type GetOrganizationScimInput = typeof GetOrganizationScimInput.Type;

// Output Schema
export const GetOrganizationScimOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    scim: Schema.optional(
      Schema.Struct({
        scim_enabled: Schema.optional(Schema.Boolean),
        auth_method: Schema.optional(Schema.String),
        date_added: Schema.optional(Schema.String),
        date_updated: Schema.optional(Schema.String),
        scim_token: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetOrganizationScimOutput = typeof GetOrganizationScimOutput.Type;

// The operation
/**
 * Get Organization SCIM Config
 *
 * Get the SCIM configuration for an Organization.
 *
 * @param id - The Organization ID.
 */
export const getOrganizationScim = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationScimInput,
  outputSchema: GetOrganizationScimOutput,
  errors: [Forbidden, NotFound] as const,
}));
