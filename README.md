## Running the project
This project depends on another repository that contains some specific endpoints
Clone/Download it here: https://github.com/leonimurilo/v-sports-server

1. Make sure the machine is setup correctly (see more below)
2. `npm install`
3. `npm start`
4. A browser tab will open and the application will start running

### Criterias completed:

1. User table content shall have information from the following endpoint:
**Done.**
2. E-mail column shall link to user’s e-mail address
**Done.**
3. City column shall link to Google Maps link with the correct latitude and longitude that is
 specified in the endpoint
**Done.**
4. Ride in Group and Day of the week columns shall be a different endpoint created by you
**Done.**
5. Posts, Albums and Photos shall be a count of items from the following endpoints ...
**Done.**
6. While hovering any row a trash icon must be shown in order to remove the row entry (data
 doesn’t need to persist)
**Done.**
7. Registration form shall follow the specification on the UI for the mouse over elements, focused field and selected options
**Done.**
8. Saving a new user the application shall add he/she to the end of the Users' table
 - Do not include link to Google Maps for new users
 - Posts, Albums and Photos count shall be set 0 for new users
**Done.**
9. Optional features:
 A. Filter User table content by any column using the filter field
**Done.**
 B. Open a new page by clicking on each user’s Posts or Albums count that show posts or
 albums with its respective comments and photos
**Not finished**. Since this is very time demanding, I haven't done this step, but here is an axplanation of how I would do it:
I would have used the render method of the Table component to render a custom cell (as I have done for the other columns) containing a React router's Link that would link to another page (albums or posts) by specifying the chosen user (/users/posts OR /users/albums).

I would have built components for Posts, albums, photos and comments like I've done with the sport page.

## Initial Machine Setup (required)

1. **Install [Node 8.0.0 or greater](https://nodejs.org)**

    Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm).

2. **Install [Git](https://git-scm.com/downloads)**.

3. **[Disable safe write in your editor](https://webpack.js.org/guides/development/#adjusting-your-text-editor)** to assure hot reloading works properly.

4. Complete the steps below for your operating system:

    ### macOS

    * Install [watchman](https://facebook.github.io/watchman/) via `brew install watchman` or fswatch via `brew install fswatch` to avoid [this issue](https://github.com/facebook/create-react-app/issues/871) which occurs if your macOS has no appropriate file watching service installed.

    ### Linux

    * Run this to [increase the limit](http://stackoverflow.com/questions/16748737/grunt-watch-error-waiting-fatal-error-watch-enospc) on the number of files Linux will watch. [Here's why](https://github.com/coryhouse/react-slingshot/issues/6).

        `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`.

    ### Windows

    * **Install [Python 2.7](https://www.python.org/downloads/)**. Some node modules may rely on node-gyp, which requires Python on Windows.
    * **Install C++ Compiler**. Browser-sync requires a C++ compiler on Windows.

      [Visual Studio Express](https://www.visualstudio.com/en-US/products/visual-studio-express-vs) comes bundled with a free C++ compiler.

      If you already have Visual Studio installed:
      Open Visual Studio and go to File -> New -> Project -> Visual C++ -> Install Visual C++ Tools for Windows Desktop.
      The C++ compiler is used to compile browser-sync (and perhaps other Node modules).

---

## Having Issues? Try these things first

1. Make sure you ran all steps in [Get started](#get-started) including the [initial machine setup](#initial-machine-setup).
2. Run `npm install` - If you forget to do this, you'll see this: `babel-node: command not found`.
3. Install the latest version of Node.
4. Make sure files with names that begin with a dot (.editorconfig, .gitignore, .npmrc) are copied to the project directory root. This is easy to overlook if you copy this repository manually.
5. Don't run the project from a symbolic link. It may cause issues with file watches.
6. Delete any .eslintrc that you're storing in your user directory. Also, disable any ESLint plugin / custom rules that you've enabled within your editor. These will conflict with the ESLint rules defined in this project.
7. Make sure you don't have NODE_ENV set to production on your machine. If you do then the [development dependencies won't be installed](https://github.com/coryhouse/react-slingshot/issues/400#issuecomment-290497767). Here's [how to check](http://stackoverflow.com/a/27939821/26180).
8. Install watchman with `brew install watchman` if you are having the following error after an initial `npm start -s`:

    ```bash
    2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
    2017-09-05 00:44 node[68587] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
    events.js:160
          throw er; // Unhandled 'error' event
          ^

    Error: Error watching file for changes: EMFILE
        at exports._errnoException (util.js:1022:11)
        at FSEvent.FSWatcher._handle.onchange (fs.js:1406:11)
    ```

9. Tip: Things to check if you get an `npm run lint` error or build error:

    * If ESW found an error or warning in your project (e.g. console statement or a missing semi-colon), the lint thread will exit with `Exit status 1`. To fix:

      1. Change the `npm run lint` script to `"esw webpack.config.* src tools; exit 0"`
      1. Change the `npm run lint:watch` script to `"esw webpack.config.* src tools --watch; exit 0"`

      > Note: Adding `exit 0` will allow the npm scripts to ignore the status 1 and allow ESW to print all warnings and errors.
    * Ensure the `eslint`/`esw` globally installed version matches the version used in the project. This will ensure the `esw` keyword is resolved.

10. Rebuild node-sass with `npm rebuild node-sass` if you are having and error like `Node Sass does not yet support your current environment on macOS XXX` after an initial `npm start -s`.

