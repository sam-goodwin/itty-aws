import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, Conflict } from "../errors.ts";

// Input Schema
export const ScimCreateUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}).pipe(T.Http({ method: "POST", path: "/scim/v2/Users" }));
export type ScimCreateUserInput = typeof ScimCreateUserInput.Type;

// Output Schema
export const ScimCreateUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ScimCreateUserOutput = typeof ScimCreateUserOutput.Type;

// The operation
/**
 * Create SCIM User
 *
 * Create a new User in your Organization via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 */
export const scimCreateUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimCreateUserInput,
  outputSchema: ScimCreateUserOutput,
  errors: [BadRequest, Forbidden, Conflict] as const,
}));
