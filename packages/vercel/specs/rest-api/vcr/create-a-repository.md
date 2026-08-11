---
title: create-a-repository
product: vercel
url: /docs/rest-api/vcr/create-a-repository
canonical_url: "https://vercel.com/docs/rest-api/vcr/create-a-repository"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-repository on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a repository

```http
POST /v1/vcr/repository
```

Create a container registry repository for a project.

## Authentication

**bearerToken**: HTTP bearer

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
    "projectId",
    "name"
  ],
  "properties": {
    "projectId": {
      "type": "string"
    },
    "name": {
      "type": "string",
      "description": "Single Docker repository name component.",
      "pattern": "^[a-z0-9]+(?:(?:\\\\.|_|__|-+)[a-z0-9]+)*$",
      "maxLength": 255
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
    "repository"
  ],
  "properties": {
    "repository": {
      "type": "object",
      "description": "A Vercel Container Registry repository.",
      "required": [
        "createdAt",
        "id",
        "name",
        "projectId",
        "public",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string",
          "description": "Unique identifier of the repository."
        },
        "projectId": {
          "type": "string",
          "description": "Identifier of the project the repository belongs to."
        },
        "name": {
          "type": "string",
          "description": "Name of the repository."
        },
        "public": {
          "type": "boolean",
          "description": "Whether the repository is public. Images in public repositories can be pulled by anyone. Defaults to `false` (private).",
          "enum": [
            false,
            true
          ]
        },
        "createdAt": {
          "type": "string",
          "description": "ISO 8601 timestamp of when the repository was created."
        },
        "updatedAt": {
          "type": "string",
          "description": "ISO 8601 timestamp of when the repository was last updated."
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

---

## Related

- [vcr endpoints](/docs/rest-api#vcr)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
