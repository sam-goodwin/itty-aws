import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const DNSDeleteDNSRecordsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
    filters: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        type: Schema.Literals([
          "A",
          "AAAA",
          "CNAME",
          "ALIAS",
          "MX",
          "TXT",
          "NS",
          "SOA",
          "SRV",
          "CAA",
        ]),
      }),
    ),
  }).pipe(T.Http({ method: "DELETE", path: "/api/dns/v1/zones/{domain}" }));
export type DNSDeleteDNSRecordsV1Input = typeof DNSDeleteDNSRecordsV1Input.Type;

// Output Schema
export const DNSDeleteDNSRecordsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DNSDeleteDNSRecordsV1Output =
  typeof DNSDeleteDNSRecordsV1Output.Type;

// The operation
/**
 * Delete DNS records
 *
 * Delete DNS records for the selected domain.
 * To filter which records to delete, add the `name` of the record and `type` to the filter.
 * Multiple filters can be provided with single request.
 * If you have multiple records with the same name and type, and you want to delete only part of them,
 * refer to the `Update zone records` endpoint.
 * Use this endpoint to remove specific DNS records from domains.
 *
 * @param domain - Domain name
 */
export const DNSDeleteDNSRecordsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DNSDeleteDNSRecordsV1Input,
    outputSchema: DNSDeleteDNSRecordsV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
