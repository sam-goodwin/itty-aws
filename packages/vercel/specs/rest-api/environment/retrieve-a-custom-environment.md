---
title: retrieve-a-custom-environment
product: vercel
url: /docs/rest-api/environment/retrieve-a-custom-environment
canonical_url: "https://vercel.com/docs/rest-api/environment/retrieve-a-custom-environment"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about retrieve-a-custom-environment on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Retrieve a custom environment

```http
GET /v9/projects/{idOrName}/custom-environments/{environmentSlugOrId}
```

Retrieve a custom environment for the project. Must not be named 'Production' or 'Preview'.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `environmentSlugOrId` | string | Yes | The unique custom environment identifier within the project |


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
  "description": "Internal representation of a custom environment with all required properties",
  "required": [
    "createdAt",
    "id",
    "slug",
    "type",
    "updatedAt"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Unique identifier for the custom environment (format: env_*)"
    },
    "slug": {
      "type": "string",
      "description": "URL-friendly name of the environment"
    },
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
    "branchMatcher": {
      "type": "object",
      "description": "Configuration for matching git branches to this environment",
      "required": [
        "pattern",
        "type"
      ],
      "properties": {
        "type": {
          "type": "string",
          "description": "The type of matching to perform",
          "enum": [
            "endsWith",
            "equals",
            "startsWith"
          ]
        },
        "pattern": {
          "type": "string",
          "description": "The pattern to match against branch names"
        }
      }
    },
    "domains": {
      "type": "array",
      "description": "List of domains associated with this environment",
      "items": {
        "type": "object",
        "description": "List of domains associated with this environment",
        "required": [
          "apexName",
          "name",
          "projectId",
          "verified"
        ],
        "properties": {
          "name": {
            "type": "string"
          },
          "apexName": {
            "type": "string"
          },
          "projectId": {
            "type": "string"
          },
          "redirect": {
            "type": "string",
            "nullable": true
          },
          "redirectStatusCode": {
            "type": "number",
            "enum": [
              301,
              302,
              307,
              308,
              null
            ],
            "nullable": true
          },
          "gitBranch": {
            "type": "string",
            "nullable": true
          },
          "customEnvironmentId": {
            "type": "string",
            "nullable": true
          },
          "updatedAt": {
            "type": "number"
          },
          "createdAt": {
            "type": "number"
          },
          "verified": {
            "type": "boolean",
            "description": "`true` if the domain is verified for use with the project. If `false` it will not be used as an alias on this project until the challenge in `verification` is completed.",
            "enum": [
              false,
              true
            ]
          },
          "verification": {
            "type": "array",
            "description": "A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`."
          }
        }
      }
    },
    "currentDeploymentAliases": {
      "type": "array",
      "description": "List of aliases for the current deployment",
      "items": {
        "type": "string"
      }
    },
    "createdAt": {
      "type": "number",
      "description": "Timestamp when the environment was created"
    },
    "updatedAt": {
      "type": "number",
      "description": "Timestamp when the environment was last updated"
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

- [environment endpoints](/docs/rest-api#environment)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
