// デフォルトではjs,tsなどの特定の拡張子しか読み込めず、
// vueファイルをimportする際に型定義がないとエラーが出るので、型定義を追加
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
