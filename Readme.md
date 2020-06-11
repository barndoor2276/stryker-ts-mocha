# Getting Started with Stryker for Typescript/Mocha

## Dependencies

```json
devDependencies {
    "@types/chai": "",
    "@types/mocha": "",
    "chai": "",
    "mocha": "",
    "ts-node": "",
    "typescript": ""
}
```

## Setting up Stryker

### 1. Install
```bash
npm install --save-dev @stryker-mutator/core
npx stryker init
```

### 2. Config

Add/edit these options in the styker config file (json)

```json
{
    "transpilers": [],
    "coverageAnalysis": "off",
    "mutate": [
        "src/**/*.ts",
        "!src/**/*.spec.ts"
    ],
    "mochaOptions": {
        "files": [
            "src/**/*.ts"
        ],
        "spec": [
            "src/**/*.spec.ts"
        ],
        "timeout": 3000,
        "require": [
            "ts-node/register"
        ]
    }
}
```

Add/edit these options in the tsconfig file (stryker says so)

```json
{
    "compilerOptions": {
        "allowUnreachableCode": true,
        "noUnusedLocals": false,
        "noUnusedParameters": false
    }
}
```
