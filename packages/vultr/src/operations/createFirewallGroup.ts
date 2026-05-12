import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const CreateFirewallGroupInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    description: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "POST", path: "/firewalls" }));
export type CreateFirewallGroupInput = typeof CreateFirewallGroupInput.Type;

// Output Schema
export const CreateFirewallGroupOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
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
  });
export type CreateFirewallGroupOutput = typeof CreateFirewallGroupOutput.Type;

// The operation
/**
 * Create Firewall Group
 *
 * Create a new Firewall Group.
 */
export const createFirewallGroup = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateFirewallGroupInput,
  outputSchema: CreateFirewallGroupOutput,
  errors: [BadRequest, NotFound] as const,
}));
