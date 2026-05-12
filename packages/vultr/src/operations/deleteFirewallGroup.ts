import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const DeleteFirewallGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallGroupId: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "DELETE", path: "/firewalls/{firewallGroupId}" }));
export type DeleteFirewallGroupInput = typeof DeleteFirewallGroupInput.Type;

// Output Schema
export const DeleteFirewallGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteFirewallGroupOutput = typeof DeleteFirewallGroupOutput.Type;

// The operation
/**
 * Delete Firewall Group
 *
 * Delete a Firewall Group.
 *
 * @param firewallGroupId - The [Firewall Group id](#operation/list-firewall-groups).
 */
export const deleteFirewallGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: DeleteFirewallGroupInput,
  outputSchema: DeleteFirewallGroupOutput,
  errors: [BadRequest, NotFound] as const,
}));
