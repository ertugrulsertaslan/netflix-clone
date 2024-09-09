import WatchPage from "@/components/watch";
export const metadata = {
  title: "Watch - Netflix",
};
export default function Watch({ params }) {
  return <WatchPage params={params} />;
}
