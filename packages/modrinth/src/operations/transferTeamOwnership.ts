import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, NotFound } from "../errors.ts";

// Input Schema
export const TransferTeamOwnershipInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    user_id: Schema.String,
  }).pipe(T.Http({ method: "PATCH", path: "/team/{id}/owner" }));
export type TransferTeamOwnershipInput = typeof TransferTeamOwnershipInput.Type;

// Output Schema
export const TransferTeamOwnershipOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type TransferTeamOwnershipOutput =
  typeof TransferTeamOwnershipOutput.Type;

// The operation
/**
 * Transfer team's ownership to another user
 *
 * @param id - The ID of the team
 */
export const transferTeamOwnership = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: TransferTeamOwnershipInput,
    outputSchema: TransferTeamOwnershipOutput,
    errors: [BadRequest, NotFound] as const,
  }),
);
