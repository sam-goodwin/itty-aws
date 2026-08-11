---
title: create-a-check
product: vercel
url: /docs/rest-api/checks-v2/create-a-check
canonical_url: "https://vercel.com/docs/rest-api/checks-v2/create-a-check"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-check on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a check

```http
POST /v2/projects/{projectIdOrName}/checks
```

Creates a new check for a project.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes |  |


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
    "name",
    "requires"
  ],
  "properties": {
    "name": {
      "type": "string"
    },
    "isRerequestable": {
      "type": "boolean"
    },
    "requires": {
      "type": "string",
      "enum": [
        "build-ready",
        "deployment-url",
        "none"
      ],
      "default": "deployment-url"
    },
    "targets": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "blocks": {
      "type": "string",
      "enum": [
        "build-start",
        "deployment-start",
        "deployment-alias",
        "deployment-promotion",
        "none"
      ],
      "default": "deployment-alias"
    },
    "source": {
      "type": "object",
      "oneOf": [
        {
          "properties": {
            "kind": {
              "type": "string",
              "default": "integration"
            },
            "externalResourceId": {
              "type": "string"
            }
          }
        },
        {
          "required": [
            "kind"
          ],
          "properties": {
            "kind": {
              "type": "string"
            },
            "webhookId": {
              "type": "string"
            }
          }
        },
        {
          "required": [
            "kind",
            "externalCheckName",
            "provider"
          ],
          "properties": {
            "kind": {
              "type": "string"
            },
            "externalCheckName": {
              "type": "string"
            },
            "provider": {
              "type": "string",
              "enum": [
                "github"
              ]
            }
          }
        }
      ]
    },
    "timeout": {
      "type": "number",
      "default": 300
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
  "required": [
    "blocks",
    "createdAt",
    "id",
    "isRerequestable",
    "name",
    "ownerId",
    "projectId",
    "requires",
    "source",
    "sourceKind",
    "targets",
    "timeout",
    "updatedAt"
  ],
  "properties": {
    "id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "ownerId": {
      "type": "string"
    },
    "projectId": {
      "type": "string"
    },
    "isRerequestable": {
      "type": "boolean",
      "enum": [
        false,
        true
      ]
    },
    "requires": {
      "type": "string",
      "enum": [
        "build-ready",
        "deployment-url",
        "none"
      ]
    },
    "source": {
      "oneOf": [
        {
          "type": "object",
          "required": [
            "integrationConfigurationId",
            "integrationId",
            "kind"
          ],
          "properties": {
            "kind": {
              "type": "string",
              "enum": [
                "integration"
              ]
            },
            "integrationId": {
              "type": "string"
            },
            "integrationConfigurationId": {
              "type": "string"
            },
            "resourceId": {
              "type": "string"
            },
            "externalResourceId": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "kind"
          ],
          "properties": {
            "kind": {
              "type": "string",
              "enum": [
                "webhook"
              ]
            },
            "webhookId": {
              "type": "string"
            }
          }
        },
        {
          "type": "object",
          "required": [
            "externalCheckName",
            "kind",
            "provider"
          ],
          "properties": {
            "kind": {
              "type": "string",
              "enum": [
                "git-provider"
              ]
            },
            "provider": {
              "type": "string",
              "enum": [
                "bitbucket",
                "github",
                "gitlab"
              ]
            },
            "externalCheckName": {
              "type": "string"
            }
          }
        }
      ]
    },
    "blocks": {
      "type": "string",
      "enum": [
        "build-start",
        "deployment-alias",
        "deployment-promotion",
        "deployment-start",
        "none"
      ]
    },
    "targets": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "sourceKind": {
      "type": "string",
      "enum": [
        "git-provider",
        "integration",
        "vercel",
        "webhook",
        "integration",
        "webhook",
        "git-provider"
      ]
    },
    "sourceIntegrationConfigurationId": {
      "type": "string"
    },
    "timeout": {
      "type": "number"
    },
    "createdAt": {
      "type": "number"
    },
    "updatedAt": {
      "type": "number"
    },
    "deletedAt": {
      "type": "number"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 500: No description

---

## Related

- [checks-v2 endpoints](/docs/rest-api#checks-v2)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
