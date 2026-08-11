---
title: clear-all-repository-permissions
product: vercel
url: /docs/rest-api/vcr/clear-all-repository-permissions
canonical_url: "https://vercel.com/docs/rest-api/vcr/clear-all-repository-permissions"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about clear-all-repository-permissions on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Clear all repository permissions

```http
DELETE /v1/vcr/repository/{idOrName}/permissions/all
```

Revoke every team's access to a VCR repository. Clearing an unshared repository is a no-op.

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


## Responses

### 204: No description

Content-Type: `application/json`

```json
{
  "nullable": true
}
```

### 400: One of the provided values in the request query is invalid.

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
