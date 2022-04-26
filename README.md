# eslint-config-tools
> framework 별로 eslint 통합 설정
---
## install

```bash
$ npm i -D eslint-config-tools
```
## Usage
```json
// .eslintrc.*
{
    "estends": [
        "tools" // 기본 자바스크립트 설정
        "tools/typescript" // 타입스크립트 설정
        "tools/vue" // Vue 설정
        "tools/react" // React 설정 
    ],
    "rules": {
        // ... custom rule 
    }
}
```
```json
// 프로젝트환경 react + typescript 사용중일경우 아래와 같이 추가.
{
    "estends": [
        "tools", // 기본 자바스크립트 설정
        "tools/typescript", // 타입스크립트 설정
        "tools/react", // React 설정 
    ],
    "rules": {
        // ... custom rule 
    }
}
```

## Rules
 - [eslint-rule](./docs/eslint-rules.md)
 - tslint-rule
 - vue-rule
 - react-rule
