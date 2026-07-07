## Fetch details of a participant

**get** `/accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants/{participant_id}`

Returns details of the given participant ID along with call statistics for the given session ID.

### Path Parameters

- `account_id: string`

  The account identifier tag.

- `app_id: string`

  The app identifier tag.

- `session_id: string`

- `participant_id: string`

### Query Parameters

- `filters: optional "device_info" or "ip_information" or "precall_network_information" or 2 more`

  Comma separated list of filters to apply. Note that there must be no spaces between the filters.

  - `"device_info"`

  - `"ip_information"`

  - `"precall_network_information"`

  - `"events"`

  - `"quality_stats"`

- `include_peer_events: optional boolean`

  if true, response includes all the peer events of participant.

### Returns

- `data: optional object { participant }`

  - `participant: optional object { id, created_at, custom_participant_id, 7 more }`

    - `id: optional string`

      Participant ID. This maps to the corresponding peerId.

    - `created_at: optional string`

      timestamp when this participant was created.

    - `custom_participant_id: optional string`

      ID passed by client to create this participant.

    - `display_name: optional string`

      Display name of participant when joining the session.

    - `duration: optional number`

      number of minutes for which the participant was in the session.

    - `joined_at: optional string`

      timestamp at which participant joined the session.

    - `left_at: optional string`

      timestamp at which participant left the session.

    - `preset_name: optional string`

      Name of the preset associated with the participant.

    - `updated_at: optional string`

      timestamp when this participant's data was last updated.

    - `user_id: optional string`

      User id for this participant.

- `success: optional boolean`

### Example

```http
curl https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/realtime/kit/$APP_ID/sessions/$SESSION_ID/participants/$PARTICIPANT_ID \
    -H "Authorization: Bearer $CLOUDFLARE_API_TOKEN"
```

#### Response

```json
{
  "data": {
    "participant": {
      "id": "id",
      "created_at": "created_at",
      "custom_participant_id": "custom_participant_id",
      "display_name": "display_name",
      "duration": 0,
      "joined_at": "joined_at",
      "left_at": "left_at",
      "preset_name": "preset_name",
      "updated_at": "updated_at",
      "user_id": "user_id"
    }
  },
  "success": true
}
```
