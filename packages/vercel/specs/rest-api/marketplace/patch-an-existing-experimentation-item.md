---
title: patch-an-existing-experimentation-item
product: vercel
url: /docs/rest-api/marketplace/patch-an-existing-experimentation-item
canonical_url: "https://vercel.com/docs/rest-api/marketplace/patch-an-existing-experimentation-item"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about patch-an-existing-experimentation-item on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Patch an existing experimentation item

```http
PATCH /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}
```

Patch an existing experimentation item

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `resourceId` | string | Yes |  |
| `itemId` | string | Yes |  |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "slug",
    "origin"
  ],
  "properties": {
    "slug": {
      "type": "string",
      "maxLength": 1024
    },
    "origin": {
      "type": "string",
      "maxLength": 2048
    },
    "name": {
      "type": "string",
      "maxLength": 1024
    },
    "category": {
      "type": "string",
      "enum": [
        "experiment",
        "flag"
      ]
    },
    "description": {
      "type": "string",
      "maxLength": 1024
    },
    "isArchived": {
      "type": "boolean"
    },
    "createdAt": {
      "type": "number"
    },
    "updatedAt": {
      "type": "number"
    }
  }
}
```

## Responses

### 204: The item was updated

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
