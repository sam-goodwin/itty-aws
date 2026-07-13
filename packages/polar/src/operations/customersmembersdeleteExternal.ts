import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface CustomersmembersdeleteExternalInput {
  external_id: string;
  member_external_id: string;
}
export const CustomersmembersdeleteExternalInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_id: Schema.String.pipe(T.PathParam()),
    member_external_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/v1/customers/external/{external_id}/members/{member_external_id}",
    }),
  ) as unknown as Schema.Codec<CustomersmembersdeleteExternalInput>;

// Output Schema
export type CustomersmembersdeleteExternalOutput = void;
export const CustomersmembersdeleteExternalOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<CustomersmembersdeleteExternalOutput>;

// The operation
/**
 * Delete Member by External ID
 *
 * Delete a member by external ID for a customer identified by its external ID.
 * **Scopes**: `members:write`
 *
 * @param external_id - The customer external ID.
 * @param member_external_id - The member external ID.
 */
export const customersmembersdeleteExternal =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: CustomersmembersdeleteExternalInput,
    outputSchema: CustomersmembersdeleteExternalOutput,
  }));
