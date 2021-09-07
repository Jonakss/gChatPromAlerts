# gChatPromAlerts

Google Chat BOT made in Node.js, for sending notificaions to Rooms and dm's.


## Using Google Service Account Credentials

`export GOOGLE_APPLICATION_CREADENTIALS="<path_to_json>"`

## Data Structure

### Spaces
    - ID
    - type (dm, room w/threads, room wo/threads) 
    - enabled (Added to a space)
    - threads[]
      - fingerprints[]

* `onAddToSpace -> Creates a new space if not exist and enables it`
* `onRemoveFromSpace -> enabled to false, space it's avaiable but not usable`
