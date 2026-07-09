import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const EcommerceCreateStoreV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.optional(Schema.String),
    country_code: Schema.optional(Schema.String),
    company_email: Schema.optional(Schema.String),
    company_name: Schema.optional(Schema.String),
    language: Schema.optional(Schema.String),
    sales_channel: Schema.optional(
      Schema.Struct({
        type: Schema.optional(Schema.Literals(["custom"])),
        external_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  }).pipe(T.Http({ method: "POST", path: "/api/ecommerce/v1/stores" }));
export type EcommerceCreateStoreV1Input =
  typeof EcommerceCreateStoreV1Input.Type;

// Output Schema
export const EcommerceCreateStoreV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    store: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.NullOr(Schema.String)),
        company_name: Schema.optional(Schema.NullOr(Schema.String)),
        h_panel_id: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.String),
        default_currency_code: Schema.optional(Schema.String),
      }),
    ),
    sales_channel: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        type: Schema.optional(
          Schema.Literals([
            "builder",
            "horizons",
            "tiktok",
            "custom",
            "quick-link",
            "wordpress",
          ]),
        ),
        external_id: Schema.optional(Schema.NullOr(Schema.String)),
      }),
    ),
  });
export type EcommerceCreateStoreV1Output =
  typeof EcommerceCreateStoreV1Output.Type;

// The operation
/**
 * Create store
 *
 * Create a new store for your account.
 * A primary sales channel is created alongside the store.
 */
export const ecommerceCreateStoreV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EcommerceCreateStoreV1Input,
    outputSchema: EcommerceCreateStoreV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
