import * as Schema from "effect/Schema";

export const EventSchemaSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  event_definition: Schema.optional(Schema.String),
  property_group: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      description: Schema.optional(Schema.String),
      properties: Schema.optional(
        Schema.Array(Schema.suspend(() => SchemaPropertyGroupPropertySchema)),
      ),
      events: Schema.optional(
        Schema.Array(Schema.suspend(() => EventDefinitionBasicSchema)),
      ),
      created_at: Schema.optional(Schema.String),
      updated_at: Schema.optional(Schema.String),
      created_by: Schema.optional(
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
    }),
  ),
  property_group_id: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const SchemaPropertyGroupPropertySchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    property_type: Schema.optional(
      Schema.suspend(() => SchemaPropertyGroupPropertyPropertyTypeEnumSchema),
    ),
    is_required: Schema.optional(Schema.Boolean),
    is_optional_in_types: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export const SchemaPropertyGroupPropertyPropertyTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "DateTime",
    "String",
    "Numeric",
    "Boolean",
    "Object",
  ]);
export const EventDefinitionBasicSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
  });
