---
title: delete-a-blob-store
product: vercel
url: /docs/rest-api/storage/delete-a-blob-store
canonical_url: "https://vercel.com/docs/rest-api/storage/delete-a-blob-store"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-blob-store on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a Blob store

```http
DELETE /storage/stores/blob/{id}
```

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes |  |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

---

## Related

- [storage endpoints](/docs/rest-api#storage)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
