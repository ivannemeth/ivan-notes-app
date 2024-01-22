Notes app using Next.js and MongoDB database

User Story 1: List of all Notes (homepage)

Value Proposition
As a person that likes order
I want to see a list of all added notes (default: empty)
so that I can get an overview of all of them

Acceptance Criteria
All added notes are displayed as a list of notes
In the Header there is a add note button
Each note has an edit note and delete note icon
Notes are being saved in MongoDB Database

Tasks
…

User Story 2 : Add a note page or pop-up window

Value Proposition
As a person that likes order
I want to be able to add a new note consisting of a header and the text
so that I can be added to the list of all notes (homepage)

Acceptance Criteria
A new page opens after clicking to add a new note on the homepage
There is a form - headline and text field
and a submit button
The note on the Homepage and MondoDB will be added

Tasks
…

User Story 3 : Edit a note page or pop-up window

Value Proposition
As a person that likes order
I want to be able to edit the existing note
so that I don't have to delete and create a new one if there are changes

Acceptance Criteria
A new page opens after clicking on the edit icon inside of note on the homepage
There is a form - headline and text field that can be edited
and a submit button
The note on the Homepage and MondoDB will be updated

Tasks
…

User Story 4 : Delete a note

Value Proposition
As a person that likes order
I want to be able to delete and existing note
so that I can see only the notes that are still relevant

Acceptance Criteria
A note will be deleted after clicking on the icon inside of the note
There is a pop-up window asking for a delete confirmation
The note on the Homepage and MondoDB will be deleted

Tasks
…

User Story 5 : Notes in different colors

Value Proposition
As a person that likes order
I want to be able to add notes in different colors
so that I can separate different clusters/topic/importance

Acceptance Criteria
Option 1: When adding the note (Add Note site) - there is an option to choose a color
Option 2: There are sticky notes icons in 2/3 different colors on the homepage that lead to add a Note site with chosen color

Tasks
…

Bonus: User Story 6 : Filter notes by its color

Value Proposition
As a person that likes order
I want to be able to filter my notes according to its color

Acceptance Criteria

Tasks
…

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
