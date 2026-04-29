import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const EventSchemasUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    event_definition: Schema.String,
    property_group: Schema.Struct({
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
    property_group_id: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  }).pipe(
    T.Http({
      method: "PUT",
      path: "/api/projects/{project_id}/event_schemas/{id}/",
    }),
  );
export type EventSchemasUpdateInput = typeof EventSchemasUpdateInput.Type;

// Output Schema
export const EventSchemasUpdateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    event_definition: Schema.String,
    property_group: Schema.Struct({
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
    property_group_id: Schema.String,
    created_at: Schema.String,
    updated_at: Schema.String,
  });
export type EventSchemasUpdateOutput = typeof EventSchemasUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this event schema.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const eventSchemasUpdate = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: EventSchemasUpdateInput,
  outputSchema: EventSchemasUpdateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
