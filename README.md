# React + TypeScript + Vite Application

## Getting started

- In the root directory, create a new file called `.env.local` and add this key `VITE_APP_TOKEN` to the file. If you don't have your own application token, please reach out to the recruiter or Halah to get one. [You can generate one here](https://support.socrata.com/hc/en-us/articles/210138558-Generating-App-Tokens-and-API-Keys)

```
 VITE_APP_TOKEN=[insert-your-here]
```

- Run the following commands in order:

```
 npm run install
 npm run dev
```

# Frontend Challenge: Application to view and filter the San Francisco Mobile Food Facility Permits

# Description

Build a scalable React web application that lets users view the San Francisco Mobile Food Facility Permits. The user can search the permits by application name, and by permit address. As bonus, the user can filter the permits by status.

# Goals

## Functional Requirements

- The user can view the San Francisco Mobile Food Facility Permits.
- The user can search the data by the applicant's name.
- The user can search the data by address.
- The user can filter the permits by status.
- Bonus point: documenting all the code.

## Non-functional requirements

- The user must have a seamless user experience viewing and interacting with the data
- The application must scale with high traffic and data size
- Keep the server load to a minimum

# Scope

This document:

- Defines the architecture used for the front end.
- Provides the reasoning behind the libraries used
- Provides possible alternative solutions.
- Provides details on where to take it from here.

# Proposed Solution

- Use React framework with Vite and typescript to build the application.
- Use client-side rendering.
- Use MUI as the library for the UI.
- The MUI data grid will display the permit data and use its built-in features to sort and paginate the data.
- Use SODA API to fetch the Permits data by using an application token.
- Uses `.env` to manage the token
- Use `@tanstack/react-query` to manage fetch data and its state.
- Use `react-router-dom` to handle routing. This app will have one route.
- Use react hooks to handle all business logic of the data
- use the `useDebouncedValue` hook from `usehooks-ts` to debounce query requests.
- Create a Page with a table to display the data, search bars to search the data, and a selector to filter the data by status.

## React

Using react is a requirement for the project. Thus, no alternative options will be added here.

## Vite

The criteria that I use for build tool selection are the following:

- Code splitting
- Optimized async loading
- Tree shaking
- Performance
- Configuration
- Features
- Community and adoption
- Documentation

## Client Side Rendering

This application requires high user interactivity through filtering, pagination, searching, and sorting, so client-side rendering is the better choice. The server-side approach is better suited for static content that relies on SEO. Also, developer experience is a major factor impacting this decision. I don't have much experience with SSR, and it would be much faster to use client-side rendering.

## MUI

While writing the entire UI using HTML is possible, I've chosen to leverage an existing solution instead (MUI). Building the entire thing on my own would offer great control over how everything looks like, interacts, and the data state; however, this will take a longer time than using MUI. MUI offers numerous responsive styled UI components that are out of the box for free, with minimum configuration necessary. The components can be easily customized to meet our customer needs. For example, it took me 5 minutes to configure the data grid and get some UI rendering on the screen. With MUI, you can have a little bit of both worlds; by using the theme, you still have full control over how your user experience feels while still using MUI's components. The application is also mobile-friendly due to the responsiveness of the MUI components.

## MUI Data Grid

Since the data set we receive from the API has columns and rows, it makes sense to use a grid-like format UI to display the information with rows and columns. The community version of the datagrid offers many free features that are out of the box, such as sorting, pagination, querying, and down-state management. The MUI data grid is also virtualized. Alternatively, if we used a list, it would be time-consuming to organize the data in a user-friendly way, and the state management for sorting, pagination, and querying would be complex.

I'm using the server-side pagination and the server-side sorting due to the complexity of the data, the potential scale of the app, and the amount of interactivity of the user with the app. Alternatively, we could use client-side sorting and pagination, but to do that, we have to fetch the entire data set; this could lead to a long time to load the page. The load time will increase significantly as the data scales. This could deliver a bad user experience. On the other hand, sorting, pagination, and filtering can be done quickly by the client because the web page itself can handle all of that functionality without going back to the server. Client-side here could also deliver a better developer experience because it may be quicker to set up. But with the MUI data grid, it's quick to set up both ways.

