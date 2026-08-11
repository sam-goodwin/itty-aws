---
title: dangerously-delete-by-source-image
product: vercel
url: /docs/rest-api/edge-cache/dangerously-delete-by-source-image
canonical_url: "https://vercel.com/docs/rest-api/edge-cache/dangerously-delete-by-source-image"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about dangerously-delete-by-source-image on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Dangerously delete by source image

```http
POST /v1/edge-cache/dangerously-delete-by-src-images
```

Marks a source image as deleted, causing cache entries associated with that source image to be revalidated in the foreground on the next request. Use this method with caution because one source image can be associated with many paths and deleting the cache can cause many concurrent requests to the origin leading to cache stampede problem. This method is for advanced use cases and is not recommended; prefer using `invalidateBySrcImage` instead.

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
    "srcImages"
  ],
  "properties": {
    "revalidationDeadlineSeconds": {
      "type": "integer",
      "minimum": 0,
      "maximum": 31536000
    },
    "srcImages": {
      "type": "array",
      "items": {
        "type": "string",
        "maxLength": 8192
      }
    }
  }
}
```

## Responses

### 200: No description

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: No description

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
