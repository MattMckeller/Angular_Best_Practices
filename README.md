# Clean Angular Example
This was originally an assessment given to me that I took a lot of time on. This repository demonstrating many different aspects of angular with clean code using best practices. 

## The App
A form is generated dynamically based of data. The data comes from an api call that will return a list of input fields to display. These input fields data contains the field type(text, select, async autocomplete), name, and label. The response data also contains each field's validation requirements, and other relevant data (i.e. select options).

This form is created and handled inside a modal for added complexity and architecture demonstrability.

## Knowledge Demonstrated In This Project
- Object Oriented Principals and Best Practices 
- Clean, maintainable and readable code.
- "Proper" Filesystem Archiecture
- Multiple Angular Fundamentals
    -  Components & "Componetizing"
    -  Modals
    -  Forms
    -  Templates
    -  Services & Dependency Injection
    -  Observable/RxJS
    -  Modules
    -  HttpClient
    -  Interceptors
    -  Structural & Attribute Binding
    -  Directives
- Testing
    -  Jasmine - Spys, Stub usage, Page Mapping
    -  Unit Testing vs Integration Testing
    -  Fake Async & Tick
- Data Modeling
- TypeScript
- Async/Await
- Async Autocomplete Input
- NodeJS, Npm, Angular CLI
- Angular Material
    -  Theme overriding
    -  Input components
    -  Hard style overrides
- SCSS/CSS
    -  Imports
    -  Variables
    -  Mixins
    -  Nesting
    -  Flex
- Many ES6 Features


## The API

### GET https://www.backend.com/api/questions

This retrieves a list of questions that the consumer must answer. The questions have some indication of the types of HTML elements that are to be used.

```bash
$ curl -XGET https://www.backend.com/api/questions -H 'Authorization: Bearer xxxxxxxx'
```

### GET https://www.backend.com/api/naics/search?q=XXX

This endpoint filters NAICS (North American Industry Classification System) for industry classification codes that match the query string (e.g. the q parameter).

```bash
$ curl -XGET https://www.backend.com/api/naics/search?q=te -H 'Authorization: Bearer xxxxxxxx'
```

### POST https://www.backend.com/api/application_forms

This endpoint saves an application form (which is essentially the answers to the questions described in the `api/questions` endpoint.

```bash
$ curl -XPOST https://www.backend.com/api/application_forms \
  -H 'Authorization: Bearer xxxxxxxx' \
  -H 'Content-Type: application/json' \
  --data '{"responses":[{"question_id":1,"text":"John"},{"question_id":2,"text":"Doe"},{"question_id":3,"option_id":1},{"question_id":4,"text":"123433"}]}'
```

## Authentication

Token = md5 hash of the User's email sent via header like: 
`Authorization: Bearer 5475eb1890f635deca00c57d127f30bd`

## Wireframe

![dynamic-form-wireframe.png](dynamic-form-wireframe.png)

