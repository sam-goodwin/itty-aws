import * as Schema from "effect/Schema";

export const PersistedFolderSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.suspend(() => PersistedFolderTypeEnumSchema)),
  protocol: Schema.optional(Schema.String),
  path: Schema.optional(Schema.String),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
});
export const PersistedFolderTypeEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "home",
    "pinned",
    "custom_products",
  ]);
