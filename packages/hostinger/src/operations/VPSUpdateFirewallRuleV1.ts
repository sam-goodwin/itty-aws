import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSUpdateFirewallRuleV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallId: Schema.Number.pipe(T.PathParam()),
    ruleId: Schema.Number.pipe(T.PathParam()),
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
    T.Http({
      method: "PUT",
      path: "/api/vps/v1/firewall/{firewallId}/rules/{ruleId}",
    }),
  );
export type VPSUpdateFirewallRuleV1Input =
  typeof VPSUpdateFirewallRuleV1Input.Type;

// Output Schema
export const VPSUpdateFirewallRuleV1Output =
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
export type VPSUpdateFirewallRuleV1Output =
  typeof VPSUpdateFirewallRuleV1Output.Type;

// The operation
/**
 * Update firewall rule
 *
 * Update a specific firewall rule from a specified firewall.
 * Any virtual machine that has this firewall activated will lose sync with the firewall
 * and will have to be synced again manually.
 * Use this endpoint to modify existing firewall rules.
 *
 * @param firewallId - Firewall ID
 * @param ruleId - Firewall Rule ID
 */
export const VPSUpdateFirewallRuleV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSUpdateFirewallRuleV1Input,
    outputSchema: VPSUpdateFirewallRuleV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
