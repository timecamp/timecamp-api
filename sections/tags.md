Tags
======


Get /tag/{id}
----------

Return tag data.

Example:
`https://www.timecamp.com/third_party/api/tag/123`

Response:
```json
{
  "id":"123",
  "name":"tag name",
  "archived":"0",
  "tag_list_id":"456"
}
```

Post /tag/
----------

Create new tag.

Example:
`https://www.timecamp.com/third_party/api/tag`

Params (all required):
* name: "tag name"
* list: "456" // tag list id

Put /tag/{id}
----------

Update tag name.

Example:
`https://www.timecamp.com/third_party/api/tag/123`

Params (all required):
* name: "new tag name"

Get /tag_list/
----------

Return all tag lists for user.

Example:
`https://www.timecamp.com/third_party/api/tag_list`

Response:
```json
[
    {
      "id":"456",
      "name":"tag list one"
    },
    {
      "id":"789",
      "name":"tag list two"
    }
]
```

Get /tag_list/{id}
----------

Return tag list data.

Example:
`https://www.timecamp.com/third_party/api/tag_list/456`

Response:
```json
{
  "id":"456",
  "name":"tag list one",
  "archived":"0"
}
```

Get /tag_list/{id}/tags
----------

Return tags from tag list.

Example:
`https://www.timecamp.com/third_party/api/tag_list/456/tags`

Response:
```json
[
    {
        "id":"123",
        "name":"tag one",
    },
    {
        "id":"321",
        "name":"tag two",
    }
]
```

Post /tag_list/
----------

Create new tag list.

Example:
`https://www.timecamp.com/third_party/api/tag_list`

Params (all required):
* name: "tag list name"

Put /tag_list/{id}
----------

Update tag name.

Example:
`https://www.timecamp.com/third_party/api/tag_list/123`

Params (all required):
* name: "new tag list name"
