---
title: delete-a-flag
product: vercel
url: /docs/rest-api/feature-flags/delete-a-flag
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/delete-a-flag"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-flag on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a flag

```http
DELETE /v1/projects/{projectIdOrName}/feature-flags/flags/{flagIdOrSlug}
```

Permanently delete a feature flag from the project. This action cannot be undone. Consider archiving the flag instead if you may need it in the future.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The project id or name |
| `flagIdOrSlug` | string | Yes | The flag id or name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `ifMatch` | string | No | Etag to match, can be used interchangeably with the `if-match` header |
| `withMetadata` | boolean | No | Whether to include metadata in the response |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 204: No description

### 304: No description

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
