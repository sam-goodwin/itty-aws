import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VPSGetFirewallListV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    page: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/api/vps/v1/firewall" }));
export type VPSGetFirewallListV1Input = typeof VPSGetFirewallListV1Input.Type;

// Output Schema
export const VPSGetFirewallListV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
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
        }),
      ),
    ),
    meta: Schema.optional(
      Schema.Struct({
        current_page: Schema.optional(Schema.Number),
        per_page: Schema.optional(Schema.Number),
        total: Schema.optional(Schema.Number),
      }),
    ),
  });
export type VPSGetFirewallListV1Output = typeof VPSGetFirewallListV1Output.Type;

// The operation
/**
 * Get firewall list
 *
 * Retrieve all available firewalls.
 * Use this endpoint to view existing firewall configurations.
 *
 * @param page - Page number
 */
export const VPSGetFirewallListV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: VPSGetFirewallListV1Input,
    outputSchema: VPSGetFirewallListV1Output,
  }),
);
