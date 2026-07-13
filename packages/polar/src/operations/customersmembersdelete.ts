import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersmembersdeleteInput {
  id: string;
  member_id: string;
}
export const CustomersmembersdeleteInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    member_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/customers/{id}/members/{member_id}",
    }),
  ) as unknown as Schema.Codec<CustomersmembersdeleteInput>;

// Output Schema
export type CustomersmembersdeleteOutput = void;
export const CustomersmembersdeleteOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomersmembersdeleteOutput>;

// The operation
/**
 * Delete Member
 *
 * Delete a member of a customer.
 * **Scopes**: `members:write`
 *
 * @param id - The customer ID.
 */
export const customersmembersdelete = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CustomersmembersdeleteInput,
    outputSchema: CustomersmembersdeleteOutput,
  }),
);
