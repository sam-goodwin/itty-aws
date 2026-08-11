---
title: add-a-repository-permission
product: vercel
url: /docs/rest-api/vcr/add-a-repository-permission
canonical_url: "https://vercel.com/docs/rest-api/vcr/add-a-repository-permission"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about add-a-repository-permission on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Add a repository permission

```http
POST /v1/vcr/repository/{idOrName}/permissions
```

Grant a team access to a VCR repository. Sharing applies to the whole repository.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string. maxLength: 255 | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "teamId": {
      "type": "string",
      "description": "ID of a team that is granted access to a repository.",
      "pattern": "^team_[a-zA-Z0-9]+$",
      "maxLength": 64
    },
    "teamSlug": {
      "type": "string",
      "description": "Slug of a team that is granted access to a repository.",
      "pattern": "^[a-z0-9](?:[a-z0-9-]{0,46}[a-z0-9])?$",
      "maxLength": 64
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
    "permission"
  ],
  "properties": {
    "permission": {
      "type": "object",
      "description": "A team's access grant to a Vercel Container Registry repository.",
      "required": [
        "createdAt",
        "repositoryId",
        "teamId",
        "teamSlug"
      ],
      "properties": {
        "repositoryId": {
          "type": "string",
          "description": "Identifier of the repository the permission grants access to."
        },
        "teamId": {
          "type": "string",
          "description": "Identifier of the team that is granted access to the repository."
        },
        "teamSlug": {
          "type": "string",
          "description": "Slug of the team that is granted access to the repository."
        },
        "createdAt": {
          "type": "string",
          "description": "ISO 8601 timestamp of when the permission was created."
        }
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

### 410: No description

---

## Related

- [vcr endpoints](/docs/rest-api#vcr)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
