
# Article App

This project is a React-based web application that allows users to filter, sort, and paginate articles by category, author, and other criteria. It utilizes React's context API for state management and provides a scalable way to manage articles.

## Features

- **Filtering**: Users can filter articles based on categories and authors.
- **Sorting**: Articles can be sorted by date or title.
- **Pagination**: Pagination is implemented to allow users to navigate through articles, with a configurable number of posts per page.
- **Context API**: State management is centralized using React's Context API for easier access across components.


## File Structure

```
/src
  ├── /components       # Reusable UI components
  ├── /context          # React Context for articles
  ├── App.tsx           # Main application component
  ├── index.tsx         # App entry point
  └── styles.css        # CSS styles for the app
```

## Usage

1. The app will load with a set of predefined articles.
2. You can filter articles by selecting categories or authors from the sidebar.
3. Use the radio buttons to sort articles by date or title.
4. The pagination controls allow you to navigate between pages of articles.

## Technologies Used

- React
- TypeScript
- Context API




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
