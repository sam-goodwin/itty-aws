import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { PaymentRequired, NotFound } from "../../errors.ts";

// Input Schema
export const DeleteBlocklistIdentifierInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "DELETE",
      path: "/blocklist_identifiers/{identifier_id}",
    }),
  );
export type DeleteBlocklistIdentifierInput =
  typeof DeleteBlocklistIdentifierInput.Type;

// Output Schema
export const DeleteBlocklistIdentifierOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.String,
    id: Schema.optional(Schema.String),
    slug: Schema.optional(Schema.String),
    deleted: Schema.Boolean,
    external_id: Schema.optional(Schema.String),
  });
export type DeleteBlocklistIdentifierOutput =
  typeof DeleteBlocklistIdentifierOutput.Type;

// The operation
/**
 * Delete identifier from block-list
 *
 * Delete an identifier from the instance block-list
 *
 * @param identifier_id - The ID of the identifier to delete from the block-list
 */
export const DeleteBlocklistIdentifier = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: DeleteBlocklistIdentifierInput,
    outputSchema: DeleteBlocklistIdentifierOutput,
    errors: [PaymentRequired, NotFound] as const,
  }),
);
