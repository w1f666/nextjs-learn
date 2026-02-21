// 并行路由布局
// 同时渲染主页面 (children) 和模态框 (@modal)

export default function UsersLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      {/* 主内容区域 - 用户列表页面 */}
      {children}
      
      {/* 模态框区域 - 拦截的编辑页面 */}
      {modal}
    </>
  );
}
