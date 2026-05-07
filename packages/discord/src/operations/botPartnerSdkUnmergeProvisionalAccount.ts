import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../errors.ts";

// Input Schema
export const BotPartnerSdkUnmergeProvisionalAccountInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    external_user_id: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/partner-sdk/provisional-accounts/unmerge/bot",
    }),
  );
export type BotPartnerSdkUnmergeProvisionalAccountInput =
  typeof BotPartnerSdkUnmergeProvisionalAccountInput.Type;

// Output Schema
export const BotPartnerSdkUnmergeProvisionalAccountOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type BotPartnerSdkUnmergeProvisionalAccountOutput =
  typeof BotPartnerSdkUnmergeProvisionalAccountOutput.Type;

// The operation
export const botPartnerSdkUnmergeProvisionalAccount =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: BotPartnerSdkUnmergeProvisionalAccountInput,
    outputSchema: BotPartnerSdkUnmergeProvisionalAccountOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
