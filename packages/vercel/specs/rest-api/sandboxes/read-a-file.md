---
title: read-a-file
product: vercel
url: /docs/rest-api/sandboxes/read-a-file
canonical_url: "https://vercel.com/docs/rest-api/sandboxes/read-a-file"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about read-a-file on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Read a file

```http
POST /v2/sandboxes/sessions/{sessionId}/fs/read
```

Downloads the contents of a file from a session's filesystem. The file content is returned as a binary stream with appropriate Content-Disposition headers for file download.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `sessionId` | string | Yes | The unique identifier of the session to read the file from. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "path"
  ],
  "properties": {
    "cwd": {
      "type": "string",
      "description": "The base directory for resolving relative paths. If not specified, paths are resolved from the sandbox home directory."
    },
    "path": {
      "type": "string",
      "description": "The path of the file to read. Can be absolute or relative to the working directory."
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/octet-stream`

```json
{
  "type": "string",
  "format": "binary"
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

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
