import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { NotFound } from "../errors.ts";

// Input Schema
export const GetPayoutHistoryInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id_or_username: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/user/{id_or_username}/payouts" }));
export type GetPayoutHistoryInput = typeof GetPayoutHistoryInput.Type;

// Output Schema
export const GetPayoutHistoryOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    all_time: Schema.optional(Schema.String),
    last_month: Schema.optional(Schema.String),
    payouts: Schema.optional(
      Schema.Array(
        Schema.Struct({
          created: Schema.optional(Schema.String),
          amount: Schema.optional(Schema.Number),
          status: Schema.optional(Schema.String),
        }),
      ),
    ),
  },
);
export type GetPayoutHistoryOutput = typeof GetPayoutHistoryOutput.Type;

// The operation
/**
 * Get user's payout history
 *
 * @param id_or_username - The ID or username of the user
 */
export const getPayoutHistory = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetPayoutHistoryInput,
  outputSchema: GetPayoutHistoryOutput,
  errors: [NotFound] as const,
}));
