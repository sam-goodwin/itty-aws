import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const CreateBlocklistIdentifierInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier: Schema.String,
  }).pipe(T.Http({ method: "POST", path: "/blocklist_identifiers" }));
export type CreateBlocklistIdentifierInput =
  typeof CreateBlocklistIdentifierInput.Type;

// Output Schema
export const CreateBlocklistIdentifierOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.Literals(["blocklist_identifier"])),
    id: Schema.optional(Schema.String),
    identifier: Schema.optional(Schema.String),
    identifier_type: Schema.optional(
      Schema.Literals(["email_address", "phone_number", "web3_wallet"]),
    ),
    instance_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.Number),
    updated_at: Schema.optional(Schema.Number),
  });
export type CreateBlocklistIdentifierOutput =
  typeof CreateBlocklistIdentifierOutput.Type;

// The operation
/**
 * Add identifier to the block-list
 *
 * Create an identifier that is blocked from accessing an instance
 */
export const CreateBlocklistIdentifier = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateBlocklistIdentifierInput,
    outputSchema: CreateBlocklistIdentifierOutput,
    errors: [BadRequest, PaymentRequired, UnprocessableEntity] as const,
  }),
);
