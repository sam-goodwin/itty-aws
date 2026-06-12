import * as Schema from "effect/Schema";

export const PersonRecordSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  distinct_ids: Schema.optional(Schema.Array(Schema.String)),
  properties: Schema.optional(Schema.Unknown),
  created_at: Schema.optional(Schema.String),
  uuid: Schema.optional(Schema.String),
  last_seen_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export const AsyncDeletionStatusSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    person_uuid: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    status: Schema.optional(Schema.String),
    delete_verified_at: Schema.optional(Schema.NullOr(Schema.String)),
  });
