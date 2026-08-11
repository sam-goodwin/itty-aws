---
title: delete-a-drain
product: vercel
url: /docs/rest-api/drains/delete-a-drain
canonical_url: "https://vercel.com/docs/rest-api/drains/delete-a-drain"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-drain on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a drain

```http
DELETE /v1/drains/{id}
```

Delete a specific Drain by passing the drain id in the URL.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 204: No description

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [drains endpoints](/docs/rest-api#drains)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
