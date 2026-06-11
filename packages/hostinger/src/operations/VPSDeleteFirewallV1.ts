import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSDeleteFirewallV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallId: Schema.Number.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/api/vps/v1/firewall/{firewallId}" }),
  );
export type VPSDeleteFirewallV1Input = typeof VPSDeleteFirewallV1Input.Type;

// Output Schema
export const VPSDeleteFirewallV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    message: Schema.optional(Schema.String),
  });
export type VPSDeleteFirewallV1Output = typeof VPSDeleteFirewallV1Output.Type;

// The operation
/**
 * Delete firewall
 *
 * Delete a specified firewall.
 * Any virtual machine that has this firewall activated will automatically have it deactivated.
 * Use this endpoint to remove unused firewall configurations.
 *
 * @param firewallId - Firewall ID
 */
export const VPSDeleteFirewallV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VPSDeleteFirewallV1Input,
  outputSchema: VPSDeleteFirewallV1Output,
}));
