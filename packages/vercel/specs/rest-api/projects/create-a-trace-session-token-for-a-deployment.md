---
title: create-a-trace-session-token-for-a-deployment
product: vercel
url: /docs/rest-api/projects/create-a-trace-session-token-for-a-deployment
canonical_url: "https://vercel.com/docs/rest-api/projects/create-a-trace-session-token-for-a-deployment"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-trace-session-token-for-a-deployment on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a trace session token for a deployment

```http
POST /v1/projects/traces/session
```

Mints a short-lived HS256 JWT scoped to a deployment hostname. The Vercel CLI presents this JWT to the Vercel proxy on requests it wants traced.

## Authentication

**bearerToken**: HTTP bearer

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
  "required": [
    "projectId",
    "hostname"
  ],
  "properties": {
    "projectId": {
      "type": "string",
      "description": "The project ID the deployment belongs to."
    },
    "hostname": {
      "type": "string",
      "description": "The deployment hostname to scope the trace session to."
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
    "token"
  ],
  "properties": {
    "token": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 422: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
