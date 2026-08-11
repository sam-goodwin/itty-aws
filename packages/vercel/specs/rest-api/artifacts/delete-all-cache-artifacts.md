---
title: delete-all-cache-artifacts
product: vercel
url: /docs/rest-api/artifacts/delete-all-cache-artifacts
canonical_url: "https://vercel.com/docs/rest-api/artifacts/delete-all-cache-artifacts"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-all-cache-artifacts on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete all cache artifacts

```http
DELETE /v8/artifacts
```

Deletes all cache artifacts stored for the authenticated team or user, clearing the Remote Cache. Subsequent builds will re-populate the cache.

## Authentication

**bearerToken**: HTTP bearer

## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Success. All cache artifacts for the account were deleted.

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "deletedCount"
  ],
  "properties": {
    "deletedCount": {
      "type": "number"
    }
  }
}
```

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [artifacts endpoints](/docs/rest-api#artifacts)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
