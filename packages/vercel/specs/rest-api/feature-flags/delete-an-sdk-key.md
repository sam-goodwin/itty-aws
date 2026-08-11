---
title: delete-an-sdk-key
product: vercel
url: /docs/rest-api/feature-flags/delete-an-sdk-key
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/delete-an-sdk-key"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-an-sdk-key on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete an SDK key

```http
DELETE /v1/projects/{projectIdOrName}/feature-flags/sdk-keys/{hashKey}
```

Deletes an SDK key.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The project id or name |
| `hashKey` | string | Yes | The SDK key hash key to delete |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 204: No description

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

---

## Related

- [feature-flags endpoints](/docs/rest-api#feature-flags)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
