TimeCamp API
====================

This is a REST-style API. [TimeCamp](https://www.timecamp.com) API lets you do some basic things with tasks. You can contact us at [support@timecamp.com](mailto:support@timecamp.com). We are very open to new ideas and requests regarding API.


Making a request
----------------

All URLs start with `https://app.timecamp.com/third_party/api`. **SSL only**.
That's all!


Authentication
--------------

Authentication is very simple. You must put your API token in every API request. You can provide API token in POST or GET http method. You can also provide token in HTTP header: `Authorization: <token>`. The name for API token field is: api_token
Example:
`https://app.timecamp.com/third_party/api/tasks/format/json/api_token/a36cabi96bba83f826`

**To get your API token please go to your [Account Settings](https://app.timecamp.com/people/edit).**


Result data formats
---------------

* xml (default)
* json
* csv
* other: rawxml, jsonp, serialized, php, html 

Example:
`https://app.timecamp.com/third_party/api/tasks/format/json/api_token/a36cabi96bba83f826`


Sent data formats
---------------

We accept request data only in PHP form format. Example:
```bash
// good way
id=3621&duration=3600&user_id=123&description=asdf
    
// bad way
{
  "id":"3621",
  "duration":"3600",
  "user_id":"123",
  "description":""
}
```

If you use jQuery.ajax(), then omit JSON.stringify() and use plain JS object as request data value: 

`$.ajax({url:'our/api/endpoint', data: {prop:'val', prop2:'val2}})`.

Handling errors
---------------

If a API request failed, an array of localized error messages and error code will be returned.
Response example:
```json
{
"message":"sample message",
"code":401
}
```


API ready for use
-----------------

* [Users](https://github.com/timecamp2/timecamp-api/blob/master/sections/users.md)
* [Groups](https://github.com/timecamp2/timecamp-api/blob/master/sections/group.md)
* [Tasks](https://github.com/timecamp2/timecamp-api/blob/master/sections/tasks.md)
* [Time entries](https://github.com/timecamp2/timecamp-api/blob/master/sections/time-entries.md)
* [Timer](https://github.com/timecamp2/timecamp-api/blob/master/sections/timer.md)
* [Computer activities](https://github.com/timecamp2/timecamp-api/blob/master/sections/computer-activities.md)
* [Clients](https://github.com/timecamp2/timecamp-api/blob/master/sections/clients.md)
* [Invoices](https://github.com/timecamp2/timecamp-api/blob/master/sections/invoices.md)
* [Attendance](https://github.com/timecamp2/timecamp-api/blob/master/sections/attendance.md)
* [Away time from computer](https://github.com/timecamp2/timecamp-api/blob/master/sections/away-time.md)
* [Approvals](https://github.com/timecamp2/timecamp-api/blob/master/sections/approvals.md)

Examples
-----------------

* [PHP Library](https://packagist.org/packages/gisforgirard/timecamp-api) (thanks to [gisforgirard](https://github.com/gisforgirard))
* [PHP Examples](https://github.com/timecamp2/timecamp-api/blob/master/sections/php-examples.md)
* [JS Examples](https://github.com/timecamp2/timecamp-api/blob/master/sections/js-examples.md)
