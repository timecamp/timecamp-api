PHP Examples
====================


Adding new task
----------------

```php
{
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,'https://www.timecamp.com/third_party/api/tasks/api_token/a36ca9cba82');
curl_setopt($ch,CURLOPT_POST, 1);
curl_setopt($ch,CURLOPT_POSTFIELDS, array('name' => 'Task API', 'tags' => 'tag 1, tag 2'));
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
 $result = curl_exec($ch);
 curl_close($ch);
}
```

Getting time entries 
----------------

For all users, and all tasks you have access to.

```php
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,'https://www.timecamp.com/third_party/api/entries/format/json/api_token/a36ca9cbad826/from/2013-02-01/to/2013-03-20'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$entries = curl_exec($ch);
curl_close($ch);
$entries = json_decode($entries, true);

$ch = curl_init();   curl_setopt($ch,CURLOPT_URL,'https://www.timecamp.com/third_party/api/tasks/format/json/api_token/a36ca9cbad826'));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$tasks = curl_exec($ch);
curl_close($ch);
$tasks = json_decode($tasks, true);

foreach($entries as $entry)
{
    echo "{$entry['user_id']} - {$entry['date']} - {$tasks[$entry['task_id']]['name']}  - {$entry['duration']} - {$entry['description']} <br />";
}
```
