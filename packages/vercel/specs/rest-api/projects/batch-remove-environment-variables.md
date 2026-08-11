---
title: batch-remove-environment-variables
product: vercel
url: /docs/rest-api/projects/batch-remove-environment-variables
canonical_url: "https://vercel.com/docs/rest-api/projects/batch-remove-environment-variables"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about batch-remove-environment-variables on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Batch remove environment variables

```http
DELETE /v1/projects/{idOrName}/env
```

Delete multiple environment variables for a given project in a single batch operation.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |


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
    "ids"
  ],
  "properties": {
    "ids": {
      "type": "array",
      "description": "Array of environment variable IDs to delete",
      "items": {
        "type": "string"
      }
    }
  }
}
```

## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "deleted",
    "ids"
  ],
  "properties": {
    "deleted": {
      "type": "number"
    },
    "ids": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
