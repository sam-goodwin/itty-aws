---
title: generate-a-project-oidc-token
product: vercel
url: /docs/rest-api/projects/generate-a-project-oidc-token
canonical_url: "https://vercel.com/docs/rest-api/projects/generate-a-project-oidc-token"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about generate-a-project-oidc-token on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Generate a project OIDC token

```http
POST /v1/projects/{idOrName}/token
```

Generates an OIDC token for the project and returns it.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string. maxLength: 150 | Yes | The project ID or name |


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
  "properties": {
    "source": {
      "type": "string",
      "description": "The source that is calling the endpoint.",
      "maxLength": 150
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
    "token"
  ],
  "properties": {
    "token": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
