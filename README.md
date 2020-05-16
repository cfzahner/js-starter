# Spa Starter

If you are only interested in the `parcel-spa` `branch`, when trying to `merge` this into `master`, you will most likely not be able to do so because of 'unrelated histories.'

You will have to get 'hardcore' with things. From `master`: `git reset --hard parcel-spa`.

Then: `git push origin master --force`

You can then do: `git branch -D parcel-spa` to remove that other `branch` IYW.

**Do not make a habit of destroying and `forc`ing `git` `histor`ies.**

## Overview

This template repository contains several opinionated, 'starter' files and settings to help students focus more time and energy on learning how to code and/or craft 'business logic' for projects and less time on configurations.

In addition to a '.gitignore' and some VS Code specific extensions and settings, it includes the 'recommended' settings for:

1. [ESLint](eslint.org)
2. [Stylelint](stylelint.io)
3. [![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

It uses [Parcel](https://parceljs.org/) for a simple build process and a `"serve"` script is included.

## Directory Structure and TODOs

### 'components' 📁

'components' will hold...your _functional components_ in individual JS files that have capitalized filenames (e.g. 'Table.js'). The code inside would start like this:

```js
// Use 'props' to create and 'return' markup that will be conveniently wrapped in TEMPLATE LITERALS.
export default (props) => ``
```

'./components/index.js' will manage `export`ing out the _components_ with `export { default as`

---

Other `TODO`s and 🎶 are sprinkled around in miscellaneous files to guide the overall process.

## Get Started

**First and foremost,** make sure that your local machine is set up with all of the 'dev environment tooling' as per [this guide...](https://www.notion.so/codefinity/Setting-up-a-Local-Dev-Environment-for-JS-02a4e9f4a30043d3a8e7d109be3448f4)

After establishing your directory structure on your local machine, (e.g. '~/Code'), kindly [follow these girections](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) - essentially, there should be a button 👆🏾that says **Use this template.**

Once this repo has been created on your GitHub, you can click on the button to `clone` it as usual. Once it's `clone`d to your local machine, kindly `cd` into the directory and **be sure to do:** `npm i` to build out 'node_modules'. This will provide you with some helpful tooling and linting.

Now, enter `code .` to open this project in VS Code, and look for a prompt to 'install some extensions' once inside VS Code (in the bottom right of your screen). You should install these. 👍🏾

Update this README and make any other initial changes or 🌱 files, etc. To help you do that, here's a [Markdown Guide](https://www.notion.so/codefinity/MarkDown-Guide-3c7aecdc1327437e9785cb9c1d277f42)
