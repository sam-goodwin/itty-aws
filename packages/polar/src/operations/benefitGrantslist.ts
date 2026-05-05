import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const BenefitGrantslistInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    organization_id: Schema.optional(Schema.String),
    customer_id: Schema.optional(Schema.String),
    external_customer_id: Schema.optional(Schema.String),
    is_granted: Schema.optional(Schema.String),
    page: Schema.optional(Schema.Number),
    limit: Schema.optional(Schema.Number),
    sorting: Schema.optional(Schema.String),
  },
).pipe(T.Http({ method: "GET", path: "/v1/benefit-grants/" }));
export type BenefitGrantslistInput = typeof BenefitGrantslistInput.Type;

// Output Schema
export const BenefitGrantslistOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    items: Schema.Array(
      Schema.Struct({
        created_at: Schema.String,
        modified_at: Schema.Unknown,
        id: Schema.String,
        granted_at: Schema.optional(Schema.Unknown),
        is_granted: Schema.Boolean,
        revoked_at: Schema.optional(Schema.Unknown),
        is_revoked: Schema.Boolean,
        subscription_id: Schema.Unknown,
        order_id: Schema.Unknown,
        customer_id: Schema.String,
        member_id: Schema.optional(Schema.Unknown),
        benefit_id: Schema.String,
        error: Schema.optional(Schema.Unknown),
        customer: Schema.Unknown,
        member: Schema.optional(Schema.Unknown),
        benefit: Schema.Struct({
          id: Schema.String,
          created_at: Schema.String,
          modified_at: Schema.Unknown,
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
        properties: Schema.Unknown,
      }),
    ),
    pagination: Schema.Struct({
      total_count: Schema.Number,
      max_page: Schema.Number,
    }),
  });
export type BenefitGrantslistOutput = typeof BenefitGrantslistOutput.Type;

// The operation
/**
 * List Benefit Grants
 *
 * List benefit grants across all benefits accessible to the authenticated subject.
 * **Scopes**: `benefits:read` `benefits:write`
 *
 * @param organization_id - Filter by organization ID.
 * @param customer_id - Filter by customer ID.
 * @param external_customer_id - Filter by customer external ID.
 * @param is_granted - Filter by granted status. If `true`, only granted benefits will be returned. If `false`, only revoked benefits will be returned.
 * @param page - Page number, defaults to 1.
 * @param limit - Size of a page, defaults to 10. Maximum is 100.
 * @param sorting - Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
 */
export const benefitGrantslist = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: BenefitGrantslistInput,
  outputSchema: BenefitGrantslistOutput,
  errors: [UnprocessableEntity] as const,
}));
