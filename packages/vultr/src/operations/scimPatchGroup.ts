import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const ScimPatchGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
}).pipe(T.Http({ method: "PATCH", path: "/scim/v2/Groups/{id}" }));
export type ScimPatchGroupInput = typeof ScimPatchGroupInput.Type;

// Output Schema
export const ScimPatchGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export type ScimPatchGroupOutput = typeof ScimPatchGroupOutput.Type;

// The operation
/**
 * Patch SCIM Group
 *
 * Partially update a Group via the SCIM 2.0 protocol. Authenticate using the SCIM token obtained from the Organization SCIM configuration.
 *
 * @param id - The SCIM Group ID.
 */
export const scimPatchGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ScimPatchGroupInput,
  outputSchema: ScimPatchGroupOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
