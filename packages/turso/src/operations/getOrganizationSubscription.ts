import * as Schema from "effect/Schema";
import { API } from "../client.ts";
import * as T from "../traits.ts";

// Input Schema
export interface GetOrganizationSubscriptionInput {
  organizationSlug: string;
}
export const GetOrganizationSubscriptionInput =
  /*@__PURE__*/ Schema.Struct({
    organizationSlug: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/v1/organizations/{organizationSlug}/subscription",
    }),
  ) as unknown as Schema.Codec<GetOrganizationSubscriptionInput>;

// Output Schema
export interface GetOrganizationSubscriptionOutput {
  subscription?: {
    name?: string;
    overages?: boolean;
    plan?: string;
    timeline?: string;
  };
}
export const GetOrganizationSubscriptionOutput =
  /*@__PURE__*/ Schema.Struct({
    subscription: Schema.optional(
      Schema.Struct({
        name: Schema.optional(Schema.String),
        overages: Schema.optional(Schema.Boolean),
        plan: Schema.optional(Schema.String),
        timeline: Schema.optional(Schema.String),
      }),
    ),
  }) as unknown as Schema.Codec<GetOrganizationSubscriptionOutput>;

// The operation
/**
 * Current Subscription
 *
 * Returns the current subscription details for the organization.
 *
 * @param organizationSlug - The slug of the organization or user account.
 */
export const getOrganizationSubscription = /*@__PURE__*/ API.make(() => ({
  inputSchema: GetOrganizationSubscriptionInput,
  outputSchema: GetOrganizationSubscriptionOutput,
}));
