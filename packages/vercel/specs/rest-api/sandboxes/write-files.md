---
title: write-files
product: vercel
url: /docs/rest-api/sandboxes/write-files
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/write-files"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about write-files on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Write files

```http
POST /v2/sandboxes/sessions/{sessionId}/fs/write
```

Uploads and extracts files to a session's filesystem. Files must be uploaded as a gzipped tarball (`.tar.gz`) with the `Content-Type` header set to `application/gzip`. The tarball contents are extracted to the session's working directory, or to a custom directory specified via the `x-cwd` header.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `sessionId` | string | Yes | The unique identifier of the session to write files to. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Header parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `'x-Cwd'` | string | No | The target directory where the tarball contents will be extracted. If not specified, files are extracted to the sandbox home directory. |


## Responses

### 200: The files were successfully written to the session.

Content-Type: `application/json`

```json
{
  "type": "object"
}
```

### 400: One of the provided values in the request query is invalid.
One of the provided values in the headers is invalid

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 422: No description

### 429: No description

### 500: No description

---

## Related

- [sandboxes endpoints](/docs/rest-api#sandboxes)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
