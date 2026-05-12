import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ScimPatchUserInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  schemas: Schema.optional(Schema.Array(Schema.String)),
  Operations: Schema.optional(
    Schema.Array(
      Schema.Struct({
        op: Schema.optional(Schema.Literals(["add", "remove", "replace"])),
        path: Schema.optional(Schema.String),
        value: Schema.optional(Schema.Unknown),
      }),
    ),
  ),
}).pipe(T.Http({ method: "PATCH", path: "/scim/v2/Users/{id}" }));
export type ScimPatchUserInput = typeof ScimPatchUserInput.Type;

// Output Schema
export const ScimPatchUserOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ScimPatchUserOutput = typeof ScimPatchUserOutput.Type;

// The operation
/**
 * Patch SCIM User
 *
 * Partially update a User via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 *
 * @param id - The SCIM User ID.
 */
export const scimPatchUser = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimPatchUserInput,
  outputSchema: ScimPatchUserOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
