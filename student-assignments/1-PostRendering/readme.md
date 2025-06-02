#Post List Rendering

in this project you have to render some posts from jsonplaceholder api ('https://jsonplaceholder.typicode.com/posts')

you need to use useState and useEffect hooks
whithin the useState hooks you have to handle post states and loading state
(until all posts are rendered the page should show a "loading..." statement)

finally using conditional rendering render the loading or posts:

```js
{
  loading ? <p>Loading...</p> : <ul> 'the posts here'</ul>;
}
```

as you know you need a bit css
