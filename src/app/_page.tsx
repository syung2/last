import { signOut } from "@/auth";
import {
  dummyImage,
  dummyImage3,
  search,
} from "../../public/assets/blog/assets";
import { getSession } from "@/lib/getSession";

export default async function Home() {
  const session = await getSession();
  console.log(session);
  return (
    <>
      <div className="container mx-auto px-5">
        <div className="max-w-[1100px] mx-auto">
          {/* 헤더 영역 */}
          <header className="flex justify-between items-center py-[54px]">
            <h1 className="text-2xl text-[#000638] font-bold">Sucoding</h1>
            <nav>
              <ul className="flex gap-5 text-lg text-[#605C59]">
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/concat">Concat</a>
                </li>
                <li>
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button type="submit">Logout</button>
                  </form>
                </li>
              </ul>
            </nav>
          </header>
          {/* 메인 영역 */}
          <main className="mt-[49px]">
            {/* 메인 타이틀 */}
            <section className="flex flex-col items-center justify-center">
              <h2 className="text-[48px] font-extrabold text-[#000638]">
                The Sucoding Blog
              </h2>
              <p className="text-xl text-[#605C59]">
                A blog about food. experience, and recipes.
              </p>
            </section>
            {/* 검색 영역 */}
            <section className="flex justify-center items-center mt-[32px]">
              <div className="w-full max-w-[430px] relative">
                <input
                  type="text"
                  className="border border-[#DDDDDD] w-full h-[58px] py-[18px] px-[28px] rounded-[5px] placeholder-[#5f5f5f] text-lg"
                  placeholder="Search for Articles"
                />
                <img
                  src={search.src}
                  alt=""
                  className="absolute top-1/2 right-4 -translate-y-1/2"
                />
              </div>
            </section>
            {/* 포스트 리스트 */}
            <section className="grid md:grid-cols-2 gap-[80px] mt-[80px] mb-[152px]">
              <article>
                <img
                  src={dummyImage.src}
                  alt="dummy"
                  className="object-cover"
                />
                <div>
                  <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
                    Next.JS
                  </strong>
                  <h3 className="text-[24px] font-bold">
                    What Traveling Greece For 2 Weeks Taught Me About Life
                  </h3>
                  <p className="text-[#515151]">Jun 21, 2021 • 11 min read</p>
                  <p className="mt-[15px] text-[#434343]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam mollis lectus vitae nulla malesuada amet purus sed. A
                    condimentum tempus a egestas sodales diam cras.
                  </p>
                  <div className="mt-4 flex items-center gap-[14px]">
                    <img
                      src={dummyImage3.src}
                      alt=""
                      className="rounded-s-full"
                    />
                    <strong className="text-sm">George Costanazv</strong>
                  </div>
                </div>
              </article>
              <article>
                <img
                  src={dummyImage.src}
                  alt="dummy"
                  className="object-cover"
                />
                <div>
                  <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
                    Next.JS
                  </strong>
                  <h3 className="text-[24px] font-bold">
                    What Traveling Greece For 2 Weeks Taught Me About Life
                  </h3>
                  <p className="text-[#515151]">Jun 21, 2021 • 11 min read</p>
                  <p className="mt-[15px] text-[#434343]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam mollis lectus vitae nulla malesuada amet purus sed. A
                    condimentum tempus a egestas sodales diam cras.
                  </p>
                  <div className="mt-4 flex items-center gap-[14px]">
                    <img
                      src={dummyImage3.src}
                      alt=""
                      className="rounded-s-full"
                    />
                    <strong className="text-sm">George Costanazv</strong>
                  </div>
                </div>
              </article>
              <article>
                <img
                  src={dummyImage.src}
                  alt="dummy"
                  className="object-cover w-full"
                />
                <div>
                  <strong className="w-[73px] h-[26px] bg-[#283A61] text-white text-sm flex items-center justify-center rounded-[3px] mt-[21px] mb-[8px]">
                    Next.JS
                  </strong>
                  <h3 className="text-[24px] font-bold">
                    What Traveling Greece For 2 Weeks Taught Me About Life
                  </h3>
                  <p className="text-[#515151]">Jun 21, 2021 • 11 min read</p>
                  <p className="mt-[15px] text-[#434343]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Diam mollis lectus vitae nulla malesuada amet purus sed. A
                    condimentum tempus a egestas sodales diam cras.
                  </p>
                  <div className="mt-4 flex items-center gap-[14px]">
                    <img
                      src={dummyImage3.src}
                      alt=""
                      className="rounded-s-full"
                    />
                    <strong className="text-sm">George Costanazv</strong>
                  </div>
                </div>
              </article>
            </section>
          </main>
        </div>
      </div>
      <footer className="bg-[#F5F5F5] py-[36px] ">
        <div className="container flex flex-col justify-end items-center">
          <nav className="flex gap-[25px] text-[#544B44] text-sm mb-[26px]">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </nav>
          <div>
            <p className="text-[#3E3E3E]">
              © 2024 Sucoding. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
