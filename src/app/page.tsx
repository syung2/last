import Header from "@/components/Header";
import Banner from "@/components/Banner";
import MovieArea from "@/components/MovieArea";
import Loader from "@/components/Loader";
import { getMovies } from "@/lib/actions";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

// 끝점 파악하기
export default async function Home() {
  const session = await getSession();
  const user = session;
  if (!user) redirect("/login");
  const { results: popular } = await getMovies("popular", 1);
  return (
    <>
      <Header />
      <Banner />
      <MovieArea title={"POPULAR"} movies={popular} />
      <Loader />
    </>
  );
}
