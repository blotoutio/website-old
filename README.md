# Blotout Website

The website uses [Remix](https://remix.run) with [Vercel](https://vercel.com).

## Prerequisite

[Node](https://nodejs.org) v14.x

## Development

1. Install the [Vercel CLI](https://vercel.com/cli) globally:

```sh
npm install -g vercel
```

2. Install all dependencies using `npm`:

```sh
$ npm install
```

3. Create an account on [Vercel](https://vercel.com) and link this repo:

```sh
$ vercel link
```

4. To start developing, use the start script:

```sh
$ npm start
```

This will start the Remix development server, a TypeScript watcher for the server code, and the Vercel development server.

## Documentation

Detailed documentation for Remix is available at [remix.run](https://remix.run/dashboard/docs).

## Common Mistakes/Bugs

- When linking this repo with Vercel, leave the directory prompt blank.
- While running `npm install`, if there is an error that says `fatal error: 'vips/vips8' file not found`, try running `brew install vips` and then install the repo dependencies. It should take care of that error.
