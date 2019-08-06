Tags
======


Get /tag/{id}
----------

Return tag data.

Params description:  
- "archived": can be "0" or "1".
- "hasGroupRestrictions": can be "0" or "1". If it has a value of 1, it means that it has limitations in tag allowed groups list.

Example:
`https://www.timecamp.com/third_party/api/tag/123`

Response:
```json
{
  "id": "123",
  "name": "tag name",
  "archived": "0",
  "tagListId":" 456",
  "hasGroupRestrictions": "0"
}
```

Get /tag/{id}/groups
----------

Return tag allowed groups.

Params description:  
- "hasSubgroups": can be "0" or "1". If it gas a value of 1, it means that this group has subgroups.

Example:
`https://www.timecamp.com/third_party/api/tag/123/groups`

Response:
```json
{
  "123":
  {
    "id": "123",
    "name": "Group One / Subgroup / Group 123",
    "hasSubgroups": "0"
  },
  "456":
  {
    "id": "456",
    "name": "Group Two / Subgroup",
    "hasSubgroups": "1"
  }
}
```
Response on empty data:
```json
[]
```

Post /tag/
----------

Create new tag.

Example:
`https://www.timecamp.com/third_party/api/tag`

Params (all required): 
- name: "tag name"
- list: "456" // tag list id

Response (new tag id):
```json
123
```

Post /tag/{id}/group
----------

Add new group to tag allowed groups list.

Example:
`https://www.timecamp.com/third_party/api/tag/123/group`

Params (all required): 
- group: "456"

Response
```json
{
 "message": "OK"
}
```

Put /tag/{id}
----------

Update tag name or archive status.

Example:
`https://www.timecamp.com/third_party/api/tag/123`

Params (at least one is required): 
- name: "new tag name"
- archived: 1 (0 or 1)

Response
```json
{
 "message": "OK"
}
```

Delete /tag/{tagId}/group/{groupId}
----------

Delete group from allowed groups for tag.

Example:
`https://www.timecamp.com/third_party/api/tag/123/group/456`

Response
```json
{
 "message": "OK"
}
```

Get /tag_list/
----------

Return all tag lists data for user.

On default tag list does not include tags, get only unarchived tag lists / tags defined in user rootGroup. Data are filtered by checking if tags has group restrictions.

Possible filters as GET param (after '?' sign):
- "archived": 0 - not archived [default], 1 - only archived, null - all tag lists / tags
- "tags": 0 - without tags [default], 1 - include tags
- "use_restrictions": 1 - check user group and tag 'allowed group' restrictions [default], 0 - ignore tag 'allowed groups' restrictions
- "exclude_empty_tag_lists": 1 - exclude tag lists with empty tags [default], 0 - include empty tag lists
- "task_id": if You want get "white list" for task then set task_id

Note: 
- In response 'tags' key are include only if You use filter 'tags=1'. 
- Filter 'archived=0' return unarchived tag lists and tags, but 'archived=1' can return unarchived tag list if have archived tag.

- Beware using 'use_restrictions' and 'exclude_empty_tag_lists', because it applies only if 'tags=1'.

Example:
`https://www.timecamp.com/third_party/api/tag_list` same as `https://www.timecamp.com/third_party/api/tag_list?tags=0&archived=0&use_restrictions=1`

Response:
```json
{
  "456": 
    {
      "id": "456",
      "name": "tag list one",
      "archived": "0",
      "tags": {
          "123": {
              "id": "123",
              "name": "tag one",
              "archived": "0",
              "hasGroupRestrictions": "1"
          },
          "321": {
              "id": "321",
              "name": "tag two",
              "archived": "1",
              "hasGroupRestrictions": "0"
          }
      }
    },
  "789": 
    {
      "id": "789",
      "name": "tag list two",
      "archived": "1",
      "tags": []
    }
}
```

Get /tag_list/{id}
----------

Return tag list data.

On default tag list data does not include tags, get only unarchived tags defined in user rootGroup. Data are filtered by checking if tags has group restrictions.

Possible filters (as GET '?' param):
- "archived": 0 - not archived [default], 1 - only archived, null - all tags
- "tags": 1 - include tags [default], 0 - without tags
- "use_restrictions" 1 - check user group and tag 'allowed group' restrictions [default], 0 - ignore tag 'allowed groups' restrictions 

Note:
- In response 'tags' key are include only if You use filter 'tags=1'. 
- Filter is applies only for tags.
- If You omit 'archived' param then 'tags' always will be set as '1'. 

Example:
`https://www.timecamp.com/third_party/api/tag_list/456` same as `https://www.timecamp.com/third_party/api/tag_list/456?archived=0&tags=1&use_restrictions=1` 

Response:
```json
{
  "id": "456",
  "name": "tag list one",
  "archived": "0",
  "tags": {
            "123": {
                "id": "123",
                "name": "tag one",
                "archived": "0",
                "hasGroupRestrictions": "1"
            },
            "321": {
                "id": "321",
                "name": "tag two",
                "archived": "1",
                "hasGroupRestrictions": "0"
            }
        }
}
```

Get /tag_list/{id}/tags
----------

Return tags for tag list.

On default get only unarchived tags defined in user rootGroup. Data are filtered by checking if tags has group restrictions.

Possible filters (as GET '?' param):
- "archived": 0 - not archived [default], 1 - only archived, null - all tags
- "use_restrictions" 1 - check user group and tag 'allowed group' restrictions [default], 0 - ignore tag 'allowed groups' restrictions 

Note: Filter is applies only for tags.

Example:
`https://www.timecamp.com/third_party/api/tag_list/456/tags` same as `https://www.timecamp.com/third_party/api/tag_list/456/tags?archived=0&use_restrictions=1`

Response:
```json
{
  "123": 
    {
        "id": "123",
        "name": "tag one",
        "archived": "0",
        "hasGroupRestrictions": "1"
    },
  "321": 
    {
        "id": "321",
        "name": "tag two",
        "archived": "1",
        "hasGroupRestrictions": "0"
    }
}
```

Post /tag_list/
----------

Create new tag list.

Example:
`https://www.timecamp.com/third_party/api/tag_list`

Params (all required): 
- "name": "tag list name"

Response (new tag list id):
```json
456
```

Put /tag_list/{id}
----------

Update tag name.

Example:
`https://www.timecamp.com/third_party/api/tag_list/123`

Params (at least one is required): 
- "name": "new tag name"
- "archived": 1 (0 or 1)

