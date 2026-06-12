import * as Schema from "effect/Schema";

export const CustomerProfileConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    scope: Schema.optional(
      Schema.suspend(() => CustomerProfileConfigScopeEnumSchema),
    ),
    content: Schema.optional(Schema.NullOr(Schema.Unknown)),
    sidebar: Schema.optional(Schema.NullOr(Schema.Unknown)),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
export const CustomerProfileConfigScopeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "person",
    "group_0",
    "group_1",
    "group_2",
    "group_3",
    "group_4",
  ]);
