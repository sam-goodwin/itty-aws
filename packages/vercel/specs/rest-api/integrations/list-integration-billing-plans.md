---
title: list-integration-billing-plans
product: vercel
url: /docs/rest-api/integrations/list-integration-billing-plans
canonical_url: "https://vercel.com/docs/rest-api/integrations/list-integration-billing-plans"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-integration-billing-plans on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List integration billing plans

```http
GET /v1/integrations/integration/{integrationIdOrSlug}/products/{productIdOrSlug}/plans
```

Get a list of billing plans for an integration and product.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationIdOrSlug` | string | Yes |  |
| `productIdOrSlug` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | No |  |
| `metadata` | string | No |  |
| `source` | string. enum: marketplace, deploy-button, external, v0, resource-claims, cli, oauth, backoffice, import-recommended-integrations | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "plans"
  ],
  "properties": {
    "plans": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "description",
          "id",
          "name",
          "paymentMethodRequired",
          "scope",
          "type"
        ],
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "prepayment",
              "subscription"
            ]
          },
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "scope": {
            "type": "string",
            "enum": [
              "installation",
              "resource"
            ]
          },
          "description": {
            "type": "string"
          },
          "paymentMethodRequired": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          },
          "preauthorizationAmount": {
            "type": "number"
          },
          "initialCharge": {
            "type": "string"
          },
          "minimumAmount": {
            "type": "string"
          },
          "maximumAmount": {
            "type": "string"
          },
          "maximumAmountAutoPurchasePerPeriod": {
            "type": "string"
          },
          "cost": {
            "type": "string"
          },
          "details": {
            "type": "array"
          },
          "highlightedDetails": {
            "type": "array"
          },
          "quote": {
            "type": "array"
          },
          "effectiveDate": {
            "type": "string"
          },
          "disabled": {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [integrations endpoints](/docs/rest-api#integrations)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
