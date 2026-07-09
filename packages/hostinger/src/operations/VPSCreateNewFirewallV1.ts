import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const VPSCreateNewFirewallV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    name: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/api/vps/v1/firewall" }));
export type VPSCreateNewFirewallV1Input =
  typeof VPSCreateNewFirewallV1Input.Type;

// Output Schema
export const VPSCreateNewFirewallV1Output =
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
export type VPSCreateNewFirewallV1Output =
  typeof VPSCreateNewFirewallV1Output.Type;

// The operation
/**
 * Create new firewall
 *
 * Create a new firewall.
 * Use this endpoint to set up new firewall configurations for VPS security.
 */
export const VPSCreateNewFirewallV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSCreateNewFirewallV1Input,
    outputSchema: VPSCreateNewFirewallV1Output,
    errors: [UnprocessableEntity] as const,
  }),
);
