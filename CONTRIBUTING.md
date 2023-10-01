If you want to contribute content:

1. Fork this repository.
2. Install dependencies with `pnpm install`.
3. Start the development server with `pnpm run dev`. This will start a server at
   http://localhost:4321/tsgolf with hot-reloading enabled.
4. If you are adding an example:

   1. Create a markdown file in /src/content/examples of the next untaken
      number, followed by the example's name, separated by underscores.
   2. Fill out the `title` and `has_explanation` items in the frontmatter at the
      top of the file. If you add an explanation to your example, mark
      `has_explanation` as `true`, otherwise `false`.
   3. Add your code in a code block surrounded with
      `<!-- prettier-ignore-start -->` and `<!-- prettier-ignore-end -->`
      comments to prevent Prettier from formatting your golfed code, with a link
      to your code with test cases.

   If you're confused, look at how the other examples are formatted.

   If you are adding a tip:

   1. Create a markdown file in /src/content/tips.
   2. Fill out the `title` and `skill` items in the frontmatter at the top of
      the file. The `skill` must be one of:
      - `fundamental`: This tip is fundamental to learning TypeScript's Type
        System. There are probably not going to be very many of these.
      - `beginner`: This tip is useful for someone who understands the
        fundamentals and wants to start using the type system. You should
        explain each thing you do in more detail than you think is necessary.
      - `intermediate`: This tip is good for someone who has used the type
        system for more than 20 minutes. You don't need to explain everything,
        the person already understands the underlying concepts.
      - `advanced`: This tip is complicated and will be most useful when trying
        to golf a program as much as physically possible.
   3. Write your tip!

5. Make sure you've run prettier.
6. Make sure your changes have affected the site by opening the development
   server in your browser and nagivating to either /tsgolf/examples or
   /tsgolf/tips and double checking that the new page is listed.
7. Submit a pull request!
