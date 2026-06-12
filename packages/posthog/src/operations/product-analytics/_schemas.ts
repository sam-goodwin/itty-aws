import * as Schema from "effect/Schema";

export const ElementSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
export const InsightSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  short_id: Schema.optional(Schema.String),
  name: Schema.optional(Schema.NullOr(Schema.String)),
  derived_name: Schema.optional(Schema.NullOr(Schema.String)),
  query: Schema.optional(Schema.Unknown),
  order: Schema.optional(Schema.NullOr(Schema.Number)),
  deleted: Schema.optional(Schema.Boolean),
  dashboards: Schema.optional(Schema.Array(Schema.Number)),
  dashboard_tiles: Schema.optional(
    Schema.Array(Schema.suspend(() => DashboardTileBasicSchema)),
  ),
  last_refresh: Schema.optional(Schema.NullOr(Schema.String)),
  cache_target_age: Schema.optional(Schema.NullOr(Schema.String)),
  next_allowed_client_refresh: Schema.optional(Schema.NullOr(Schema.String)),
  result: Schema.optional(Schema.Unknown),
  hasMore: Schema.optional(Schema.NullOr(Schema.Boolean)),
  columns: Schema.optional(Schema.NullOr(Schema.Array(Schema.String))),
  created_at: Schema.optional(Schema.NullOr(Schema.String)),
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
  description: Schema.optional(Schema.NullOr(Schema.String)),
  updated_at: Schema.optional(Schema.String),
  tags: Schema.optional(Schema.Array(Schema.Unknown)),
  favorited: Schema.optional(Schema.Boolean),
  last_modified_at: Schema.optional(Schema.String),
  last_modified_by: Schema.optional(
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
  is_sample: Schema.optional(Schema.Boolean),
  effective_restriction_level: Schema.optional(Schema.Literals([21, 37])),
  effective_privilege_level: Schema.optional(Schema.Literals([21, 37])),
  user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  timezone: Schema.optional(Schema.NullOr(Schema.String)),
  is_cached: Schema.optional(Schema.Boolean),
  query_status: Schema.optional(Schema.Unknown),
  hogql: Schema.optional(Schema.NullOr(Schema.String)),
  types: Schema.optional(Schema.NullOr(Schema.Array(Schema.Unknown))),
  resolved_date_range: Schema.optional(
    Schema.NullOr(
      Schema.Struct({
        date_from: Schema.optional(Schema.String),
        date_to: Schema.optional(Schema.String),
      }),
    ),
  ),
  _create_in_folder: Schema.optional(Schema.String),
  alerts: Schema.optional(Schema.Array(Schema.Unknown)),
  last_viewed_at: Schema.optional(Schema.NullOr(Schema.String)),
});
export const DashboardTileBasicSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    dashboard_id: Schema.optional(Schema.Number),
    deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
  });
export const BulkUpdateTagsItemSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    tags: Schema.optional(Schema.Array(Schema.String)),
  });
export const BulkUpdateTagsErrorSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    reason: Schema.optional(Schema.String),
  });
