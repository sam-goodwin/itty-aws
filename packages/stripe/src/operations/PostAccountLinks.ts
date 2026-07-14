import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostAccountLinksInput {
  account: string;
  collect?: "currently_due" | "eventually_due";
  collection_options?: {
    fields?: "currently_due" | "eventually_due";
    future_requirements?: "include" | "omit";
  };
  expand?: string[];
  refresh_url?: string;
  return_url?: string;
  type: "account_onboarding" | "account_update";
}
export const PostAccountLinksInput = /*@__PURE__*/ Schema.Struct({
  account: Schema.String,
  collect: Schema.optional(
    Schema.Literals(["currently_due", "eventually_due"]),
  ),
  collection_options: Schema.optional(
    Schema.Struct({
      fields: Schema.optional(
        Schema.Literals(["currently_due", "eventually_due"]),
      ),
      future_requirements: Schema.optional(
        Schema.Literals(["include", "omit"]),
      ),
    }),
  ),
  expand: Schema.optional(Schema.Array(Schema.String)),
  refresh_url: Schema.optional(Schema.String),
  return_url: Schema.optional(Schema.String),
  type: Schema.Literals(["account_onboarding", "account_update"]),
}).pipe(
  T.Http({
    method: "POST",
    path: "/v1/account_links",
    contentType: "form-urlencoded",
  }),
) as unknown as Schema.Codec<PostAccountLinksInput>;

// Output Schema
export interface PostAccountLinksOutput {
  created: number;
  expires_at: number;
  object: "account_link";
  url: string;
}
export const PostAccountLinksOutput = /*@__PURE__*/ Schema.Struct({
  created: Schema.Number,
  expires_at: Schema.Number,
  object: Schema.Literals(["account_link"]),
  url: Schema.String,
}) as unknown as Schema.Codec<PostAccountLinksOutput>;

// The operation
/**
 * Create an account link
 *
 * <p>Creates an AccountLink object that includes a single-use Stripe URL that the platform can redirect their user to in order to take them through the Connect Onboarding flow.</p>
 */
export const PostAccountLinks = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostAccountLinksInput,
  outputSchema: PostAccountLinksOutput,
}));
