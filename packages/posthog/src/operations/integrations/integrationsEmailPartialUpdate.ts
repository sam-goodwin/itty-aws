import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export interface IntegrationsEmailPartialUpdateInput {
  id: number;
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
}
export const IntegrationsEmailPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
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
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/integrations/{id}/email/",
    }),
  ) as unknown as Schema.Codec<IntegrationsEmailPartialUpdateInput>;

// Output Schema
export interface IntegrationsEmailPartialUpdateOutput {
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
}
export const IntegrationsEmailPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
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
  }) as unknown as Schema.Codec<IntegrationsEmailPartialUpdateOutput>;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsEmailPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsEmailPartialUpdateInput,
    outputSchema: IntegrationsEmailPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
