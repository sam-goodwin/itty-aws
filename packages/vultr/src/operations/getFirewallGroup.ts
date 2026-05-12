import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const GetFirewallGroupInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  firewallGroupId: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/firewalls/{firewallGroupId}" }));
export type GetFirewallGroupInput = typeof GetFirewallGroupInput.Type;

// Output Schema
export const GetFirewallGroupOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    firewall_group: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        description: Schema.optional(Schema.String),
        date_created: Schema.optional(Schema.String),
        date_modified: Schema.optional(Schema.String),
        instance_count: Schema.optional(Schema.Number),
        rule_count: Schema.optional(Schema.Number),
        max_rule_count: Schema.optional(Schema.Number),
      }),
    ),
  },
);
export type GetFirewallGroupOutput = typeof GetFirewallGroupOutput.Type;

// The operation
/**
 * Get Firewall Group
 *
 * Get information for a Firewall Group.
 *
 * @param firewallGroupId - The [Firewall Group id](#operation/list-firewall-groups).
 */
export const getFirewallGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetFirewallGroupInput,
  outputSchema: GetFirewallGroupOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
