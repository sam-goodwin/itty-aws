---
title: disconnects-a-shared-environment-variable-for-a-given-project
product: vercel
url: /docs/rest-api/environment/disconnects-a-shared-environment-variable-for-a-given-project
canonical_url: "https://vercel.com/docs/rest-api/environment/disconnects-a-shared-environment-variable-for-a-given-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about disconnects-a-shared-environment-variable-for-a-given-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Disconnects a shared environment variable for a given project

```http
PATCH /v1/env/{id}/unlink/{projectId}
```

Disconnects a shared environment variable for a given project

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | The unique ID for the Shared Environment Variable to unlink from the project. |
| `projectId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "id"
  ],
  "properties": {
    "id": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [environment endpoints](/docs/rest-api#environment)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
