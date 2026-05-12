import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const UpdateDnsDomainRecordInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    dnsDomain: Schema.String.pipe(T.PathParam()),
    recordId: Schema.String.pipe(T.PathParam()),
    name: Schema.optional(Schema.String),
    data: Schema.optional(Schema.String),
    ttl: Schema.optional(Schema.Number),
    priority: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/domains/{dnsDomain}/records/{recordId}",
    }),
  );
export type UpdateDnsDomainRecordInput = typeof UpdateDnsDomainRecordInput.Type;

// Output Schema
export const UpdateDnsDomainRecordOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateDnsDomainRecordOutput =
  typeof UpdateDnsDomainRecordOutput.Type;

// The operation
/**
 * Update Record
 *
 * Update the information for a DNS record. All attributes are optional. If not set, the attributes will retain their original values.
 *
 * @param dnsDomain - The [DNS Domain](#operation/list-dns-domains).
 * @param recordId - The [DNS Record id](#operation/list-dns-domain-records).
 */
export const updateDnsDomainRecord = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: UpdateDnsDomainRecordInput,
    outputSchema: UpdateDnsDomainRecordOutput,
  }),
);
