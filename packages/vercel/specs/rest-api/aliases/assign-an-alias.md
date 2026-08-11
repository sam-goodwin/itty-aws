---
title: assign-an-alias
product: vercel
url: /docs/rest-api/aliases/assign-an-alias
canonical_url: "https://vercel.com/docs/rest-api/aliases/assign-an-alias"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about assign-an-alias on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Assign an Alias

```http
POST /v2/deployments/{id}/aliases
```

Creates a new alias for the deployment resolved from the given deployment or alias ID or URL. The authenticated user or team must own this deployment. If the desired alias is already assigned to another deployment, then it will be removed from the old deployment and assigned to the new one.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `id` | object | Yes | The deployment or alias ID or URL to assign from |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "alias": {
      "type": "string",
      "description": "The alias we want to assign to the deployment defined in the URL"
    },
    "redirect": {
      "type": "string",
      "description": "The redirect property will take precedence over the deployment id from the URL and consists of a hostname (like test.com) to which the alias should redirect using status code 307",
      "nullable": true
    }
  }
}
```

## Responses

### 200: The alias was successfully assigned to the deployment

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "alias",
    "created",
    "uid"
  ],
  "properties": {
    "uid": {
      "type": "string",
      "description": "The unique identifier of the alias"
    },
    "alias": {
      "type": "string",
      "description": "The assigned alias name"
    },
    "created": {
      "type": "string",
      "description": "The date when the alias was created",
      "format": "date-time"
    },
    "oldDeploymentId": {
      "type": "string",
      "description": "The unique identifier of the previously aliased deployment, only received when the alias was used before",
      "nullable": true
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.
The cert for the provided alias is not ready
The deployment is not READY and can not be aliased
The supplied alias is invalid

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.
If no .vercel.app alias exists then we fail (nothing to mirror)

### 404: The domain used for the alias was not found
The deployment was not found

### 409: The provided alias is already assigned to the given deployment
The domain is not allowed to be used

### 410: No description

---

## Related

- [aliases endpoints](/docs/rest-api#aliases)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
