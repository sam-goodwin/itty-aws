import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface SubscriptionsexportInput {
  organization_id?: string | ReadonlyArray<string> | null;
}
export const SubscriptionsexportInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.optional(
      Schema.NullOr(Schema.Union([Schema.String, Schema.Array(Schema.String)])),
    ),
  }).pipe(
    T.Http({ method: "GET", path: "/v1/subscriptions/export" }),
  ) as unknown as Schema.Codec<SubscriptionsexportInput>;

// Output Schema
export type SubscriptionsexportOutput = void;
export const SubscriptionsexportOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<SubscriptionsexportOutput>;

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
}));
