---
title: updates-the-description-for-a-rollback
product: vercel
url: /docs/rest-api/projects/updates-the-description-for-a-rollback
canonical_url: "https://vercel.com/docs/rest-api/projects/updates-the-description-for-a-rollback"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about updates-the-description-for-a-rollback on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Updates the description for a rollback

```http
PATCH /v1/projects/{projectId}/rollback/{deploymentId}/update-description
```

Updates the reason for a rollback, without changing the rollback status itself.

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectId` | string | Yes |  |
| `deploymentId` | string | Yes |  |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "description": {
      "type": "string",
      "description": "The reason for the rollback"
    }
  }
}
```

## Responses

### 200: No description

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

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
