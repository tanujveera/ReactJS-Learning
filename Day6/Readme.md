# Day 6 of React

## Monolith & Microservices

**Monolith**: architecture is a traditional approach to designing software where an entire application is built as a single, indivisible unit. In this architecture, all the different components of the application, such as the user interface, business logic, and data access layer, are tightly integrated and deployed together.

**Microservices**: architecture, an application is built as a collection of small, independent services, each representing a specific business capability. These services are loosely coupled and communicate with each other over a network, often using lightweight protocols like HTTP or messaging queues.

> Separation of concerns

> Single responsibility principle: Each service has it's own job.

How do these services interact with each other?

Each application run in their own separate ports in same domain name.

Two approaches to fetch data from backend

1. As app loads -> API fetch call may take 500ms -> When is fetched, after 500ms -> UI renders

2. As app loads -> we render the skeleton of UI -> then fetch data -> then render.

In React, we will always use 2nd approach. Because user will not have to wait till the data is fetched. User will have a good experience. UI/UX (User Interface/ User Experience). After rendering the page, the fetched data is loaded.

React has the render cycle very fast.
