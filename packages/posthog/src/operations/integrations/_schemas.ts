import * as Schema from "effect/Schema";

export const RoleExternalReferenceSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    provider: Schema.optional(Schema.String),
    provider_organization_id: Schema.optional(Schema.String),
    provider_role_id: Schema.optional(Schema.String),
    provider_role_slug: Schema.optional(Schema.NullOr(Schema.String)),
    provider_role_name: Schema.optional(Schema.String),
    role: Schema.optional(Schema.String),
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
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
  });
export const IntegrationConfigSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.Number),
    kind: Schema.optional(Schema.suspend(() => IntegrationKindEnumSchema)),
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
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    errors: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
  });
export const IntegrationKindEnumSchema =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Literals([
    "slack",
    "slack-posthog-code",
    "salesforce",
    "hubspot",
    "google-pubsub",
    "google-cloud-storage",
    "google-ads",
    "google-sheets",
    "google-cloud-service-account",
    "snapchat",
    "linkedin-ads",
    "reddit-ads",
    "tiktok-ads",
    "bing-ads",
    "intercom",
    "email",
    "linear",
    "github",
    "gitlab",
    "meta-ads",
    "twilio",
    "clickup",
    "vercel",
    "databricks",
    "azure-blob",
    "firebase",
    "jira",
    "pinterest-ads",
    "stripe",
    "customerio-app",
    "customerio-webhook",
    "customerio-track",
  ]);
export const GitHubRepoSchema = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  id: Schema.optional(Schema.Number),
  name: Schema.optional(Schema.String),
  full_name: Schema.optional(Schema.String),
});
