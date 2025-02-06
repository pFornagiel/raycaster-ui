# Simply-Raycaster 👾
A work-in-progress implementation of Raycasting Engine written natively in Typescript, being a small personal project inspired by Wolfenstein3D.
This project is a Web UI for my original [Simply-Raycaster Project](https://github.com/pFornagiel/Simply-Raycaster).

Available at the current stage of development [here](https://pfornagiel.github.io/raycaster-ui/).

## Sources
#### Raycasting Engine:
The blog and repository listed below are great introduction to the raycasting method and I highly recommend giving them a read.
- [Lode Vandevenne's blog](https://lodev.org/cgtutor/raycasting.html)
- [vinibiavatti1's tutorial](https://github.com/vinibiavatti1/RayCastingTutorial)
#### Frontend Design:
- [Game Font by mengyang](https://www.figma.com/community/file/969596436440383820)


## Local Installation and usage
To install this project locally, make sure you have Node.js and npm installed. Then, you can clone the repository and install dependencies:
```shell
git clone https://github.com/pFornagiel/Simply-Raycaster.git
cd Simply-Raycaster
npm install
```

After installing dependencies, you can run the project locally with:

```shell
npm run dev
```

This will start a development server. Open your browser and navigate to http://localhost:5173 to open the project.

## Project Structure

The project stucture is split into two main directories:
 - **engine**, which stores the code of raycasting engine itself and provides API functions for the frontend, written entirely in Typescript
 - **src**, which is the frontend Web UI for the application made using ReactJS and Typescript

My goal was to keep the engine itself separated from the UI, in order for it to remain purely browser compatible and to be able to develop the the engine independently from the UI.

