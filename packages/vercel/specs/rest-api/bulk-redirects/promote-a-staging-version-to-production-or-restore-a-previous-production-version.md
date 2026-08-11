---
title: promote-a-staging-version-to-production-or-restore-a-previous-production-version
product: vercel
url: /docs/rest-api/bulk-redirects/promote-a-staging-version-to-production-or-restore-a-previous-production-version
canonical_url: "https://vercel.com/docs/rest-api/bulk-redirects/promote-a-staging-version-to-production-or-restore-a-previous-production-version"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about promote-a-staging-version-to-production-or-restore-a-previous-production-version on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Promote a staging version to production or restore a previous production version.

```http
POST /v1/bulk-redirects/versions
```

Update a version by promoting staging to production or restoring a previous production version

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
    "id",
    "action"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "action": {
      "type": "string",
      "enum": [
        "promote",
        "restore",
        "discard"
      ]
    },
    "name": {
      "type": "string",
      "maxLength": 256
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
