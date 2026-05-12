import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const EnableOrganizationScimInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/organizations/{id}/scim/enable" }),
  );
export type EnableOrganizationScimInput =
  typeof EnableOrganizationScimInput.Type;

// Output Schema
export const EnableOrganizationScimOutput =
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
export type EnableOrganizationScimOutput =
  typeof EnableOrganizationScimOutput.Type;

// The operation
/**
 * Enable SCIM
 *
 * Enable SCIM provisioning for an Organization.
 *
 * @param id - The Organization ID.
 */
export const enableOrganizationScim = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EnableOrganizationScimInput,
    outputSchema: EnableOrganizationScimOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
