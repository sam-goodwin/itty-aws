import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const IntegrationsDomainConnectApplyUrlCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    id: Schema.optional(Schema.Number),
    kind: Schema.optional(
      Schema.Literals([
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
          role_at_organization: Schema.optional(Schema.Unknown),
        }),
      ),
    ),
    errors: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/integrations/domain-connect/apply-url/",
    }),
  );
export type IntegrationsDomainConnectApplyUrlCreateInput =
  typeof IntegrationsDomainConnectApplyUrlCreateInput.Type;

// Output Schema
export const IntegrationsDomainConnectApplyUrlCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Void;
export type IntegrationsDomainConnectApplyUrlCreateOutput =
  typeof IntegrationsDomainConnectApplyUrlCreateOutput.Type;

// The operation
/**
 * Unified endpoint for generating Domain Connect apply URLs.
 * Accepts a context ("email" or "proxy") and the relevant resource ID.
 * The backend resolves the domain, template variables, and service ID
 * based on context, then builds the signed apply URL.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsDomainConnectApplyUrlCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsDomainConnectApplyUrlCreateInput,
    outputSchema: IntegrationsDomainConnectApplyUrlCreateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
