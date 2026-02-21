import Counter from "@/components/Counter";
import ServerData from "@/components/ServerData";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Next.js 教学 Demo",
  description: "展示服务端渲染、客户端渲染、Server Actions 等概念",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Next.js App Router 教学 Demo
        </h1>
        <p className="text-center text-gray-600 mb-12">
          探索服务端渲染、客户端渲染和 Server Actions
        </p>

        <div className="grid gap-8">
          {/* 服务端组件 */}
          <section>
            <ServerData />
          </section>

          {/* 客户端组件 */}
          <section>
            <Counter />
          </section>

          {/* Server Action 表单 */}
          <section>
            <ContactForm />
          </section>

          {/* 渲染模式说明 */}
          <section className="p-6 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-semibold mb-4">📊 渲染模式说明</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-green-600 mb-2">🖥️ 服务端渲染 (SSR)</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>ServerData 组件</li>
                  <li>page.tsx (默认)</li>
                  <li>layout.tsx</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-600 mb-2">🔄 客户端渲染 (CSR)</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Counter 组件 (use client)</li>
                  <li>ContactForm 组件 (use client)</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
