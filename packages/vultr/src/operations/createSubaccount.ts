import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest } from "../errors.ts";

// Input Schema
export const CreateSubaccountInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  email: Schema.String,
  subaccount_name: Schema.optional(Schema.String),
  subaccount_id: Schema.optional(Schema.String),
}).pipe(T.Http({ method: "POST", path: "/subaccounts" }));
export type CreateSubaccountInput = typeof CreateSubaccountInput.Type;

// Output Schema
export const CreateSubaccountOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    subaccount: Schema.optional(
      Schema.Struct({
        id: Schema.optional(Schema.String),
        email: Schema.optional(Schema.String),
        subaccount_name: Schema.optional(Schema.String),
        subaccount_id: Schema.optional(Schema.String),
        activated: Schema.optional(Schema.Boolean),
        balance: Schema.optional(Schema.Unknown),
        pending_charges: Schema.optional(Schema.Unknown),
      }),
    ),
  },
);
export type CreateSubaccountOutput = typeof CreateSubaccountOutput.Type;

// The operation
/**
 * Create Sub-Account
 *
 * Create a new subaccount.
 */
export const createSubaccount = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: CreateSubaccountInput,
  outputSchema: CreateSubaccountOutput,
  errors: [BadRequest] as const,
}));
