---
title: list-all-checks-for-a-project
product: vercel
url: /docs/rest-api/checks-v2/list-all-checks-for-a-project
canonical_url: "https://vercel.com/docs/rest-api/checks-v2/list-all-checks-for-a-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about list-all-checks-for-a-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# List all checks for a project

```http
GET /v2/projects/{projectIdOrName}/checks
```

List all checks for a project, optionally filtered by target.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes |  |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `blocks` | string. enum: build-start, deployment-start, deployment-alias, deployment-promotion, none | No |  |
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: No description

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "checks"
  ],
  "properties": {
    "checks": {
      "type": "array",
      "items": {
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
          "source": {},
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
            "type": "array"
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
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.

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
