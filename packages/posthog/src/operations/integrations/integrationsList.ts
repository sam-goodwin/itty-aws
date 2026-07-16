import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsListInput {
  project_id: string;
  kind?:
    | "anthropic"
    | "apns"
    | "aws-s3"
    | "azure-blob"
    | "bing-ads"
    | "clickup"
    | "customerio-app"
    | "customerio-track"
    | "customerio-webhook"
    | "databricks"
    | "email"
    | "firebase"
    | "github"
    | "gitlab"
    | "google-ads"
    | "google-analytics"
    | "google-cloud-service-account"
    | "google-cloud-storage"
    | "google-pubsub"
    | "google-search-console"
    | "google-sheets"
    | "hubspot"
    | "intercom"
    | "jira"
    | "linear"
    | "linkedin-ads"
    | "meta-ads"
    | "pinterest-ads"
    | "postgresql"
    | "reddit-ads"
    | "s3-compatible"
    | "salesforce"
    | "slack"
    | "slack-posthog-code"
    | "snapchat"
    | "stripe"
    | "tiktok-ads"
    | "twilio"
    | "vercel";
  limit?: number;
  offset?: number;
}
export const IntegrationsListInput = /*@__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  kind: Schema.optional(
    Schema.Literals([
      "anthropic",
      "apns",
      "aws-s3",
      "azure-blob",
      "bing-ads",
      "clickup",
      "customerio-app",
      "customerio-track",
      "customerio-webhook",
      "databricks",
      "email",
      "firebase",
      "github",
      "gitlab",
      "google-ads",
      "google-analytics",
      "google-cloud-service-account",
      "google-cloud-storage",
      "google-pubsub",
      "google-search-console",
      "google-sheets",
      "hubspot",
      "intercom",
      "jira",
      "linear",
      "linkedin-ads",
      "meta-ads",
      "pinterest-ads",
      "postgresql",
      "reddit-ads",
      "s3-compatible",
      "salesforce",
      "slack",
      "slack-posthog-code",
      "snapchat",
      "stripe",
      "tiktok-ads",
      "twilio",
      "vercel",
    ]),
  ),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/integrations/" }),
) as unknown as Schema.Codec<IntegrationsListInput>;

// Output Schema
export interface IntegrationsListOutput {
  count?: number;
  next?: string | null;
  previous?: string | null;
  results?: {
    id?: number;
    kind?:
      | "anthropic"
      | "apns"
      | "aws-s3"
      | "azure-blob"
      | "bing-ads"
      | "clickup"
      | "customerio-app"
      | "customerio-track"
      | "customerio-webhook"
      | "databricks"
      | "email"
      | "firebase"
      | "github"
      | "gitlab"
      | "google-ads"
      | "google-analytics"
      | "google-cloud-service-account"
      | "google-cloud-storage"
      | "google-pubsub"
      | "google-search-console"
      | "google-sheets"
      | "hubspot"
      | "intercom"
      | "jira"
      | "linear"
      | "linkedin-ads"
      | "meta-ads"
      | "pinterest-ads"
      | "postgresql"
      | "reddit-ads"
      | "s3-compatible"
      | "salesforce"
      | "slack"
      | "slack-posthog-code"
      | "snapchat"
      | "stripe"
      | "tiktok-ads"
      | "twilio"
      | "vercel";
    config?: unknown;
    created_at?: string;
    created_by?: {
      id?: number;
      uuid?: string;
      distinct_id?: string | null;
      first_name?: string;
      last_name?: string;
      email?: string;
      is_email_verified?: boolean | null;
      hedgehog_config?: Record<string, unknown> | null;
      role_at_organization?:
        | "engineering"
        | "data"
        | "product"
        | "founder"
        | "leadership"
        | "marketing"
        | "sales"
        | "other"
        | ""
        | null;
    } | null;
    errors?: string;
    display_name?: string;
  }[];
}
export const IntegrationsListOutput = /*@__PURE__*/ Schema.Struct({
  count: Schema.optional(Schema.Number),
  next: Schema.optional(Schema.NullOr(Schema.String)),
  previous: Schema.optional(Schema.NullOr(Schema.String)),
  results: Schema.optional(
    Schema.Array(
      Schema.Struct({
        id: Schema.optional(Schema.Number),
        kind: Schema.optional(
          Schema.Literals([
            "anthropic",
            "apns",
            "aws-s3",
            "azure-blob",
            "bing-ads",
            "clickup",
            "customerio-app",
            "customerio-track",
            "customerio-webhook",
            "databricks",
            "email",
            "firebase",
            "github",
            "gitlab",
            "google-ads",
            "google-analytics",
            "google-cloud-service-account",
            "google-cloud-storage",
            "google-pubsub",
            "google-search-console",
            "google-sheets",
            "hubspot",
            "intercom",
            "jira",
            "linear",
            "linkedin-ads",
            "meta-ads",
            "pinterest-ads",
            "postgresql",
            "reddit-ads",
            "s3-compatible",
            "salesforce",
            "slack",
            "slack-posthog-code",
            "snapchat",
            "stripe",
            "tiktok-ads",
            "twilio",
            "vercel",
          ]),
        ),
        config: Schema.optional(Schema.Unknown),
        created_at: Schema.optional(Schema.String),
        created_by: Schema.optional(
          Schema.NullOr(
            Schema.Struct({
              id: Schema.optional(Schema.Number),
              uuid: Schema.optional(Schema.String),
              distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
              first_name: Schema.optional(Schema.String),
              last_name: Schema.optional(Schema.String),
              email: Schema.optional(Schema.String),
              is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
              hedgehog_config: Schema.optional(
                Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
              ),
              role_at_organization: Schema.optional(
                Schema.NullOr(
                  Schema.Union([
                    Schema.Literals([
                      "engineering",
                      "data",
                      "product",
                      "founder",
                      "leadership",
                      "marketing",
                      "sales",
                      "other",
                    ]),
                    Schema.Literals([""]),
                  ]),
                ),
              ),
            }),
          ),
        ),
        errors: Schema.optional(Schema.String),
        display_name: Schema.optional(Schema.String),
      }),
    ),
  ),
}) as unknown as Schema.Codec<IntegrationsListOutput>;

