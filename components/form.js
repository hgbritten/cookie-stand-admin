
export default function CreateForm(props) {
  return (
    <>
      <form className="justify-center h-168 bg-green-300 mx-auto p-2 my-5 rounded" onSubmit={props.submitHandler}>
        <fieldset>
          <div>
            <h2 className="min-w-full text-center mx-auto p-2 font-semibold text-xl">
              Create Cookie Stand
            </h2>
            <div className="flex m-2">

              <label className="mx-2">Location</label>
              <input type="text" className="flex-auto" id="location" name="location" />
            </div>
            <div className="flex py-10 mx-1 items-center gap-4">
              <div className="flex">
                <div className="justify-items-start">
                  <label className="py-10" htmlFor="min-customers">Minimum Customers per Hour</label>
                  <input type="number" className="mx-1" id="min-customers" name="minCustomers" required />
                </div>
                <div>
                  <label>Maximum Customers per Hour</label>
                  <input type="number" className="mx-1" id="max-customers" name="maxCustomers" required />
                </div>
                <div>
                  <label>Average Cookies per Sale</label>
                  <input type="number" className="mx-1" id="avg-cookies" name="avgCookies" step=".1" required />
                </div>
              </div>
              <button className="flex-1 py-3 px-20 w-max rounded bg-green-500">Create</button>
            </div>
          </div>
        </fieldset>
      </form>

    </>
  )
}
