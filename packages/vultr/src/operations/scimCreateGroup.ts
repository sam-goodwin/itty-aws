import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, Conflict } from "../errors.ts";

// Input Schema
export const ScimCreateGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  schemas: Schema.optional(Schema.Array(Schema.String)),
  displayName: Schema.optional(Schema.String),
  externalId: Schema.optional(Schema.String),
  members: Schema.optional(
    Schema.Array(
      Schema.Struct({
        value: Schema.optional(Schema.String),
      }),
    ),
  ),
}).pipe(T.Http({ method: "POST", path: "/scim/v2/Groups" }));
export type ScimCreateGroupInput = typeof ScimCreateGroupInput.Type;

// Output Schema
export const ScimCreateGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
});
export type ScimCreateGroupOutput = typeof ScimCreateGroupOutput.Type;

// The operation
/**
 * Create SCIM Group
 *
 * Create a new Group in your Organization via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 */
export const scimCreateGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimCreateGroupInput,
  outputSchema: ScimCreateGroupOutput,
  errors: [BadRequest, Forbidden, Conflict] as const,
}));
