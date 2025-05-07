### Exercise 1: React Dev Tools - Profiler

The goal of this exercise is to understand how to profile React applications using dedicated tools. We’ll explore the **Profiler** tab in React Dev Tools to observe component re-renders during app usage.

### Steps to Follow

1. **Add the App Wrapper Component**  
   Wrap the screens in your app with the App Wrapper component to enable profiling.

2. **Profile the App (Initial State)**  
   Use **React Dev Tools** and navigate to the **Profiler** tab to collect performance data.

3. **Implement Lazy Loading**  
   Apply lazy loading to the tabs in the **Bottom Tab Navigator** to optimize rendering.

4. **Profile the App Again**  
   Re-profile the updated app using the **Profiler** tab.

   - **Compare the Results:**  
     Can you spot any differences in the performance metrics or re-renders between the two implementations?

---

### Exercise 2: Lists Performance in React Native

In mobile development, optimizing the performance of list components is a common challenge. In this exercise, we’ll focus on improving the performance of lists in the course application by using optimized list components and proper configuration.

#### Steps to Follow

1. **Optimize Lists in Exhibitions and Artworks Screens**  
   Identify performance issues and refactor list implementations for better efficiency.

2. **Replace ScrollView with a Dedicated List Component**  
   Use components such as `FlatList` or `SectionList` instead of `ScrollView` to handle large or dynamic datasets more effectively.

3. **Apply Configuration to the List Component**  
   Improve list performance further by configuring props like `initialNumToRender`, `maxToRenderPerBatch`, `windowSize`, etc.

---

### Exercise 3: Optimize Countdown

This exercise demonstrates how effective component structuring can significantly impact the performance of a React Native application.

### Steps to Follow

1. **Diagnose Performance Impact**  
   Investigate how the **countdown component** on the **Exhibitions** screen affects overall screen performance.

2. **Apply Fixes**  
   Refactor or isolate the countdown component to minimize its negative impact on rendering and performance.

3. **Measure Performance**  
   Use profiling tools to measure performance **before and after** applying improvements.

---

### Exercise 4: Memoization

In this exercise, you’ll practice **memoization techniques** in React Native using `React.memo`, `useMemo`, and `useCallback`. Memoization is a powerful optimization method that improves app performance by caching expensive computations and preventing unnecessary re-renders.

### Steps to Follow

1. **Profile Repeated Re-renders**  
   Use the **Profiler** tab in React Dev Tools to observe components that re-render unnecessarily.

2. **Apply Memoization Techniques**  
   Optimize your components using:

   - `React.memo` for functional components
   - `useMemo` to memoize computed values
   - `useCallback` to memoize functions

3. **Re-profile After Changes**  
   Use the Profiler again to observe the effects of memoization.

4. **Measure Improvements**  
   Compare performance before and after optimization to validate the effectiveness of memoization.
