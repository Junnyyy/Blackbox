# Blackbox ⚡

Blackbox is a discord bot built in Typescript that helps with server management

## Installation/Startup guide 🔨

Node version requirement

```
version >= 16.xx.x
```

#### 1. Install packages

```
yarn
```

#### 2. Environmental variables

- create a '.env' file in the source directory

```env
# located in ./.env
# env format

TOKEN = "Discord bot token"
GUILD_ID = "Your guild ID here"
```

#### 3. Config files

- Config file is located at [src/config.json](https://github.com/Junnyyy/Blackbox/blob/2aecb39b6342e36852fa101b73ed2b4d9a7ebf28/src/config.json) in JSON format

Object structure

- `"activityType":` The type of activity shown in bot activity status.

   - `(Options: "STREAMING", "WATCHING", "CUSTOM_STATUS", "PLAYING", "COMPETING")`

- `"activityMessage":` The message after activity type. 
   - `(Options: Any string)`

- `"status":` The status displayed by the bot. 
   - `(Options: "online", "idle", "invisible", "dnd")`

- `"creatorID":` Discord ID of bot owner. 
   - `(Options: "Any string of numbers" or empty)`

- `"about":` The about message for any commands that display an about message. 
   - `(Options: Any string)`
Example config
```json
{
  "activityType": "WATCHING", 
  "activityMessage": "the logs ⚡",
  "status": "dnd",
  "creatorID": "123456789101112131",
  "about": "Blackbox is an all-encompassing server management bot. Designed with server staff and user-friendliness in mind."
}
```

#### 4. Start Application

- To start as developer
  (Uses ts-node-dev)

```
yarn run start:dev
```

- Start locally

```
yarn start
```

- Build

```
yarn run build
```

- Clean Build

```
yarn run clean
```

## Technologies 📡

#### Languages

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

#### Back-end

![DiscordJS](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
   
#### Database

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

#### Hosting

![AWS](https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)
