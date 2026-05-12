import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteFirewallGroupRuleInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallGroupId: Schema.String.pipe(T.PathParam()),
    firewallRuleId: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/firewalls/{firewallGroupId}/rules/{firewallRuleId}",
    }),
  );
export type DeleteFirewallGroupRuleInput =
  typeof DeleteFirewallGroupRuleInput.Type;

// Output Schema
export const DeleteFirewallGroupRuleOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteFirewallGroupRuleOutput =
  typeof DeleteFirewallGroupRuleOutput.Type;

// The operation
/**
 * Delete Firewall Rule
 *
 * Delete a Firewall Rule.
 *
 * @param firewallGroupId - The [Firewall Group id](#operation/list-firewall-groups).
 * @param firewallRuleId - The [Firewall Rule id](#operation/list-firewall-group-rules).
 */
export const deleteFirewallGroupRule = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteFirewallGroupRuleInput,
    outputSchema: DeleteFirewallGroupRuleOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
