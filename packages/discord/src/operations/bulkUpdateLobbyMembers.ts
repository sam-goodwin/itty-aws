import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const BulkUpdateLobbyMembersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    lobby_id: Schema.String.pipe(T.PathParam()),
  }).pipe(T.Http({ method: "POST", path: "/lobbies/{lobby_id}/members/bulk" }));
export type BulkUpdateLobbyMembersInput =
  typeof BulkUpdateLobbyMembersInput.Type;

// Output Schema
export const BulkUpdateLobbyMembersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
      id: Schema.String,
      metadata: Schema.NullOr(Schema.Record(Schema.String, Schema.String)),
      flags: Schema.Number,
    }),
  );
export type BulkUpdateLobbyMembersOutput =
  typeof BulkUpdateLobbyMembersOutput.Type;

// The operation
export const bulkUpdateLobbyMembers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: BulkUpdateLobbyMembersInput,
    outputSchema: BulkUpdateLobbyMembersOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
