---
title: point-production-traffic-to-a-previous-production-deployment-by-id
product: vercel
url: /docs/rest-api/projects/point-production-traffic-to-a-previous-production-deployment-by-id
canonical_url: "https://vercel.com/docs/rest-api/projects/point-production-traffic-to-a-previous-production-deployment-by-id"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about point-production-traffic-to-a-previous-production-deployment-by-id on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Point production traffic to a previous production deployment by ID

```http
POST /v1/projects/{projectId}/rollback/{deploymentId}
```

Allows users to rollback to a deployment.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `deploymentId` | string | Yes | The ID of the deployment to rollback *to* |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `description` | string | No | The reason for the rollback |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 201: No description

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 402: No description

### 403: You do not have permission to access this resource.

### 409: No description

### 410: No description

### 422: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
