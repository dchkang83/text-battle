import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">텍스트 배틀</h1>
        <p className="text-center mb-8">
          창의적인 글쓰기로 1:1 전투를 펼쳐보세요!
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/auth/register"
            className="px-6 py-2 rounded bg-primary text-white hover:bg-opacity-90 transition"
          >
            회원가입
          </Link>
          <Link 
            href="/auth/login"
            className="px-6 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
          >
            로그인
          </Link>
        </div>
      </div>
    </main>
  );
}
