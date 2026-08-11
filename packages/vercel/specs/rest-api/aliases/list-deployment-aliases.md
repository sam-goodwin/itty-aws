---
title: list-deployment-aliases
product: vercel
url: /docs/rest-api/aliases/list-deployment-aliases
canonical_url: "https://vercel.com/docs/rest-api/aliases/list-deployment-aliases"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-deployment-aliases on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List Deployment Aliases

```http
GET /v2/deployments/{id}/aliases
```

Retrieves all Aliases for the Deployment with the given ID. The authenticated user or team must own the deployment.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | The ID of the deployment the aliases should be listed for |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The list of aliases assigned to the deployment

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "aliases"
  ],
  "properties": {
    "aliases": {
      "type": "array",
      "description": "A list of the aliases assigned to the deployment",
      "items": {
        "type": "object",
        "description": "A list of the aliases assigned to the deployment",
        "required": [
          "alias",
          "created",
          "uid"
        ],
        "properties": {
          "uid": {
            "type": "string",
            "description": "The unique identifier of the alias"
          },
          "alias": {
            "type": "string",
            "description": "The alias name, it could be a `.vercel.app` subdomain or a custom domain"
          },
          "created": {
            "type": "string",
            "description": "The date when the alias was created",
            "format": "date-time"
          },
          "redirect": {
            "type": "string",
            "description": "Target destination domain for redirect when the alias is a redirect",
            "nullable": true
          },
          "protectionBypass": {
            "type": "object",
            "description": "The protection bypass for the alias"
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: The deployment was not found

### 410: No description

---

## Related

- [aliases endpoints](/docs/rest-api#aliases)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
