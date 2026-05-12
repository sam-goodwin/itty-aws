import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const UpdateFirewallGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallGroupId: Schema.String.pipe(T.PathParam()),
    description: Schema.String,
  }).pipe(T.Http({ method: "PUT", path: "/firewalls/{firewallGroupId}" }));
export type UpdateFirewallGroupInput = typeof UpdateFirewallGroupInput.Type;

// Output Schema
export const UpdateFirewallGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type UpdateFirewallGroupOutput = typeof UpdateFirewallGroupOutput.Type;

// The operation
/**
 * Update Firewall Group
 *
 * Update information for a Firewall Group.
 *
 * @param firewallGroupId - The [Firewall Group id](#operation/list-firewall-groups).
 */
export const updateFirewallGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: UpdateFirewallGroupInput,
  outputSchema: UpdateFirewallGroupOutput,
  errors: [BadRequest, NotFound] as const,
}));
