import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const DeleteIamAssumedRoleSessionInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    session_token: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({ method: "DELETE", path: "/v2/assumed-roles/{session_token}" }),
  );
export type DeleteIamAssumedRoleSessionInput =
  typeof DeleteIamAssumedRoleSessionInput.Type;

// Output Schema
export const DeleteIamAssumedRoleSessionOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type DeleteIamAssumedRoleSessionOutput =
  typeof DeleteIamAssumedRoleSessionOutput.Type;

// The operation
/**
 * Delete Assumed Role Session
 *
 * Delete an assumed-role session.
 *
 * @param session_token - The session token.
 */
export const deleteIamAssumedRoleSession = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteIamAssumedRoleSessionInput,
    outputSchema: DeleteIamAssumedRoleSessionOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
