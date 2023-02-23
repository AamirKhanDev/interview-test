## Instructions

1. Clone the repo onto your machine.
2. Navigate into the folder `app-standalone` in your terminal (You can do this via `cd app-standalone`).
3. Execute `npm install` to install dependencies.
4. Execute `npm start` to run the application.
5. Execute `npm test` to run the test files.


## Limio

Welcome to the Limio coding interview.

## Our tech stack

The Limio tech stack is always evolving as we continue to seek out the best tools for the job. Our main tech stack is:

  * React with Redux (front-end of our main app & Limio Shop)
  * Gatsby (Limio Shop)
  * AWS Lambda with Serverless for our backend API
  * Node.js for the above & our product catalog backend
  * AWS DynamoDB for our main database
  * Git for our product catalog storage
  * AWS Cognito for our user management
  * We build with Webpack
  * Jest for testing
  * Other AWS services for serving builds/files such as S3, Cloudfront, amongst others

And we are currently working towards introducing the following:

 * React testing library to replace some of component tests
 * Refactoring to use React hooks across our codebase where possible
 
We will continue to discuss & add new tech where we feel it would improve our products.

### Instructions

Please answer the question below (just write the answers in the spaces provided). Once the coding examples are done, please zip up your files and send them via http://wetransfer.com (GMail blocks ZIP attachments).  

We can then discuss the changes that you have made.

### Overview

The directories contain 3 sample apps. They are based on the the tic-tac-toe react tutorial, which you can find at [https://reactjs.org/tutorial/tutorial.html].

The directories are:

| Directory      | Contents    |
| ---------------|-------------| 
| app-original   | The original app from the tutorial |
| app-standalone | The same app, but re-written slightly (this has been updated to move away from class components and use functional components with React hooks) |
| app-redux      | The same app, using redux |

### Questions

Please answer the following questions:
    
1. **Comparing the app-original and app-standalone code bases. The app-standalone code base has put each component in a separate file and directory structure.**
   * Why do you think that was done, what are the advantages / disadvantages?

Advantages:

* Having each component in a different file as has been done in the app-standalone code makes navigation a lot simpler for the developers as it's easier to find all of the different components. This can make it easier for new developers to get used to the code base of the app as it is also more readable and easier to infer what each component does in the code base.
* Components allow code to be easily reused and scaled. This will allow DRY (Don't repeat yourself) principles to be better adhered to.
* For larger applications, it also allows for lazy loading of components. If the components are split up then some components can be set to lazy load, using dynamic imports, which can have a big positive impact on the load speed of web pages which will overall improve the user experience.
* Writing tests for specific components is easier if the components are in different files and the relevent tests are easier to locate.

Disadvantages:

* If too much nesting is done in the file structure then it can become difficult to import files using their relative file paths and it can also be difficult to manage and update the imports if the file strcuture changes.
* Naming convention should be consistent and clear. If the naming convention is not clear then it can be difficult to understand what each component does.
* You can 'over engineer' an application by creating too many components when not needed. This can cause unnecessary clutter in the file structure as well as take up time better spent elsewhere.


2. **Thinking about a production ready app, what do you think is missing from all the examples?** *Hint: the square component in the standalone app has one*

* Test cases are missing. Without proper test cases, the app could have a significant number of bugs which would be detrimental to the user experience. Even a simple test such as testing if a components loads without crashing the application is useful. Additionally testing allows a code base to scale as it allows developers to make changes to the code base without worrying about breaking the app, especially if a TDD (test driven development) approach is taken.

* An external config or ENV file is could be considered. For example we can put PORT_NO in the config file to avoid Port collision if another application is also running on same server. A way to do this in the ENV file is `const PORT = process.env.PORT || 3000;` This will allow the app to run on a different port if the default port is already in use. This is particularly useful for larger applications where multiple developers are working on the same code base.

3. **Are you familiar with Redux? If so what is the basic idea behind it and what would be a good case for using it?**

Although I haven't used redux, I am interested in learning more about it and incorporating it. From my understanding redux is a Javascript library (like React) that is use for the purpose of managing states across an application. This is particularly useful for larger applications and may not be very necessary for smaller ones. It creates a process for centrally storing and reading the states of variables so that components cannot read or change the states unintentionally.

A good case for using Redux is when you have an application with a large and complex state that needs to be shared across multiple components. Examples of such applications include social networks, e-commerce websites, and productivity apps. Redux can also be useful when you need to implement features like time-travel debugging or server-side rendering, as it provides a consistent way to manage the state of the application.

4. **If you are interested in the full-stack role* Please take a look at the partial implementation of an express routes in backend/router.js.**
    *Thinking of a production application, what issues do you see with this code? *List as many as you like* 

   * The code should be split into different files. The router, main app, controllers, models, and DB connection should ideally have their own standalone files and be imported when necessary. This will make the code more readable and easier to navigate as well as prevent the main app file from becoming too cluttered. This is also adhering to DRY principles.

   * No error handling for the MongoDB client connection or for document not found case. We don't want the server to hang or crash if there are no failsafes in place so having a try catch block to handle errors is important.
   
   ### Coding Challenges

With either the app-standalone or app-redux (**not both** - whichever you are comfortable with), please complete the following changes:

I used the **app-standalone** for these challenges.

1. Update the app so that is highlights the winning move.

![image](https://user-images.githubusercontent.com/63204104/220970316-3200510c-edd0-48e3-a814-d65595bbd959.png)

2. Update the app so that it allows for a named player X and Y, and it keeps a league table of who won each game.

![image](https://user-images.githubusercontent.com/63204104/220970461-917bba59-a687-4ad9-abcb-44d391e01756.png)


3. If you get time, implement something that you think that the app could do and is cool. What other things would you change.

![image](https://user-images.githubusercontent.com/63204104/220970133-e2fa8930-1eb0-47a1-8906-67f6e46a37ee.png)


### Expectations
 * We don't want you to spend too long on this exercise, just the necessary amount of time to show your front-end and back-end skills. We expect it to take 1.5 hours if you have React experience, longer if you have no React experience. 
    * If you don't answer all questions, that is fine. We prefer depth on a few questions rather than superficial answers.
 * Some testing, but not extensive. Have at least one test case, so that we know you can do it. 
    * You'll notice the example code doesn't have much testing. It should.
 * Clean, concise code. Comments are appreciated.
 * Knowledge of up to date React features e.g. Hooks.




    
      
    
    

 





