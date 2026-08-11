---
title: get-a-global-config
product: vercel
url: /docs/rest-api/global-config/get-a-global-config
canonical_url: "https://vercel.com/docs/rest-api/global-config/get-a-global-config"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-global-config on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a Global Config

```http
GET /v1/global-config/{edgeConfigId}
```

Returns a Global Config.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `edgeConfigId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The Global Config.

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "The Global Config.",
  "required": [
    "createdAt",
    "digest",
    "id",
    "itemCount",
    "ownerId",
    "sizeInBytes",
    "slug",
    "updatedAt"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "createdAt": {
      "type": "number"
    },
    "createdBy": {
      "type": "string",
      "description": "The ID of the user who created the Edge Config, optional because it is not always set."
    },
    "ownerId": {
      "type": "string"
    },
    "slug": {
      "type": "string",
      "description": "Name for the Edge Config Names are not unique. Must start with an alphabetic character and can contain only alphanumeric characters and underscores)."
    },
    "updatedAt": {
      "type": "number"
    },
    "digest": {
      "type": "string"
    },
    "purpose": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "projectId",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "flags"
              ]
            },
            "projectId": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "resourceId",
            "type"
          ],
          "properties": {
            "type": {
              "type": "string",
              "enum": [
                "experimentation"
              ]
            },
            "resourceId": {
              "type": "string"
            }
          }
        }
      ]
    },
    "deletedAt": {
      "type": "number",
      "nullable": true
    },
    "transfer": {
      "type": "object",
      "description": "Keeps track of the current state of the Edge Config while it gets transferred.",
      "required": [
        "doneAt",
        "fromAccountId",
        "startedAt"
      ],
      "properties": {
        "fromAccountId": {
          "type": "string"
        },
        "startedAt": {
          "type": "number"
        },
        "doneAt": {
          "type": "number",
          "nullable": true
        }
      }
    },
    "schema": {
      "type": "object"
    },
    "syncedToDynamoAt": {
      "type": "number",
      "description": "Timestamp of when the Edge Config was synced to DynamoDB initially. It is only set when syncing the entire Edge Config, not when updating."
    },
    "sizeInBytes": {
      "type": "number"
    },
    "itemCount": {
      "type": "number"
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

- [global-config endpoints](/docs/rest-api#global-config)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
