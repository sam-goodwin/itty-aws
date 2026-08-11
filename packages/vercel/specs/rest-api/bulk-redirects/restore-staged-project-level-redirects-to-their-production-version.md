---
title: restore-staged-project-level-redirects-to-their-production-version
product: vercel
url: /docs/rest-api/bulk-redirects/restore-staged-project-level-redirects-to-their-production-version
canonical_url: "https://vercel.com/docs/rest-api/bulk-redirects/restore-staged-project-level-redirects-to-their-production-version"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about restore-staged-project-level-redirects-to-their-production-version on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Restore staged project-level redirects to their production version.

```http
POST /v1/bulk-redirects/restore
```

Restores the provided redirects in the staging version to the value in the production version. If no production version exists, removes the redirects from staging.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "redirects"
  ],
  "properties": {
    "name": {
      "type": "string",
      "maxLength": 256
    },
    "redirects": {
      "type": "array",
      "description": "The redirects to restore. The source of the redirect is used to match the redirect to restore.",
      "items": {
        "type": "string"
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
    "failedToRestore",
    "restored",
    "version"
  ],
  "properties": {
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
    },
    "restored": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "failedToRestore": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 500: No description

---

## Related

- [bulk-redirects endpoints](/docs/rest-api#bulk-redirects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
