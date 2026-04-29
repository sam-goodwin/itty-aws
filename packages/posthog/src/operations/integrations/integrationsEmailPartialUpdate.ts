import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";

// Input Schema
export const IntegrationsEmailPartialUpdateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    id: Schema.Number.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
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
      Schema.Struct({
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
    ),
    errors: Schema.optional(Schema.String),
    display_name: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/integrations/{id}/email/",
    }),
  );
export type IntegrationsEmailPartialUpdateInput =
  typeof IntegrationsEmailPartialUpdateInput.Type;

// Output Schema
export const IntegrationsEmailPartialUpdateOutput =
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
export type IntegrationsEmailPartialUpdateOutput =
  typeof IntegrationsEmailPartialUpdateOutput.Type;

// The operation
/**
 *
 * @param id - A unique integer value identifying this integration.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsEmailPartialUpdate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: IntegrationsEmailPartialUpdateInput,
    outputSchema: IntegrationsEmailPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
