import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.optional(Schema.String),
  type: Schema.optional(Schema.String),
  id: Schema.optional(Schema.String),
  exclude_id: Schema.optional(Schema.String),
  query: Schema.optional(Schema.String),
  page: Schema.optional(Schema.Number),
  limit: Schema.optional(Schema.Number),
  sorting: Schema.optional(Schema.String),
  metadata: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/v1/benefits/" }));
export type BenefitslistInput = typeof BenefitslistInput.Type;

// Output Schema
export const BenefitslistOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  items: Schema.Array(
    Schema.Struct({
      id: Schema.String,
      created_at: Schema.String,
      modified_at: Schema.NullOr(Schema.String),
      type: Schema.Literals([
        "custom",
        "discord",
        "github_repository",
        "downloadables",
        "license_keys",
        "meter_credit",
        "feature_flag",
      ]),
      description: Schema.String,
      selectable: Schema.Boolean,
      deletable: Schema.Boolean,
      is_deleted: Schema.Boolean,
      organization_id: Schema.String,
      metadata: Schema.Record(Schema.String, Schema.Unknown),
      properties: Schema.Record(Schema.String, Schema.Unknown),
    }),
  ),
  pagination: Schema.Struct({
    total_count: Schema.Number,
    max_page: Schema.Number,
  }),
});
export type BenefitslistOutput = typeof BenefitslistOutput.Type;

// The operation
/**
 * List Benefits
 *
 * List benefits.
 * **Scopes**: `benefits:read` `benefits:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param type - Filter by benefit type.
 * @param id - Filter by benefit IDs.
 * @param exclude_id - Exclude benefits with these IDs.
 * @param query - Filter by description.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 * @param metadata - Filter by metadata key-value pairs. It uses the `deepObject` style, e.g. `?metadata[key]=value`.
 */
export const benefitslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitslistInput,
  outputSchema: BenefitslistOutput,
  errors: [UnprocessableEntity] as const,
}));
