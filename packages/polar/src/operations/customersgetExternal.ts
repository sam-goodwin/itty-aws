import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound, UnprocessableEntity } from "../errors.ts";

// Input Schema
export const CustomersgetExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/customers/external/{external_id}" }),
  );
export type CustomersgetExternalInput = typeof CustomersgetExternalInput.Type;

// Output Schema
export const CustomersgetExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String,
    created_at: Schema.String,
    modified_at: Schema.NullOr(Schema.String),
    metadata: Schema.Record(Schema.String, Schema.Unknown),
    external_id: Schema.optional(Schema.NullOr(Schema.String)),
    email: Schema.NullOr(Schema.String),
    email_verified: Schema.Boolean,
    type: Schema.Literals(["individual", "team"]),
    name: Schema.NullOr(Schema.String),
    billing_address: Schema.NullOr(
      Schema.Record(Schema.String, Schema.Unknown),
    ),
    tax_id: Schema.NullOr(Schema.Unknown),
    locale: Schema.optional(Schema.NullOr(Schema.String)),
    organization_id: Schema.String,
    deleted_at: Schema.NullOr(Schema.String),
    avatar_url: Schema.String,
  });
export type CustomersgetExternalOutput = typeof CustomersgetExternalOutput.Type;

// The operation
/**
 * Get Customer by External ID
 *
 * Get a customer by external ID.
 * **Scopes**: `customers:read` `customers:write`
 *
 * @param external_id - The customer external ID.
 */
export const customersgetExternal = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomersgetExternalInput,
    outputSchema: CustomersgetExternalOutput,
    errors: [NotFound, UnprocessableEntity] as const,
  }),
);
