# Module 4 Homework

It’s a perfect time to invest in performance improvements of our app and the level of performance monitoring (in order to not bring regression while extending the scope of app functionalities).

### Homework management 🏠

The final result of all homework is the React Native Application full of features implemented iteratively in the end phase of each module in the course. In order to keep consistency and track all of your changes we highly recommend you to create your own GitHub repository where your work as a participant will be stored. Your GitHub repository should be shared with all trainers, which will enable us to verify your work and communicate:

- Bartłomiej Tomczyk - https://github.com/barttom
- Tomasz Leśniakiewicz - https://github.com/rinej
- Michał Staniewski - https://github.com/michalstaniewski-cs

Each module in the course will end up with homework consisting of a few tasks to fulfil. We would like to suggest a comfortable system for you to submit each task of the homework as a separate PR to the main branch in your repository. This will create a space for us to communicate with you, by doing code reviews - thanks to that we will be able to check your homework, discuss some uncertainties, or respond to questions you will leave in the PR. In case you have any trouble with homework you can always book a 1 to 1 session with the trainer, and also don't hesitate to ask your questions in the dedicated communication channel. Keep in mind that you don't have to worry about being blocked for the next homework, every homework will have a starting point, so you always will be able to override the content of your repository with the prepared starting point.

### The goal of this module’s homework

The goal of this homework is to get to know performance measurments techniques in React Native ecosystem.

With that out of the way, let’s start!

**Exceptionally, for this part of the homework we will be using the application we worked on during the workshop (Art Museum App) instead of the Lottery App that we're building along.** The reason is we have a nicely visible set of performance improvements in that app and that's why it's a perfect opportunity to get to know profilers tools better. We'll provide performance measurements for two versions of the app before and after the implemented improvements in order to compare the results and see the effect of our work.

In case you don't have the Art Museum App we were working on during the workshop please clone it from [this repository](https://github.com/hellofresh/react-native-training-module-04).

- Branch - Before implemented improvements checkpoint: [main](https://github.com/hellofresh/react-native-training-module-04)
- Branch - After implemented improvements checkpoint: [exercise-4](https://github.com/hellofresh/react-native-training-module-04/tree/exercise-4)

## Part 1: Add Performance Improvements to the Artworks Screen

During the exercises, we focused on optimizing only the **Exhibitions** screen. In this part of the homework, your task is to apply similar performance improvements to the **Artworks** screen.

You should follow the same principles and techniques used in the previous exercises - such as component optimization, memoization and list rendering best practices.

Refer to the exercises in the repository: [main](https://github.com/hellofresh/react-native-training-module-04).  
You can check the completed work for reference in the following branches:

- `exercise-1`
- `exercise-2`
- `exercise-3`
- `exercise-4`

Your goal is to implement equivalent improvements in the Artworks screen.

## Part 2: Performance Measurements for the Art Museum App

The goal of this part of the homework is to collect performance measurements for two versions of Exhibitions and Artworks screens - done before and after implemented improvements using multiple tools. **Remember to keep consistency between the measurements, you should use the same device (with the same OS version) during all measurements - the environment needs to be stable.**

All of the results should be stored in the Excel sheet where the average value will be calculated based on the provided measurements. We recommend using the prepared template:

For each step (including steps 1, 2, 3, and 4) you will need to perform 7 measurements on a specific branch and screen, based on the presented steps:

1. Open the specified screen (make sure its state is fresh)
2. Start the measurement
3. Perform a sequence you would like to measure in the app
4. Stop the measurement
5. Write down results in the proper place in the Excel sheet

**In order to use FlashLight you need to use it with an Android device, so ideally with a physical device. In case you're not able to (for the sake of this exercise) you may use the emulator (from Android Studio), although keep in mind that your results will not be accurate, you should always run performance tests on physical devices.**

**Before running any tests make sure to specify an exact sequence you'll be following while measuring performance (for example scrolling to the 10th element in the list).**

**Remember to run performance tests not on the development flavor of the app. In order to run the non-dev version there are two options to choose from:**

- **You may use Android Studio to build a release version of the app and then perform tests on it**
- **You may run your app in a classic way using React Native CLI, but then you need to shake to open the dev menu select the Settings option, disable the JS Dev Mode, and reload the app**

You're good to start, finally...

<details>
  <summary>Step 1. Measure list performance of the Exhibitions screen (BEFORE - using the main branch) using Flashlight</summary><br>

Set the main branch (version without improvements) and collect 7 measurements following above described steps. Remember to put all results into an Excel sheet.

</details>

<details>
  <summary>Step 2. Measure list performance of the Artworks screen (BEFORE - using the main branch) using Flashlight</summary><br>

Set the main branch (version without improvements) and collect 7 measurements following above described steps. Remember to put all results to an Excel sheet.

</details>

<details>
  <summary>Step 3. Measure list performance of the Exhibitions screen (AFTER - using the exercise-4 branch) using Flashlight</summary><br>

Set the exercise-4 branch (version with improvements) and collect 7 measurements following above described steps. Remember to put all results into an Excel sheet.

</details>

<details>
  <summary>Step 4. Measure list performance of the Artworks screen (AFTER - using the exercise-4 branch) using Flashlight</summary><br>

Set the exercise-4 branch (version with improvements) and collect 7 measurements following above described steps. Remember to put all results into an Excel sheet.

</details>
