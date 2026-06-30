import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface PropertyAccessControlsCreateInput {
  project_id: string;
  property_definition_id: string;
  access_level: "read_write" | "read" | "none";
  organization_member?: string | null;
  role?: string | null;
}
export const PropertyAccessControlsCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    property_definition_id: Schema.String,
    access_level: Schema.Literals(["read_write", "read", "none"]),
    organization_member: Schema.optional(Schema.NullOr(Schema.String)),
    role: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/property_access_controls/",
    }),
  ) as unknown as Schema.Codec<PropertyAccessControlsCreateInput>;

// Output Schema
export interface PropertyAccessControlsCreateOutput {
  id: string;
  access_level: "read_write" | "read" | "none";
  organization_member: string | null;
  role: string | null;
  created_by: number | null;
  created_at: string;
  updated_at: string;
}
export const PropertyAccessControlsCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    access_level: Schema.Literals(["read_write", "read", "none"]),
    organization_member: Schema.NullOr(Schema.String),
    role: Schema.NullOr(Schema.String),
    created_by: Schema.NullOr(Schema.Number),
    created_at: Schema.String,
    updated_at: Schema.String,
  }) as unknown as Schema.Codec<PropertyAccessControlsCreateOutput>;

// The operation
/**
 * Create or update a property access control rule.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const propertyAccessControlsCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PropertyAccessControlsCreateInput,
    outputSchema: PropertyAccessControlsCreateOutput,
  }));
