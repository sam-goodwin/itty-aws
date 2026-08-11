---
title: retrieve-the-feature-flags-of-a-deployment
product: vercel
url: /docs/rest-api/feature-flags/retrieve-the-feature-flags-of-a-deployment
canonical_url: "https://vercel.com/docs/rest-api/feature-flags/retrieve-the-feature-flags-of-a-deployment"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about retrieve-the-feature-flags-of-a-deployment on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Retrieve the feature flags of a deployment

```http
GET /v1/deployments/{deploymentId}/feature-flags
```

Retrieve the feature flags of a deployment.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `deploymentId` | string | Yes |  |


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
    "flags",
    "status"
  ],
  "properties": {
    "flags": {
      "type": "array",
      "items": {
        "type": "object"
      }
    },
    "status": {
      "type": "object",
      "nullable": true,
      "required": [
        "createdAt",
        "deploymentId",
        "flagCount",
        "projectId",
        "responseStatus"
      ],
      "properties": {
        "deploymentId": {
          "type": "string"
        },
        "projectId": {
          "type": "string"
        },
        "responseStatus": {
          "type": "number",
          "description": "The HTTP status code from the flags discovery endpoint."
        },
        "flagCount": {
          "type": "number",
          "description": "The number of flag definitions returned by the flags discovery endpoint."
        },
        "createdAt": {
          "type": "number"
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

---

## Related

- [feature-flags endpoints](/docs/rest-api#feature-flags)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
