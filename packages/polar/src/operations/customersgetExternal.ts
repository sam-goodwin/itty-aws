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
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
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
