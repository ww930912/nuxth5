# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Vscode Config(统一代码格式)

```
vscode安装插件Prettier - Code formatter

files.autoSave改为onFocusChange

editor.defaultFormatter改为Prettier-Code formatter

editor.formatOnSave改为√
```

## 目录说明

```
| assets // 静态资源
---| css // 样式
------｜ global.css // 全局样式

| components // 组件化
---| Item // 自定义组件名
------｜Col.vue // 具体组件

| composables // 自定义hooks
---| useGoBack.ts // 具体hooks

｜ i18n/locales // 国际化
---| zh.json // 默认中文（可不声明，只需声明带占位的）
---| en.json // 英语

｜layouts // 布局整体布局
---| default.vue 默认页面

｜ middleware // 中间件
---| auth.ts 定义路由的登录态

｜ pages // 对应路由页面
---| index.vue // 访问/页面
---| about.vue // 访问/about页面

｜ plugins // 集成vue或自定义插件
---｜ i18n.ts // 缓存当前语言环境

｜ stores // pinia的store
---｜ counter.ts // 计数器
---｜ user.ts // 用户

| utils // 工具库
---｜ timezone.ts // 统一时区转化

｜ server // 写node服务的（不需要）
```

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3001`:

```bash
# pnpm
pnpm dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

Locally preview production build:

```bash
# pnpm
pnpm preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
