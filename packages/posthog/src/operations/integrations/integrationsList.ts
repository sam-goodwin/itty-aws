import * as Schema from "effect/Schema";
import { API } from "../../client";
import * as T from "../../traits";
import { BadRequest, Forbidden, NotFound } from "../../errors";

// Input Schema
export const IntegrationsListInput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
  project_id: Schema.String.pipe(T.PathParam()),
  limit: Schema.optional(Schema.Number),
  offset: Schema.optional(Schema.Number),
}).pipe(
  T.Http({ method: "GET", path: "/api/projects/{project_id}/integrations/" }),
);
export type IntegrationsListInput = typeof IntegrationsListInput.Type;

// Output Schema
export const IntegrationsListOutput = /*@__PURE__*/ /*#__PURE__*/ Schema.Struct(
  {
    count: Schema.Number,
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.Array(
      Schema.Struct({
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
      }),
    ),
  },
);
export type IntegrationsListOutput = typeof IntegrationsListOutput.Type;

// The operation
/**
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const integrationsList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: IntegrationsListInput,
  outputSchema: IntegrationsListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