On the server side, the initial loading of the data will be very quick, but the client will keep requesting data from the server ( or cache) when sorting, paginating, or filtering.

## Pagination vs infinite scrolling

We're using pagination instead of infinite scrolling. The criteria used here were:

- Type of the data: the data here will be searched, filtered, sorted,
- If the end goal of the app is to increase user engagement with content, the user spends a long time browsing the app and discovering. Infinite scrolling makes sense because it requires lower effort on the user's end; however, this isn't the goal here.
- User experience: infinite scrolling slows down the time it takes to load the page, which could lead to a bad user experience; slow page load speed could lead to the user leaving the application
- user's device resources: the user's device might have limited resources, with infinite scrolling and constant fetching of the data as the user scrolls, which could easily drain the device's resources.

## SODA API vs static CSV file

- Use the API instead of a static CSV file. While using a static data set might reduce the complexity of this app, have all filtering, querying, and searching done on the client side, and perform these operations faster, static data does not scale well. For example, what happens when the data changes and our own static file is out of sync? Should we periodically poll the data to check if it is updated and then sync our CSV?
- Use the app tokens to make the API request to avoid throttling and rate limiting. The token will be managed using the `.env` file. This is quite from the API docs
  f
  > Without an application token, we can only track usage and perform throttling based on a few simple criteria, mainly source IP address. As such, requests that aren't using an application token come from a shared pool via IP address. IP addresses that make too many requests during a given period may be subject to throttling.
  > When requests are made using an application token, we can attribute each request to a particular application and developer, granting each their own pool of API requests. Currently we do not throttle API requests that are using an application token, unless those requests are determined to be abusive or malicious.

Since we're only querying the data right now, there is no need to authenticate. However, if we need to add/remove/update the data, we will eventually need to use authentication for this app.

- Use SoQL to query the data instead of the simple query parameter that the API offers; while using the simple parameter might have made the developer experience smoother, the SoQL offers richer filtering options to query data. For example, it enables to search for substring and ignore the case of the applicant and address when searching. For the time being, our filters are relatively simple, but later on, we could filter the data using any field with logical operators and various values or a range of values. However, the SoQL is very SQL-like which could make our application vulnerable to SQL injection attacks.

## TanStack React Query

According to their docs:

> It makes fetching, caching, synchronizing, and updating server state in your web applications a breeze.

Due to it's quick setup and out of box configuration, it's seemless caching, it's ability to fetch multiple queries and portability, good developer experience, I chose React Query to manage server state. It is an opinionated library, which eliminates a lot of friction when it comes to how to handle state changes. With a single configuration, a developer could handle the initial query fetch, subsequent queries, query parameter changes, and caching. React query caching has an impact on your user experience by making your application feel faster and more responsive than ever before.
This could help you save on bandwidth and increase memory performance. Alternativly I could have used Apollo client, but based on experience, it has a long learning curve and takes a longer time to configure, the devloper would have to implement the initial fetch, then trigger fetching the query changes upon state changes and leaves most of the impelemention to the developer. Since timing is of the essence for this take-home augmenting, using React query gets the job done faster.

Another option here is to keep it simple and use the Fetch API; however, I would have to implement all caching and multiple query state management functionality.

## Use React Hooks to manage data states

Hooks are a way to extend the behavior of a component. They were introduced as
a method to reuse stateful business logic without changing component hierarchy. Hooks lets you split one component into smaller functions based on what pieces are related (such as fetching data), rather than forcing a split based on lifecycle methods.
Some of the benefits of hooks:

- Reusable business logic.
- Separation of concerns enables us to isolate the business logic from the UI. Should we choose to change the library for app state management, the UI won't be impacted.
- Improves testability. Separating the business logic from the UI makes it easy to mock it and change the return value of the mock to cover test cases. Your test will no longer have to have multiple wrappers, too. This also makes it easier to write separate unit tests for customized hooks.
- Code readability.

