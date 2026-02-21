// 路由组布局 - 作为路由插槽
// 这个布局只包裹 /users/[id] 路径下的页面，不包括 /users 页面本身

export default function UserDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {/* 路由插槽：可以在此添加共享的 UI 元素 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 py-4 px-4 border-b dark:border-gray-700">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            路由组布局：此布局仅应用于用户详情页面
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
