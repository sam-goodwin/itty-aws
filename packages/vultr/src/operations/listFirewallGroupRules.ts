import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const ListFirewallGroupRulesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewallGroupId: Schema.String.pipe(T.PathParam()),
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(
    T.Http({ method: "GET", path: "/firewalls/{firewallGroupId}/rules" }),
  );
export type ListFirewallGroupRulesInput =
  typeof ListFirewallGroupRulesInput.Type;

// Output Schema
export const ListFirewallGroupRulesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewall_rules: Schema.optional(
      Schema.Array(
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
    ),
    meta: Schema.optional(
      Schema.Struct({
        total: Schema.optional(Schema.Number),
        links: Schema.optional(
          Schema.Struct({
            next: Schema.optional(Schema.String),
            prev: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
  });
export type ListFirewallGroupRulesOutput =
  typeof ListFirewallGroupRulesOutput.Type;

// The operation
/**
 * List Firewall Rules
 *
 * Get the Firewall Rules for a Firewall Group.
 *
 * @param firewallGroupId - The [Firewall Group id](#operation/list-firewall-groups).
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listFirewallGroupRules = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListFirewallGroupRulesInput,
    outputSchema: ListFirewallGroupRulesOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
