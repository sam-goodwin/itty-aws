---
title: delete-a-secure-compute-network
product: vercel
url: /docs/rest-api/networking/delete-a-secure-compute-network
canonical_url: "https://vercel.com/docs/rest-api/networking/delete-a-secure-compute-network"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-secure-compute-network on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a Secure Compute network

```http
DELETE /v1/connect/networks/{networkId}
```

Allows to delete a Secure Compute network.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `networkId` | string | Yes | The ID of the network to delete |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 204: No description

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.

### 409: No description

### 410: No description

---

## Related

- [networking endpoints](/docs/rest-api#networking)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
