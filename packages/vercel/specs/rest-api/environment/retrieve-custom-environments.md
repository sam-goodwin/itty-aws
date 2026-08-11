---
title: retrieve-custom-environments
product: vercel
url: /docs/rest-api/environment/retrieve-custom-environments
canonical_url: "https://vercel.com/docs/rest-api/environment/retrieve-custom-environments"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about retrieve-custom-environments on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Retrieve custom environments

```http
GET /v9/projects/{idOrName}/custom-environments
```

Retrieve custom environments for the project. Must not be named 'Production' or 'Preview'.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `gitBranch` | string | No | Fetch custom environments for a specific git branch |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "accountLimit",
    "environments"
  ],
  "properties": {
    "accountLimit": {
      "type": "object",
      "description": "The maximum number of custom environments allowed either by the team's plan type or a custom override.",
      "required": [
        "total"
      ],
      "properties": {
        "total": {
          "type": "number"
        }
      }
    },
    "environments": {
      "type": "array",
      "items": {
        "type": "object",
        "required": [
          "createdAt",
          "id",
          "slug",
          "type",
          "updatedAt"
        ],
        "properties": {
          "type": {
            "type": "string",
            "description": "The type of environment (production, preview, or development)",
            "enum": [
              "development",
              "preview",
              "production"
            ]
          },
          "description": {
            "type": "string",
            "description": "Optional description of the environment's purpose"
          },
          "createdAt": {
            "type": "number",
            "description": "Timestamp when the environment was created"
          },
          "updatedAt": {
            "type": "number",
            "description": "Timestamp when the environment was last updated"
          },
          "slug": {
            "type": "string",
            "description": "URL-friendly name of the environment"
          },
          "id": {
            "type": "string",
            "description": "Unique identifier for the custom environment (format: env_*)"
          },
          "domains": {
            "type": "array",
            "description": "List of domains associated with this environment"
          },
          "branchMatcher": {
            "type": "object",
            "description": "Configuration for matching git branches to this environment",
            "required": [
              "pattern",
              "type"
            ]
          },
          "currentDeploymentAliases": {
            "type": "array",
            "description": "List of aliases for the current deployment"
          }
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

---

## Related

- [environment endpoints](/docs/rest-api#environment)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
