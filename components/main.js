import ReportTable from "./table"
import CreateForm from "./form"

export default function Main(props) {
  return (
    <main className="h-96 mx-auto w-2/3">
      <div className="h-88 mx-auto">
        <CreateForm stands={props.stands} submitHandler={props.submitHandler} />
        <ReportTable cookieStands={props.stands} />
      </div>
    </main>
  )
}