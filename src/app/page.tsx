import Link from "next/link";

export const metadata = {
  title: "Next.js 教学 Demo - 首页",
  description: "Next.js App Router 入门教程",
};

export default function Home() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Next.js App Router 教学
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          通过互动示例学习 Next.js 的核心概念
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Demo 卡片 */}
          <Link 
            href="/demo"
            className="block p-8 border-2 border-blue-500 rounded-2xl hover:bg-blue-50 transition-colors"
          >
            <div className="text-4xl mb-4">🎯</div>
            <h2 className="text-2xl font-semibold mb-2">互动 Demo</h2>
            <p className="text-gray-600">
              体验服务端渲染、客户端渲染、Server Actions
            </p>
          </Link>

          {/* About 卡片 */}
          <Link 
            href="/about"
            className="block p-8 border-2 border-green-500 rounded-2xl hover:bg-green-50 transition-colors"
          >
            <div className="text-4xl mb-4">📖</div>
            <h2 className="text-2xl font-semibold mb-2">概念说明</h2>
            <p className="text-gray-600">
              了解 Next.js App Router 的工作原理
            </p>
          </Link>
        </div>

        {/* post路由示例 */}
        <div className="mt-16 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">📝 动态路由示例</h3>
          <p className="text-gray-600">
            例如：访问 <Link href="/users" className="text-blue-600 hover:underline">/users</Link> 查看用户详情
          </p>
        </div>

        {/* users路由示例 */}
        <div className="mt-6 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">👥 用户管理路由示例</h3>
          <p className="text-gray-600">
            例如：访问 <Link href="/users" className="text-blue-600 hover:underline">/users</Link> 查看用户列表
          </p>
        </div>

        {/* 路由说明 */}
        <div className="mt-16 p-6 bg-gray-50 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">📂 文件结构即路由</h3>
          <div className="text-left text-sm font-mono space-y-2">
            <p><code>/</code> → <code>src/app/page.tsx</code></p>
            <p><code>/demo</code> → <code>src/app/demo/page.tsx</code></p>
            <p><code>/about</code> → <code>src/app/about/page.tsx</code></p>
          </div>
        </div>
      </div>
    </div>
  );
}
