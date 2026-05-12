import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ScimGetUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/scim/v2/Users/{id}" }));
export type ScimGetUserInput = typeof ScimGetUserInput.Type;

// Output Schema
export const ScimGetUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  schemas: Schema.optional(Schema.Array(Schema.String)),
  userName: Schema.optional(Schema.String),
  name: Schema.optional(
    Schema.Struct({
      givenName: Schema.optional(Schema.String),
      familyName: Schema.optional(Schema.String),
    }),
  ),
  displayName: Schema.optional(Schema.String),
  active: Schema.optional(Schema.Boolean),
  phoneNumbers: Schema.optional(
    Schema.Array(
      Schema.Struct({
        value: Schema.optional(Schema.String),
        type: Schema.optional(Schema.String),
      }),
    ),
  ),
  meta: Schema.optional(
    Schema.Struct({
      resourceType: Schema.optional(Schema.String),
      created: Schema.optional(Schema.String),
      lastModified: Schema.optional(Schema.String),
    }),
  ),
  date_created: Schema.optional(Schema.String),
  date_updated: Schema.optional(Schema.String),
});
export type ScimGetUserOutput = typeof ScimGetUserOutput.Type;

// The operation
/**
 * Get SCIM User
 *
 * Get a User by ID via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 *
 * @param id - The SCIM User ID.
 */
export const scimGetUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimGetUserInput,
  outputSchema: ScimGetUserOutput,
  errors: [Forbidden, NotFound] as const,
}));
