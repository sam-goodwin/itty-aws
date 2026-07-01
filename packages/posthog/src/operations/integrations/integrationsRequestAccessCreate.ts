import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface IntegrationsRequestAccessCreateInput {
  project_id: string;
  kind:
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
  reason: string;
}
export const IntegrationsRequestAccessCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    kind: Schema.Literals([
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
    reason: Schema.String,
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/integrations/request_access/",
    }),
  ) as unknown as Schema.Codec<IntegrationsRequestAccessCreateInput>;

// Output Schema
export interface IntegrationsRequestAccessCreateOutput {
  success: boolean;
}
export const IntegrationsRequestAccessCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    success: Schema.Boolean,
  }) as unknown as Schema.Codec<IntegrationsRequestAccessCreateOutput>;

// The operation
/**
 * Notify project admins that a member is requesting an integration be connected.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsRequestAccessCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsRequestAccessCreateInput,
    outputSchema: IntegrationsRequestAccessCreateOutput,
  }));
