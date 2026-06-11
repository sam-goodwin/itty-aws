import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const ReachListContactsV1Input =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    group_uuid: Schema.optional(Schema.String),
    subscription_status: Schema.optional(
      Schema.Literals(["subscribed", "unsubscribed"]),
    ),
    page: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/api/reach/v1/contacts" }));
export type ReachListContactsV1Input = typeof ReachListContactsV1Input.Type;

// Output Schema
export const ReachListContactsV1Output =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.optional(
      Schema.Array(
        Schema.Struct({
          uuid: Schema.optional(Schema.String),
          name: Schema.optional(Schema.NullOr(Schema.String)),
          surname: Schema.optional(Schema.NullOr(Schema.String)),
          email: Schema.optional(Schema.String),
          subscription_status: Schema.optional(
            Schema.Literals(["subscribed", "unsubscribed"]),
          ),
          subscribed_at: Schema.optional(Schema.String),
          source: Schema.optional(
            Schema.NullOr(Schema.Literals(["sync", "import", "manual"])),
          ),
          note: Schema.optional(Schema.NullOr(Schema.String)),
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
export type ReachListContactsV1Output = typeof ReachListContactsV1Output.Type;

// The operation
/**
 * List contacts
 *
 * Get a list of contacts, optionally filtered by group and subscription status.
 * This endpoint returns a paginated list of contacts with their basic information.
 * You can filter contacts by group UUID and subscription status.
 *
 * @param group_uuid - Filter contacts by group UUID
 * @param subscription_status - Filter contacts by subscription status
 * @param page - Page number
 */
export const reachListContactsV1 = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ReachListContactsV1Input,
  outputSchema: ReachListContactsV1Output,
}));
