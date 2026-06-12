import * as Schema from "effect/Schema";

export const PinnedSceneTabSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  pathname: Schema.optional(Schema.String),
  search: Schema.optional(Schema.String),
  hash: Schema.optional(Schema.String),
  title: Schema.optional(Schema.String),
  customTitle: Schema.optional(Schema.NullOr(Schema.String)),
  iconType: Schema.optional(Schema.String),
  sceneId: Schema.optional(Schema.NullOr(Schema.String)),
  sceneKey: Schema.optional(Schema.NullOr(Schema.String)),
  sceneParams: Schema.optional(Schema.Unknown),
  pinned: Schema.optional(Schema.Boolean),
});
