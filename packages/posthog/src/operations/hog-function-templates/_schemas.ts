import * as Schema from "effect/Schema";

export const HogFunctionTemplateSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
