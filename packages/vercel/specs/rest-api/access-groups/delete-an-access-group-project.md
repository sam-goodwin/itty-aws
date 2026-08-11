---
title: delete-an-access-group-project
product: vercel
url: /docs/rest-api/access-groups/delete-an-access-group-project
canonical_url: "https://vercel.com/docs/rest-api/access-groups/delete-an-access-group-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-an-access-group-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete an access group project

```http
DELETE /v1/access-groups/{accessGroupIdOrName}/projects/{projectId}
```

Allows deletion of an access group project

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `accessGroupIdOrName` | string | Yes |  |
| `projectId` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [access-groups endpoints](/docs/rest-api#access-groups)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
