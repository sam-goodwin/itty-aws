---
title: update-resource-secrets
product: vercel
url: /docs/rest-api/marketplace/update-resource-secrets
canonical_url: "https://vercel.com/docs/rest-api/marketplace/update-resource-secrets"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-resource-secrets on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update Resource Secrets

```http
PUT /v1/installations/{integrationConfigurationId}/resources/{resourceId}/secrets
```

This endpoint updates the secrets of a resource. If a resource has projects connected, the connected secrets are updated with the new secrets. The old secrets may still be used by existing connected projects because they are not automatically redeployed. Redeployment is a manual action and must be completed by the user. All new project connections will use the new secrets.<br/> <br/> Use cases for this endpoint:<br/> <br/> - Resetting the credentials of a database in the partner. If the user requests the credentials to be updated in the partner’s application, the partner post the new set of secrets to Vercel, the user should redeploy their application and the expire the old credentials.<br/>

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `resourceId` | string | Yes |  |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "secrets"
  ],
  "properties": {
    "secrets": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "name",
          "value"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "prefix": {
            "type": "string"
          },
          "environmentOverrides": {
            "type": "object",
            "description": "A map of environments to override values for the secret, used for setting different values across deployments in production, preview, and development environments. Note: the same value will be used for all deployments in the given environment."
          }
        }
      }
    },
    "partial": {
      "type": "boolean",
      "description": "If true, will only overwrite the provided secrets instead of replacing all secrets."
    }
  }
}
```

## Responses

### 201: No description

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

### 422: No description

---

## Related

- [marketplace endpoints](/docs/rest-api#marketplace)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
