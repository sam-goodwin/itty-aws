import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const PostFirewallsFirewallGroupIdRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallGroupId: Schema.String.pipe(T.PathParam()),
    ip_type: Schema.String,
    protocol: Schema.String,
    subnet: Schema.String,
    subnet_size: Schema.Number,
    port: Schema.optional(Schema.String),
    source: Schema.optional(Schema.String),
    notes: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "POST", path: "/firewalls/{firewallGroupId}/rules" }),
  );
export type PostFirewallsFirewallGroupIdRulesInput =
  typeof PostFirewallsFirewallGroupIdRulesInput.Type;

// Output Schema
export const PostFirewallsFirewallGroupIdRulesOutput =
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
export type PostFirewallsFirewallGroupIdRulesOutput =
  typeof PostFirewallsFirewallGroupIdRulesOutput.Type;

// The operation
/**
 * Create Firewall Rules
 *
 * Create a Firewall Rule for a Firewall Group. The attributes `ip_type`, `protocol`, `subnet`, and `subnet_size` are required.
 *
 * @param firewallGroupId - The [Firewall Group id](#operation/list-firewall-groups).
 */
export const postFirewallsFirewallGroupIdRules =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PostFirewallsFirewallGroupIdRulesInput,
    outputSchema: PostFirewallsFirewallGroupIdRulesOutput,
    errors: [BadRequest, NotFound] as const,
  }));
