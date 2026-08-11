---
title: invalidate-by-source-image
product: vercel
url: /docs/rest-api/edge-cache/invalidate-by-source-image
canonical_url: "https://vercel.com/docs/rest-api/edge-cache/invalidate-by-source-image"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about invalidate-by-source-image on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Invalidate by source image

```http
POST /v1/edge-cache/invalidate-by-src-images
```

Marks a source image as stale, causing its corresponding transformed images to be revalidated in the background on the next request.

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
