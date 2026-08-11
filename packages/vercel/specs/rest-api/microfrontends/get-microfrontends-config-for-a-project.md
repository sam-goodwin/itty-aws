---
title: get-microfrontends-config-for-a-project
product: vercel
url: /docs/rest-api/microfrontends/get-microfrontends-config-for-a-project
canonical_url: "https://vercel.com/docs/rest-api/microfrontends/get-microfrontends-config-for-a-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-microfrontends-config-for-a-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get microfrontends config for a project

```http
GET /v1/microfrontends/projects/{projectIdOrName}/production-mfe-config
```

Get the microfrontends config for a project by ID or name.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `projectIdOrName` | string | Yes | The name or ID of the project |


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
  "required": [
    "config"
  ],
  "properties": {
    "config": {
      "type": "object",
      "description": "projectIds are added when the config is uploaded to s3 deployment assets.",
      "nullable": true,
      "required": [
        "applications"
      ],
      "properties": {
        "$schema": {
          "type": "string",
          "description": "See https://openapi.vercel.sh/microfrontends.json."
        },
        "version": {
          "type": "string",
          "description": "The version of the microfrontends config schema.",
          "enum": [
            "1"
          ]
        },
        "applications": {
          "type": "object",
          "additionalProperties": {}
        },
        "options": {
          "type": "object",
          "description": "Optional configuration options for the microfrontend.",
          "properties": {
            "disableOverrides": {
              "type": "boolean",
              "description": "If you want to disable the overrides for the site. For example, if you are managing rewrites between applications externally, you may wish to disable the overrides on the toolbar as they will have no effect. See https://vercel.com/docs/microfrontends/managing-microfrontends/vercel-toolbar#routing-overrides.",
              "enum": [
                false,
                true
              ]
            },
            "localProxyPort": {
              "type": "number",
              "description": "The port number used by the local proxy server. The default value is 3024. See https://vercel.com/docs/microfrontends/local-development."
            }
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

### 404: No description

### 410: No description

### 500: No description

---

## Related

- [microfrontends endpoints](/docs/rest-api#microfrontends)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
