---
title: delete-a-global-config
product: vercel
url: /docs/rest-api/global-config/delete-a-global-config
canonical_url: "https://vercel.com/docs/rest-api/global-config/delete-a-global-config"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-global-config on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a Global Config

```http
DELETE /v1/global-config/{edgeConfigId}
```

Delete a Global Config by id.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `edgeConfigId` | string | Yes |  |


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

### 409: No description

### 410: No description

---

## Related

- [global-config endpoints](/docs/rest-api#global-config)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
