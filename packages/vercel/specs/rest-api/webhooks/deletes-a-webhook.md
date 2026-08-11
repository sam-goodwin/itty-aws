---
title: deletes-a-webhook
product: vercel
url: /docs/rest-api/webhooks/deletes-a-webhook
canonical_url: "https://vercel.com/docs/rest-api/webhooks/deletes-a-webhook"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about deletes-a-webhook on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Deletes a webhook

```http
DELETE /v1/webhooks/{id}
```

Deletes a webhook

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

### 410: No description

---

## Related

- [webhooks endpoints](/docs/rest-api#webhooks)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
