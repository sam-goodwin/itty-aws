import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const InvitesDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/organizations/{organization_id}/invites/{id}/",
  }),
);
export type InvitesDestroyInput = typeof InvitesDestroyInput.Type;

// Output Schema
export const InvitesDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type InvitesDestroyOutput = typeof InvitesDestroyOutput.Type;

// The operation
/**
 *
 * @param id - A UUID string identifying this organization invite.
 */
export const invitesDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: InvitesDestroyInput,
  outputSchema: InvitesDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
