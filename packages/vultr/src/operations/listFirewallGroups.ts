import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListFirewallGroupsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    per_page: Schema.optional(Schema.Number),
    cursor: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/firewalls" }));
export type ListFirewallGroupsInput = typeof ListFirewallGroupsInput.Type;

// Output Schema
export const ListFirewallGroupsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    firewall_groups: Schema.optional(
      Schema.Array(
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
export type ListFirewallGroupsOutput = typeof ListFirewallGroupsOutput.Type;

// The operation
/**
 * List Firewall Groups
 *
 * Get a list of all Firewall Groups.
 *
 * @param per_page - Number of items requested per page. Default is 100 and Max is 500.
 * @param cursor - Cursor for paging. See [Meta and Pagination](#section/Introduction/Meta-and-Pagination).
 */
export const listFirewallGroups = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListFirewallGroupsInput,
  outputSchema: ListFirewallGroupsOutput,
}));
