import * as Schema from "effect/Schema";

export const ActivityLogSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  user: Schema.optional(
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
  unread: Schema.optional(Schema.Boolean),
  organization_id: Schema.optional(Schema.NullOr(Schema.String)),
  was_impersonated: Schema.optional(Schema.NullOr(Schema.Boolean)),
  is_system: Schema.optional(Schema.NullOr(Schema.Boolean)),
  client: Schema.optional(Schema.NullOr(Schema.String)),
  activity: Schema.optional(Schema.String),
  item_id: Schema.optional(Schema.NullOr(Schema.String)),
  scope: Schema.optional(Schema.String),
  detail: Schema.optional(Schema.NullOr(Schema.Unknown)),
  created_at: Schema.optional(Schema.String),
});
