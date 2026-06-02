import * as Schema from "effect/Schema";
import { API } from "../../../platform-client.ts";
import * as T from "../../../traits.ts";
import { Forbidden, UnprocessableEntity } from "../../../errors.ts";

// Input Schema
export const ListApplicationTransfersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    status: Schema.optional(Schema.String),
    limit: Schema.optional(Schema.Number),
    starting_after: Schema.optional(Schema.String),
    ending_before: Schema.optional(Schema.String),
  }).pipe(T.Http({ method: "GET", path: "/platform/application_transfers" }));
export type ListApplicationTransfersInput =
  typeof ListApplicationTransfersInput.Type;

// Output Schema
export const ListApplicationTransfersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.Literals(["application_transfer"]),
        id: Schema.String,
        code: Schema.String,
        application_id: Schema.String,
        status: Schema.Literals([
          "pending",
          "completed",
          "canceled",
          "expired",
        ]),
        expires_at: Schema.String,
        created_at: Schema.String,
        canceled_at: Schema.NullOr(Schema.String),
        completed_at: Schema.NullOr(Schema.String),
      }),
    ),
    total_count: Schema.Number,
  });
export type ListApplicationTransfersOutput =
  typeof ListApplicationTransfersOutput.Type;

// The operation
/**
 * List application transfers
 *
 * List all transfer requests created by the authenticated workspace. Returns
 * transfers sorted by creation date in descending order (most recent first).
 * Use the `status` parameter to filter by transfer status.
 *
 * @param status - Filter by transfer status. Multiple values can be provided by repeating
the parameter (e.g., `?status=pending&status=canceled`).

 * @param limit - Number of results to return per page (1-500, default 10).
 * @param starting_after - Cursor for pagination. Provide the ID of the last transfer from the
previous page to get the next page of results.

 * @param ending_before - Cursor for pagination. Provide the ID of the first transfer from the
previous page to get the previous page of results.

 */
export const listApplicationTransfers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListApplicationTransfersInput,
    outputSchema: ListApplicationTransfersOutput,
    errors: [Forbidden, UnprocessableEntity] as const,
  }),
);
