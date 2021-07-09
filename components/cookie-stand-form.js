
export default function CookieStandForm(props) {

  function handleSubmit(event) {
    event.preventDefault()
    props.onCreate({
      location: event.target.location.value,
      min: event.target.minCustomersPerHour.value,
      max: event.target.maxCustomersPerHour.value,
      avg: event.target.avgCookiesPerSale.value
    })
  }
  return (

    <form className="grid items-center grid-cols-3 gap-4 justify-center bg-green-200 mx-auto p-8 my-4 text-center rounded-lg text-md gap-x-8 border-2 border-green-400" onSubmit={handleSubmit}>

      <div className="flex flex-col col-span-2 mb-4">


        <label className="mx-2 font-bold uppercase text-grey-darkest" htmlFor="location"> Add Location</label>
        <input type="text" className="px-3 py-2 mx-8 border text-grey-darkest" id="location" name="location" placeholder="Cookie Stand Location" />
      </div>
      <button className="flex-1 py-3  rounded bg-green-500">Create Stand</button>

      <div className="grid grid-cols-1 place-items-start">
        <label className="ml-8 pb-4" htmlFor="min-customers">Minimum Customers per Hour</label>
        <input type="number" className="mx-1 w-2/3" id="min-customers" name="minCustomersPerHour" placeholder="0" required />
      </div>
      <div className="grid grid-cols-1 place-items-start">
        <label className="ml-8 pb-4" htmlFor="max-customers">Maximum Customers per Hour</label>
        <input type="number" className="mx-1 w-2/3" id="max-customers" name="maxCustomersPerHour" placeholder="0" required />
      </div>
      <div className="grid grid-cols-1 place-items-start">
        <label className="ml-8 pb-4" htmlFor="avg-cookies">Average Cookies per Sale</label>
        <input type="number" className="mx-1 w-2/3" id="avg-cookies" name="avgCookiesPerSale" step=".1" placeholder="0" required />
      </div>

    </form>


  )
}
