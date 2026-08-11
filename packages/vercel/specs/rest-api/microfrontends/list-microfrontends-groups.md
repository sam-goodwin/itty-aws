---
title: list-microfrontends-groups
product: vercel
url: /docs/rest-api/microfrontends/list-microfrontends-groups
canonical_url: "https://vercel.com/docs/rest-api/microfrontends/list-microfrontends-groups"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-microfrontends-groups on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List microfrontends groups

```http
GET /v1/microfrontends/groups
```

Get the microfrontends group IDs for a team.

## Authentication

**bearerToken**: HTTP bearer

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
  "type": "object"
}
```

### 400: No description

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 500: No description

---

## Related

- [microfrontends endpoints](/docs/rest-api#microfrontends)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
