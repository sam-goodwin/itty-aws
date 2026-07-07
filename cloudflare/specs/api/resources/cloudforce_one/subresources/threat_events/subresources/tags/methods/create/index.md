## Creates a new tag

**post** `/accounts/{account_id}/cloudforce-one/events/tags/create`

Creates a new tag to be used accross threat events.

### Path Parameters

- `account_id: string`

  Account ID.

### Body Parameters

- `value: string`

- `activeDuration: optional string`

- `actorCategory: optional string`

- `aliasGroupNames: optional array of string`

- `aliasGroupNamesInternal: optional array of string`

- `analyticPriority: optional number`

- `attributionConfidence: optional string`

- `attributionOrganization: optional string`

- `categoryUuid: optional string`

- `externalReferenceLinks: optional array of string`

- `internalDescription: optional string`

- `motive: optional string`

- `opsecLevel: optional string`

- `originCountryISO: optional string`

- `priority: optional number`

- `sophisticationLevel: optional string`

### Returns

- `uuid: string`

- `value: string`

- `activeDuration: optional string`

- `actorCategory: optional string`

- `aliasGroupNames: optional array of string`

- `aliasGroupNamesInternal: optional array of string`

- `analyticPriority: optional number`

- `attributionConfidence: optional string`

- `attributionOrganization: optional string`

- `categoryName: optional string`

- `categoryUuid: optional string`

- `externalReferenceLinks: optional array of string`

- `internalDescription: optional string`

- `motive: optional string`

- `opsecLevel: optional string`

- `originCountryISO: optional string`

- `originCountryISOAlpha3: optional string`

- `priority: optional number`

- `sophisticationLevel: optional string`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/cloudforce-one/events/tags/create \
    -H 'Content-Type: application/json' \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN" \
    -d '{
          "value": "APT28",
          "categoryUuid": "12345678-1234-1234-1234-1234567890ab"
        }'
```

#### Response

```json
{
  "uuid": "12345678-1234-1234-1234-1234567890ab",
  "value": "APT28",
  "activeDuration": "activeDuration",
  "actorCategory": "actorCategory",
  "aliasGroupNames": [
    "string"
  ],
  "aliasGroupNamesInternal": [
    "string"
  ],
  "analyticPriority": 0,
  "attributionConfidence": "attributionConfidence",
  "attributionOrganization": "attributionOrganization",
  "categoryName": "Nation State",
  "categoryUuid": "12345678-1234-1234-1234-1234567890ab",
  "externalReferenceLinks": [
    "string"
  ],
  "internalDescription": "internalDescription",
  "motive": "motive",
  "opsecLevel": "opsecLevel",
  "originCountryISO": "originCountryISO",
  "originCountryISOAlpha3": "IRN",
  "priority": 0,
  "sophisticationLevel": "sophisticationLevel"
}
```
