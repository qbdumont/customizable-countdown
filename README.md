# Countdown

[Demo](https://develop.d3sj03ddh7klri.amplifyapp.com/)

## Improved countdown

The below component was designed to count down the days until our CTO's birthday, but it still needs some work. How can you make the implementation better?

Some steps I took to make the current implentation better are:

**1. Upgraded all peer dependencies to their most current version**

**2. Converted the Countdown component from a class based implementation to functional**

**3. Split certain logic into modular components for maintainability, scalability and reusability**

**4. Created a settings panel where users can control certain aspects of the countdown**

**5. Added themes so it can be styled according to the countdown event**

**6. Added a datepicker for it to be customized based on countdown event**

**7. Allowed for settings to persist via local storage**

**8. Created different UIs based on countdown state which include confetti when the date is reached and prompts to select a new date after it has passed**

**9. Started to implement testing, will need further written to be production quality**

**Do a critique:** The current implementation isn't perfect. How could it be improved?

- Pick an area of improvement to implement.

  **The project did not allow for any sort of customization. The date was statically set, the background and theme of the countdown was not changeable, and it did not take into account when the date has passed or reached. I expanded the codebase and allowed users to customize date and UI with settings that persist locally and implemented different states based on the countdown status.**

- What would happen to the current code if the date were changed, the page layout was changed or the format was changed?

  **The current code did not account for dates in the past, incorrect date strings, or responsiveness on multiple devices.**

- Does the current implementation follow best practices for HTML, CSS, JS and React?

  **One key issue that needed to be fixed was converting class components into functional ones. Since React 16.8, functional components, utilizing hooks to maintain state, has been the suggested way to structure new components.**

**Spice it up:** Let's be honest, this countdown could be a whole lot more exciting.

- What could you do to create a greater sense of urgency?

  **Flashy UI, celebration text and images/videos as the countdown approached 0. We could also implement a notification system to alert subscribers when their countdown date is nearing.**

- How would you make this countdown more aesthetically pleasing?

  **Eye-catching background images based on the theme of the countdown, larger numbers, responsive design, simplicity.**

- Trust your design instincts, and explain how your design choices impact the user experience

  **With background images and large, clear text, the user will know what event the countdown is for and ultimately not need any further information after first glance.**

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
