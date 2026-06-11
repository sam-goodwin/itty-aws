import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSCreateFirewallRuleV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallId: Schema.Number.pipe(T.PathParam()),
    protocol: Schema.Literals([
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
    port: Schema.String,
    source: Schema.Literals(["any", "custom"]),
    source_detail: Schema.String,
  }).pipe(
    T.Http({ method: "POST", path: "/api/vps/v1/firewall/{firewallId}/rules" }),
  );
export type VPSCreateFirewallRuleV1Input =
  typeof VPSCreateFirewallRuleV1Input.Type;

// Output Schema
export const VPSCreateFirewallRuleV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type VPSCreateFirewallRuleV1Output =
  typeof VPSCreateFirewallRuleV1Output.Type;

// The operation
/**
 * Create firewall rule
 *
 * Create new firewall rule for a specified firewall.
 * By default, the firewall drops all incoming traffic,
 * which means you must add accept rules for all ports you want to use.
 * Any virtual machine that has this firewall activated will lose sync with the firewall
 * and will have to be synced again manually.
 * Use this endpoint to add new security rules to firewalls.
 *
 * @param firewallId - Firewall ID
 */
export const VPSCreateFirewallRuleV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSCreateFirewallRuleV1Input,
    outputSchema: VPSCreateFirewallRuleV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
