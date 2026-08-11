---
title: get-integration-resource
product: vercel
url: /docs/rest-api/marketplace/get-integration-resource
canonical_url: "https://vercel.com/docs/rest-api/marketplace/get-integration-resource"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-integration-resource on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Integration Resource

```http
GET /v1/installations/{integrationConfigurationId}/resources/{resourceId}
```

Get a resource by its partner ID.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes | The ID of the integration configuration (installation) the resource belongs to |
| `resourceId` | string | Yes | The ID provided by the 3rd party provider for the given resource |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "id",
    "internalId",
    "name",
    "productId"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "The ID provided by the 3rd party provider for the given resource"
    },
    "internalId": {
      "type": "string",
      "description": "The ID assigned by Vercel for the given resource"
    },
    "name": {
      "type": "string",
      "description": "The name of the resource as it is recorded in Vercel"
    },
    "status": {
      "type": "string",
      "description": "The current status of the resource",
      "enum": [
        "error",
        "onboarding",
        "pending",
        "ready",
        "resumed",
        "suspended",
        "uninstalled"
      ]
    },
    "productId": {
      "type": "string",
      "description": "The ID of the product the resource is derived from"
    },
    "protocolSettings": {
      "type": "object",
      "description": "Any settings provided for the resource to support its product's protocols",
      "properties": {
        "experimentation": {
          "type": "object",
          "properties": {
            "edgeConfigId": {
              "type": "string"
            },
            "globalConfigId": {
              "type": "string"
            }
          }
        }
      }
    },
    "notification": {
      "type": "object",
      "description": "The notification, if set, displayed to the user when viewing the resource in Vercel",
      "required": [
        "level",
        "title"
      ],
      "properties": {
        "level": {
          "type": "string",
          "enum": [
            "error",
            "info",
            "warn"
          ]
        },
        "title": {
          "type": "string"
        },
        "message": {
          "type": "string"
        },
        "href": {
          "type": "string"
        }
      }
    },
    "billingPlanId": {
      "type": "string",
      "description": "The ID of the billing plan the resource is subscribed to, if applicable"
    },
    "metadata": {
      "type": "object",
      "description": "The configured metadata for the resource as defined by its product's Metadata Schema",
      "additionalProperties": {
        "oneOf": [
          {
            "type": "string"
          },
          {
            "type": "number"
          },
          {
            "type": "array",
            "description": "The configured metadata for the resource as defined by its product's Metadata Schema"
          },
          {
            "type": "array",
            "description": "The configured metadata for the resource as defined by its product's Metadata Schema"
          },
          {
            "type": "boolean",
            "enum": [
              false,
              true
            ]
          }
        ]
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

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
