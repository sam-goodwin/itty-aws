import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ScimListUsersInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startIndex: Schema.optional(Schema.Number),
  count: Schema.optional(Schema.Number),
  filter: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/scim/v2/Users" }));
export type ScimListUsersInput = typeof ScimListUsersInput.Type;

// Output Schema
export const ScimListUsersOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemas: Schema.optional(Schema.Array(Schema.String)),
  totalResults: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  itemsPerPage: Schema.optional(Schema.Number),
  Resources: Schema.optional(
    Schema.Array(
      Schema.Struct({
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
      }),
    ),
  ),
});
export type ScimListUsersOutput = typeof ScimListUsersOutput.Type;

// The operation
/**
 * List SCIM Users
 *
 * List Users in your Organization via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 *
 * @param startIndex - The 1-based index of the first result in the current set of list results.
 * @param count - Specifies the desired maximum number of query results per page.
 * @param filter - Filter expression to select specific resources (e.g., `userName eq "user@example.com"`).
 */
export const scimListUsers = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimListUsersInput,
  outputSchema: ScimListUsersOutput,
  errors: [Forbidden] as const,
}));
