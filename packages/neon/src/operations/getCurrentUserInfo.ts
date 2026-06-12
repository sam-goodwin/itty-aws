import * as Schema from "effect/Schema";
import {
  BillingAccountSchema,
  CurrentUserAuthAccountSchema,
} from "./_schemas.ts";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export const GetCurrentUserInfoInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({}).pipe(
    T.Http({ method: "GET", path: "/users/me" }),
  );
export type GetCurrentUserInfoInput = typeof GetCurrentUserInfoInput.Type;

// Output Schema
export const GetCurrentUserInfoOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    active_seconds_limit: Schema.Number,
    billing_account: Schema.optional(
      Schema.suspend(() => BillingAccountSchema),
    ),
    auth_accounts: Schema.Array(
      Schema.suspend(() => CurrentUserAuthAccountSchema),
    ),
    email: Schema.String,
    id: Schema.String,
    image: Schema.String,
    login: Schema.String,
    name: Schema.String,
    last_name: Schema.String,
    projects_limit: Schema.Number,
    branches_limit: Schema.Number,
    max_autoscaling_limit: Schema.Number,
    compute_seconds_limit: Schema.optional(Schema.Number),
    plan: Schema.String,
  });
export type GetCurrentUserInfoOutput = typeof GetCurrentUserInfoOutput.Type;

// The operation
/**
 * Retrieve current user details
 *
 * Retrieves information about the current Neon user account.
 */
export const getCurrentUserInfo = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: GetCurrentUserInfoInput,
  outputSchema: GetCurrentUserInfoOutput,
}));
