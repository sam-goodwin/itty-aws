import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { PaymentRequired, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteAllowlistIdentifierInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/allowlist_identifiers/{identifier_id}",
    }),
  );
export type DeleteAllowlistIdentifierInput =
  typeof DeleteAllowlistIdentifierInput.Type;

// Output Schema
export const DeleteAllowlistIdentifierOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteAllowlistIdentifierOutput =
  typeof DeleteAllowlistIdentifierOutput.Type;

// The operation
/**
 * Delete identifier from allow-list
 *
 * Delete an identifier from the instance allow-list
 *
 * @param identifier_id - The ID of the identifier to delete from the allow-list
 */
export const DeleteAllowlistIdentifier = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteAllowlistIdentifierInput,
    outputSchema: DeleteAllowlistIdentifierOutput,
    errors: [PaymentRequired, NotFound] as const,
  }),
);
