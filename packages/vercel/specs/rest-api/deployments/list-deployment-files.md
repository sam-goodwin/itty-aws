---
title: list-deployment-files
product: vercel
url: /docs/rest-api/deployments/list-deployment-files
canonical_url: "https://vercel.com/docs/rest-api/deployments/list-deployment-files"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-deployment-files on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List Deployment Files

```http
GET /v6/deployments/{id}/files
```

Allows to retrieve the file structure of the source code of a deployment by supplying the deployment unique identifier. If the deployment was created with the Vercel CLI or the API directly with the `files` key, it will have a file tree that can be retrievable.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | The unique deployment identifier |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: Retrieved the file tree successfully

Content-Type: `application/json`

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "description": "A deployment file tree entry",
    "required": [
      "mode",
      "name",
      "type"
    ],
    "properties": {
      "name": {
        "type": "string",
        "description": "The name of the file tree entry"
      },
      "type": {
        "type": "string",
        "description": "String indicating the type of file tree entry.",
        "enum": [
          "directory",
          "file",
          "invalid",
          "lambda",
          "middleware",
          "symlink"
        ]
      },
      "uid": {
        "type": "string",
        "description": "The unique identifier of the file (only valid for the `file` type)"
      },
      "children": {
        "type": "array",
        "description": "The list of children files of the directory (only valid for the `directory` type)",
        "items": {
          "type": "object",
          "description": "(circular reference)"
        }
      },
      "contentType": {
        "type": "string",
        "description": "The content-type of the file (only valid for the `file` type)"
      },
      "mode": {
        "type": "number",
        "description": "The file \"mode\" indicating file type and permissions."
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: File tree not found
Deployment not found

### 410: No description

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
