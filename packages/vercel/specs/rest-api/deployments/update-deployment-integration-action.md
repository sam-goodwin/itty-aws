---
title: update-deployment-integration-action
product: vercel
url: /docs/rest-api/deployments/update-deployment-integration-action
canonical_url: "https://vercel.com/docs/rest-api/deployments/update-deployment-integration-action"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-deployment-integration-action on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update deployment integration action

```http
PATCH /v1/deployments/{deploymentId}/integrations/{integrationConfigurationId}/resources/{resourceId}/actions/{action}
```

Updates the deployment integration action for the specified integration installation

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `deploymentId` | string | Yes |  |
| `integrationConfigurationId` | string | Yes |  |
| `resourceId` | string | Yes |  |
| `action` | string | Yes |  |


## Request body

Required: No

Content-Type: `application/json`

```json
{
  "type": "object",
  "properties": {
    "status": {
      "type": "string",
      "enum": [
        "running",
        "succeeded",
        "failed"
      ]
    },
    "statusText": {
      "type": "string"
    },
    "statusUrl": {
      "type": "string",
      "format": "uri",
      "pattern": "^https?://|^sso:"
    },
    "outcomes": {
      "type": "array",
      "items": {
        "oneOf": [
          {
            "type": "object",
            "required": [
              "kind",
              "secrets"
            ]
          }
        ]
      }
    }
  }
}
```

## Responses

### 202: No description

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [deployments endpoints](/docs/rest-api#deployments)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
