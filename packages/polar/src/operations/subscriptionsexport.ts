import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { UnprocessableEntity } from "../errors.ts";

// Input Schema
export const SubscriptionsexportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/v1/subscriptions/export" }));
export type SubscriptionsexportInput = typeof SubscriptionsexportInput.Type;

// Output Schema
export const SubscriptionsexportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Unknown;
export type SubscriptionsexportOutput = typeof SubscriptionsexportOutput.Type;

// The operation
/**
 * Export Subscriptions
 *
 * Export subscriptions as a CSV file.
 * **Scopes**: `subscriptions:read` `subscriptions:write`
 *
 * @param organization_id - Filter by organization ID.
 */
export const subscriptionsexport = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: SubscriptionsexportInput,
  outputSchema: SubscriptionsexportOutput,
  errors: [UnprocessableEntity] as const,
}));
