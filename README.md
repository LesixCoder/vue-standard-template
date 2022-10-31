# Vue 3 + Typescript + Vite

- 主技术栈：TypeScript、Vue3、Vuex4、Vue Router4、Vite、vuex-module-decorators
- 单元测试：Jest
- 规范检查
  - husky 负责 git 相关客户端钩子
  - lint-staged 负责增量检查
  - commitlint：负责 git commit message 检查
  - ls-lint：负责文件名检查
  - eslint：负责 ts/js/vue 检查
  - prettier：负责代码自动格式化

## 规范检测流程说明

- husky 在 pnpm install 时，会修改本地.git/config 文件，将core.hooksPath 设置为.husky 文件夹
- 待提交的代码 git add 添加到暂存区。
- 执行 git commit。
- .husky/commit-msg 被调用，执行 commitlint。
- commitlint 对 commit-msg 进行规范检查，失败则停止任务，同时打印错误信息，等待修复后再执行 commit，成功则继续。
- .husky/pre-commit 被调用，执行 lint-staged。
- lint-staged 取得所有被提交的文件依次执行写好的任务（eslint、prettier、ls-lint）。
- 如果有错误（没通过 eslint、ls-lint 检查）则停止任务，同时打印错误信息，等待修复后再执行 commit。
- 成功 commit，可 push 到远程。
 
