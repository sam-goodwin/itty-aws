import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const SchemaPropertyGroupsListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/schema_property_groups/",
    }),
  );
export type SchemaPropertyGroupsListInput =
  typeof SchemaPropertyGroupsListInput.Type;

// Output Schema
export const SchemaPropertyGroupsListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
        id: Schema.String,
        name: Schema.String,
        description: Schema.optional(Schema.String),
        properties: Schema.optional(
          Schema.Array(
            Schema.Struct({
              id: Schema.String,
              name: Schema.String,
              property_type: Schema.Literals([
                "DateTime",
                "String",
                "Numeric",
                "Boolean",
                "Object",
              ]),
              is_required: Schema.optional(Schema.Boolean),
              is_optional_in_types: Schema.optional(Schema.Boolean),
              description: Schema.optional(Schema.String),
              created_at: Schema.String,
              updated_at: Schema.String,
            }),
          ),
        ),
        events: Schema.Array(
          Schema.Struct({
            id: Schema.String,
            name: Schema.String,
          }),
        ),
        created_at: Schema.String,
        updated_at: Schema.String,
        created_by: Schema.Struct({
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
      }),
    ),
  });
export type SchemaPropertyGroupsListOutput =
  typeof SchemaPropertyGroupsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const schemaPropertyGroupsList = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: SchemaPropertyGroupsListInput,
    outputSchema: SchemaPropertyGroupsListOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
