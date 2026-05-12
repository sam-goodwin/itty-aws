import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteDnsDomainRecordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsDomain: Schema.String.pipe(T.PathParam()),
    recordId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/domains/{dnsDomain}/records/{recordId}",
    }),
  );
export type DeleteDnsDomainRecordInput = typeof DeleteDnsDomainRecordInput.Type;

// Output Schema
export const DeleteDnsDomainRecordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteDnsDomainRecordOutput =
  typeof DeleteDnsDomainRecordOutput.Type;

// The operation
/**
 * Delete Record
 *
 * Delete the DNS record.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 * @param recordId - The [DNS Record id](#operation/list-dns-domain-records).
 */
export const deleteDnsDomainRecord = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteDnsDomainRecordInput,
    outputSchema: DeleteDnsDomainRecordOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
