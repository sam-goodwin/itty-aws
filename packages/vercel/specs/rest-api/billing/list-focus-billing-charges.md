---
title: list-focus-billing-charges
product: vercel
url: /docs/rest-api/billing/list-focus-billing-charges
canonical_url: "https://vercel.com/docs/rest-api/billing/list-focus-billing-charges"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-focus-billing-charges on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List FOCUS billing charges

```http
GET /v1/billing/charges
```

Returns the billing charge data in FOCUS v1.3 JSONL format for a specified Vercel team, within a date range specified by `from` and `to` query parameters. Supports 1-day granularity with a maximum date range of 1 year. The response is streamed as newline-delimited JSON (JSONL) and can be optionally compressed with gzip if the `Accept-Encoding: gzip` header is provided. This is only available for Owner, Member, Developer, Security, Billing, and Enterprise Viewer roles for the supplied team.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `from` | string | Yes | Inclusive start of the date range as an ISO 8601 date-time string in UTC. |
| `to` | string | Yes | Exclusive end of the date range as an ISO 8601 date-time string in UTC. |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/jsonl`

```json
{
  "type": "object",
  "description": "Extension of the base schema for Focus charges. Includes pricing information for all customers.",
  "required": [
    "BilledCost",
    "BillingCurrency",
    "ChargeCategory",
    "ChargePeriodEnd",
    "ChargePeriodStart",
    "ConsumedQuantity",
    "ConsumedUnit",
    "EffectiveCost",
    "PricingCategory",
    "PricingCurrency",
    "PricingQuantity",
    "PricingUnit",
    "ServiceName",
    "ServiceProviderName",
    "Tags"
  ],
  "properties": {
    "BilledCost": {
      "type": "number",
      "description": "Charge amount serving as the basis for invoicing"
    },
    "BillingCurrency": {
      "type": "string",
      "description": "Currency used for billing (ISO 4217)",
      "enum": [
        "USD"
      ]
    },
    "ChargeCategory": {
      "type": "string",
      "description": "Classification of the charge",
      "enum": [
        "Adjustment",
        "Credit",
        "Purchase",
        "Tax",
        "Usage"
      ]
    },
    "ChargePeriodStart": {
      "type": "string",
      "description": "Inclusive start of the charge period (ISO 8601 UTC)"
    },
    "ChargePeriodEnd": {
      "type": "string",
      "description": "Exclusive end of the charge period (ISO 8601 UTC) - Required in v1.3"
    },
    "ConsumedQuantity": {
      "type": "number",
      "description": "Volume of resource consumed. Null when a charge does not involve measurable consumption quantity.",
      "nullable": true
    },
    "ConsumedUnit": {
      "type": "string",
      "description": "Unit of measurement for consumed quantity. Null when the charge is not measured in units.",
      "nullable": true
    },
    "EffectiveCost": {
      "type": "number",
      "description": "Amortized cost representation including discounts, pre-commitment credit purchase amount, etc."
    },
    "RegionId": {
      "type": "string",
      "description": "Provider-assigned region identifier"
    },
    "RegionName": {
      "type": "string",
      "description": "Display name for the region"
    },
    "ServiceName": {
      "type": "string",
      "description": "Display name for the service/product"
    },
    "ServiceCategory": {
      "type": "string",
      "description": "High-level category of the service",
      "enum": [
        "AI and Machine Learning",
        "Analytics",
        "Business Applications",
        "Compute",
        "Databases",
        "Developer Tools",
        "Identity",
        "Integration",
        "Internet of Things",
        "Management and Governance",
        "Media",
        "Migration",
        "Mobile",
        "Multicloud",
        "Networking",
        "Other",
        "Security",
        "Storage",
        "Web"
      ]
    },
    "ServiceProviderName": {
      "type": "string",
      "description": "Entity making the resource/service available for purchase (v1.3)"
    },
    "Tags": {
      "type": "object",
      "description": "Charge metadata including the Vercel ProjectId and ProjectName information",
      "additionalProperties": {
        "type": "string"
      }
    },
    "PricingCategory": {
      "type": "string",
      "description": "Pricing model used for the charge.",
      "enum": [
        "Committed",
        "Dynamic",
        "Other",
        "Standard"
      ]
    },
    "PricingCurrency": {
      "type": "string",
      "enum": [
        "USD"
      ]
    },
    "PricingQuantity": {
      "type": "number"
    },
    "PricingUnit": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 500: No description

### 503: No description

---

## Related

- [billing endpoints](/docs/rest-api#billing)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
