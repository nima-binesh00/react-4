# Random Advice Rendering

in this post you should use this api (https://api.adviceslip.com/advice) and render random advices 
when a button is clicked

this is how you can use the final data in your project:

```jsx
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()
      setAdvice(data.slip.advice) 
```