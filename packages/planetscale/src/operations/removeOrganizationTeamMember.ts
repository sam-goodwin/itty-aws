import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import {
  BadRequest,
  Forbidden,
  NotFound,
  UnprocessableEntity,
} from "../errors.ts";

// Input Schema
export interface RemoveOrganizationTeamMemberInput {
  organization: string;
  team: string;
  id: string;
  delete_passwords?: boolean;
}
export const RemoveOrganizationTeamMemberInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    team: Schema.String.pipe(T.PathParam()),
    id: Schema.String.pipe(T.PathParam()),
    delete_passwords: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/teams/{team}/members/{id}",
    }),
  ) as unknown as Schema.Codec<RemoveOrganizationTeamMemberInput>;

// Output Schema
export type RemoveOrganizationTeamMemberOutput = void;
export const RemoveOrganizationTeamMemberOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<RemoveOrganizationTeamMemberOutput>;

// The operation
/**
 * Remove a member from a team
 *
 * @param organization - The name of the organization
 * @param team - The slug of the team
 * @param id - The ID of the team membership or the ID of the member to remove
 * @param delete_passwords - Whether to delete the member's passwords created through this team
 */
export const removeOrganizationTeamMember =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: RemoveOrganizationTeamMemberInput,
    outputSchema: RemoveOrganizationTeamMemberOutput,
    errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
  }));
