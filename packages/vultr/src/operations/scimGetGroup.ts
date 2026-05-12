import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ScimGetGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/scim/v2/Groups/{id}" }));
export type ScimGetGroupInput = typeof ScimGetGroupInput.Type;

// Output Schema
export const ScimGetGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ScimGetGroupOutput = typeof ScimGetGroupOutput.Type;

// The operation
/**
 * Get SCIM Group
 *
 * Get a Group by ID via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 *
 * @param id - The SCIM Group ID.
 */
export const scimGetGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimGetGroupInput,
  outputSchema: ScimGetGroupOutput,
  errors: [Forbidden, NotFound] as const,
}));
