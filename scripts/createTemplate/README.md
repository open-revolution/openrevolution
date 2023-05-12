## Markdown => Html => (Brevo) Email template

Script to convert markdown to html and upload as a template to Brevo (sendinblue) via API.

### Prerequisite

Before running the script we need a Brevo api key and a markdown file with required frontmatter data (see details below).

Create a `.env` file in createTemplate's root and add the variable as shown below..

```env
BREVO_API_KEY=your_api_key
```

### Running the script

Make sure you have node installed. `node -v`

- cd into the directory `cd scripts/createTemplate`
- `npm install`
- run `node index.js`
- provide the path to the template/markdoen file eg. `template.md`

### Markdown format for creating/updating a template

> **!important**
> Frontmatter fields `senderEmail` and `replyTo` should be valid emails from Brevo.
> If frontmatter isn't provided, default values will be used.

#### Creating a template

Add frontmatter with following fields at the top of the markdown file.

```md
---
title: "Template name"
subject: "Subject of email template"
senderName: "Sender's name"
senderEmail: "Sender's email"
replyTo: "reply email"
---

content here
```

#### Updating a template

If the template already exists and you want to update it, then add an `id` field in the frontmatter with the value matching the template's id in Brevo.

```md
---
id: 33
---

content here
```

The template id can be found in the table list as `#(id)` in Brevo -> Campaigns -> Templates.
