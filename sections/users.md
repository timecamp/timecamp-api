Users
======


Get /users
----------

Return all users from account.

Example:
`https://www.timecamp.com/third_party/api/users/format/json/api_token/a36cabi96bba83f826`

```bash
[
{
  "user_id":"3621",
  "email":"j.olsffzak@timecamp.com",
  "login_count":"123",
  "display_name":"Jakub Olszak", // can be null, if no display_name provided
  "synch_time":"2015-03-25 12:12:12", // when no synch_time, returns "1970-01-01 01:00:00", timestamp 0 + timezone
  "login_time":"2015-03-26 12:12:12", // when login_count is 0, returns "1970-01-01 01:00:00", timestamp 0 + timezone
  "group_id":"111"
},
{
  "user_id":"640",
  "email":"k.rudnfeicki@timecamp.com",
  "login_count":"5170",
  "display_name":"Kamil Rudnicki",
  "synch_time":"2015-03-25 12:12:12",
  "login_time":"2015-03-25 12:12:12",
  "group_id":"111"
}
]
```
