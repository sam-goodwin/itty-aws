import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const ListCustomSubscriptionsInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/account/custom-subscriptions" }),
  );
export type ListCustomSubscriptionsInput =
  typeof ListCustomSubscriptionsInput.Type;

// Output Schema
export const ListCustomSubscriptionsOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    custom_subscriptions: Schema.optional(
      Schema.Array(
        Schema.Struct({
          custom_subscriptions: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              label: Schema.optional(Schema.String),
              description: Schema.optional(Schema.String),
              type: Schema.optional(Schema.String),
              region: Schema.optional(Schema.String),
              status: Schema.optional(Schema.String),
              date_created: Schema.optional(Schema.String),
              cost: Schema.optional(Schema.Number),
              pending_charges: Schema.optional(Schema.Number),
            }),
          ),
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
export type ListCustomSubscriptionsOutput =
  typeof ListCustomSubscriptionsOutput.Type;

// The operation
/**
 * List Custom Subscriptions
 *
 * List all custom subscriptions in your account.
 */
export const listCustomSubscriptions = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListCustomSubscriptionsInput,
    outputSchema: ListCustomSubscriptionsOutput,
    errors: [BadRequest] as const,
  }),
);
