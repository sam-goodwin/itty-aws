import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const MembersDestroyInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  organization_id: Schema.String.pipe(T.PathParam()),
  user__uuid: Schema.String.pipe(T.PathParam()),
}).pipe(
  T.Http({
    method: "DELETE",
    path: "/api/organizations/{organization_id}/members/{user__uuid}/",
  }),
);
export type MembersDestroyInput = typeof MembersDestroyInput.Type;

// Output Schema
export const MembersDestroyOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type MembersDestroyOutput = typeof MembersDestroyOutput.Type;

// The operation
export const membersDestroy = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: MembersDestroyInput,
  outputSchema: MembersDestroyOutput,
  errors: [Forbidden, NotFound] as const,
}));
