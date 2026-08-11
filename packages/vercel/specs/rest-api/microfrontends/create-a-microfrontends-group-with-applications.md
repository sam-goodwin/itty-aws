---
title: create-a-microfrontends-group-with-applications
product: vercel
url: /docs/rest-api/microfrontends/create-a-microfrontends-group-with-applications
canonical_url: "https://vercel.com/docs/rest-api/microfrontends/create-a-microfrontends-group-with-applications"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-microfrontends-group-with-applications on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a microfrontends group with applications

```http
POST /v1/microfrontends/group
```

Creates a microfrontends group and attaches multiple projects in a single request.

## Authentication

**bearerToken**: HTTP bearer

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
    "groupName",
    "defaultApp",
    "otherApplications"
  ],
  "properties": {
    "groupName": {
      "type": "string",
      "description": "The name of the microfrontends group that will be used to identify the group"
    },
    "defaultApp": {
      "type": "object",
      "description": "The default app for the new microfrontend group",
      "required": [
        "projectId"
      ],
      "properties": {
        "projectId": {
          "type": "string",
          "description": "The id of the project that will be used as the default app for the new microfrontend group"
        },
        "defaultRoute": {
          "type": "string",
          "description": "The default route for the default app of the new microfrontend group"
        }
      }
    },
    "otherApplications": {
      "type": "array",
      "description": "The list of other applications that will be used in the new microfrontend group",
      "items": {
        "type": "object",
        "required": [
          "projectId"
        ],
        "properties": {
          "projectId": {
            "type": "string",
            "description": "The id of the project that will be used in the new microfrontend group"
          },
          "defaultRoute": {
            "type": "string",
            "description": "The default route for the application in the new microfrontend group"
          }
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
  "required": [
    "newMicrofrontendsGroup"
  ],
  "properties": {
    "newMicrofrontendsGroup": {
      "type": "object",
      "required": [
        "createdAt",
        "fallbackEnvironment",
        "id",
        "name",
        "slug",
        "updatedAt"
      ],
      "properties": {
        "id": {
          "type": "string"
        },
        "slug": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "fallbackEnvironment": {
          "type": "string"
        },
        "createdAt": {
          "type": "number"
        },
        "updatedAt": {
          "type": "number"
        }
      }
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.

### 401: The request is not authorized.

### 403: You do not have permission to access this resource.

### 410: No description

### 500: No description

---

## Related

- [microfrontends endpoints](/docs/rest-api#microfrontends)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
