import * as Schema from "effect/Schema";
import { API } from "../../../backend-client.ts";
import * as T from "../../../traits.ts";
import { Forbidden } from "../../../errors.ts";

// Input Schema
export const GetInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.String.pipe(T.PathParam()),
}).pipe(T.Http({ method: "GET", path: "/sign_ups/{id}" }));
export type GetInput = typeof GetInput.Type;

// Output Schema
export const GetOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  object: Schema.Literals(["sign_up_attempt"]),
  id: Schema.String,
  status: Schema.Literals(["missing_requirements", "complete", "abandoned"]),
  required_fields: Schema.Array(Schema.String),
  optional_fields: Schema.Array(Schema.String),
  missing_fields: Schema.Array(Schema.String),
  unverified_fields: Schema.Array(Schema.String),
  verifications: Schema.Struct({
    email_address: Schema.NullOr(
      Schema.Struct({
        next_action: Schema.optional(
          Schema.Literals(["needs_prepare", "needs_attempt", ""]),
        ),
        supported_strategies: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    phone_number: Schema.NullOr(
      Schema.Struct({
        next_action: Schema.optional(
          Schema.Literals(["needs_prepare", "needs_attempt", ""]),
        ),
        supported_strategies: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    web3_wallet: Schema.NullOr(
      Schema.Struct({
        next_action: Schema.optional(
          Schema.Literals(["needs_prepare", "needs_attempt", ""]),
        ),
        supported_strategies: Schema.optional(Schema.Array(Schema.String)),
      }),
    ),
    external_account: Schema.NullOr(Schema.Unknown),
  }),
  username: Schema.NullOr(Schema.String),
  email_address: Schema.NullOr(Schema.String),
  phone_number: Schema.NullOr(Schema.String),
  web3_wallet: Schema.NullOr(Schema.String),
  password_enabled: Schema.Boolean,
  first_name: Schema.NullOr(Schema.String),
  last_name: Schema.NullOr(Schema.String),
  unsafe_metadata: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  public_metadata: Schema.optional(
    Schema.Record(Schema.String, Schema.Unknown),
  ),
  custom_action: Schema.Boolean,
  external_id: Schema.NullOr(Schema.String),
  created_session_id: Schema.NullOr(Schema.String),
  created_user_id: Schema.NullOr(Schema.String),
  abandon_at: Schema.Number,
  legal_accepted_at: Schema.NullOr(Schema.Number),
  locale: Schema.optional(Schema.NullOr(Schema.String)),
  external_account: Schema.optional(Schema.Unknown),
});
export type GetOutput = typeof GetOutput.Type;

// The operation
/**
 * Retrieve a sign-up by ID
 *
 * Retrieve the details of the sign-up with the given ID
 *
 * @param id - The ID of the sign-up to retrieve
 */
export const get = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetInput,
  outputSchema: GetOutput,
  errors: [Forbidden] as const,
}));
