---
title: connect-integration-resource-to-project
product: vercel
url: /docs/rest-api/integrations/connect-integration-resource-to-project
canonical_url: "https://vercel.com/docs/rest-api/integrations/connect-integration-resource-to-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about connect-integration-resource-to-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Connect integration resource to project

```http
POST /v1/integrations/installations/{integrationConfigurationId}/resources/{resourceId}/connections
```

Connects an integration resource to a Vercel project. This endpoint establishes a connection between a provisioned integration resource (from storage APIs like `POST /v1/storage/stores/integration/direct`) and a specific Vercel project.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `integrationConfigurationId` | string | Yes |  |
| `resourceId` | string | Yes |  |


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
    "projectId"
  ],
  "properties": {
    "projectId": {
      "type": "string"
    },
    "envVarEnvironments": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "production",
          "preview",
          "development"
        ]
      }
    },
    "makeEnvVarsSensitive": {
      "type": "boolean"
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

### 410: No description

---

## Related

- [integrations endpoints](/docs/rest-api#integrations)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
