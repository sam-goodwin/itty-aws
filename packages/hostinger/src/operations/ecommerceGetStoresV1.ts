import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const EcommerceGetStoresV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/api/ecommerce/v1/stores" }));
export type EcommerceGetStoresV1Input = typeof EcommerceGetStoresV1Input.Type;

// Output Schema
export const EcommerceGetStoresV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          name: Schema.optional(Schema.NullOr(Schema.String)),
          created_at: Schema.optional(Schema.String),
          updated_at: Schema.optional(Schema.String),
          version: Schema.optional(Schema.String),
          company_name: Schema.optional(Schema.NullOr(Schema.String)),
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        current_page: Schema.optional(Schema.Number),
        per_page: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type EcommerceGetStoresV1Output = typeof EcommerceGetStoresV1Output.Type;

// The operation
/**
 * Get stores
 *
 * Retrieve the stores associated with your account.
 *
 * @param page - Page number
 */
export const ecommerceGetStoresV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: EcommerceGetStoresV1Input,
    outputSchema: EcommerceGetStoresV1Output,
  }),
);
