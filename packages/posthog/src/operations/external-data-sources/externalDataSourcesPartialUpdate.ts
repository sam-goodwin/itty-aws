import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";
import { BadRequest, Forbidden, NotFound } from "../../errors.ts";
import { SensitiveString, SensitiveOutputString } from "../../sensitive.ts";
import * as Redacted from "effect/Redacted";

// Input Schema
export interface ExternalDataSourcesPartialUpdateInput {
  id: string;
  project_id: string;
  created_at?: string;
  created_by?: string | null;
  created_via?: "web" | "api" | "mcp" | null;
  status?: string;
  client_secret?: string | Redacted.Redacted<string>;
  account_id?: string;
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
  latest_error?: string | null;
  prefix?: string | null;
  description?: string | null;
  access_method?: "warehouse" | "direct";
  direct_query_enabled?: boolean;
  engine?: "duckdb" | "postgres" | "mysql" | null;
  last_run_at?: string | null;
  schemas?: Record<string, unknown>[];
  job_inputs?: unknown;
  revenue_analytics_config?: {
    enabled?: boolean;
    include_invoiceless_charges?: boolean;
  };
  user_access_level?: string | null;
  supports_webhooks?: boolean;
  supports_column_selection?: boolean;
}
export const ExternalDataSourcesPartialUpdateInput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.String.pipe(T.PathParam()),
    project_id: Schema.String.pipe(T.PathParam()),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.String)),
    created_via: Schema.optional(
      Schema.NullOr(Schema.Literals(["web", "api", "mcp"])),
    ),
    status: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveString),
    account_id: Schema.optional(Schema.String),
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
    latest_error: Schema.optional(Schema.NullOr(Schema.String)),
    prefix: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    access_method: Schema.optional(Schema.Literals(["warehouse", "direct"])),
    direct_query_enabled: Schema.optional(Schema.Boolean),
    engine: Schema.optional(
      Schema.NullOr(Schema.Literals(["duckdb", "postgres", "mysql"])),
    ),
    last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    schemas: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    job_inputs: Schema.optional(Schema.Unknown),
    revenue_analytics_config: Schema.optional(
      Schema.Struct({
        enabled: Schema.optional(Schema.Boolean),
        include_invoiceless_charges: Schema.optional(Schema.Boolean),
      }),
    ),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
    supports_webhooks: Schema.optional(Schema.Boolean),
    supports_column_selection: Schema.optional(Schema.Boolean),
  }).pipe(
    T.Http({
      method: "PATCH",
      path: "/api/projects/{project_id}/external_data_sources/{id}/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSourcesPartialUpdateInput>;

// Output Schema
export interface ExternalDataSourcesPartialUpdateOutput {
  id?: string;
  created_at?: string;
  created_by?: string | null;
  created_via?: "web" | "api" | "mcp" | null;
  status?: string;
  client_secret?: Redacted.Redacted<string>;
  account_id?: string;
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
  latest_error?: string | null;
  prefix?: string | null;
  description?: string | null;
  access_method?: "warehouse" | "direct";
  direct_query_enabled?: boolean;
  engine?: "duckdb" | "postgres" | "mysql" | null;
  last_run_at?: string | null;
  schemas?: Record<string, unknown>[];
  job_inputs?: unknown;
  revenue_analytics_config?: {
    enabled?: boolean;
    include_invoiceless_charges?: boolean;
  };
  user_access_level?: string | null;
  supports_webhooks?: boolean;
  supports_column_selection?: boolean;
}
export const ExternalDataSourcesPartialUpdateOutput =
  /*@__PURE__*/ Schema.Struct({
    id: Schema.optional(Schema.String),
    created_at: Schema.optional(Schema.String),
    created_by: Schema.optional(Schema.NullOr(Schema.String)),
    created_via: Schema.optional(
      Schema.NullOr(Schema.Literals(["web", "api", "mcp"])),
    ),
    status: Schema.optional(Schema.String),
    client_secret: Schema.optional(SensitiveOutputString),
    account_id: Schema.optional(Schema.String),
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
    latest_error: Schema.optional(Schema.NullOr(Schema.String)),
    prefix: Schema.optional(Schema.NullOr(Schema.String)),
    description: Schema.optional(Schema.NullOr(Schema.String)),
    access_method: Schema.optional(Schema.Literals(["warehouse", "direct"])),
    direct_query_enabled: Schema.optional(Schema.Boolean),
    engine: Schema.optional(
      Schema.NullOr(Schema.Literals(["duckdb", "postgres", "mysql"])),
    ),
    last_run_at: Schema.optional(Schema.NullOr(Schema.String)),
    schemas: Schema.optional(
      Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    ),
    job_inputs: Schema.optional(Schema.Unknown),
    revenue_analytics_config: Schema.optional(
      Schema.Struct({
        enabled: Schema.optional(Schema.Boolean),
        include_invoiceless_charges: Schema.optional(Schema.Boolean),
      }),
    ),
    user_access_level: Schema.optional(Schema.NullOr(Schema.String)),
    supports_webhooks: Schema.optional(Schema.Boolean),
    supports_column_selection: Schema.optional(Schema.Boolean),
  }) as unknown as Schema.Codec<ExternalDataSourcesPartialUpdateOutput>;

// The operation
/**
 * Create, Read, Update and Delete External data Sources.
 *
 * @param id - A UUID string identifying this external data source.
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesPartialUpdate =
  /*@__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesPartialUpdateInput,
    outputSchema: ExternalDataSourcesPartialUpdateOutput,
    errors: [BadRequest, Forbidden, NotFound] as const,
  }));
