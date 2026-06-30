import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const PropertyAccessControlsDestroyInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    organization_member: Schema.optional(Schema.String),
    property_definition_id: Schema.String,
    role: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/api/projects/{project_id}/property_access_controls/",
    }),
  );
export type PropertyAccessControlsDestroyInput =
  typeof PropertyAccessControlsDestroyInput.Type;

// Output Schema
export const PropertyAccessControlsDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PropertyAccessControlsDestroyOutput =
  typeof PropertyAccessControlsDestroyOutput.Type;

// The operation
/**
 * Delete a property access control rule. The rule is identified by `property_definition_id` plus an optional `organization_member` or `role` query parameter. Omitting both targets deletes the default rule.
 *
 * @param organization_member - The organization member UUID whose override should be deleted.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param property_definition_id - The property definition ID the rule applies to.
 * @param role - The role UUID whose override should be deleted.
 */
export const propertyAccessControlsDestroy =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PropertyAccessControlsDestroyInput,
    outputSchema: PropertyAccessControlsDestroyOutput,
  }));
