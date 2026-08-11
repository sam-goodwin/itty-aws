---
title: update-protection-bypass-for-automation
product: vercel
url: /docs/rest-api/projects/update-protection-bypass-for-automation
canonical_url: "https://vercel.com/docs/rest-api/projects/update-protection-bypass-for-automation"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about update-protection-bypass-for-automation on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Update Protection Bypass for Automation

```http
PATCH /v1/projects/{idOrName}/protection-bypass
```

Update the deployment protection automation bypass for a project

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |


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
    "revoke": {
      "type": "object",
      "description": "Optional instructions for revoking and regenerating a automation bypass",
      "required": [
        "secret",
        "regenerate"
      ],
      "properties": {
        "secret": {
          "type": "string",
          "description": "Automation bypass to revoked"
        },
        "regenerate": {
          "type": "boolean",
          "description": "Whether or not a new automation bypass should be created after the provided secret is revoked"
        }
      }
    },
    "generate": {
      "type": "object",
      "description": "Generate a new secret. If neither generate or revoke are provided, a new random secret will be generated.",
      "properties": {
        "secret": {
          "type": "string",
          "description": "Optional value of the secret to generate, don't send it for oauth2 tokens",
          "pattern": "^[a-zA-Z0-9]{32}$"
        },
        "note": {
          "type": "string",
          "description": "Note to be displayed in the UI for this bypass",
          "maxLength": 100
        }
      }
    },
    "update": {
      "type": "object",
      "description": "Update an existing bypass",
      "required": [
        "secret"
      ],
      "properties": {
        "secret": {
          "type": "string",
          "description": "Automation bypass to updated"
        },
        "isEnvVar": {
          "type": "boolean",
          "description": "Whether or not this bypass is set as the VERCEL_AUTOMATION_BYPASS_SECRET environment variable on deployments"
        },
        "note": {
          "type": "string",
          "description": "Note to be displayed in the UI for this bypass",
          "maxLength": 100
        }
      }
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
  "properties": {
    "protectionBypass": {
      "type": "object",
      "additionalProperties": {
        "oneOf": [
          {
            "type": "object",
            "required": [
              "configurationId",
              "createdAt",
              "createdBy",
              "integrationId",
              "scope"
            ]
          },
          {
            "type": "object",
            "required": [
              "createdAt",
              "createdBy",
              "scope"
            ]
          }
        ]
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