Alternatively, we could use HOCs or/and prop drilling, but both of these methods are outdated ways to pass data between components.

## Folder Structure

For the source folder

```
.
├── App.css
├── assets
│   └── react.svg
├── component
│   ├── MobileFoodFacilityPermitAppBar
│   │   ├── MobileFoodFacilityPermitAppBar.tsx
│   │   └── index.ts
│   ├── MobileFoodFacilityPermitDataGrid
│   │   ├── MobileFoodFacilityPermitDataGrid.contants.ts
│   │   ├── MobileFoodFacilityPermitDataGrid.tsx
│   │   ├── MobileFoodFacilityPermitDataGrid.types.ts
│   │   ├── MobileFoodFacilityPermitDataGrid.utils.ts
│   │   └── index.ts
│   ├── MobileFoodFacilityPermitFilters
│   │   ├── MobileFoodFacilityPermitFilters.constants.ts
│   │   ├── MobileFoodFacilityPermitFilters.tsx
│   │   ├── MobileFoodFacilityPermitFilters.types.ts
│   │   └── index.tsx
│   └── SearchTextField
│       ├── SearchTextField.tsx
│       ├── SearchTextField.types.ts
│       └── index.tsx
├── hooks
│   ├── useMobileFoodFacilityPermitData
│   │   ├── index.ts
│   │   ├── useMobileFoodFacilityPermitData.tsx
│   │   └── useMobileFoodFacilityPermitData.types.ts
│   ├── useMobileFoodFacilityPermitFilters
│   │   ├── index.ts
│   │   ├── useMobileFoodFacilityPermitFilters.tsx
│   │   └── useMobileFoodFacilityPermitFilters.types.ts
│   ├── useMobileFoodFacilityPermitPagination
│   │   ├── index.ts
│   │   ├── useMobileFoodFacilityPermitPagination.tsx
│   │   └── useMobileFoodFacilityPermitPagination.types.ts
│   └── useMobileFoodFacilityPermitQueryData
│       ├── index.ts
│       ├── useMobileFoodFacilityPermitQueryData.constants.ts
│       ├── useMobileFoodFacilityPermitQueryData.tsx
│       ├── useMobileFoodFacilityPermitQueryData.types.ts
│       └── useMobileFoodFacilityPermitQueryData.utils.ts
├── index.css
├── main.tsx
├── pages
│   ├── MobileFoodFacilityPermits.tsx
│   └── index.ts

```

## Component naming convention

The naming convention followed for each component/hook is listed below.

The `index.ts` exports only the modules that will be used in other components. It exposes the interface of a component/hook.

```
├── index.ts
├── [component-name].constants.ts
├── [component-name].tsx
├── [component-name].types.ts
└── [component-name].utils.ts
```

## Architecture

