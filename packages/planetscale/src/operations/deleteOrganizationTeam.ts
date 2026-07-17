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
export interface DeleteOrganizationTeamInput {
  organization: string;
  team: string;
}
export const DeleteOrganizationTeamInput =
  /*@__PURE__*/ Schema.Struct({
    organization: Schema.String.pipe(T.PathParam()),
    team: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/organizations/{organization}/teams/{team}",
    }),
  ) as unknown as Schema.Codec<DeleteOrganizationTeamInput>;

// Output Schema
export type DeleteOrganizationTeamOutput = void;
export const DeleteOrganizationTeamOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<DeleteOrganizationTeamOutput>;

// The operation
/**
 * Delete an organization team
 *
 * @param organization - The name of the organization
 * @param team - The slug of the team
 */
export const deleteOrganizationTeam = /*@__PURE__*/ API.make(() => ({
  inputSchema: DeleteOrganizationTeamInput,
  outputSchema: DeleteOrganizationTeamOutput,
  errors: [BadRequest, Forbidden, NotFound, UnprocessableEntity] as const,
}));
