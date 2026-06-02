import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import {
  BadRequest,
  PaymentRequired,
  UnprocessableEntity,
} from "../../errors.ts";

// Input Schema
export const CreateAllowlistIdentifierInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    identifier: Schema.String,
    notify: Schema.optional(Schema.Boolean),
  }).pipe(T.Http({ method: "POST", path: "/allowlist_identifiers" }));
export type CreateAllowlistIdentifierInput =
  typeof CreateAllowlistIdentifierInput.Type;

// Output Schema
export const CreateAllowlistIdentifierOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    object: Schema.optional(Schema.Literals(["allowlist_identifier"])),
    id: Schema.optional(Schema.String),
    invitation_id: Schema.optional(Schema.String),
    identifier: Schema.optional(Schema.String),
    identifier_type: Schema.optional(
      Schema.Literals(["email_address", "phone_number", "web3_wallet"]),
    ),
    instance_id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.Number),
    updated_at: Schema.optional(Schema.Number),
  });
export type CreateAllowlistIdentifierOutput =
  typeof CreateAllowlistIdentifierOutput.Type;

// The operation
/**
 * Add identifier to the allow-list
 *
 * Create an identifier allowed to sign up to an instance
 */
export const CreateAllowlistIdentifier = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: CreateAllowlistIdentifierInput,
    outputSchema: CreateAllowlistIdentifierOutput,
    errors: [BadRequest, PaymentRequired, UnprocessableEntity] as const,
  }),
);
