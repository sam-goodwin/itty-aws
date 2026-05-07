import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";
import { SensitiveNullableString } from "../sensitive.ts";

// Input Schema
export const PartnerSdkUnmergeProvisionalAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    client_id: Schema.String,
    client_secret: Schema.optional(SensitiveNullableString),
    external_auth_token: Schema.String,
    external_auth_type: Schema.Unknown,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/partner-sdk/provisional-accounts/unmerge",
    }),
  );
export type PartnerSdkUnmergeProvisionalAccountInput =
  typeof PartnerSdkUnmergeProvisionalAccountInput.Type;

// Output Schema
export const PartnerSdkUnmergeProvisionalAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type PartnerSdkUnmergeProvisionalAccountOutput =
  typeof PartnerSdkUnmergeProvisionalAccountOutput.Type;

// The operation
export const partnerSdkUnmergeProvisionalAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: PartnerSdkUnmergeProvisionalAccountInput,
    outputSchema: PartnerSdkUnmergeProvisionalAccountOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
