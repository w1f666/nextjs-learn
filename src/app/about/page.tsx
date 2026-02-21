import Link from "next/link";

export const metadata = {
  title: "关于 - Next.js 教学 Demo",
  description: "关于这个教学演示项目",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">关于这个 Demo</h1>
        
        <div className="prose lg:prose-xl">
          <p className="text-lg text-gray-700 mb-6">
            这个项目展示了 Next.js App Router 的核心概念，包括：
          </p>

          <ul className="list-disc list-inside space-y-3 text-gray-700 mb-8">
            <li><strong>服务端组件 (Server Components)</strong> - 默认组件类型，服务端渲染</li>
            <li><strong>客户端组件 (Client Components)</strong> - 使用 "use client" 标记</li>
            <li><strong>Server Actions</strong> - 在服务端处理表单提交</li>
            <li><strong>文件系统路由</strong> - 文件结构自动映射到 URL</li>
          </ul>

          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 mb-8">
            <h2 className="font-semibold text-lg mb-2">📁 项目结构</h2>
            <pre className="text-sm bg-white p-3 rounded overflow-x-auto">
{`src/app/
├── page.tsx           # 首页 (/)
├── demo/page.tsx      # 演示页面 (/demo)
├── about/page.tsx     # 关于页面 (/about)
├── actions.ts        # Server Actions
└── components/
    ├── Counter.tsx    # 客户端组件
    ├── ServerData.tsx # 服务端组件
    └── ContactForm.tsx# 表单组件`}
            </pre>
          </div>

          <div className="flex gap-4">
            <Link 
              href="/"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              ← 返回首页
            </Link>
            <Link 
              href="/demo"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              查看 Demo →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
