---
title: delete-a-deployment
product: vercel
url: /docs/rest-api/deployments/delete-a-deployment
canonical_url: "https://vercel.com/docs/rest-api/deployments/delete-a-deployment"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about delete-a-deployment on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Delete a Deployment

```http
DELETE /v13/deployments/{id}
```

This API allows you to delete a deployment, either by supplying its `id` in the URL or the `url` of the deployment as a query parameter. You can obtain the ID, for example, by listing all deployments.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | string | Yes | The ID of the deployment to be deleted |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `url` | string | No | A Deployment or Alias URL. In case it is passed, the ID will be ignored |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The deployment was successfully deleted

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "state",
    "uid"
  ],
  "properties": {
    "uid": {
      "type": "string",
      "description": "The removed deployment ID."
    },
    "state": {
      "type": "string",
      "description": "A constant with the final state of the deployment.",
      "enum": [
        "DELETED"
      ]
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: The deployment was not found

### 410: No description

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
