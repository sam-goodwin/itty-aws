import * as Schema from "effect/Schema";

export const HogFunctionMinimalSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    type: Schema.optional(Schema.NullOr(Schema.String)),
    name: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
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
    updated_at: Schema.optional(Schema.String),
    enabled: Schema.optional(Schema.Boolean),
    hog: Schema.optional(Schema.String),
    filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    icon_url: Schema.optional(Schema.NullOr(Schema.String)),
    template: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        description: Schema.optional(Schema.NullOr(Schema.String)),
        code: Schema.optional(Schema.String),
        code_language: Schema.optional(Schema.String),
        inputs_schema: Schema.optional(Schema.Unknown),
        type: Schema.optional(Schema.String),
        status: Schema.optional(Schema.String),
        category: Schema.optional(Schema.Unknown),
        free: Schema.optional(Schema.Boolean),
        icon_url: Schema.optional(Schema.NullOr(Schema.String)),
        filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
        masking: Schema.optional(Schema.NullOr(Schema.Unknown)),
        mapping_templates: Schema.optional(
          Schema.NullOr(
            Schema.Array(
              Schema.suspend(() => HogFunctionMappingTemplateSchema),
            ),
          ),
        ),
      }),
    ),
    status: Schema.optional(
      Schema.NullOr(
        Schema.Struct({
          state: Schema.optional(
            Schema.suspend(() => HogFunctionStatusStateEnumSchema),
          ),
          tokens: Schema.optional(Schema.Number),
        }),
      ),
    ),
    execution_order: Schema.optional(Schema.NullOr(Schema.Number)),
  });
export const HogFunctionMappingTemplateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    include_by_default: Schema.optional(Schema.NullOr(Schema.Boolean)),
    use_all_events_by_default: Schema.optional(Schema.NullOr(Schema.Boolean)),
    filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
    inputs: Schema.optional(Schema.NullOr(Schema.Unknown)),
    inputs_schema: Schema.optional(Schema.NullOr(Schema.Unknown)),
  });
export const HogFunctionStatusStateEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([0, 1, 2, 3, 11, 12]);
export const InputsSchemaItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    type: Schema.optional(Schema.suspend(() => InputsSchemaItemTypeEnumSchema)),
    key: Schema.optional(Schema.String),
    label: Schema.optional(Schema.String),
    choices: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    required: Schema.optional(Schema.Boolean),
    default: Schema.optional(Schema.Unknown),
    secret: Schema.optional(Schema.Boolean),
    hidden: Schema.optional(Schema.Boolean),
    description: Schema.optional(Schema.String),
    integration: Schema.optional(Schema.String),
    integration_key: Schema.optional(Schema.String),
    requires_field: Schema.optional(Schema.String),
    integration_field: Schema.optional(Schema.String),
    requiredScopes: Schema.optional(Schema.String),
    templating: Schema.optional(Schema.Unknown),
  },
);
export const InputsSchemaItemTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "string",
    "number",
    "boolean",
    "dictionary",
    "choice",
    "json",
    "integration",
    "integration_field",
    "email",
    "native_email",
    "posthog_assignee",
    "posthog_ticket_tags",
    "posthog_business_hours",
  ]);
export const InputsItemSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  value: Schema.optional(Schema.Unknown),
  templating: Schema.optional(
    Schema.suspend(() => HogFunctionTemplatingEnumSchema),
  ),
  bytecode: Schema.optional(Schema.Array(Schema.Unknown)),
  order: Schema.optional(Schema.Number),
  transpiled: Schema.optional(Schema.Unknown),
});
export const HogFunctionTemplatingEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals(["hog", "liquid"]);
export const MappingsSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  inputs_schema: Schema.optional(
    Schema.Array(Schema.suspend(() => InputsSchemaItemSchema)),
  ),
  inputs: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => InputsItemSchema),
    ),
  ),
  filters: Schema.optional(Schema.suspend(() => HogFunctionFiltersSchema)),
});
export const HogFunctionFiltersSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    source: Schema.optional(
      Schema.Literals(["events", "person-updates", "data-warehouse-table"]),
    ),
    actions: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    events: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    data_warehouse: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    properties: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
    transpiled: Schema.optional(Schema.Unknown),
    filter_test_accounts: Schema.optional(Schema.Boolean),
    bytecode_error: Schema.optional(Schema.String),
  });
export const AppMetricSeriesSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  name: Schema.optional(Schema.String),
  values: Schema.optional(Schema.Array(Schema.Number)),
});
export const HogFunctionSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.Unknown),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  description: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
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
  updated_at: Schema.optional(Schema.String),
  enabled: Schema.optional(Schema.Boolean),
  deleted: Schema.optional(Schema.Boolean),
  hog: Schema.optional(Schema.String),
  bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
  transpiled: Schema.optional(Schema.NullOr(Schema.String)),
  inputs_schema: Schema.optional(
    Schema.Array(Schema.suspend(() => InputsSchemaItemSchema)),
  ),
  inputs: Schema.optional(
    Schema.Record(
      Schema.String,
      Schema.suspend(() => InputsItemSchema),
    ),
  ),
  filters: Schema.optional(
    Schema.Struct({
      source: Schema.optional(
        Schema.Literals(["events", "person-updates", "data-warehouse-table"]),
      ),
      actions: Schema.optional(
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      events: Schema.optional(
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      data_warehouse: Schema.optional(
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      properties: Schema.optional(
        Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
      ),
      bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
      transpiled: Schema.optional(Schema.Unknown),
      filter_test_accounts: Schema.optional(Schema.Boolean),
      bytecode_error: Schema.optional(Schema.String),
    }),
  ),
  masking: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        ttl: Schema.optional(Schema.Number),
        threshold: Schema.optional(Schema.NullOr(Schema.Number)),
        hash: Schema.optional(Schema.String),
        bytecode: Schema.optional(Schema.NullOr(Schema.Unknown)),
      }),
    ),
  ),
  mappings: Schema.optional(
    Schema.NullOr(Schema.Array(Schema.suspend(() => MappingsSchema))),
  ),
  icon_url: Schema.optional(Schema.NullOr(Schema.String)),
  template: Schema.optional(
    Schema.Struct({
      id: Schema.optional(Schema.String),
      name: Schema.optional(Schema.String),
      description: Schema.optional(Schema.NullOr(Schema.String)),
      code: Schema.optional(Schema.String),
      code_language: Schema.optional(Schema.String),
      inputs_schema: Schema.optional(Schema.Unknown),
      type: Schema.optional(Schema.String),
      status: Schema.optional(Schema.String),
      category: Schema.optional(Schema.Unknown),
      free: Schema.optional(Schema.Boolean),
      icon_url: Schema.optional(Schema.NullOr(Schema.String)),
      filters: Schema.optional(Schema.NullOr(Schema.Unknown)),
      masking: Schema.optional(Schema.NullOr(Schema.Unknown)),
      mapping_templates: Schema.optional(
        Schema.NullOr(
          Schema.Array(Schema.suspend(() => HogFunctionMappingTemplateSchema)),
        ),
      ),
    }),
  ),
  template_id: Schema.optional(Schema.NullOr(Schema.String)),
  status: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        state: Schema.optional(
          Schema.suspend(() => HogFunctionStatusStateEnumSchema),
        ),
        tokens: Schema.optional(Schema.Number),
      }),
    ),
  ),
  execution_order: Schema.optional(Schema.NullOr(Schema.Number)),
  _create_in_folder: Schema.optional(Schema.String),
  batch_export_id: Schema.optional(Schema.NullOr(Schema.String)),
});
