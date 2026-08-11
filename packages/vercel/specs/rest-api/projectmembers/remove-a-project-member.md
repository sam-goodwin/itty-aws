---
title: remove-a-project-member
product: vercel
url: /docs/rest-api/projectmembers/remove-a-project-member
canonical_url: "https://vercel.com/docs/rest-api/projectmembers/remove-a-project-member"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about remove-a-project-member on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Remove a Project Member

```http
DELETE /v1/projects/{idOrName}/members/{uid}
```

Remove a member from a specific project

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The ID or name of the Project. |
| `uid` | string | Yes | The user ID of the member. |


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

- [projectMembers endpoints](/docs/rest-api#projectmembers)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
