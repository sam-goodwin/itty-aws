import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";

// Input Schema
export const ListWaitlistEntriesInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    query: Schema.optional(Schema.String),
    status: Schema.optional(
      Schema.Literals(["pending", "invited", "completed", "rejected"]),
    ),
    order_by: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/waitlist_entries" }));
export type ListWaitlistEntriesInput = typeof ListWaitlistEntriesInput.Type;

// Output Schema
export const ListWaitlistEntriesOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["waitlist_entry"]),
        id: Schema.String,
        email_address: Schema.String,
        status: Schema.Literals([
          "pending",
          "invited",
          "rejected",
          "completed",
        ]),
        is_locked: Schema.optional(Schema.Boolean),
        created_at: Schema.Number,
        updated_at: Schema.Number,
        invitation: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              object: Schema.Literals(["invitation"]),
              id: Schema.String,
              email_address: Schema.String,
              public_metadata: Schema.Record(Schema.String, Schema.Unknown),
              revoked: Schema.optional(Schema.Boolean),
              status: Schema.Literals([
                "pending",
                "accepted",
                "revoked",
                "expired",
              ]),
              url: Schema.optional(Schema.String),
              expires_at: Schema.optional(Schema.NullOr(Schema.Number)),
              created_at: Schema.Number,
              updated_at: Schema.Number,
            }),
          ),
        ),
      }),
    ),
    total_count: Schema.Number,
  });
export type ListWaitlistEntriesOutput = typeof ListWaitlistEntriesOutput.Type;

// The operation
/**
 * List all waitlist entries
 *
 * Retrieve a list of waitlist entries for the instance.
 * Entries are ordered by creation date in descending order by default.
 * Supports filtering by email address or status and pagination with limit and offset parameters.
 *
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 * @param query - Filter waitlist entries by `email_address` or `id`
 * @param status - Filter waitlist entries by their status
 * @param order_by - Specify the order of results. Supported values are:
- `created_at`
- `email_address`
- `invited_at`

Use `+` for ascending or `-` for descending order. Defaults to `-created_at`.
 */
export const ListWaitlistEntries = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: ListWaitlistEntriesInput,
  outputSchema: ListWaitlistEntriesOutput,
}));
