import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { Forbidden, NotFound } from "../../errors";

// Input Schema
export const IntegrationsRetrieveInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/integrations/{id}/",
    }),
  );
export type IntegrationsRetrieveInput = typeof IntegrationsRetrieveInput.Type;

// Output Schema
export const IntegrationsRetrieveOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number,
    kind: Schema.Literals([
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
    config: Schema.optional(Schema.Unknown),
    created_at: Schema.String,
    created_by: Schema.Struct({
      id: Schema.Number,
      uuid: Schema.String,
      distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
      first_name: Schema.optional(Schema.String),
      last_name: Schema.optional(Schema.String),
      email: Schema.String,
      is_email_verified: Schema.optional(Schema.NullOr(Schema.Boolean)),
      hedgehog_config: Schema.NullOr(
        Schema.Record(Schema.String, Schema.Unknown),
      ),
      role_at_organization: Schema.optional(Schema.Unknown),
    }),
    errors: Schema.String,
    display_name: Schema.String,
  });
export type IntegrationsRetrieveOutput = typeof IntegrationsRetrieveOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsRetrieve = /*@__PURE__*/ /*#__PURE__*/ API.make(
  () => ({
    inputSchema: IntegrationsRetrieveInput,
    outputSchema: IntegrationsRetrieveOutput,
    errors: [Forbidden, NotFound] as const,
  }),
);
