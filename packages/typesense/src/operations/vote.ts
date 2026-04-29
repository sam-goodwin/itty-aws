import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const VoteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/operations/vote" }),
);
export type VoteInput = typeof VoteInput.Type;

// Output Schema
export const VoteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  success: Schema.Boolean,
});
export type VoteOutput = typeof VoteOutput.Type;

// The operation
/**
 * Triggers a follower node to initiate the raft voting process, which triggers leader re-election.
 *
 * Triggers a follower node to initiate the raft voting process, which triggers leader re-election. The follower node that you run this operation against will become the new leader, once this command succeeds.
 */
export const vote = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: VoteInput,
  outputSchema: VoteOutput,
}));
