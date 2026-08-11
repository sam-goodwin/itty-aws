---
title: unpause-a-project
product: vercel
url: /docs/rest-api/projects/unpause-a-project
canonical_url: "https://vercel.com/docs/rest-api/projects/unpause-a-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about unpause-a-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Unpause a project

```http
POST /v1/projects/{projectId}/unpause
```

Unpause a project by passing its project `id` in the URL. If the project does not exist given the id then the request will fail with 400 status code. If the project enables auto assigning custom production domains and unblocks the active Production Deployment then the request will return with 200 status code.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes | The unique project identifier |


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

### 500: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
