
# 📦 dependency-auth // @thefirstspine/auth

Javascript & Typescript dependency to help developers to use the auth net service.

More information here: <https://github.com/thefirstspine/auth>

## How to use

### Install

```bash
npm i @thefirstspine/auth@latest
```

### Build

```bash
npm run build
```

### Test

```bash
npm run test
```

### Lint

```bash
npm run lint
```

### Publish on NPM

```bash
npm publish
```

## Configuration

As part of TFS Platform, this dependency will use environment variable.

## Documentation

### AuthService

Service to interact with the auth net service.

#### me

Validates a JWT to the auth platform service.

**Synopsis:** `async  me(jwt: string): Promise<number|null>`

**Params:**

- `jwt: string` The JWT to send to the auth net service.

#### getAuthNetServiceUrl

Get the auth net service URL according to the AUTH_URL environment variable

**Synopsis:** `getAuthNetServiceUrl(): string`

## License

TFS Platform is NOT licensed. You are free to download, view, run the repository. You are NOT allowed to redistribute this project for both commercial and non-commercial use. Deal with it.
