## Code for Cause Leaders website

One stop destination for showcasing the community you have built.

## Contributions and PR

- PRs should be generated against `development`.
- Remember to run `npm run format` before creating pull request.
- Netlify willl create a preview inside pull request, Please check if your work is fine.

## Firebase Setup
(optional)

A firebase account is already created, but you will not have the access to it.
- To create your own firebase instance, [create a firebase project]('https://firebase.google.com/docs/web/setup')
- Now change it to provide your firebase credentials [here]('https://github.com/codeforcauseorg/Code-for-cause-Leaders/blob/master/src/services/authService.js#L8-LL13')


## Build Setup

```bash
# install dependencies
npm install

# development run
npm run start

# build for production
npm run build
```

## Project Structure

    .
    ├── build                   # Compiled files
    ├── src                     # Source files
    └── ...

## Src Structure

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── assets              # assets for the website
    |   ├── index.js            # starting point
    │   └── ...
    └── ...
