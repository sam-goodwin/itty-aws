import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const DNSRestoreDNSSnapshotV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    domain: Schema.String.pipe(T.PathParam()),
    snapshotId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/dns/v1/snapshots/{domain}/{snapshotId}/restore",
    }),
  );
export type DNSRestoreDNSSnapshotV1Input =
  typeof DNSRestoreDNSSnapshotV1Input.Type;

// Output Schema
export const DNSRestoreDNSSnapshotV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type DNSRestoreDNSSnapshotV1Output =
  typeof DNSRestoreDNSSnapshotV1Output.Type;

// The operation
/**
 * Restore DNS snapshot
 *
 * Restore DNS zone to the selected snapshot.
 * Use this endpoint to revert domain DNS to a previous configuration.
 *
 * @param domain - Domain name
 * @param snapshotId - Snapshot ID
 */
export const DNSRestoreDNSSnapshotV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DNSRestoreDNSSnapshotV1Input,
    outputSchema: DNSRestoreDNSSnapshotV1Output,
  }),
);
