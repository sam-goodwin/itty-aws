import * as Schema from "effect/Schema";

export const ProxyRecordListResponseSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    results: Schema.optional(
      Schema.Array(Schema.suspend(() => ProxyRecordSchema)),
    ),
    max_proxy_records: Schema.optional(Schema.Number),
  });
export const ProxyRecordSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.String),
  domain: Schema.optional(Schema.String),
  target_cname: Schema.optional(Schema.String),
  status: Schema.optional(
    Schema.Literals([
      "waiting",
      "issuing",
      "valid",
      "warning",
      "erroring",
      "deleting",
      "timed_out",
    ]),
  ),
  message: Schema.optional(Schema.NullOr(Schema.String)),
  created_at: Schema.optional(Schema.String),
  updated_at: Schema.optional(Schema.String),
  created_by: Schema.optional(Schema.Number),
});
