---
title: accept-project-transfer-request
product: vercel
url: /docs/rest-api/projects/accept-project-transfer-request
canonical_url: "https://vercel.com/docs/rest-api/projects/accept-project-transfer-request"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about accept-project-transfer-request on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Accept project transfer request

```http
PUT /projects/transfer-request/{code}
```

Accept a project transfer request initated by another team. <br/> The `code` is generated using the `POST /projects/:idOrName/transfer-request` endpoint.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `code` | string | Yes | The code of the project transfer request. |


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
  "properties": {
    "newProjectName": {
      "type": "string",
      "description": "The desired name for the project",
      "maxLength": 100
    },
    "paidFeatures": {
      "type": "object",
      "properties": {
        "concurrentBuilds": {
          "type": "integer",
          "nullable": true
        },
        "passwordProtection": {
          "type": "boolean",
          "nullable": true
        },
        "previewDeploymentSuffix": {
          "type": "boolean",
          "nullable": true
        }
      }
    },
    "acceptedPolicies": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "required": [
          "eula",
          "privacy"
        ],
        "properties": {
          "eula": {
            "type": "string",
            "format": "date-time"
          },
          "privacy": {
            "type": "string",
            "format": "date-time"
          }
        },
        "additionalProperties": {
          "type": "string",
          "format": "date-time"
        }
      }
    }
  }
}
```

## Responses

### 202: The project has been transferred successfully.

Content-Type: `application/json`

```json
{
  "oneOf": [
    {
      "type": "object",
      "required": [
        "partnerCalls",
        "resourceTransferErrors",
        "transferredStoreIds"
      ],
      "properties": {
        "partnerCalls": {
          "type": "array",
          "items": {
            "type": "object",
            "required": [
              "installationId",
              "resourceIds",
              "result"
            ]
          }
        },
        "resourceTransferErrors": {
          "type": "array",
          "items": {
            "type": "object"
          }
        },
        "transferredStoreIds": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      }
    },
    {
      "type": "object"
    }
  ]
}
```

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 404: No description

### 410: No description

### 422: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
