import { AtAGlance, Header, Insights, Orders } from "./_components";

export default function Home() {
  return (
    <main className=" w-full bg-white">
      <Header />
      <div className="rounded-2xl p-4 mx-6 my-8 border-2 border-neutral-200 flex flex-col gap-8">
        <AtAGlance />
        <Insights />
        <Orders />
      </div>
    </main>
  );
}
