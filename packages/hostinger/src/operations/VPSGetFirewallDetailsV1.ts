import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetFirewallDetailsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallId: Schema.Number.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "GET", path: "/api/vps/v1/firewall/{firewallId}" }));
export type VPSGetFirewallDetailsV1Input =
  typeof VPSGetFirewallDetailsV1Input.Type;

// Output Schema
export const VPSGetFirewallDetailsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    name: Schema.optional(Schema.String),
    is_synced: Schema.optional(Schema.Boolean),
    rules: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.Number),
          action: Schema.optional(Schema.Literals(["accept", "drop"])),
          protocol: Schema.optional(
            Schema.Literals([
              "TCP",
              "UDP",
              "ICMP",
              "GRE",
              "any",
              "ESP",
              "AH",
              "ICMPv6",
              "SSH",
              "HTTP",
              "HTTPS",
              "MySQL",
              "PostgreSQL",
            ]),
          ),
          port: Schema.optional(Schema.String),
          source: Schema.optional(Schema.String),
          source_detail: Schema.optional(Schema.String),
        }),
      ),
    ),
    created_at: Schema.optional(Schema.String),
    updated_at: Schema.optional(Schema.String),
  });
export type VPSGetFirewallDetailsV1Output =
  typeof VPSGetFirewallDetailsV1Output.Type;

// The operation
/**
 * Get firewall details
 *
 * Retrieve firewall by its ID and rules associated with it.
 * Use this endpoint to view specific firewall configuration and rules.
 *
 * @param firewallId - Firewall ID
 */
export const VPSGetFirewallDetailsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetFirewallDetailsV1Input,
    outputSchema: VPSGetFirewallDetailsV1Output,
  }),
);
