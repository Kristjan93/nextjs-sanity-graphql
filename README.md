# Blog website made with nextjs, sanity-cms, apollo
The previous pure api way that took me about 1.5 hours to setup and get working.
You can see that project [here](https://github.com/Kristjan93/nextjs-sanity-api).
This graphql/apollo way took me about 4.5 hours to get up.  What do we take from this?  Apollo is a fucking monster of a library.  I do like this solution better though.  The Typescript codegen typings are great and there is something about graphql and the way you fetch, it feels good.  Especially the way you resolve dependencies like post -> author.
its as easy.
```graphql
# No more slinging to gether reference id's just get the thing you want.
query AllPost {
  allPost{
    author {
      name
    }
  }
}
```
There is one thing missing from the graphql types and that is **Portable Text** that sucks but the @portabletext/react component handles it like a champ. No autocompletion in my vscode so i feel like javascript scrub when working(This is a joke).

# TODO
- Make America great again.
- Get that sweet caching going
- Truly show all you can do not just getStaticProps