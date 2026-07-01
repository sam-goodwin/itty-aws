import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface MembersGithubLoginRetrieveInput {
  organization_id: string;
  user__uuid: string;
}
export const MembersGithubLoginRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    organization_id: Schema.String.pipe(T.PathParam()),
    user__uuid: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/organizations/{organization_id}/members/{user__uuid}/github_login/",
    }),
  ) as unknown as Schema.Codec<MembersGithubLoginRetrieveInput>;

// Output Schema
export interface MembersGithubLoginRetrieveOutput {
  github_login: string | null;
}
export const MembersGithubLoginRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    github_login: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<MembersGithubLoginRetrieveOutput>;

// The operation
/**
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const membersGithubLoginRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: MembersGithubLoginRetrieveInput,
    outputSchema: MembersGithubLoginRetrieveOutput,
  }),
);
