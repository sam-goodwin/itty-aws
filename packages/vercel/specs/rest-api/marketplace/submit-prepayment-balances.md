---
title: submit-prepayment-balances
product: vercel
url: /docs/rest-api/marketplace/submit-prepayment-balances
canonical_url: "https://vercel.com/docs/rest-api/marketplace/submit-prepayment-balances"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about submit-prepayment-balances on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Submit Prepayment Balances

```http
POST /v1/installations/{integrationConfigurationId}/billing/balance
```

Sends the prepayment balances. The partner should do this at least once a day and ideally once per hour. <br/> Use the `credentials.access_token` we provided in the [Upsert Installation](#upsert-installation) body to authorize this request.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "timestamp",
    "balances"
  ],
  "properties": {
    "timestamp": {
      "type": "string",
      "description": "Server time of your integration, used to determine the most recent data for race conditions & updates. Only the latest usage data for a given day, week, and month will be kept.",
      "format": "date-time"
    },
    "balances": {
      "type": "array",
      "items": {
        "type": "object",
        "description": "A credit balance for a particular token type",
        "required": [
          "currencyValueInCents"
        ],
        "properties": {
          "resourceId": {
            "type": "string",
            "description": "Partner's resource ID, exclude if credits are tied to the installation and not an individual resource."
          },
          "credit": {
            "type": "string",
            "description": "A human-readable description of the credits the user currently has, e.g. \"2,000 Tokens\""
          },
          "nameLabel": {
            "type": "string",
            "description": "The name of the credits, for display purposes, e.g. \"Tokens\""
          },
          "currencyValueInCents": {
            "type": "number",
            "description": "The dollar value of the credit balance, in USD and provided in cents, which is used to trigger automatic purchase thresholds."
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
