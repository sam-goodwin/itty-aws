import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteApplicationUserRoleConnectionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    application_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/users/@me/applications/{application_id}/role-connection",
    }),
  );
export type DeleteApplicationUserRoleConnectionInput =
  typeof DeleteApplicationUserRoleConnectionInput.Type;

// Output Schema
export const DeleteApplicationUserRoleConnectionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteApplicationUserRoleConnectionOutput =
  typeof DeleteApplicationUserRoleConnectionOutput.Type;

// The operation
export const deleteApplicationUserRoleConnection =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: DeleteApplicationUserRoleConnectionInput,
    outputSchema: DeleteApplicationUserRoleConnectionOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
