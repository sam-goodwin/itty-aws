---
title: verify-project-domain
product: vercel
url: /docs/rest-api/projects/verify-project-domain
canonical_url: "https://vercel.com/docs/rest-api/projects/verify-project-domain"
last_updated: 2026-08-10
type: reference
prerequisites:
  []
related:
  - /docs/rest-api
summary: Learn about verify-project-domain on Vercel.
install_vercel_plugin: npx plugins add vercel/vercel-plugin
---

# Verify project domain

```http
POST /v9/projects/{idOrName}/domains/{domain}/verify
```

Attempts to verify a project domain with `verified = false` by checking the correctness of the project domain's `verification` challenge.

## Authentication

**bearerToken**: HTTP bearer

## Path parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `idOrName` | string | Yes | The unique project identifier or the project name |
| `domain` | string | Yes | The domain name you want to verify |


## Query parameters

| Name | Type | Required | Description |
|---|---|---|---|
| `teamId` | string | No | The Team identifier to perform the request on behalf of. |
| `slug` | string | No | The Team slug to perform the request on behalf of. |


## Responses

### 200: The project domain was verified successfully
Domain is already verified

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
    }
  }
}
```

### 400: One of the provided values in the request query is invalid.
There is an existing TXT record on the domain verifying it for another project
The domain does not have a TXT record that attempts to verify the project domain
The TXT record on the domain does not match the expected challenge for the project domain
Project domain is not assigned to project

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
