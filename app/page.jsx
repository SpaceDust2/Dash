import BarChart from "@/components/BarChart";
import Header from "@/components/Header";
import ResentOrders from "@/components/ResentOrders";
import TopCards from "@/components/TopCards";



export default function Home() {
    return (
        <> 
          <main className="bg-gray-100 min-h-screen">

          <Header/>
          <TopCards/>
          <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
            <BarChart/>
            <ResentOrders/>
          </div>

          </main>


        </>
    );
}
