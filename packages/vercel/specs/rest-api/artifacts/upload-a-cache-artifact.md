---
title: upload-a-cache-artifact
product: vercel
url: /docs/rest-api/artifacts/upload-a-cache-artifact
canonical_url: "https://vercel.com/docs/rest-api/artifacts/upload-a-cache-artifact"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about upload-a-cache-artifact on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Upload a cache artifact

```http
PUT /v8/artifacts/{hash}
```

Uploads a cache artifact identified by the `hash` specified on the path. The cache artifact can then be downloaded with the provided `hash`.

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
| `'content-Length'` | number | No | The artifact size in bytes |
| `'x-Artifact-Duration'` | number | No | The time taken to generate the uploaded artifact in milliseconds. |
| `'x-Artifact-Client-Ci'` | string. maxLength: 50 | No | The continuous integration or delivery environment where this artifact was generated. |
| `'x-Artifact-Client-Interactive'` | integer. min: 0; max: 1 | No | 1 if the client is an interactive shell. Otherwise 0 |
| `'x-Artifact-Tag'` | string. maxLength: 600 | No | The base64 encoded tag for this artifact. The value is sent back to clients when the artifact is downloaded as the header `x-artifact-tag` |
| `'x-Artifact-Sha'` | string. maxLength: 200 | No | The SHA of the source control revision that generated this artifact. |
| `'x-Artifact-Dirty-Hash'` | string. maxLength: 200 | No | A hash representing uncommitted changes in the working directory when this artifact was generated. |


## Request body

Required: Yes

Content-Type: `application/octet-stream`

```json
{
  "type": "string",
  "format": "binary"
}
```

## Responses

### 202: File successfully uploaded

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "urls"
  ],
  "properties": {
    "urls": {
      "type": "array",
      "description": "Array of URLs where the artifact was updated",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.
One of the provided values in the headers is invalid
File size is not valid

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: The customer has reached their spend cap limit and has been paused. An owner can disable the cap or raise the limit in settings.
The Remote Caching usage limit has been reached for this account for this billing cycle.
Remote Caching has been disabled for this team or user. An owner can enable it in the billing settings.
You do not have permission to access this resource.

### 410: No description

---

## Related

- [artifacts endpoints](/docs/rest-api#artifacts)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
