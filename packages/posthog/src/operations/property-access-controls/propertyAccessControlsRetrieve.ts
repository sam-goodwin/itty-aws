import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface PropertyAccessControlsRetrieveInput {
  project_id: string;
  property_definition_id: string;
}
export const PropertyAccessControlsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    property_definition_id: Schema.String,
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/property_access_controls/",
    }),
  ) as unknown as Schema.Codec<PropertyAccessControlsRetrieveInput>;

// Output Schema
export interface PropertyAccessControlsRetrieveOutput {
  access_controls: {
    id: string;
    access_level: "read_write" | "read" | "none";
    organization_member: string | null;
    role: string | null;
    created_by: number | null;
    created_at: string;
    updated_at: string;
  }[];
  available_access_levels: string[];
  default_access_level: string;
}
export const PropertyAccessControlsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    access_controls: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        access_level: Schema.Literals(["read_write", "read", "none"]),
        organization_member: Schema.NullOr(Schema.String),
        role: Schema.NullOr(Schema.String),
        created_by: Schema.NullOr(Schema.Number),
        created_at: Schema.String,
        updated_at: Schema.String,
      }),
    ),
    available_access_levels: Schema.Array(Schema.String),
    default_access_level: Schema.String,
  }) as unknown as Schema.Codec<PropertyAccessControlsRetrieveOutput>;

// The operation
/**
 * Get all property access control rules for a property definition.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param property_definition_id - The property definition ID to fetch access control rules for.
 */
export const propertyAccessControlsRetrieve =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PropertyAccessControlsRetrieveInput,
    outputSchema: PropertyAccessControlsRetrieveOutput,
  }));
