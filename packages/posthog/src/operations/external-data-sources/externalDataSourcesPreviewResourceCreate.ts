import * as Schema from "effect/Schema";
import { API } from "../../client.ts";
import * as T from "../../traits.ts";

// Input Schema
export interface ExternalDataSourcesPreviewResourceCreateInput {
  project_id: string;
  source_type:
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
  payload?: Record<string, unknown>;
  resource_name: string;
  limit?: number;
}
export const ExternalDataSourcesPreviewResourceCreateInput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    project_id: Schema.String.pipe(T.PathParam()),
    source_type: Schema.Literals([
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
    payload: Schema.optional(Schema.Record(Schema.String, Schema.Unknown)),
    resource_name: Schema.String,
    limit: Schema.optional(Schema.Number),
  }).pipe(
    T.Http({
      method: "POST",
      path: "/api/projects/{project_id}/external_data_sources/preview_resource/",
    }),
  ) as unknown as Schema.Codec<ExternalDataSourcesPreviewResourceCreateInput>;

// Output Schema
export interface ExternalDataSourcesPreviewResourceCreateOutput {
  rows: Record<string, unknown>[];
  row_count: number;
  columns: { name: string; type: string }[];
  error: string | null;
}
export const ExternalDataSourcesPreviewResourceCreateOutput =
  /*@__PURE__*/ /*#__PURE__*/ Schema.Struct({
    rows: Schema.Array(Schema.Record(Schema.String, Schema.Unknown)),
    row_count: Schema.Number,
    columns: Schema.Array(
      Schema.Struct({
        name: Schema.String,
        type: Schema.String,
      }),
    ),
    error: Schema.NullOr(Schema.String),
  }) as unknown as Schema.Codec<ExternalDataSourcesPreviewResourceCreateOutput>;

// The operation
/**
 * Read a bounded sample of rows for one resource of a Custom REST source.
 * Lets a manifest author verify `data_selector`, `primary_key`, and the incremental
 * `cursor_path` against live data before creating the source. Only `source_type: "Custom"`
 * is supported — other source types return 400. The read is bounded (single page per
 * resource, capped row count, short timeouts, no redirects). Manifest, validation, and SSRF
 * problems return 400; a live fetch failure returns 200 with `error` set and empty `rows`.
 *
 * @param project_id - Project ID of the project you're trying to access. To find the ID of the project, make a call to /api/projects/.
 */
export const externalDataSourcesPreviewResourceCreate =
  /*@__PURE__*/ /*#__PURE__*/ API.make(() => ({
    inputSchema: ExternalDataSourcesPreviewResourceCreateInput,
    outputSchema: ExternalDataSourcesPreviewResourceCreateOutput,
  }));
