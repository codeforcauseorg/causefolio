<h1 align="center">
     CauseFolio
</h1>

## Description

One stop destination for showcasing the community you have built.

### Table of Contents

- [Tech Stack](#tech-stack)
- [Setup and Run](#setup-run)
  - [Setup local repo](#setup-repo)
  - [Setup Firebase credentials](#setup-firebase)
  - [Setup remote](#setup-remote)
  - [Update fork repo](#update-repo)
  - [Run app](#run-app)
  - [Build app](#build-app)
- [Contributing and PR](#contributing)
- [Project Structure](#projectstructure)
- [Src Structure](#srcstructure)
- [Contributors](#contributors)

<a id="tech-stack"></a>

## ⚙️ Tech Stack

- JavaScript/TypeScript
- [NodeJs](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)

<a id="setup-run"></a>

## 🔨 Setup and Run

<a id="setup-repo"></a>

### Setup local repo

Let's setup the backend server on your local machine.

### 0. Prerequisites

- Install [Node.js](http://nodejs.org)

### 1. Fork repo

Fork this repo to your GitHub account  
![](https://i.ibb.co/wK4nFy9/Causefolio-fork.png)

### 2. Clone repo

Clone the forked repo to your local machine

```bash
git clone https://github.com/<YOUR-GITHUB-USERNAME>/causefolio.git
```

Navigate to project directory

```bash
cd causefolio
```

### 3. Install Dependencies

```bash
npm install
```

<a id="setup-firebase"></a>

### 4. Setup firebase for development (optional)

A firebase account is already created, but you will not have the access to it.

- To use your own firebase instance, create a new firebase project using [firebase console](https://console.firebase.google.com/).
- After creating a project, go to [project settings](https://console.firebase.google.com/project/_/settings/general/).
- In project settings of your newly created project there will be a section called 'Your Apps' which says 'There are no apps in your project, Select a platform to get started.'
- Click on the 'WebApp' Icon, then it will ask to register a new App.
  ![](https://i.ibb.co/n0psH7B/Firebaseapp.png)
- In the 2nd step of app registration, firebase will provide to you the firebase credentials of your app.
- Now change it to provide your firebase credentials [here](https://github.com/codeforcauseorg/Code-for-cause-Leaders/blob/master/src/services/authService.js#L8-LL13)

<a id="setup-remote"></a>

### 5. 📡 Setup remote

0. You will have to set up remote repositories for getting latest changes from original repository
1. Specify a new remote upstream repository that will be synced with the fork using following command :

```bash
$ git remote add upstream https://github.com/codeforcauseorg/causefolio.git
```

2. Verify the new upstream repository you've specified for your fork using `git remote -v`

```console

origin  https://github.com/<your-user-name>/causefolio.git (fetch)
origin  https://github.com/<your-user-name>/causefolio.git (push)
upstream        https://github.com/codeforcauseorg/causefolio.git (fetch)
upstream        https://github.com/codeforcauseorg/causefolio.git (push)

```

Your application setup is successfully completed!

<a id="update-repo"></a>

### 6. Update Fork Repo From Original Repo (Optional)

0. Follow these steps if you are done with <b>Setup Remote</b> ✅.
1. Update your local Master to be in synch with the original repo.

```console

$ git pull upstream <name_of_branch>

```

2. Update the forked repo master by pushing the local repo up.

```console

$ git push origin <name_of_branch>

```

<a id="run-app"></a>

### Running the app

```bash
# development
$ npm run start
```

<a id="build-app"></a>

### Build Setup

- After doing changes, run the command `npm run build` to build the app for production to the `build` folder.

```bash
# build for production
npm run build
```

<a id="contributing"></a>

### Contributions and PR

- PRs should be generated against `development`.
- Remember to run `npm run format` before creating pull request.
- Netlify will create a preview inside pull request. Please check if your work is fine.

<a id="projectstructure"></a>

## Project Structure

    .
    ├── build                   # Compiled files
    ├── src                     # Source files
    └── ...

<a id="srcstructure"></a>

## Src Structure

    .
    ├── ...
    ├── src
    │   ├── ...
    │   ├── assets              # assets for the website
    |   ├── index.js            # starting point
    │   └── ...
    └── ...

<a id="contributors"></a>

## Thanks to all the contributors ❤️

<a href = "https://github.com/codeforcauseorg/causefolio/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=codeforcauseorg/causefolio"/>
</a>
