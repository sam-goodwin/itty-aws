---
title: submit-billing-data
product: vercel
url: /docs/rest-api/marketplace/submit-billing-data
canonical_url: "https://vercel.com/docs/rest-api/marketplace/submit-billing-data"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about submit-billing-data on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Submit Billing Data

```http
POST /v1/installations/{integrationConfigurationId}/billing
```

Sends the billing and usage data. The partner should do this at least once a day and ideally once per hour. <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "timestamp",
    "eod",
    "period",
    "billing",
    "usage"
  ],
  "properties": {
    "timestamp": {
      "type": "string",
      "description": "Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept.",
      "format": "date-time"
    },
    "eod": {
      "type": "string",
      "description": "End of Day, the UTC datetime for when the end of the billing/usage day is in UTC time. This tells us which day the usage data is for, and also allows for your \"end of day\" to be different from UTC 00:00:00. eod must be within the period dates, and cannot be older than 24h earlier from our server's current time.",
      "format": "date-time"
    },
    "period": {
      "type": "object",
      "description": "Period for the billing cycle. The period end date cannot be older than 24 hours earlier than our current server's time.",
      "required": [
        "start",
        "end"
      ],
      "properties": {
        "start": {
          "type": "string",
          "format": "date-time"
        },
        "end": {
          "type": "string",
          "format": "date-time"
        }
      }
    },
    "billing": {
      "description": "Billing data (interim invoicing data).",
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "billingPlanId",
              "name",
              "price",
              "quantity",
              "units",
              "total"
            ]
          }
        },
        {
          "type": "object",
          "required": [
            "items"
          ],
          "properties": {
            "items": {
              "type": "array"
            },
            "discounts": {
              "type": "array"
            }
          }
        }
      ]
    },
    "usage": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "name",
          "type",
          "units",
          "dayValue",
          "periodValue"
        ],
        "properties": {
          "resourceId": {
            "type": "string",
            "description": "Partner's resource ID."
          },
          "name": {
            "type": "string",
            "description": "Metric name."
          },
          "type": {
            "type": "string",
            "description": "\n              Type of the metric.\n              - total: measured total value, such as Database size\n              - interval: usage during the period, such as i/o or number of queries.\n              - rate: rate of usage, such as queries per second.\n            ",
            "enum": [
              "total",
              "interval",
              "rate"
            ]
          },
          "units": {
            "type": "string",
            "description": "Metric units. Example: \"GB\""
          },
          "dayValue": {
            "type": "number",
            "description": "Metric value for the day. Could be a final or an interim value for the day."
          },
          "periodValue": {
            "type": "number",
            "description": "Metric value for the billing period. Could be a final or an interim value for the period."
          },
          "planValue": {
            "type": "number",
            "description": "The limit value of the metric for a billing period, if a limit is defined by the plan."
          }
        }
      }
    }
  }
}
```

## Responses

### 201: No description

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
