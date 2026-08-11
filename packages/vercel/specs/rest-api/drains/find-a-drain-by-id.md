---
title: find-a-drain-by-id
product: vercel
url: /docs/rest-api/drains/find-a-drain-by-id
canonical_url: "https://vercel.com/docs/rest-api/drains/find-a-drain-by-id"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about find-a-drain-by-id on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Find a Drain by id

```http
GET /v1/drains/{id}
```

Get the information for a specific Drain by passing the drain id in the URL.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "createdAt",
        "delivery",
        "id",
        "name",
        "ownerId",
        "schemas",
        "source",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        },
        "projectIds": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string"
        },
        "teamId": {
          "type": "string",
          "nullable": true
        },
        "ownerId": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "enum": [
            "disabled",
            "enabled",
            "errored"
          ]
        },
        "firstErrorTimestamp": {
          "type": "number"
        },
        "disabledAt": {
          "type": "number"
        },
        "disabledBy": {
          "type": "string"
        },
        "disabledReason": {
          "type": "string",
          "enum": [
            "account-plan-downgrade",
            "disabled-by-admin",
            "disabled-by-owner",
            "feature-not-available"
          ]
        },
        "schemas": {
          "type": "object",
          "properties": {
            "log": {
              "type": "object"
            },
            "trace": {
              "type": "object"
            },
            "analytics": {
              "type": "object"
            },
            "speed_insights": {
              "type": "object"
            },
            "ai_gateway": {
              "type": "object"
            },
            "audit_log": {
              "type": "object"
            },
            "connect": {
              "type": "object"
            }
          }
        },
        "delivery": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "encoding",
                "endpoint",
                "headers",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "encoding",
                "endpoint",
                "headers",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "endpoint",
                "table",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "compression",
                "encoding",
                "endpoint",
                "fileStructure",
                "region",
                "roleArn",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "target",
                "type"
              ]
            }
          ]
        },
        "sampling": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "rate",
              "type"
            ]
          }
        },
        "source": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "kind"
              ]
            },
            {
              "type": "object",
              "required": [
                "integrationConfigurationId",
                "integrationId",
                "kind"
              ]
            }
          ]
        },
        "filterV2": {
          "type": "object",
          "required": [
            "filter",
            "version"
          ],
          "properties": {
            "version": {
              "type": "string",
              "enum": [
                "v2"
              ]
            },
            "filter": {}
          }
        }
      }
    },
    {
      "type": "object",
      "required": [
        "createdAt",
        "delivery",
        "id",
        "name",
        "ownerId",
        "schemas",
        "source",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        },
        "projectIds": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "name": {
          "type": "string"
        },
        "teamId": {
          "type": "string",
          "nullable": true
        },
        "ownerId": {
          "type": "string"
        },
        "status": {
          "type": "string",
          "enum": [
            "disabled",
            "enabled",
            "errored"
          ]
        },
        "firstErrorTimestamp": {
          "type": "number"
        },
        "disabledAt": {
          "type": "number"
        },
        "disabledBy": {
          "type": "string"
        },
        "disabledReason": {
          "type": "string",
          "enum": [
            "account-plan-downgrade",
            "disabled-by-admin",
            "disabled-by-owner",
            "feature-not-available"
          ]
        },
        "schemas": {
          "type": "object",
          "properties": {
            "log": {
              "type": "object"
            },
            "trace": {
              "type": "object"
            },
            "analytics": {
              "type": "object"
            },
            "speed_insights": {
              "type": "object"
            },
            "ai_gateway": {
              "type": "object"
            },
            "audit_log": {
              "type": "object"
            },
            "connect": {
              "type": "object"
            }
          }
        },
        "delivery": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "encoding",
                "endpoint",
                "headers",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "encoding",
                "endpoint",
                "headers",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "endpoint",
                "table",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "compression",
                "encoding",
                "endpoint",
                "fileStructure",
                "region",
                "roleArn",
                "type"
              ]
            },
            {
              "type": "object",
              "required": [
                "target",
                "type"
              ]
            }
          ]
        },
        "sampling": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "rate",
              "type"
            ]
          }
        },
        "source": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "kind"
              ]
            },
            {
              "type": "object",
              "required": [
                "integrationConfigurationId",
                "integrationId",
                "kind"
              ]
            }
          ]
        },
        "filterV2": {
          "type": "object",
          "required": [
            "filter",
            "version"
          ],
          "properties": {
            "version": {
              "type": "string",
              "enum": [
                "v2"
              ]
            },
            "filter": {}
          }
        },
        "integrationIcon": {
          "type": "string"
        },
        "integrationConfigurationUri": {
          "type": "string"
        },
        "integrationWebsite": {
          "type": "string"
        },
        "projectAccess": {
          "oneOf": [
            {
              "type": "object",
              "required": [
                "access",
                "managedBy"
              ]
            },
            {
              "type": "object",
              "required": [
                "access",
                "managedBy",
                "projectIds"
              ]
            }
          ]
        }
      }
    }
  ]
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [drains endpoints](/docs/rest-api#drains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
