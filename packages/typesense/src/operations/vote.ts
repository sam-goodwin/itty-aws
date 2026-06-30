import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface VoteInput {}
export const VoteInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
  T.Http({ method: "POST", path: "/operations/vote" }),
) as unknown as Schema.Codec<VoteInput>;

// Output Schema
export interface VoteOutput {
  success: boolean;
}
export const VoteOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  success: Schema.Boolean,
}) as unknown as Schema.Codec<VoteOutput>;

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
