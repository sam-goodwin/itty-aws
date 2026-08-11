---
title: get-a-project-domain
product: vercel
url: /docs/rest-api/projects/get-a-project-domain
canonical_url: "https://vercel.com/docs/rest-api/projects/get-a-project-domain"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about get-a-project-domain on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Get a project domain

```http
GET /v9/projects/{idOrName}/domains/{domain}
```

Get project domain by project id/name and domain name.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `domain` | string | Yes | The project domain name |


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
      "description": "A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.",
      "items": {
        "type": "object",
        "description": "A list of verification challenges, one of which must be completed to verify the domain for use on the project. After the challenge is complete `POST /projects/:idOrName/domains/:domain/verify` to verify the domain. Possible challenges: - If `verification.type = TXT` the `verification.domain` will be checked for a TXT record matching `verification.value`.",
        "required": [
          "domain",
          "reason",
          "type",
          "value"
        ],
        "properties": {
          "type": {
            "type": "string"
          },
          "domain": {
            "type": "string"
          },
          "value": {
            "type": "string"
          },
          "reason": {
            "type": "string"
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

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
