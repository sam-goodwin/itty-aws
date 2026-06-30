import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface MembersDestroyInput {
  organization_id: string;
  user__uuid: string;
}
export const MembersDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  user__uuid: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/organizations/{organization_id}/members/{user__uuid}/",
  }),
) as unknown as Schema.Codec<MembersDestroyInput>;

// Output Schema
export type MembersDestroyOutput = void;
export const MembersDestroyOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void as unknown as Schema.Codec<MembersDestroyOutput>;

// The operation
/**
 *
 * @param organization_id - ID of the organization you're trying to access. To find the ID of the organization, make a call to /api/organizations/.
 */
export const membersDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MembersDestroyInput,
  outputSchema: MembersDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
