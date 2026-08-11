---
title: get-project-flag-settings
product: vercel
url: /docs/rest-api/feature-flags/get-project-flag-settings
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/get-project-flag-settings"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-project-flag-settings on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get project flag settings

```http
GET /v1/projects/{projectIdOrName}/feature-flags/settings
```

Retrieve feature flag settings for a project.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The project id or name |


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
  "type": "object",
  "required": [
    "enabled",
    "entities",
    "environments",
    "metadata",
    "projectId",
    "typeName"
  ],
  "properties": {
    "typeName": {
      "type": "string",
      "enum": [
        "settings"
      ]
    },
    "projectId": {
      "type": "string"
    },
    "ownerId": {
      "type": "string"
    },
    "enabled": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "environments": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "entities": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "attributes",
          "kind",
          "label"
        ],
        "properties": {
          "kind": {
            "type": "string"
          },
          "label": {
            "type": "string"
          },
          "attributes": {
            "type": "array"
          }
        }
      }
    },
    "createdAt": {
      "type": "number"
    },
    "updatedAt": {
      "type": "number"
    },
    "metadata": {
      "type": "object",
      "required": [
        "activeFlagCount",
        "archivedFlagCount",
        "packSizeInBytes",
        "segmentCount"
      ],
      "properties": {
        "activeFlagCount": {
          "type": "number"
        },
        "archivedFlagCount": {
          "type": "number"
        },
        "segmentCount": {
          "type": "number"
        },
        "packSizeInBytes": {
          "type": "number"
        },
        "packRevision": {
          "type": "number"
        },
        "configUpdatedAt": {
          "type": "number"
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [feature-flags endpoints](/docs/rest-api#feature-flags)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
