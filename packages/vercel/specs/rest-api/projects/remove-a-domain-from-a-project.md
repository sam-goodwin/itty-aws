---
title: remove-a-domain-from-a-project
product: vercel
url: /docs/rest-api/projects/remove-a-domain-from-a-project
canonical_url: "https://vercel.com/docs/rest-api/projects/remove-a-domain-from-a-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about remove-a-domain-from-a-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Remove a domain from a project

```http
DELETE /v9/projects/{idOrName}/domains/{domain}
```

Remove a domain from a project by passing the domain name and by specifying the project by either passing the project `id` or `name` in the URL.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `domain` | string | Yes | The project domain name |


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
    "removeRedirects": {
      "type": "boolean",
      "description": "Whether to remove all domains from this project that redirect to the domain being removed."
    }
  }
}
```

## Responses

### 200: The domain was succesfully removed from the project

Content-Type: `application/json`

```json
{
  "type": "object"
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: The project is currently being transferred

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
