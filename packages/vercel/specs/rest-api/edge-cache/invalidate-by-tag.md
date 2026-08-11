---
title: invalidate-by-tag
product: vercel
url: /docs/rest-api/edge-cache/invalidate-by-tag
canonical_url: "https://vercel.com/docs/rest-api/edge-cache/invalidate-by-tag"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about invalidate-by-tag on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Invalidate by tag

```http
POST /v1/edge-cache/invalidate-by-tags
```

Marks a cache tag as stale, causing cache entries associated with that tag to be revalidated in the background on the next request.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "tags"
  ],
  "properties": {
    "tags": {
      "oneOf": [
        {
          "type": "array",
          "items": {
            "type": "string",
            "maxLength": 256
          }
        },
        {
          "type": "string",
          "maxLength": 8196
        }
      ]
    },
    "target": {
      "type": "string",
      "enum": [
        "production",
        "preview"
      ]
    }
  }
}
```

## Responses

### 200: No description

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [edge-cache endpoints](/docs/rest-api#edge-cache)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
