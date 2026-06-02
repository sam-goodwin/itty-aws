import * as Schema from "effect/Schema";
import { API } from "../../backend-client.ts";
import * as T from "../../traits.ts";
import { PaymentRequired } from "../../errors.ts";

// Input Schema
export const ListAllowlistIdentifiersInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    paginated: Schema.optional(Schema.Boolean),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
  }).pipe(T.Http({ method: "GET", path: "/allowlist_identifiers" }));
export type ListAllowlistIdentifiersInput =
  typeof ListAllowlistIdentifiersInput.Type;

// Output Schema
export const ListAllowlistIdentifiersOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Array(
    Schema.Struct({
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
    }),
  );
export type ListAllowlistIdentifiersOutput =
  typeof ListAllowlistIdentifiersOutput.Type;

// The operation
/**
 * List all identifiers on the allow-list
 *
 * Get a list of all identifiers allowed to sign up to an instance
 *
 * @param paginated - Whether to paginate the results.
If true, the results will be paginated.
If false, the results will not be paginated.
 * @param limit - Applies a limit to the number of results returned.
Can be used for paginating the results together with `offset`.
 * @param offset - Skip the first `offset` results when paginating.
Needs to be an integer greater or equal to zero.
To be used in conjunction with `limit`.
 */
export const ListAllowlistIdentifiers = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: ListAllowlistIdentifiersInput,
    outputSchema: ListAllowlistIdentifiersOutput,
    errors: [PaymentRequired] as const,
  }),
);
