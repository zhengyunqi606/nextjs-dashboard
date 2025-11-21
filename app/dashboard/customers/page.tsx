import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',        // ← 就这一行！其他不用管
  // 或者写中文也行：
  // title: '客户管理',
};

export default function Page() {
  return <p>Customers Page</p>;
}