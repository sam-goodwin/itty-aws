import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const RotateOrganizationScimTokenInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/organizations/{id}/scim/token" }),
  );
export type RotateOrganizationScimTokenInput =
  typeof RotateOrganizationScimTokenInput.Type;

// Output Schema
export const RotateOrganizationScimTokenOutput =
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
export type RotateOrganizationScimTokenOutput =
  typeof RotateOrganizationScimTokenOutput.Type;

// The operation
/**
 * Rotate SCIM Token
 *
 * Rotate the SCIM authentication token for an Organization.
 *
 * @param id - The Organization ID.
 */
export const rotateOrganizationScimToken = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: RotateOrganizationScimTokenInput,
    outputSchema: RotateOrganizationScimTokenOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
