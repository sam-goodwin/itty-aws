import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../../errors.ts";

// Input Schema
export const DeleteExternalAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    user_id: Schema.String.pipe(T.PathParam()),
    external_account_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/users/{user_id}/external_accounts/{external_account_id}",
    }),
  );
export type DeleteExternalAccountInput = typeof DeleteExternalAccountInput.Type;

// Output Schema
export const DeleteExternalAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteExternalAccountOutput =
  typeof DeleteExternalAccountOutput.Type;

// The operation
/**
 * Delete External Account
 *
 * Delete an external account by ID.
 *
 * @param user_id - The ID of the user's external account
 * @param external_account_id - The ID of the external account to delete
 */
export const deleteExternalAccount = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteExternalAccountInput,
    outputSchema: DeleteExternalAccountOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }),
);
