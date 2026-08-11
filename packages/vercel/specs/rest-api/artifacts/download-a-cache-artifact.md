---
title: download-a-cache-artifact
product: vercel
url: /docs/rest-api/artifacts/download-a-cache-artifact
canonical_url: "https://vercel.com/docs/rest-api/artifacts/download-a-cache-artifact"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about download-a-cache-artifact on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Download a cache artifact

```http
GET /v8/artifacts/{hash}
```

Downloads a cache artifact indentified by its `hash` specified on the request path. The artifact is downloaded as an octet-stream. The client should verify the content-length header and response body.

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


## Header parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `'x-Artifact-Client-Ci'` | string. maxLength: 50 | No | The continuous integration or delivery environment where this artifact is downloaded. |
| `'x-Artifact-Client-Interactive'` | integer. min: 0; max: 1 | No | 1 if the client is an interactive shell. Otherwise 0 |


## Responses

### 200: The artifact was found and is downloaded as a stream. Content-Length should be verified.

Content-Type: `application/json`

```json
{
  "type": "string",
  "description": "An octet stream response that will be piped to the response stream.",
  "format": "binary"
}
```

### 400: One of the provided values in the request query is invalid.
One of the provided values in the headers is invalid

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
