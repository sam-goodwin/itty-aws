import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface PostTerminalOnboardingLinksInput {
  expand?: string[];
  link_options: {
    apple_terms_and_conditions?: {
      allow_relinking?: boolean;
      merchant_display_name: string;
    };
  };
  link_type: "apple_terms_and_conditions";
  on_behalf_of?: string;
}
export const PostTerminalOnboardingLinksInput =
  /*@__PURE__*/ Schema.Struct({
    expand: Schema.optional(Schema.Array(Schema.String)),
    link_options: Schema.Struct({
      apple_terms_and_conditions: Schema.optional(
        Schema.Struct({
          allow_relinking: Schema.optional(Schema.Boolean),
          merchant_display_name: Schema.String,
        }),
      ),
    }),
    link_type: Schema.Literals(["apple_terms_and_conditions"]),
    on_behalf_of: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/v1/terminal/onboarding_links",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<PostTerminalOnboardingLinksInput>;

// Output Schema
export interface PostTerminalOnboardingLinksOutput {
  link_options: {
    apple_terms_and_conditions: {
      allow_relinking: boolean | null;
      merchant_display_name: string;
    } | null;
  };
  link_type: "apple_terms_and_conditions";
  object: "terminal.onboarding_link";
  on_behalf_of: string | null;
  redirect_url: string;
}
export const PostTerminalOnboardingLinksOutput =
  /*@__PURE__*/ Schema.Struct({
    link_options: Schema.Struct({
      apple_terms_and_conditions: Schema.NullOr(
        Schema.Struct({
          allow_relinking: Schema.NullOr(Schema.Boolean),
          merchant_display_name: Schema.String,
        }),
      ),
    }),
    link_type: Schema.Literals(["apple_terms_and_conditions"]),
    object: Schema.Literals(["terminal.onboarding_link"]),
    on_behalf_of: Schema.NullOr(Schema.String),
    redirect_url: Schema.String,
  }) as unknown as Schema.Codec<PostTerminalOnboardingLinksOutput>;

// The operation
/**
 * Create an Onboarding Link
 *
 * <p>Creates a new <code>OnboardingLink</code> object that contains a redirect_url used for onboarding onto Tap to Pay on iPhone.</p>
 */
export const PostTerminalOnboardingLinks = /*@__PURE__*/ API.make(() => ({
  inputSchema: PostTerminalOnboardingLinksInput,
  outputSchema: PostTerminalOnboardingLinksOutput,
}));
