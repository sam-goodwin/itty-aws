import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ListDomainsInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  limit: Schema.optional(Schema.Number),
  after: Schema.optional(Schema.String),
  before: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "GET", path: "/domains" }));
export type ListDomainsInput = typeof ListDomainsInput.Type;

// Output Schema
export const ListDomainsOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.optional(Schema.String),
  has_more: Schema.optional(Schema.Boolean),
  data: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        name: Schema.optional(Schema.String),
        status: Schema.optional(
          Schema.Literals([
            "pending",
            "verified",
            "failed",
            "not_started",
            "partially_verified",
            "partially_failed",
          ]),
        ),
        created_at: Schema.optional(Schema.String),
        region: Schema.optional(Schema.String),
        capabilities: Schema.optional(
          Schema.Struct({
            sending: Schema.optional(Schema.Literals(["enabled", "disabled"])),
            receiving: Schema.optional(
              Schema.Literals(["enabled", "disabled"]),
            ),
          }),
        ),
      }),
    ),
  ),
});
export type ListDomainsOutput = typeof ListDomainsOutput.Type;

// The operation
/**
 * Retrieve a list of domains
 *
 * @param limit - Number of items to return.
 * @param after - Return items after this cursor.
 * @param before - Return items before this cursor.
 */
export const listDomains = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListDomainsInput,
  outputSchema: ListDomainsOutput,
}));
