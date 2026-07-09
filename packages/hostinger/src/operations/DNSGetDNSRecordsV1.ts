import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DNSGetDNSRecordsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/api/dns/v1/zones/{domain}" }));
export type DNSGetDNSRecordsV1Input = typeof DNSGetDNSRecordsV1Input.Type;

// Output Schema
export const DNSGetDNSRecordsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      name: Schema.optional(Schema.String),
      records: Schema.optional(
        Schema.Array(
          Schema.Struct({
            content: Schema.optional(Schema.String),
            is_disabled: Schema.optional(Schema.Boolean),
          }),
        ),
      ),
      ttl: Schema.optional(Schema.Number),
      type: Schema.optional(
        Schema.Literals([
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
      ),
    }),
  );
export type DNSGetDNSRecordsV1Output = typeof DNSGetDNSRecordsV1Output.Type;

// The operation
/**
 * Get DNS records
 *
 * Retrieve DNS zone records for a specific domain.
 * Use this endpoint to view current DNS configuration for domain management.
 *
 * @param domain - Domain name
 */
export const DNSGetDNSRecordsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DNSGetDNSRecordsV1Input,
  outputSchema: DNSGetDNSRecordsV1Output,
}));
