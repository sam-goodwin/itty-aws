import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface InvitesDestroyInput {
  id: string;
  organization_id: string;
}
export const InvitesDestroyInput = /*@__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
  organization_id: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/organizations/{organization_id}/invites/{id}/",
  }),
) as unknown as Schema.Codec<InvitesDestroyInput>;

// Output Schema
export type InvitesDestroyOutput = void;
export const InvitesDestroyOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<InvitesDestroyOutput>;

// The operation
/**
 *
 * @param id - A UUID string identifying this organization invite.
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const invitesDestroy = /*@__PURE__*/ API.make(() => ({
  inputSchema: InvitesDestroyInput,
  outputSchema: InvitesDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
