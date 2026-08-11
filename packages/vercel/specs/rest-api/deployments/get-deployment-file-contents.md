---
title: get-deployment-file-contents
product: vercel
url: /docs/rest-api/deployments/get-deployment-file-contents
canonical_url: "https://vercel.com/docs/rest-api/deployments/get-deployment-file-contents"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-deployment-file-contents on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get Deployment File Contents

```http
GET /v8/deployments/{id}/files/{fileId}
```

Allows to retrieve the content of a file by supplying the file identifier and the deployment unique identifier. The response body will contain a JSON response containing the contents of the file encoded as base64.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | The unique deployment identifier |
| `fileId` | string | Yes | The unique file identifier |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | Path to the file to fetch (only for Git deployments) |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: File not found
Deployment not found

### 410: Invalid API version.

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
