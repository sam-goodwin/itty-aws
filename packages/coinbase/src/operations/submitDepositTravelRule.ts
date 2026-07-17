import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface SubmitDepositTravelRuleInput {
  transferId: string;
  originator?: {
    name?: string;
    address?: {
      line1?: string;
      line2?: string;
      city?: string;
      state?: string;
      postCode?: string;
      countryCode?: string;
    };
    walletType?: "custodial" | "self_custody";
    virtualAssetServiceProvider?: { identifier?: string; name?: string };
    personalId?: string;
    dateOfBirth?: { day?: string; month?: string; year?: string };
  };
  beneficiary?: { name?: string };
  isSelf?: boolean;
}
export const SubmitDepositTravelRuleInput =
  /*@__PURE__*/ Schema.Struct({
    transferId: Schema.String.pipe(T.PathParam()),
    originator: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        address: Schema.optional(
          Schema.Struct({
            line1: Schema.optional(Schema.String),
            line2: Schema.optional(Schema.String),
            city: Schema.optional(Schema.String),
            state: Schema.optional(Schema.String),
            postCode: Schema.optional(Schema.String),
            countryCode: Schema.optional(Schema.String),
          }),
        ),
        walletType: Schema.optional(
          Schema.Literals(["custodial", "self_custody"]),
        ),
        virtualAssetServiceProvider: Schema.optional(
          Schema.Struct({
            identifier: Schema.optional(Schema.String),
            name: Schema.optional(Schema.String),
          }),
        ),
        personalId: Schema.optional(Schema.String),
        dateOfBirth: Schema.optional(
          Schema.Struct({
            day: Schema.optional(Schema.String),
            month: Schema.optional(Schema.String),
            year: Schema.optional(Schema.String),
          }),
        ),
      }),
    ),
    beneficiary: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
      }),
    ),
    isSelf: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({ method: "POST", path: "/v2/transfers/{transferId}/travel-rule" }),
  ) as unknown as Schema.Codec<SubmitDepositTravelRuleInput>;

// Output Schema
export interface SubmitDepositTravelRuleOutput {
  status: "incomplete" | "completed";
  missingFields?: string[];
  reason?: string;
}
export const SubmitDepositTravelRuleOutput =
  /*@__PURE__*/ Schema.Struct({
    status: Schema.Literals(["incomplete", "completed"]),
    missingFields: Schema.optional(Schema.Array(Schema.String)),
    reason: Schema.optional(Schema.String),
  }) as unknown as Schema.Codec<SubmitDepositTravelRuleOutput>;

// The operation
/**
 * Submit deposit travel rule information
 *
 * Submit travel rule information for a deposit transfer held pending compliance review.
 * Required fields vary by jurisdiction and may include originator name, address, date of birth, personal ID, and VASP information.
 * If the submitted information satisfies all jurisdictional requirements, `status` will be `completed` and the transfer will proceed. Otherwise, `status` will be `incomplete` and `missingFields` will indicate which fields still need to be provided.
 *
 * @param transferId - The unique identifier of the transfer.
 * @param X-Idempotency-Key - An optional string request header for making requests safely retryable.
When included, duplicate requests with the same key will return identical responses.
Refer to our [Idempotency docs](https://docs.cdp.coinbase.com/api-reference/v2/idempotency) for more information on using idempotency keys.

 */
export const submitDepositTravelRule = /*@__PURE__*/ API.make(() => ({
  inputSchema: SubmitDepositTravelRuleInput,
  outputSchema: SubmitDepositTravelRuleOutput,
}));
