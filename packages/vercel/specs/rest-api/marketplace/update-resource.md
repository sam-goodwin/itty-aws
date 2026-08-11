---
title: update-resource
product: vercel
url: /docs/rest-api/marketplace/update-resource
canonical_url: "https://vercel.com/docs/rest-api/marketplace/update-resource"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-resource on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update Resource

```http
PATCH /v1/installations/{integrationConfigurationId}/resources/{resourceId}
```

This endpoint updates an existing resource in the installation. All parameters are optional, allowing partial updates.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `resourceId` | string | Yes |  |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "ownership": {
      "type": "string",
      "enum": [
        "owned",
        "linked",
        "sandbox"
      ]
    },
    "name": {
      "type": "string"
    },
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
    "metadata": {
      "type": "object",
      "additionalProperties": true
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
    },
    "extras": {
      "type": "object",
      "additionalProperties": true
    },
    "secrets": {
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "name",
              "value"
            ]
          }
        },
        {
          "type": "object",
          "required": [
            "secrets"
          ],
          "properties": {
            "secrets": {
              "type": "array"
            },
            "partial": {
              "type": "boolean",
              "description": "If true, will only overwrite the provided secrets instead of replacing all secrets."
            }
          }
        }
      ]
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 422: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
