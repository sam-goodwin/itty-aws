import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteOAuthApplicationInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    oauth_application_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/oauth_applications/{oauth_application_id}",
    }),
  );
export type DeleteOAuthApplicationInput =
  typeof DeleteOAuthApplicationInput.Type;

// Output Schema
export const DeleteOAuthApplicationOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteOAuthApplicationOutput =
  typeof DeleteOAuthApplicationOutput.Type;

// The operation
/**
 * Delete an OAuth application
 *
 * Deletes the given OAuth application.
 * This is not reversible.
 *
 * @param oauth_application_id - The ID of the OAuth application to delete
 */
export const DeleteOAuthApplication = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteOAuthApplicationInput,
    outputSchema: DeleteOAuthApplicationOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