Please click [here](https://whimsical.com/radai-6ZwuuJo1s9xQeWjq7X6hQq) to check the mindmap for this application.

### Routes

The app will have a single route, which is the main route. Because the user is mainly viewing the data and filtering it, there is no need to add another route.
We could add a page not found the route, but there isn't enough functionality to justify that. The route will load the main page `<MobileFoodFacilityPermits />`.

### The Main Components

#### [MobileFoodFacilityPermits](src/pages/MobileFoodFacilityPermits.tsx)

This page will contain the appbar `<MobileFoodFacilityPermitAppBar />`, filters `<MobileFoodFacilityPermitFilters />` and the datagrid `<MobileFoodFacilityPermitDataGrid />`.

- The page component will pass the data between the sibling components ( filters and datagrid)
- The page will use the data hook [useMobileFoodFacilityPermitQueryData](src/hooks/useMobileFoodFacilityPermitQueryData/useMobileFoodFacilityPermitQueryData.tsx) to get the necessary data needed to render the filters and the datagrid.
- The page's main responsibility is to render the children and handle communication between them. It does not know anything about the implemntation details or business logic for the data needed for filters and datagrid.

#### [MobileFoodFacilityPermitAppBar](src/components/MobileFoodFacilityPermitAppBar/MobileFoodFacilityPermitAppBar.tsx)

This will render the application app bar with the applicant's name at the top left corner.

#### [MobileFoodFacilityPermitFilters](src/components/MobileFoodFacilityPermitFilters/MobileFoodFacilityPermitFilters.tsx)

This component renders filters for searching the data by applicant name and address using a text search bar and filtering it by status using a static selector. The renders the children components with filters data passed from the parent component and invokes a callback when any of the child components trigger a change; the callback is invoked to pass the data back to the parent component.

#### [MobileFoodFacilityPermitDataGrid](src/components/MobileFoodFacilityPermitDataGrid/MobileFoodFacilityPermitDataGrid.tsx)

This component renders the MUI DataGrid with configurations for the columns, the row data, the pagination, the sorting and loading state. It invokes callbacks when the pagination or sorting models are changed, it passes the data back to the parent component.

### Hooks

#### [useMobileFoodFacilityPermitQueryData](src/hooks/useMobileFoodFacilityPermitQueryData/useMobileFoodFacilityPermitQueryData.tsx)

This hook encapsulated the business logic to fetch the Permits data using the SODA API. It uses the `react-query` `useQueries` hook to make a couple of queries. The data API does not provide the count of the permits when fetching them, we need the count in order to set up the pagination. To deal with that, we make two query requests. One to fetch the permits data and the second one is to fetch the count. The first query is refetching whenever query params, pagination or sorting changed; while the second query is refetched whenever the query params change only.

#### [useMobileFoodFacilityPermitPagination](src/hooks/useMobileFoodFacilityPermitPagination/useMobileFoodFacilityPermitPagination.tsx)

This hook encapsulates the business logic of the pagination state to generate the offset number needed for fetching permits

#### [useMobileFoodFacilityPermitFilters](src/hooks/useMobileFoodFacilityPermitFilters/useMobileFoodFacilityPermitFilters.tsx)

This hook encapsulates the business logic of configuring the filters, generating query params based on filters, and debouncing the values to reduce the number of queries made to the server.

#### (useMobileFoodFacilityPermitData)[src/hooks/useMobileFoodFacilityPermitData/useMobileFoodFacilityPermitData.tsx]

This hook encapsulates all the necessary business logic for data fetching and manipulation. It invokes all the previous hooks mentioned above and manages the sorting state.

# Concerns

## Malicious code in text fields & queries

Since the SODA API use SoQL which is a qeury langauage that's similir to SQL, there is a potioental of the user entring maclicous code in the text fields, therefore our application should prevent that. The MUI `<TextField />` already scapes the user input and prevents that.

## URL length Limit

Currently, we have three filters for our query params, plus pagination and ordering params. The end user might want to filter with the all fields available, this could cause have URLs lenghts that are too long to execute. In that case

- We can use a POST request and pass the params in the body request instead of query params; however, when using Datagrid filters, they only work with query params.
- We could encode/decode the URLs, but we'd end up constantly transforming the data on both ends to make requests and render the UI.

# Extra features/What would I do differently

## Stateful URLs

when user types a URL, the UI shoud refelect the URL search params in the UI, for example, URL `/?applicant=Ting` should render the UI with Ting in the search box and data grid filtered by the applicant name. This enables the end use to copy/paste the URL in a different window/tab and get the same results. Stateful URLs also enable the user to bookmark. This could be achieved by TanStack [useSearch Hook](https://tanstack.com/router/latest/docs/framework/react/guide/search-params).

## Use MUI Data Grid Filtering

Right now, we only have three filters, but down the line, the end user might want to filter with the all fields available. While displaying three filters together isn't a big deal, displaying ten of them might be overwhelming Currently we're handling the state of the filters by ourself, which is fine for three filters but it could get messy and complicated should our filtering grow and have different features such as filtering if the applicant was not named Ting or logintude value is greater than a specific values.

## Testing

I would've added unit testing for all the components and hooks to describe the use cases and ensure code and product quality.
