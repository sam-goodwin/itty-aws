---
title: update-installation
product: vercel
url: /docs/rest-api/marketplace/update-installation
canonical_url: "https://vercel.com/docs/rest-api/marketplace/update-installation"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-installation on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update Installation

```http
PATCH /v1/installations/{integrationConfigurationId}
```

This endpoint updates an integration installation.

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
  "properties": {
    "status": {
      "type": "string",
      "enum": [
        "ready",
        "pending",
        "onboarding",
        "suspended",
        "resumed",
        "uninstalled",
        "error"
      ]
    },
    "externalId": {
      "type": "string"
    },
    "billingPlan": {
      "type": "object",
      "required": [
        "id",
        "type",
        "name"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "type": {
          "type": "string",
          "enum": [
            "prepayment",
            "subscription"
          ]
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "paymentMethodRequired": {
          "type": "boolean"
        },
        "cost": {
          "type": "string"
        },
        "details": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "label"
            ]
          }
        },
        "highlightedDetails": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "label"
            ]
          }
        },
        "effectiveDate": {
          "type": "string"
        }
      },
      "additionalProperties": true
    },
    "notification": {
      "description": "A notification to display to your customer. Send `null` to clear the current notification.",
      "oneOf": [
        {
          "type": "object",
          "required": [
            "level",
            "title"
          ],
          "properties": {
            "level": {
              "type": "string",
              "enum": [
                "info",
                "warn",
                "error"
              ]
            },
            "title": {
              "type": "string"
            },
            "message": {
              "type": "string"
            },
            "href": {
              "type": "string",
              "format": "uri",
              "pattern": "^https?://|^sso:"
            }
          }
        },
        {
          "type": "string"
        }
      ]
    }
  }
}
```

## Responses

### 204: No description

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
