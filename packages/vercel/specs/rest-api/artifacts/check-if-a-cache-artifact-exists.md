---
title: check-if-a-cache-artifact-exists
product: vercel
url: /docs/rest-api/artifacts/check-if-a-cache-artifact-exists
canonical_url: "https://vercel.com/docs/rest-api/artifacts/check-if-a-cache-artifact-exists"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about check-if-a-cache-artifact-exists on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Check if a cache artifact exists

```http
HEAD /v8/artifacts/{hash}
```

Check that a cache artifact with the given `hash` exists. This request returns response headers only and is equivalent to a `GET` request to this endpoint where the response contains no body.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `hash` | string | Yes | The artifact hash |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The artifact was found and headers are returned

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.
The Remote Caching usage limit has been reached for this account for this billing cycle.
Remote Caching has been disabled for this team or user. An owner can enable it in the billing settings.
You do not have permission to access this resource.

### 404: The artifact was not found

### 410: No description

---

## Related

- [artifacts endpoints](/docs/rest-api#artifacts)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
