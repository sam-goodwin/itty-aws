---
title: create-a-team
product: vercel
url: /docs/rest-api/teams/create-a-team
canonical_url: "https://vercel.com/docs/rest-api/teams/create-a-team"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about create-a-team on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Create a Team

```http
POST /v1/teams
```

Create a new Team under your account. You need to send a POST request with the desired Team slug, and optionally the Team name.

## Authentication

**bearerToken**: HTTP bearer

## Request body

Required: Yes

Content-Type: `application/json`

```json
{
  "type": "object",
  "required": [
    "slug"
  ],
  "properties": {
    "slug": {
      "type": "string",
      "description": "The desired slug for the Team",
      "maxLength": 48
    },
    "name": {
      "type": "string",
      "description": "The desired name for the Team. It will be generated from the provided slug if nothing is provided",
      "maxLength": 256
    },
    "attribution": {
      "type": "object",
      "description": "Attribution information for the session or current page",
      "properties": {
        "sessionReferrer": {
          "type": "string",
          "description": "Session referrer"
        },
        "landingPage": {
          "type": "string",
          "description": "Session landing page"
        },
        "pageBeforeConversionPage": {
          "type": "string",
          "description": "Referrer to the signup page"
        },
        "utm": {
          "type": "object",
          "properties": {
            "utmSource": {
              "type": "string",
              "description": "UTM source"
            },
            "utmMedium": {
              "type": "string",
              "description": "UTM medium"
            },
            "utmCampaign": {
              "type": "string",
              "description": "UTM campaign"
            },
            "utmTerm": {
              "type": "string",
              "description": "UTM term"
            }
          }
        }
      }
    }
  }
}
```

## Responses

### 200: The team was created successfully

Content-Type: `application/json`

```json
{
  "type": "object",
  "description": "The team was created successfully",
  "required": [
    "id",
    "slug"
  ],
  "properties": {
    "id": {
      "type": "string",
      "description": "Id of the created team"
    },
    "slug": {
      "type": "string"
    }
  }
}
```

### 400: One of the provided values in the request body is invalid.
The slug is already in use

### 401: No description

### 403: You do not have permission to access this resource.

### 404: No description

### 409: No description

### 410: No description

---

## Related

- [teams endpoints](/docs/rest-api#teams)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
