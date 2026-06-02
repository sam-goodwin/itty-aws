import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { PaymentRequired } from "../../errors.ts";

// Input Schema
export const ListBlocklistIdentifiersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/blocklist_identifiers" }),
  );
export type ListBlocklistIdentifiersInput =
  typeof ListBlocklistIdentifiersInput.Type;

// Output Schema
export const ListBlocklistIdentifiersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    data: Schema.Array(
      Schema.Struct({
        object: Schema.optional(Schema.Literals(["blocklist_identifier"])),
        id: Schema.optional(Schema.String),
        identifier: Schema.optional(Schema.String),
        identifier_type: Schema.optional(
          Schema.Literals(["email_address", "phone_number", "web3_wallet"]),
        ),
        instance_id: Schema.optional(Schema.String),
        created_at: Schema.optional(Schema.Number),
        updated_at: Schema.optional(Schema.Number),
      }),
    ),
    total_count: Schema.Number,
  });
export type ListBlocklistIdentifiersOutput =
  typeof ListBlocklistIdentifiersOutput.Type;

// The operation
/**
 * List all identifiers on the block-list
 *
 * Get a list of all identifiers which are not allowed to access an instance
 */
export const ListBlocklistIdentifiers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListBlocklistIdentifiersInput,
    outputSchema: ListBlocklistIdentifiersOutput,
    errors: [PaymentRequired] as const,
  }),
);
