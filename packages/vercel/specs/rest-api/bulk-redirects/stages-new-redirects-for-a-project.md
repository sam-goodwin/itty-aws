---
title: stages-new-redirects-for-a-project
product: vercel
url: /docs/rest-api/bulk-redirects/stages-new-redirects-for-a-project
canonical_url: "https://vercel.com/docs/rest-api/bulk-redirects/stages-new-redirects-for-a-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about stages-new-redirects-for-a-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Stages new redirects for a project.

```http
PUT /v1/bulk-redirects
```

Stages new redirects for a project and returns the new version.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "projectId",
    "teamId"
  ],
  "properties": {
    "projectId": {
      "type": "string"
    },
    "teamId": {
      "type": "string"
    },
    "overwrite": {
      "type": "boolean"
    },
    "name": {
      "type": "string",
      "maxLength": 256
    },
    "redirects": {
      "type": "array",
      "default": [],
      "items": {
        "type": "object",
        "required": [
          "source",
          "destination"
        ],
        "properties": {
          "source": {
            "type": "string",
            "maxLength": 2048
          },
          "destination": {
            "type": "string",
            "maxLength": 2048
          },
          "statusCode": {},
          "permanent": {
            "type": "boolean"
          },
          "caseSensitive": {
            "type": "boolean"
          },
          "query": {
            "type": "boolean"
          },
          "preserveQueryParams": {
            "type": "boolean"
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
    "alias",
    "version"
  ],
  "properties": {
    "alias": {
      "type": "string",
      "nullable": true
    },
    "version": {
      "type": "object",
      "required": [
        "createdBy",
        "id",
        "key",
        "lastModified"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "The unique identifier for the version."
        },
        "key": {
          "type": "string",
          "description": "The key of the version. The key may be duplicated across versions if the contents are the same as a different version."
        },
        "lastModified": {
          "type": "number"
        },
        "createdBy": {
          "type": "string"
        },
        "name": {
          "type": "string",
          "description": "Optional name for the version. If not provided, defaults to an ISO timestamp string."
        },
        "isStaging": {
          "type": "boolean",
          "description": "Whether this version has not been promoted to production yet and is not serving end users.",
          "enum": [
            false,
            true
          ]
        },
        "isLive": {
          "type": "boolean",
          "description": "Whether this version is currently live in production.",
          "enum": [
            false,
            true
          ]
        },
        "redirectCount": {
          "type": "number",
          "description": "The number of redirects in this version."
        },
        "alias": {
          "type": "string",
          "description": "The staging link for previewing redirects in this version."
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 500: No description

---

## Related

- [bulk-redirects endpoints](/docs/rest-api#bulk-redirects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
