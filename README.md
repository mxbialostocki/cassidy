# cassidy
Cassidy is an extrapolated refactoring of a project that returned a book reccomendation from privately curated list. Once a user engages with the Landing page, a single review is returned. If the user doesn't like the review, they can say so by interacting with the page again to return a subsequent review. 

The backend Daemon allows admin to add, delete, and update entries in a MongoDB database.

All content has been distilled from the fumes of the blood of uber-eperienced booksellers.

## To run:
1. Clone down to your Local Machine
2. Navigate to the new repo and run `npm install`
2. in /SERVER, create `.env` and update it with your MongoDB account details as per `.env.example`
3. you will need to run `npm run relay` to generate your GraphQL schemas with Relay
4. then run `npm start` to spin up your server at `localhost:4000`. You should be able to see Cassidy rendering in the browser.
4. You can also spin up the dev server (`npm run dev`) if you wat to run webpack and nodemon
5. In the browser, you can navigate to localhost:4000/graphql to test and run queries and mutations

## Notes:
If you alter your queries at all, you will need to run `npm run relay` again

The previous iteration of Cassidy used Redux for state management and sqlite as a Database. This iteration started with the jambu boilerplate(https://github.com/mxbialostocki/jambu), using React, Relay and Javascript on the front end and MongoDB, GraphQL and Express on the back end, with most styling in Material-UI.

### to do
- [x] params
- [ ] daemon auth
- [ ] jacket filepath
- [ ] bookstore seeking link
- [x] webpack / build config
- [x] restructure determination for mongo
- [ ] write determination buttons
- [ ] imprint={void} true
- [ ] strip legacy styling
- [x] scroll-to-top in mobile view
- [x] refactor query structure
- [x] Typography >> Markdown
- [x] Sizing for xl devices
- [x] directory structure >> lib
- [ ] unit tests(jest)
- [ ] end-to-end tests(cypress)
