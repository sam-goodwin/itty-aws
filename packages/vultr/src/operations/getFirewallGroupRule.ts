import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const GetFirewallGroupRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallGroupId: Schema.String.pipe(T.PathParam()),
    firewallRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/firewalls/{firewallGroupId}/rules/{firewallRuleId}",
    }),
  );
export type GetFirewallGroupRuleInput = typeof GetFirewallGroupRuleInput.Type;

// Output Schema
export const GetFirewallGroupRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewall_rule: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        type: Schema.optional(Schema.String),
        ip_type: Schema.optional(Schema.String),
        action: Schema.optional(Schema.String),
        protocol: Schema.optional(Schema.String),
        port: Schema.optional(Schema.String),
        subnet: Schema.optional(Schema.String),
        subnet_size: Schema.optional(Schema.Number),
        source: Schema.optional(Schema.String),
        notes: Schema.optional(Schema.String),
      }),
    ),
  });
export type GetFirewallGroupRuleOutput = typeof GetFirewallGroupRuleOutput.Type;

// The operation
/**
 * Get Firewall Rule
 *
 * Get a Firewall Rule.
 *
 * @param firewallGroupId - The [Firewall Group id](#operation/list-firewall-groups).
 * @param firewallRuleId - The [Firewall Rule id](#operation/list-firewall-group-rules).
 */
export const getFirewallGroupRule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: GetFirewallGroupRuleInput,
    outputSchema: GetFirewallGroupRuleOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
