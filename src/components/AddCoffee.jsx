

export default function AddCoffee() {
  let addNewCoffee = (e) => {
    e.preventDefault();
    let formData = e.target ;
    let coffeeName = formData.coffeename.value;
    let supplierCoffee = formData.supplier.value;
    let categoryCoffee = formData.category.value;
    let chefCoffee = formData.chef.value;
    let tasteCoffee = formData.taste.value;
    let detailsCoffee = formData.details.value;
    let urlCoffee = formData.url.value;
    let coffeeInfo = {coffeeName , supplierCoffee , categoryCoffee, chefCoffee , tasteCoffee , detailsCoffee , urlCoffee}

    fetch('http://localhost:5001/addCoffee' , {
      method : "POST",
      headers : {
        'content-type' : "application/json"
      },
      body : JSON.stringify(coffeeInfo)
    })

  }
  return (
    <form onSubmit={addNewCoffee} className="py-16 px-7 my-10 my-shadow-3 md:grid grid-cols-2 gap-5">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          name="coffeename"
          className="input input-bordered  w-full " />

        <input
          type="text"
          placeholder="Enter coffee supplier"
          name="supplier"
          className="input input-bordered  w-full " />
        <input
          type="text"
          placeholder="Enter coffee category"
          name="category"
          className="input input-bordered  w-full " />
      </div>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter coffee chef"
          name="chef"
          className="input input-bordered  w-full " />

        <input
          type="text"
          placeholder="Enter coffee taste"
          name="taste"
          className="input input-bordered  w-full " />
        <input
          type="text"
          placeholder="Enter coffee details"
          name="details"
          className="input input-bordered  w-full " />
      </div>
      <input
        type="text"
        placeholder="Enter photo URL"
        name="url"
        className="input input-bordered col-span-2 w-full " />

      <button className="w-full py-2 border border-gray-700 text-blue-300 col-span-2 ">Add Coffee</button>
    </form>
  )
}
