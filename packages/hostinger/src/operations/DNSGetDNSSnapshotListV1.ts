import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DNSGetDNSSnapshotListV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/api/dns/v1/snapshots/{domain}" }));
export type DNSGetDNSSnapshotListV1Input =
  typeof DNSGetDNSSnapshotListV1Input.Type;

// Output Schema
export const DNSGetDNSSnapshotListV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.optional(Schema.Number),
      reason: Schema.optional(Schema.String),
      created_at: Schema.optional(Schema.String),
    }),
  );
export type DNSGetDNSSnapshotListV1Output =
  typeof DNSGetDNSSnapshotListV1Output.Type;

// The operation
/**
 * Get DNS snapshot list
 *
 * Retrieve DNS snapshots for a domain.
 * Use this endpoint to view available DNS backup points for restoration.
 *
 * @param domain - Domain name
 */
export const DNSGetDNSSnapshotListV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DNSGetDNSSnapshotListV1Input,
    outputSchema: DNSGetDNSSnapshotListV1Output,
  }),
);
