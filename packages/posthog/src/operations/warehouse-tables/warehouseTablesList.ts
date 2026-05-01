import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";

// Input Schema
export const WarehouseTablesListInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    limit: Schema.optional(Schema.Number),
    offset: Schema.optional(Schema.Number),
    search: Schema.optional(Schema.String),
  }).pipe(
    T.Http({
      method: "GET",
      path: "/api/projects/{project_id}/warehouse_tables/",
    }),
  );
export type WarehouseTablesListInput = typeof WarehouseTablesListInput.Type;

// Output Schema
export const WarehouseTablesListOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    count: Schema.optional(Schema.Number),
    next: Schema.optional(Schema.NullOr(Schema.String)),
    previous: Schema.optional(Schema.NullOr(Schema.String)),
    results: Schema.optional(
      Schema.Array(
        Schema.Struct({
          id: Schema.optional(Schema.String),
          deleted: Schema.optional(Schema.NullOr(Schema.Boolean)),
          name: Schema.optional(Schema.String),
          format: Schema.optional(
            Schema.Literals([
              "CSV",
              "CSVWithNames",
              "Parquet",
              "JSONEachRow",
              "Delta",
              "DeltaS3Wrapper",
            ]),
          ),
          created_by: Schema.optional(
            Schema.NullOr(
              Schema.Struct({
                id: Schema.optional(Schema.Number),
                uuid: Schema.optional(Schema.String),
                distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                first_name: Schema.optional(Schema.String),
                last_name: Schema.optional(Schema.String),
                email: Schema.optional(Schema.String),
                is_email_verified: Schema.optional(
                  Schema.NullOr(Schema.Boolean),
                ),
                hedgehog_config: Schema.optional(
                  Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
                ),
                role_at_organization: Schema.optional(Schema.Unknown),
              }),
            ),
          ),
          created_at: Schema.optional(Schema.String),
          url_pattern: Schema.optional(Schema.String),
          credential: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              created_by: Schema.optional(
                Schema.NullOr(
                  Schema.Struct({
                    id: Schema.optional(Schema.Number),
                    uuid: Schema.optional(Schema.String),
                    distinct_id: Schema.optional(Schema.NullOr(Schema.String)),
                    first_name: Schema.optional(Schema.String),
                    last_name: Schema.optional(Schema.String),
                    email: Schema.optional(Schema.String),
                    is_email_verified: Schema.optional(
                      Schema.NullOr(Schema.Boolean),
                    ),
                    hedgehog_config: Schema.optional(
                      Schema.NullOr(
                        Schema.Record(Schema.String, Schema.Unknown),
                      ),
                    ),
                    role_at_organization: Schema.optional(Schema.Unknown),
                  }),
                ),
              ),
              created_at: Schema.optional(Schema.String),
              access_key: Schema.optional(Schema.String),
              access_secret: Schema.optional(SensitiveString),
            }),
          ),
          columns: Schema.optional(
            Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          external_data_source: Schema.optional(
            Schema.Struct({
              id: Schema.optional(Schema.String),
              created_at: Schema.optional(Schema.String),
              created_by: Schema.optional(Schema.NullOr(Schema.Number)),
              status: Schema.optional(Schema.String),
              source_type: Schema.optional(
                Schema.Literals([
                  "Ashby",
                  "Supabase",
                  "CustomerIO",
                  "Github",
                  "Stripe",
                  "Hubspot",
                  "Postgres",
                  "Zendesk",
                  "Snowflake",
                  "Salesforce",
                  "MySQL",
                  "MongoDB",
                  "MSSQL",
                  "Vitally",
                  "BigQuery",
                  "Chargebee",
                  "Clerk",
                  "GoogleAds",
                  "TemporalIO",
                  "DoIt",
                  "GoogleSheets",
                  "MetaAds",
                  "Klaviyo",
                  "Mailchimp",
                  "Braze",
                  "Mailjet",
                  "Redshift",
                  "Polar",
                  "RevenueCat",
                  "LinkedinAds",
                  "RedditAds",
                  "TikTokAds",
                  "BingAds",
                  "Shopify",
                  "Attio",
                  "SnapchatAds",
                  "Linear",
                  "Intercom",
                  "Amplitude",
                  "Mixpanel",
                  "Jira",
                  "ActiveCampaign",
                  "Marketo",
                  "Adjust",
                  "AppsFlyer",
                  "Freshdesk",
                  "GoogleAnalytics",
                  "Pipedrive",
                  "SendGrid",
                  "Slack",
                  "PagerDuty",
                  "Asana",
                  "Notion",
                  "Airtable",
                  "Greenhouse",
                  "BambooHR",
                  "Lever",
                  "GitLab",
                  "Datadog",
                  "Sentry",
                  "Pendo",
                  "FullStory",
                  "AmazonAds",
                  "PinterestAds",
                  "AppleSearchAds",
                  "QuickBooks",
                  "Xero",
                  "NetSuite",
                  "WooCommerce",
                  "BigCommerce",
                  "PayPal",
                  "Square",
                  "Zoom",
                  "Trello",
                  "Monday",
                  "ClickUp",
                  "Confluence",
                  "Recurly",
                  "SalesLoft",
                  "Outreach",
                  "Gong",
                  "Calendly",
                  "Typeform",
                  "Iterable",
                  "ZohoCRM",
                  "Close",
                  "Oracle",
                  "DynamoDB",
                  "Elasticsearch",
                  "Kafka",
                  "LaunchDarkly",
                  "Braintree",
                  "Recharge",
                  "HelpScout",
                  "Gorgias",
                  "Instagram",
                  "YouTubeAnalytics",
                  "FacebookPages",
                  "TwitterAds",
                  "Workday",
                  "ServiceNow",
                  "Pardot",
                  "Copper",
                  "Front",
                  "ChartMogul",
                  "Zuora",
                  "Paddle",
                  "CircleCI",
                  "CockroachDB",
                  "Firebase",
                  "AzureBlob",
                  "GoogleDrive",
                  "OneDrive",
                  "SharePoint",
                  "Box",
                  "SFTP",
                  "MicrosoftTeams",
                  "Aircall",
                  "Webflow",
                  "Okta",
                  "Auth0",
                  "Productboard",
                  "Smartsheet",
                  "Wrike",
                  "Plaid",
                  "SurveyMonkey",
                  "Eventbrite",
                  "RingCentral",
                  "Twilio",
                  "Freshsales",
                  "Shortcut",
                  "ConvertKit",
                  "Drip",
                  "CampaignMonitor",
                  "MailerLite",
                  "Omnisend",
                  "Brevo",
                  "Postmark",
                  "Granola",
                  "BuildBetter",
                  "Convex",
                  "ClickHouse",
                  "Plain",
                ]),
              ),
            }),
          ),
          external_schema: Schema.optional(
            Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
          ),
          options: Schema.optional(
            Schema.Record(Schema.String, Schema.Unknown),
          ),
        }),
      ),
    ),
  });
export type WarehouseTablesListOutput = typeof WarehouseTablesListOutput.Type;

// The operation
/**
 * Create, Read, Update and Delete Warehouse Tables.
 *
 * @param limit - Number of results to return per page.
 * @param offset - The initial index from which to return the results.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 * @param search - A search term.
 */
export const warehouseTablesList = /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
  inputSchema: WarehouseTablesListInput,
  outputSchema: WarehouseTablesListOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
