import * as Schema from "effect/Schema";

export const ClickhouseEventSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  distinct_id: Schema.optional(Schema.String),
  properties: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
  event: Schema.optional(Schema.String),
  timestamp: Schema.optional(Schema.String),
  person: Schema.optional(
    Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
  ),
  elements: Schema.optional(
    Schema.Array(Schema.suspend(() => EventElementSchema)),
  ),
  elements_chain: Schema.optional(Schema.String),
});
export const EventElementSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  event: Schema.optional(Schema.String),
  text: Schema.optional(Schema.NullOr(Schema.String)),
  tag_name: Schema.optional(Schema.NullOr(Schema.String)),
  attr_class: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  href: Schema.optional(Schema.NullOr(Schema.String)),
  attr_id: Schema.optional(Schema.NullOr(Schema.String)),
  nth_child: Schema.optional(Schema.NullOr(Schema.Number)),
  nth_of_type: Schema.optional(Schema.NullOr(Schema.Number)),
  attributes: Schema.optional(Schema.Unknown),
  order: Schema.optional(Schema.NullOr(Schema.Number)),
});
