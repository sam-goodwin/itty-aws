import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const PropertyDefinitionsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/property_definitions/{id}/",
    }),
  );
export type PropertyDefinitionsRetrieveInput =
  typeof PropertyDefinitionsRetrieveInput.Type;

// Output Schema
export const PropertyDefinitionsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    name: Schema.String,
    description: Schema.optional(Schema.NullOr(Schema.String)),
    tags: Schema.optional(Schema.Array(Schema.Unknown)),
    is_numerical: Schema.Boolean,
    updated_at: Schema.String,
    updated_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    is_seen_on_filtered_events: Schema.NullOr(Schema.Boolean),
    property_type: Schema.optional(Schema.Unknown),
    verified: Schema.optional(Schema.Boolean),
    verified_at: Schema.NullOr(Schema.String),
    verified_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    hidden: Schema.optional(Schema.NullOr(Schema.Boolean)),
  });
export type PropertyDefinitionsRetrieveOutput =
  typeof PropertyDefinitionsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this property definition.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const propertyDefinitionsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: PropertyDefinitionsRetrieveInput,
    outputSchema: PropertyDefinitionsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
