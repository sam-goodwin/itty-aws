import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden } from "../errors.ts";

// Input Schema
export const ScimListGroupsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  startIndex: Schema.optional(Schema.Number),
  count: Schema.optional(Schema.Number),
  filter: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/scim/v2/Groups" }));
export type ScimListGroupsInput = typeof ScimListGroupsInput.Type;

// Output Schema
export const ScimListGroupsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemas: Schema.optional(Schema.Array(Schema.String)),
  totalResults: Schema.optional(Schema.Number),
  startIndex: Schema.optional(Schema.Number),
  itemsPerPage: Schema.optional(Schema.Number),
  Resources: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        schemas: Schema.optional(Schema.Array(Schema.String)),
        displayName: Schema.optional(Schema.String),
        externalId: Schema.optional(Schema.String),
        members: Schema.optional(
          Schema.Array(
            Schema.Struct({
              value: Schema.optional(Schema.String),
              display: Schema.optional(Schema.String),
              $ref: Schema.optional(Schema.String),
            }),
          ),
        ),
        meta: Schema.optional(
          Schema.Struct({
            resourceType: Schema.optional(Schema.String),
            created: Schema.optional(Schema.String),
            lastModified: Schema.optional(Schema.String),
            location: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  ),
});
export type ScimListGroupsOutput = typeof ScimListGroupsOutput.Type;

// The operation
/**
 * List SCIM Groups
 *
 * List Groups in your Organization via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 *
 * @param startIndex - The 1-based index of the first result in the current set of list results.
 * @param count - Specifies the desired maximum number of query results per page.
 * @param filter - Filter expression to select specific resources (e.g., `displayName eq "my-group"`).
 */
export const scimListGroups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimListGroupsInput,
  outputSchema: ScimListGroupsOutput,
  errors: [Forbidden] as const,
}));
