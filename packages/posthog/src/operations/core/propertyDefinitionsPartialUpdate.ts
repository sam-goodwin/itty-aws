import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const PropertyDefinitionsPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    is_numerical: Schema.optional(Schema.Boolean),
    updated_at: Schema.optional(Schema.String),
    updated_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    is_seen_on_filtered_events: Schema.optional(Schema.NullOr(Schema.Boolean)),
    property_type: Schema.optional(Schema.Unknown),
    verified: Schema.optional(Schema.Boolean),
    verified_at: Schema.optional(Schema.NullOr(Schema.String)),
    verified_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    hidden: Schema.optional(Schema.NullOr(Schema.Boolean)),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/property_definitions/{id}/",
    }),
  );
export type PropertyDefinitionsPartialUpdateInput =
  typeof PropertyDefinitionsPartialUpdateInput.Type;

// Output Schema
export const PropertyDefinitionsPartialUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    is_numerical: Schema.optional(Schema.Boolean),
    updated_at: Schema.optional(Schema.String),
    updated_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    is_seen_on_filtered_events: Schema.optional(Schema.NullOr(Schema.Boolean)),
    property_type: Schema.optional(Schema.Unknown),
    verified: Schema.optional(Schema.Boolean),
    verified_at: Schema.optional(Schema.NullOr(Schema.String)),
    verified_by: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          uuid: Schema.optional(Schema.String),
          distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
          first_name: Schema.optional(Schema.String),
          last_name: Schema.optional(Schema.String),
          email: Schema.optional(Schema.String),
          is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
          hedgehog_config: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    hidden: Schema.optional(Schema.NullOr(Schema.Boolean)),
  });
export type PropertyDefinitionsPartialUpdateOutput =
  typeof PropertyDefinitionsPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this property definition.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const propertyDefinitionsPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PropertyDefinitionsPartialUpdateInput,
    outputSchema: PropertyDefinitionsPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
