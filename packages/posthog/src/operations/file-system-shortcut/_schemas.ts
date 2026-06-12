import * as Schema from "effect/Schema";

export const FileSystemShortcutSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    path: Schema.optional(Schema.String),
    type: Schema.optional(Schema.String),
    ref: Schema.optional(Schema.NullOr(Schema.String)),
    href: Schema.optional(Schema.NullOr(Schema.String)),
    created_at: Schema.optional(Schema.String),
  });
