---
title: import-resource
product: vercel
url: /docs/rest-api/marketplace/import-resource
canonical_url: "https://vercel.com/docs/rest-api/marketplace/import-resource"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about import-resource on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Import Resource

```http
PUT /v1/installations/{integrationConfigurationId}/resources/{resourceId}
```

This endpoint imports (upserts) a resource to Vercel's installation. This may be needed if resources can be independently created on the partner's side and need to be synchronized to Vercel. When importing as part of the user-initiated import flow, call this endpoint before redirecting the user back to Vercel. See the [Import existing resources flow](https://vercel.com/docs/integrations/create-integration/marketplace-flows#import-existing-resources-flow) for the full contract.

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
  "required": [
    "productId",
    "name",
    "status"
  ],
  "properties": {
    "ownership": {
      "type": "string",
      "enum": [
        "owned",
        "linked",
        "sandbox"
      ]
    },
    "productId": {
      "type": "string"
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
    "extras": {
      "type": "object",
      "additionalProperties": true
    },
    "secrets": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "name",
          "value"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "prefix": {
            "type": "string"
          },
          "environmentOverrides": {
            "type": "object",
            "description": "A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment."
          }
        }
      }
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

### 429: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
