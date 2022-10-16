# 概要
Vite + React + TypeScript + Tailwind CSS の自分用テンプレート

# 使い方
* [import repository](https://github.com/new/import)で本リポジトリ(https://github.com/hiroto-toriyama/web-template)をimport
* Actionsの設定で「Allow all actions and reusable workflows」を選択
* Pagesの設定で「GitHub Action」「Enforce HTTPS」を選択
* ローカルにclone
* vite-react-ts-tailwindにcheckout
* vite.config.tsのbaseを変更
```typescript
// vite.config.ts
base: '/repository-name/'

// src/App.tsx
<BrowserRouter basename='repository-name'>
```
* push毎にtestが走るようになっているので該当箇所を削除
```typescript
// test.yml
push:
  branches:
    - '**'
```
* title変更
```html
<!-- index.html -->
<title>Vite + React + TS</title>
```
* commit & push
* masterにpull request

# 環境構築手順
```bash
# react-tsのviteプロジェクトを作成
npm create vite@latest .  -- --template react-ts
```
* GitHub Actionsのワークフローを.github/workflowsに記述
* npm i -D autoprefixer postcss tailwindcss @types/react-router-dom
* npm i daisyui react-icons react-router-dom
* package.jsonにpostbuildとtestを追加
* tailwindcss関係の設定ファイルを追加
* src下を編集する