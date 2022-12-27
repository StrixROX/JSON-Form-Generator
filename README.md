![image](https://user-images.githubusercontent.com/40167899/209675751-e51bd43b-1ad0-4e7c-a6b0-2658a6077f18.png)

<p align="center">
  <a href="https://frontend-assignment-iota.vercel.app/"><img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Ffrontend-assignment-iota.vercel.app%2F"></a>
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/strixrox/frontend-assignment">
</p>
<pre align="center" style="font-weight: bold">A Next.js app that generates dynamic forms from JSON UI schemas</pre>

## How to use
To clone and run this application, you will need the following programs installed on your system:
- [Git](https://git-scm.com/) (v2.25.1 used for this project)
- [Node.js](https://nodejs.org/en/) (v16.15.1 used for this project)
```bash
# clone the repository
$ git clone https://github.com/StrixROX/Frontend-Assignment.git

# go into the repository
$ cd Frontend-Assignment

# install dependencies using either
$ npm install # OR yarn install

# start the development server
$ npm run dev # OR yarn run dev
```
The app should now be accessible by opening https://localhost:3000 (unless stated otherwise in the terminal output) in your browser.

NOTE: There is only one route `/` in the app. This is a single page application (SPA).

## Building
```bash
# creates an optimized production build of your application
$ npm run build # OR yarn run build

# run the built app
$ npm run start
```

## Usage
### First Run
On the first run, the app will look like this
![image](https://user-images.githubusercontent.com/40167899/209680308-2c47d24a-e659-4245-8d93-781f7ba3e48b.png)

### Entering schema
On the left side, you can enter the JSON schema for the form and it will be rendered on the right side as you type

Click on the magic wand `🪄` icon to prettify the input JSON
![image](https://user-images.githubusercontent.com/40167899/209682841-38646c18-d933-4580-a028-40a51e8056af.png)

### Form Preview
Form is rendered on the right as you type the schema.
![image](https://user-images.githubusercontent.com/40167899/209682154-2a425e57-8f1a-4b7c-9266-0abc4ec08bb0.png)
NOTE: The `Reset` and `Submit` buttons appear automatically and don't need to be specified in the schema.

### Form Buttons
Click on the `Reset` button to reset the form to its default state as specified in the schema.
![image](https://user-images.githubusercontent.com/40167899/209683371-c8055e5a-8523-46d6-91b2-9a1bb56c6831.png)

Clicking on the `Submit` button will display the data collected by the form on the right side.
![image](https://user-images.githubusercontent.com/40167899/209683797-1d3b6fc6-1184-4b59-a0e9-829e635bbcd4.png)

## Technologies Used
This project was made using
- Next.js v13 ([Docs](https://nextjs.org/docs))
- React.js v18 ([Docs](https://reactjs.org/docs/getting-started.html))
- Tailwind v3 ([Docs](https://tailwindcss.com/docs/))
- Tailwind Scrollbar ([Repo](https://github.com/adoxography/tailwind-scrollbar))
- UI Components inspired by Flowbite v3 ([Docs](https://flowbite.com/docs/))

## More Information
For details on supported form elements and respective schema definitions, check out the [Wiki](https://github.com/StrixROX/Frontend-Assignment/wiki).

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Please report any bugs in [Issues](https://github.com/StrixROX/Frontend-Assignment/issues)
