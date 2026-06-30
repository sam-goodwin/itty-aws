import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ConversationsTicketsBulkUpdateStatusCreateInput {
  project_id: string;
  ids: string[];
  status: "new" | "open" | "pending" | "on_hold" | "resolved";
}
export const ConversationsTicketsBulkUpdateStatusCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    ids: Schema.Array(Schema.String),
    status: Schema.Literals(["new", "open", "pending", "on_hold", "resolved"]),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/conversations/tickets/bulk_update_status/",
    }),
  ) as unknown as Schema.Codec<ConversationsTicketsBulkUpdateStatusCreateInput>;

// Output Schema
export interface ConversationsTicketsBulkUpdateStatusCreateOutput {
  updated: number;
  ids: string[];
}
export const ConversationsTicketsBulkUpdateStatusCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    updated: Schema.Number,
    ids: Schema.Array(Schema.String),
  }) as unknown as Schema.Codec<ConversationsTicketsBulkUpdateStatusCreateOutput>;

// The operation
/**
 * Update the status of multiple tickets in a single request.
 * Only tickets belonging to the current team are affected; other-team UUIDs
 * are silently ignored.  Tickets already in the requested status are skipped.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const conversationsTicketsBulkUpdateStatusCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ConversationsTicketsBulkUpdateStatusCreateInput,
    outputSchema: ConversationsTicketsBulkUpdateStatusCreateOutput,
  }));
