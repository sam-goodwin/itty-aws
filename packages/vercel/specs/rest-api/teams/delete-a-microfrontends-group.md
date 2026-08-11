---
title: delete-a-microfrontends-group
product: vercel
url: /docs/rest-api/teams/delete-a-microfrontends-group
canonical_url: "https://vercel.com/docs/rest-api/teams/delete-a-microfrontends-group"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-microfrontends-group on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a microfrontends group

```http
DELETE /v1/teams/{teamId}/microfrontends/{groupId}
```

Deletes a microfrontends group from the team associated with the group ID.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `groupId` | string | Yes | The microfrontend group ID to delete. |
| `teamId` | string | Yes | The Team identifier to perform the request on behalf of. |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object"
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 500: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
