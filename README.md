# SBS Development Challenge

## Details

* **Framework used** * CraftCMS
* **Front end framework used** * React Js


## File Structure

```
|-- ./
|-- src/ [1]
|-- web/ [2]
|   |-- res/ [3]
```

* [1] Front end source files
* [2] Public web folder
* [3] Build files

## Development Process

1. Clone the repository at [https://github.com/vdgvzr/sbsDevChallenge]
2. Run `npm i` to install front end library files. **Note**: Check you are using the right version of NodeJS first with `nvm use`.
3. Run `composer install`.
4. Create a `./.env` file. (Example in root). Fill in environment, database etc. details.
5. Point a web server at `./web`.

### Available build tasks

The following tasks are available for building files into distribution folders.
`cd ./src` to run.

| Command | Description | Watches?
| -- | -- | --
| `npm run build` | Package up front-end assets for development | N
| `npm run watch` |  Package up front-end assets for development | Y

## Notable CMS plugins used

The following CMS plugins have been used on the site:

| Name | Purpose
| :-- | :--
| Element API | Build API endpoints for use in React Frontend
| Redactor | Rich text editor for entries
| Super Table | Super table layout for entry fields

## Notable JS libraries used

The following libraries have been used on the site:

| Name | NPM? | Purpose
| :-- | :-- | :--
| Flickity | Y | Interactive carousel component
| Bootstrap | Y | CSS framework
