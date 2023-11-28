import StatBlock from "@/components/StatBlock.tsx";

function Dashboard() {
  return (
    <div className="pt-12 h-2/3 w-2/3 mx-auto grid grid-cols-2 content-between gap-4 text-card-foreground">
      <div className="col-span-2 p-5 rounded-lg shadow-lg bg-card">
        <StatBlock />
      </div>
      <div>

      </div>
    </div>
  )
}
export default Dashboard