// The operation
/**
 *
 * @param kind - * `anthropic` - Anthropic
 * `apns` - Apple Push
 * `aws-s3` - Aws S3
 * `azure-blob` - Azure Blob
 * `bing-ads` - Bing Ads
 * `clickup` - Clickup
 * `customerio-app` - Customerio App
 * `customerio-track` - Customerio Track
 * `customerio-webhook` - Customerio Webhook
 * `databricks` - Databricks
 * `email` - Email
 * `firebase` - Firebase
 * `github` - Github
 * `gitlab` - Gitlab
 * `google-ads` - Google Ads
 * `google-analytics` - Google Analytics
 * `google-cloud-service-account` - Google Cloud Service Account
 * `google-cloud-storage` - Google Cloud Storage
 * `google-pubsub` - Google Pubsub
 * `google-search-console` - Google Search Console
 * `google-sheets` - Google Sheets
 * `hubspot` - Hubspot
 * `intercom` - Intercom
 * `jira` - Jira
 * `linear` - Linear
 * `linkedin-ads` - Linkedin Ads
 * `meta-ads` - Meta Ads
 * `pinterest-ads` - Pinterest Ads
 * `postgresql` - Postgresql
 * `reddit-ads` - Reddit Ads
 * `s3-compatible` - S3 Compatible
 * `salesforce` - Salesforce
 * `slack` - Slack
 * `slack-posthog-code` - Slack Posthog Code
 * `snapchat` - Snapchat
 * `stripe` - Stripe
 * `tiktok-ads` - Tiktok Ads
 * `twilio` - Twilio
 * `vercel` - Vercel
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsList = /*@__PURE__*/ API.make(() => ({
  inputSchema: IntegrationsListInput,
  outputSchema: IntegrationsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
