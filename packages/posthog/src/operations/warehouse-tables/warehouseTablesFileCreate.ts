import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString } from "../../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface WarehouseTablesFileCreateInput {
  project_id: string;
  id?: string;
  deleted?: boolean | null;
  name?: string;
  format?:
    | "CSV"
    | "CSVWithNames"
    | "Parquet"
    | "JSONEachRow"
    | "Delta"
    | "DeltaS3Wrapper";
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
  created_at?: string;
  url_pattern?: string;
  credential?: {
    id?: string;
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
    created_at?: string;
    access_key?: string;
    access_secret?: string | Redacted.Redacted<string>;
  };
  columns?: Record<string, unknown>[];
  external_data_source?: {
    id?: string;
    created_at?: string;
    created_by?: number | null;
    status?: string;
    source_type?:
      | "Ashby"
      | "Supabase"
      | "CustomerIO"
      | "Github"
      | "Stripe"
      | "Hubspot"
      | "Postgres"
      | "Zendesk"
      | "Snowflake"
      | "Salesforce"
      | "MySQL"
      | "MongoDB"
      | "MSSQL"
      | "Vitally"
      | "BigQuery"
      | "Chargebee"
      | "Clerk"
      | "GoogleAds"
      | "GoogleSearchConsole"
      | "TemporalIO"
      | "DoIt"
      | "GoogleSheets"
      | "MetaAds"
      | "Klaviyo"
      | "Mailchimp"
      | "Braze"
      | "Mailjet"
      | "Redshift"
      | "Polar"
      | "RevenueCat"
      | "LinkedinAds"
      | "RedditAds"
      | "TikTokAds"
      | "BingAds"
      | "Shopify"
      | "Attio"
      | "SnapchatAds"
      | "Linear"
      | "Intercom"
      | "Amplitude"
      | "Mixpanel"
      | "Jira"
      | "ActiveCampaign"
      | "Marketo"
      | "Adjust"
      | "AppsFlyer"
      | "Freshdesk"
      | "GoogleAnalytics"
      | "Pipedrive"
      | "SendGrid"
      | "Slack"
      | "PagerDuty"
      | "Asana"
      | "Notion"
      | "Airtable"
      | "Greenhouse"
      | "BambooHR"
      | "Lever"
      | "GitLab"
      | "Datadog"
      | "Sentry"
      | "Pendo"
      | "FullStory"
      | "AmazonAds"
      | "PinterestAds"
      | "AppleSearchAds"
      | "QuickBooks"
      | "Xero"
      | "NetSuite"
      | "WooCommerce"
      | "BigCommerce"
      | "PayPal"
      | "Square"
      | "Zoom"
      | "Trello"
      | "Monday"
      | "ClickUp"
      | "Confluence"
      | "Recurly"
      | "SalesLoft"
      | "Outreach"
      | "Gong"
      | "Calendly"
      | "Typeform"
      | "Iterable"
      | "ZohoCRM"
      | "Close"
      | "Oracle"
      | "DynamoDB"
      | "Elasticsearch"
      | "Kafka"
      | "LaunchDarkly"
      | "Braintree"
      | "Recharge"
      | "HelpScout"
      | "Gorgias"
      | "Instagram"
      | "YouTubeAnalytics"
      | "FacebookPages"
      | "TwitterAds"
      | "Workday"
      | "ServiceNow"
      | "Pardot"
      | "Copper"
      | "Front"
      | "ChartMogul"
      | "Zuora"
      | "Paddle"
      | "CircleCI"
      | "CockroachDB"
      | "Firebase"
      | "AzureBlob"
      | "GoogleDrive"
      | "OneDrive"
      | "SharePoint"
      | "Box"
      | "SFTP"
      | "MicrosoftTeams"
      | "Aircall"
      | "Webflow"
      | "Okta"
      | "Auth0"
      | "Productboard"
      | "Smartsheet"
      | "Wrike"
      | "Plaid"
      | "SurveyMonkey"
      | "Eventbrite"
      | "RingCentral"
      | "Twilio"
      | "Freshsales"
      | "Shortcut"
      | "ConvertKit"
      | "Drip"
      | "CampaignMonitor"
      | "MailerLite"
      | "Omnisend"
      | "Brevo"
      | "Postmark"
      | "Granola"
      | "BuildBetter"
      | "Convex"
      | "ClickHouse"
      | "Plain"
      | "Resend"
      | "PgAnalyze"
      | "WorkOS"
      | "AmazonS3"
      | "GoogleCloudStorage"
      | "Databricks"
      | "Dynamics365"
      | "SalesforceMarketingCloud"
      | "Db2"
      | "Heap"
      | "AdobeAnalytics"
      | "Matomo"
      | "Optimizely"
      | "Adyen"
      | "GoCardless"
      | "Mollie"
      | "CheckoutCom"
      | "Branch"
      | "Criteo"
      | "Outbrain"
      | "Taboola"
      | "AdRoll"
      | "DisplayVideo360"
      | "GoogleAdManager"
      | "CampaignManager360"
      | "SearchAds360"
      | "AdobeCommerce"
      | "AmazonSellingPartner"
      | "Ebay"
      | "Commercetools"
      | "LightspeedRetail"
      | "ShipStation"
      | "ConstantContact"
      | "Mailgun"
      | "Eloqua"
      | "Sailthru"
      | "Ortto"
      | "Attentive"
      | "Kustomer"
      | "Dixa"
      | "Gladly"
      | "Qualtrics"
      | "Delighted"
      | "AzureDevOps"
      | "Rollbar"
      | "Opsgenie"
      | "IncidentIo"
      | "Pingdom"
      | "Cloudflare"
      | "CosmosDB"
      | "PlanetScale"
      | "SapHana"
      | "Rippling"
      | "HiBob"
      | "Personio"
      | "Deel"
      | "AdpWorkforceNow"
      | "Paylocity"
      | "Gusto"
      | "CultureAmp"
      | "Lattice"
      | "SageIntacct"
      | "FreshBooks"
      | "Expensify"
      | "Ramp"
      | "Brex"
      | "Coupa"
      | "SapConcur"
      | "Apollo"
      | "Crunchbase"
      | "ZoomInfo"
      | "Clari"
      | "Chorus"
      | "Coda"
      | "Guru"
      | "Dropbox"
      | "Docusign"
      | "PandaDoc"
      | "SapErp"
      | "SapSuccessFactors"
      | "OracleEbs"
      | "OracleFusion"
      | "AmazonSNS"
      | "AmazonEventBridge"
      | "AmazonSQS"
      | "AmazonKinesis"
      | "AmazonCloudWatch"
      | "OpenAIAds"
      | "OneHundredMs"
      | "SevenShifts"
      | "AcuityScheduling"
      | "AgileCRM"
      | "Aha"
      | "Airbyte"
      | "Akeneo"
      | "Algolia"
      | "AlpacaBrokerAPI"
      | "ApifyDataset"
      | "Appcues"
      | "Appfigures"
      | "Appfollow"
      | "Apptivo"
      | "AssemblyAI"
      | "Awin"
      | "AwsCloudTrail"
      | "AzureTableStorage"
      | "Babelforce"
      | "Basecamp"
      | "Beamer"
      | "BigMailer"
      | "Bluetally"
      | "BoldSign"
      | "BreezyHR"
      | "Bugsnag"
      | "Buildkite"
      | "Bunny"
      | "Buzzsprout"
      | "CalCom"
      | "CallRail"
      | "Campayn"
      | "Canny"
      | "CapsuleCRM"
      | "CaptainData"
      | "CartCom"
      | "CastorEDC"
      | "Chameleon"
      | "Chargedesk"
      | "Chargify"
      | "Chift"
      | "Churnkey"
      | "Cin7"
      | "CiscoMeraki"
      | "Clazar"
      | "Clockify"
      | "Clockodo"
      | "Cloudbeds"
      | "Coassemble"
      | "Codefresh"
      | "Concord"
      | "ConfigCat"
      | "Couchbase"
      | "Curve"
      | "Customerly"
      | "Datascope"
      | "Dbt"
      | "Deputy"
      | "DevinAI"
      | "Docuseal"
      | "Dolibarr"
      | "Dremio"
      | "DropboxSign"
      | "Dwolla"
      | "EConomic"
      | "Easypost"
      | "Easypromos"
      | "Elasticemail"
      | "EmailOctopus"
      | "EmploymentHero"
      | "Encharge"
      | "Eventee"
      | "Eventzilla"
      | "Everhour"
      | "EZOfficeInventory"
      | "Factorial"
      | "Fastbill"
      | "Fastly"
      | "Fauna"
      | "Feishu"
      | "Fillout"
      | "Finage"
      | "Firebolt"
      | "FireHydrant"
      | "Fleetio"
      | "Flexmail"
      | "Flexport"
      | "FloatApp"
      | "Flowlu"
      | "Formbricks"
      | "FreeAgent"
      | "Freightview"
      | "Freshcaller"
      | "Freshchat"
      | "Freshservice"
      | "Fulcrum"
      | "GainsightPx"
      | "GitBook"
      | "Glassfrog"
      | "Goldcast"
      | "GoLogin"
      | "Grafana"
      | "GreytHr"
      | "Gridly"
      | "Harness"
      | "Height"
      | "Hellobaton"
      | "HighLevel"
      | "HoorayHR"
      | "Hubplanner"
      | "Humanitix"
      | "Huntr"
      | "Inflowinventory"
      | "InforNexus"
      | "Insightful"
      | "Insightly"
      | "Instatus"
      | "Intruder"
      | "Invoiced"
      | "Invoiceninja"
      | "JamfPro"
      | "JobNimbus"
      | "Jotform"
      | "JudgeMeReviews"
      | "JustCall"
      | "JustSift"
      | "K6Cloud"
      | "Katana"
      | "Keka"
      | "Kisi"
      | "Kissmetrics"
      | "Klarna"
      | "Klaus"
      | "Lago"
      | "Leadfeeder"
      | "Lemlist"
      | "LessAnnoyingCRM"
      | "LinkedinPages"
      | "Linkrunner"
      | "Linnworks"
      | "Lob"
      | "Lokalise"
      | "Looker"
      | "Luma"
      | "MailerSend"
      | "Mailosaur"
      | "Mailtrap"
      | "Mantle"
      | "Mention"
      | "MercadoAds"
      | "Merge"
      | "Metabase"
      | "Metricool"
      | "MicrosoftDataverse"
      | "MicrosoftEntraId"
      | "MicrosoftLists"
      | "Miro"
      | "Missive"
      | "MixMax"
      | "Mode"
      | "Mux"
      | "MyHours"
      | "N8n"
      | "Navan"
      | "NebiusAI"
      | "Nexiopay"
      | "NinjaOneRMM"
      | "NoCRM"
      | "NorthpassLMS"
      | "Nutshell"
      | "Nylas"
      | "Oncehub"
      | "Onepagecrm"
      | "OneSignal"
      | "Onfleet"
      | "OpinionStage"
      | "OPUSWatch"
      | "Orb"
      | "Orbit"
      | "Oura"
      | "Oveit"
      | "PabblySubscriptionsBilling"
      | "Paperform"
      | "Papersign"
      | "Partnerize"
      | "PartnerStack"
      | "PayFit"
      | "Paystack"
      | "Pennylane"
      | "Perk"
      | "PersistIq"
      | "Persona"
      | "Phyllo"
      | "Picqer"
      | "Pipeliner"
      | "PivotalTracker"
      | "Piwik"
      | "Planhat"
      | "Plausible"
      | "Poplar"
      | "PrestaShop"
      | "Pretix"
      | "Primetric"
      | "Printify"
      | "Productive"
      | "Pylon"
      | "Qonto"
      | "Qualaroo"
      | "Railz"
      | "RDStationMarketing"
      | "Recruitee"
      | "Reddit"
      | "ReferralHero"
      | "RentCast"
      | "Repairshopr"
      | "ReplyIo"
      | "RetailExpress"
      | "Retently"
      | "RevolutMerchant"
      | "RocketChat"
      | "Rocketlane"
      | "Rootly"
      | "Ruddr"
      | "SafetyCulture"
      | "SageHR"
      | "Salesflare"
      | "SAPFieldglass"
      | "SavvyCal"
      | "Secoda"
      | "Segment"
      | "Sendowl"
      | "SendPulse"
      | "Senseforce"
      | "Serpstat"
      | "Sharetribe"
      | "Shippo"
      | "ShopWired"
      | "Shortio"
      | "Shutterstock"
      | "SigmaComputing"
      | "SignNow"
      | "SimpleCast"
      | "Simplesat"
      | "Smaily"
      | "SmartEngage"
      | "Smartreach"
      | "Smartwaiver"
      | "SolarwindsServiceDesk"
      | "SonarCloud"
      | "SparkPost"
      | "SplitIo"
      | "SpotifyAds"
      | "SpotlerCRM"
      | "Squarespace"
      | "Statsig"
      | "Statuspage"
      | "Stigg"
      | "Strava"
      | "SurveySparrow"
      | "Survicate"
      | "Svix"
      | "Systeme"
      | "Tavus"
      | "Teamtailor"
      | "Teamwork"
      | "Tempo"
      | "Testrail"
      | "Thinkific"
      | "ThinkificCourses"
      | "ThriveLearning"
      | "Ticketmaster"
      | "TicketTailor"
      | "TickTick"
      | "Timely"
      | "Tinyemail"
      | "Todoist"
      | "Toggl"
      | "TrackPMS"
      | "Tremendous"
      | "TrustPilot"
      | "Twitter"
      | "TyntecSMS"
      | "Unleash"
      | "UpPromote"
      | "Uptick"
      | "Uservoice"
      | "Vantage"
      | "Veeqo"
      | "Vercel"
      | "VismaEconomic"
      | "VWO"
      | "Waiteraid"
      | "Wasabi"
      | "WhenIWork"
      | "Wordpress"
      | "Workable"
      | "Workflowmax"
      | "Workramp"
      | "Wufoo"
      | "Xsolla"
      | "YandexMetrica"
      | "Yotpo"
      | "Ynab"
      | "Younium"
      | "YouSign"
      | "YoutubeData"
      | "ZapierSupportedStorage"
      | "ZapSign"
      | "ZendeskSell"
      | "ZendeskSunshine"
      | "Zenefits"
      | "Zenloop"
      | "ZohoAnalytics"
      | "ZohoBigin"
      | "ZohoBilling"
      | "ZohoBooks"
      | "ZohoCampaign"
      | "ZohoDesk"
      | "ZohoExpense"
      | "ZohoInventory"
      | "ZohoInvoice"
      | "ZonkaFeedback"
      | "AlphaVantage"
      | "Aviationstack"
      | "Bitly"
      | "Blogger"
      | "Breezometer"
      | "CareQualityCommission"
      | "Cimis"
      | "CoinApi"
      | "CoinGecko"
      | "CoinMarketCap"
      | "DingConnect"
      | "Dockerhub"
      | "ExchangeRatesApi"
      | "FinancialModelling"
      | "Finnhub"
      | "Finnworlds"
      | "Giphy"
      | "Gmail"
      | "GNews"
      | "GoogleCalendar"
      | "GoogleClassroom"
      | "GoogleDirectory"
      | "GoogleForms"
      | "GooglePageSpeedInsights"
      | "GoogleTasks"
      | "GoogleWebfonts"
      | "GoogleWorkspaceAdminReports"
      | "HuggingFace"
      | "IlluminaBasespace"
      | "Imagga"
      | "Interzoid"
      | "IP2Whois"
      | "KYVE"
      | "Marketstack"
      | "Mendeley"
      | "Nasa"
      | "NewYorkTimes"
      | "NewsApi"
      | "NewsData"
      | "OpenDataDc"
      | "OpenExchangeRates"
      | "OpenAQ"
      | "OpenFDA"
      | "OpenWeather"
      | "Outlook"
      | "Perigon"
      | "Pexels"
      | "Pocket"
      | "Polygon"
      | "PyPI"
      | "Recreation"
      | "RKICovid"
      | "Rss"
      | "SimFin"
      | "StockData"
      | "Guardian"
      | "TMDb"
      | "TVMaze"
      | "TwelveData"
      | "Ubidots"
      | "USCensus"
      | "Watchmode"
      | "WikipediaPageviews"
      | "YahooFinance"
      | "Clarifai"
      | "Adapty"
      | "Braintrust"
      | "StreamElements"
      | "Streamlabs"
      | "Datorama"
      | "Ahrefs"
      | "Lightfield"
      | "Appstack"
      | "Razorpay"
      | "Neon"
      | "NewRelic"
      | "Custom"
      | "Tile38"
      | "Chatwoot"
      | "Sanity"
      | "Metronome"
      | "Jobber"
      | "Knock"
      | "Leexi"
      | "RB2B"
      | "Superwall"
      | "Liana"
      | "TawkTo"
      | "Hightouch"
      | "LemonSqueezy"
      | "Ikas"
      | "Talkwalker"
      | "NextdoorAds"
      | "AppLovin"
      | "Baserow";
  };
  external_schema?: Record<string, unknown> | null;
  options?: Record<string, unknown>;
  user_access_level?: string | null;
}
export const WarehouseTablesFileCreateInput =
  /*@__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
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
            "GoogleSearchConsole",
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
            "Resend",
            "PgAnalyze",
            "WorkOS",
            "AmazonS3",
            "GoogleCloudStorage",
            "Databricks",
            "Dynamics365",
            "SalesforceMarketingCloud",
            "Db2",
            "Heap",
            "AdobeAnalytics",
            "Matomo",
            "Optimizely",
            "Adyen",
            "GoCardless",
            "Mollie",
            "CheckoutCom",
            "Branch",
            "Criteo",
            "Outbrain",
            "Taboola",
            "AdRoll",
            "DisplayVideo360",
            "GoogleAdManager",
            "CampaignManager360",
            "SearchAds360",
            "AdobeCommerce",
            "AmazonSellingPartner",
            "Ebay",
            "Commercetools",
            "LightspeedRetail",
            "ShipStation",
            "ConstantContact",
            "Mailgun",
            "Eloqua",
            "Sailthru",
            "Ortto",
            "Attentive",
            "Kustomer",
            "Dixa",
            "Gladly",
            "Qualtrics",
            "Delighted",
            "AzureDevOps",
            "Rollbar",
            "Opsgenie",
            "IncidentIo",
            "Pingdom",
            "Cloudflare",
            "CosmosDB",
            "PlanetScale",
            "SapHana",
            "Rippling",
            "HiBob",
            "Personio",
            "Deel",
            "AdpWorkforceNow",
            "Paylocity",
            "Gusto",
            "CultureAmp",
            "Lattice",
            "SageIntacct",
            "FreshBooks",
            "Expensify",
            "Ramp",
            "Brex",
            "Coupa",
            "SapConcur",
            "Apollo",
            "Crunchbase",
            "ZoomInfo",
            "Clari",
            "Chorus",
            "Coda",
            "Guru",
            "Dropbox",
            "Docusign",
            "PandaDoc",
            "SapErp",
            "SapSuccessFactors",
            "OracleEbs",
            "OracleFusion",
            "AmazonSNS",
            "AmazonEventBridge",
            "AmazonSQS",
            "AmazonKinesis",
            "AmazonCloudWatch",
            "OpenAIAds",
            "OneHundredMs",
            "SevenShifts",
            "AcuityScheduling",
            "AgileCRM",
            "Aha",
            "Airbyte",
            "Akeneo",
            "Algolia",
            "AlpacaBrokerAPI",
            "ApifyDataset",
            "Appcues",
            "Appfigures",
            "Appfollow",
            "Apptivo",
            "AssemblyAI",
            "Awin",
            "AwsCloudTrail",
            "AzureTableStorage",
            "Babelforce",
            "Basecamp",
            "Beamer",
            "BigMailer",
            "Bluetally",
            "BoldSign",
            "BreezyHR",
            "Bugsnag",
            "Buildkite",
            "Bunny",
            "Buzzsprout",
            "CalCom",
            "CallRail",
            "Campayn",
            "Canny",
            "CapsuleCRM",
            "CaptainData",
            "CartCom",
            "CastorEDC",
            "Chameleon",
            "Chargedesk",
            "Chargify",
            "Chift",
            "Churnkey",
            "Cin7",
            "CiscoMeraki",
            "Clazar",
            "Clockify",
            "Clockodo",
            "Cloudbeds",
            "Coassemble",
            "Codefresh",
            "Concord",
            "ConfigCat",
            "Couchbase",
            "Curve",
            "Customerly",
            "Datascope",
            "Dbt",
            "Deputy",
            "DevinAI",
            "Docuseal",
            "Dolibarr",
            "Dremio",
            "DropboxSign",
            "Dwolla",
            "EConomic",
            "Easypost",
            "Easypromos",
            "Elasticemail",
            "EmailOctopus",
            "EmploymentHero",
            "Encharge",
            "Eventee",
            "Eventzilla",
            "Everhour",
            "EZOfficeInventory",
            "Factorial",
            "Fastbill",
            "Fastly",
            "Fauna",
            "Feishu",
            "Fillout",
            "Finage",
            "Firebolt",
            "FireHydrant",
            "Fleetio",
            "Flexmail",
            "Flexport",
            "FloatApp",
            "Flowlu",
            "Formbricks",
            "FreeAgent",
            "Freightview",
            "Freshcaller",
            "Freshchat",
            "Freshservice",
            "Fulcrum",
            "GainsightPx",
            "GitBook",
            "Glassfrog",
            "Goldcast",
            "GoLogin",
            "Grafana",
            "GreytHr",
            "Gridly",
            "Harness",
            "Height",
            "Hellobaton",
            "HighLevel",
            "HoorayHR",
            "Hubplanner",
            "Humanitix",
            "Huntr",
            "Inflowinventory",
            "InforNexus",
            "Insightful",
            "Insightly",
            "Instatus",
            "Intruder",
            "Invoiced",
            "Invoiceninja",
            "JamfPro",
            "JobNimbus",
            "Jotform",
            "JudgeMeReviews",
            "JustCall",
            "JustSift",
            "K6Cloud",
            "Katana",
            "Keka",
            "Kisi",
            "Kissmetrics",
            "Klarna",
            "Klaus",
            "Lago",
            "Leadfeeder",
            "Lemlist",
            "LessAnnoyingCRM",
            "LinkedinPages",
            "Linkrunner",
            "Linnworks",
            "Lob",
            "Lokalise",
            "Looker",
            "Luma",
            "MailerSend",
            "Mailosaur",
            "Mailtrap",
            "Mantle",
            "Mention",
            "MercadoAds",
            "Merge",
            "Metabase",
            "Metricool",
            "MicrosoftDataverse",
            "MicrosoftEntraId",
            "MicrosoftLists",
            "Miro",
            "Missive",
            "MixMax",
            "Mode",
            "Mux",
            "MyHours",
            "N8n",
            "Navan",
            "NebiusAI",
            "Nexiopay",
            "NinjaOneRMM",
            "NoCRM",
            "NorthpassLMS",
            "Nutshell",
            "Nylas",
            "Oncehub",
            "Onepagecrm",
            "OneSignal",
            "Onfleet",
            "OpinionStage",
            "OPUSWatch",
            "Orb",
            "Orbit",
            "Oura",
            "Oveit",
            "PabblySubscriptionsBilling",
            "Paperform",
            "Papersign",
            "Partnerize",
            "PartnerStack",
            "PayFit",
            "Paystack",
            "Pennylane",
            "Perk",
            "PersistIq",
            "Persona",
            "Phyllo",
            "Picqer",
            "Pipeliner",
            "PivotalTracker",
            "Piwik",
            "Planhat",
            "Plausible",
            "Poplar",
            "PrestaShop",
            "Pretix",
            "Primetric",
            "Printify",
            "Productive",
            "Pylon",
            "Qonto",
            "Qualaroo",
            "Railz",
            "RDStationMarketing",
            "Recruitee",
            "Reddit",
            "ReferralHero",
            "RentCast",
            "Repairshopr",
            "ReplyIo",
            "RetailExpress",
            "Retently",
            "RevolutMerchant",
            "RocketChat",
            "Rocketlane",
            "Rootly",
            "Ruddr",
            "SafetyCulture",
            "SageHR",
            "Salesflare",
            "SAPFieldglass",
            "SavvyCal",
            "Secoda",
            "Segment",
            "Sendowl",
            "SendPulse",
            "Senseforce",
            "Serpstat",
            "Sharetribe",
            "Shippo",
            "ShopWired",
            "Shortio",
            "Shutterstock",
            "SigmaComputing",
            "SignNow",
            "SimpleCast",
            "Simplesat",
            "Smaily",
            "SmartEngage",
            "Smartreach",
            "Smartwaiver",
            "SolarwindsServiceDesk",
            "SonarCloud",
            "SparkPost",
            "SplitIo",
            "SpotifyAds",
            "SpotlerCRM",
            "Squarespace",
            "Statsig",
            "Statuspage",
            "Stigg",
            "Strava",
            "SurveySparrow",
            "Survicate",
            "Svix",
            "Systeme",
            "Tavus",
            "Teamtailor",
            "Teamwork",
            "Tempo",
            "Testrail",
            "Thinkific",
            "ThinkificCourses",
            "ThriveLearning",
            "Ticketmaster",
            "TicketTailor",
            "TickTick",
            "Timely",
            "Tinyemail",
            "Todoist",
            "Toggl",
            "TrackPMS",
            "Tremendous",
            "TrustPilot",
            "Twitter",
            "TyntecSMS",
            "Unleash",
            "UpPromote",
            "Uptick",
            "Uservoice",
            "Vantage",
            "Veeqo",
            "Vercel",
            "VismaEconomic",
            "VWO",
            "Waiteraid",
            "Wasabi",
            "WhenIWork",
            "Wordpress",
            "Workable",
            "Workflowmax",
            "Workramp",
            "Wufoo",
            "Xsolla",
            "YandexMetrica",
            "Yotpo",
            "Ynab",
            "Younium",
            "YouSign",
            "YoutubeData",
            "ZapierSupportedStorage",
            "ZapSign",
            "ZendeskSell",
            "ZendeskSunshine",
            "Zenefits",
            "Zenloop",
            "ZohoAnalytics",
            "ZohoBigin",
            "ZohoBilling",
            "ZohoBooks",
            "ZohoCampaign",
            "ZohoDesk",
            "ZohoExpense",
            "ZohoInventory",
            "ZohoInvoice",
            "ZonkaFeedback",
            "AlphaVantage",
            "Aviationstack",
            "Bitly",
            "Blogger",
            "Breezometer",
            "CareQualityCommission",
            "Cimis",
            "CoinApi",
            "CoinGecko",
            "CoinMarketCap",
            "DingConnect",
            "Dockerhub",
            "ExchangeRatesApi",
            "FinancialModelling",
            "Finnhub",
            "Finnworlds",
            "Giphy",
            "Gmail",
            "GNews",
            "GoogleCalendar",
            "GoogleClassroom",
            "GoogleDirectory",
            "GoogleForms",
            "GooglePageSpeedInsights",
            "GoogleTasks",
            "GoogleWebfonts",
            "GoogleWorkspaceAdminReports",
            "HuggingFace",
            "IlluminaBasespace",
            "Imagga",
            "Interzoid",
            "IP2Whois",
            "KYVE",
            "Marketstack",
            "Mendeley",
            "Nasa",
            "NewYorkTimes",
            "NewsApi",
            "NewsData",
            "OpenDataDc",
            "OpenExchangeRates",
            "OpenAQ",
            "OpenFDA",
            "OpenWeather",
            "Outlook",
            "Perigon",
            "Pexels",
            "Pocket",
            "Polygon",
            "PyPI",
            "Recreation",
            "RKICovid",
            "Rss",
            "SimFin",
            "StockData",
            "Guardian",
            "TMDb",
            "TVMaze",
            "TwelveData",
            "Ubidots",
            "USCensus",
            "Watchmode",
            "WikipediaPageviews",
            "YahooFinance",
            "Clarifai",
            "Adapty",
            "Braintrust",
            "StreamElements",
            "Streamlabs",
            "Datorama",
            "Ahrefs",
            "Lightfield",
            "Appstack",
            "Razorpay",
            "Neon",
            "NewRelic",
            "Custom",
            "Tile38",
            "Chatwoot",
            "Sanity",
            "Metronome",
            "Jobber",
            "Knock",
            "Leexi",
            "RB2B",
            "Superwall",
            "Liana",
            "TawkTo",
            "Hightouch",
            "LemonSqueezy",
            "Ikas",
            "Talkwalker",
            "NextdoorAds",
            "AppLovin",
            "Baserow",
          ]),
        ),
      }),
    ),
    external_schema: Schema.optional(
      Schema.NullOr(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    options: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/warehouse_tables/file/",
      contentType: "form-urlencoded",
    }),
  ) as unknown as Schema.Codec<WarehouseTablesFileCreateInput>;

// Output Schema
export type WarehouseTablesFileCreateOutput = void;
export const WarehouseTablesFileCreateOutput =
  /*@__PURE__*/ Schema.Void as unknown as Schema.Codec<WarehouseTablesFileCreateOutput>;

// The operation
/**
 * Create, Read, Update and Delete Warehouse Tables.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const warehouseTablesFileCreate = /*@__PURE__*/ API.make(() => ({
  inputSchema: WarehouseTablesFileCreateInput,
  outputSchema: WarehouseTablesFileCreateOutput,
  errors: [BadRequest, Forbidden, NotFound] as const,
}));
