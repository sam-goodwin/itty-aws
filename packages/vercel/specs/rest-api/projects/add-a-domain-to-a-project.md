---
title: add-a-domain-to-a-project
product: vercel
url: /docs/rest-api/projects/add-a-domain-to-a-project
canonical_url: "https://vercel.com/docs/rest-api/projects/add-a-domain-to-a-project"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about add-a-domain-to-a-project on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Add a domain to a project

```http
POST /v10/projects/{idOrName}/domains
```

Add a domain to the project by passing its domain name and by specifying the project by either passing the project `id` or `name` in the URL. If the domain is not yet verified to be used on this project, the request will return `verified = false`, and the domain will need to be verified according to the `verification` challenge via `POST /projects/:idOrName/domains/:domain/verify`. If the domain already exists on the project, the request will fail with a `400` status code.

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
  "required": [
    "name"
  ],
  "properties": {
    "name": {
      "type": "string",
      "description": "The project domain name"
    },
    "gitBranch": {
      "type": "string",
      "description": "Git branch to link the project domain",
      "maxLength": 250,
      "nullable": true
    },
    "customEnvironmentId": {
      "type": "string",
      "description": "The unique custom environment identifier within the project"
    },
    "redirect": {
      "type": "string",
      "description": "Target destination domain for redirect",
      "nullable": true
    },
    "redirectStatusCode": {
      "type": "integer",
      "description": "Status code for domain redirect",
      "enum": [
        null,
        301,
        302,
        307,
        308
      ],
      "nullable": true
    }
  }
}
```

## Responses

### 200: The domain was successfully added to the project

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

### 400: One of the provided values in the request body is invalid.
One of the provided values in the request query is invalid.
The domain is not valid
You can't set both a git branch and a redirect for the domain
The domain can not be added because the latest production deployment for the project was not successful
The domain redirect is not valid
A domain cannot redirect to itself
You can not set the production branch as a branch for your domain

### 401: The request is not authorized.

### 402: The account is missing a payment so payment method must be updated

### 403: You do not have permission to access this resource.
You don't have access to the domain you are adding

### 409: The domain is already assigned to another Vercel project
Cannot create project domain since owner already has `domain` on their account, but it's not verified yet.
Cannot create project domain since owner already has `domain` on their account, and it's verified.
The domain is not allowed to be used
The project is currently being transferred

### 410: No description

---

## Related

- [projects endpoints](/docs/rest-api#projects)

- [REST API overview](/docs/rest-api)

- [OpenAPI spec](https://openapi.vercel.sh/) (machine-readable, all endpoints)

---

[View full sitemap](/docs/sitemap)
