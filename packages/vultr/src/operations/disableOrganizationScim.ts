import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DisableOrganizationScimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/organizations/{id}/scim/disable" }),
  );
export type DisableOrganizationScimInput =
  typeof DisableOrganizationScimInput.Type;

// Output Schema
export const DisableOrganizationScimOutput =
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
export type DisableOrganizationScimOutput =
  typeof DisableOrganizationScimOutput.Type;

// The operation
/**
 * Disable SCIM
 *
 * Disable SCIM provisioning for an Organization.
 *
 * @param id - The Organization ID.
 */
export const disableOrganizationScim = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DisableOrganizationScimInput,
    outputSchema: DisableOrganizationScimOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
