---
title: dangerously-delete-by-tag
product: vercel
url: /docs/rest-api/edge-cache/dangerously-delete-by-tag
canonical_url: "https://vercel.com/docs/rest-api/edge-cache/dangerously-delete-by-tag"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about dangerously-delete-by-tag on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Dangerously delete by tag

```http
POST /v1/edge-cache/dangerously-delete-by-tags
```

Marks a cache tag as deleted, causing cache entries associated with that tag to be revalidated in the foreground on the next request. Use this method with caution because one tag can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateByTag` instead.

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
    "revalidationDeadlineSeconds": {
      "type": "integer",
      "minimum": 0,
      "maximum": 31536000
    },
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
