import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DNSGetDNSSnapshotV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
    snapshotId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/dns/v1/snapshots/{domain}/{snapshotId}",
    }),
  );
export type DNSGetDNSSnapshotV1Input = typeof DNSGetDNSSnapshotV1Input.Type;

// Output Schema
export const DNSGetDNSSnapshotV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    reason: Schema.optional(Schema.String),
    snapshot: Schema.optional(
      Schema.Array(
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
      ),
    ),
    created_at: Schema.optional(Schema.String),
  });
export type DNSGetDNSSnapshotV1Output = typeof DNSGetDNSSnapshotV1Output.Type;

// The operation
/**
 * Get DNS snapshot
 *
 * Retrieve particular DNS snapshot with contents of DNS zone records.
 * Use this endpoint to view historical DNS configurations for domains.
 *
 * @param domain - Domain name
 * @param snapshotId - Snapshot ID
 */
export const DNSGetDNSSnapshotV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DNSGetDNSSnapshotV1Input,
  outputSchema: DNSGetDNSSnapshotV1Output,
}));
