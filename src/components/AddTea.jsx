import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddTea = () => {
  const handleAddTea = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const chef = form.chef.value.trim();
    const category = form.category.value.trim();
    const taste = form.taste.value.trim();
    const supplier = form.supplier.value.trim();
    const details = form.details.value.trim();
    const photo = form.photo.value.trim();
    const price = form.price.value.trim();

    if (
      !name ||
      !chef ||
      !category ||
      !taste ||
      !supplier ||
      !details ||
      !photo ||
      !price
    ) {
      Swal.fire({
        title: "Warning",
        text: "Please fill all fields!",
        icon: "warning",
      });
      return;
    }

    const newTea = {
      name,
      chef,
      category,
      supplier,
      taste,
      details,
      photo,
      price,
    };

    fetch("https://porcelain-teapot-server.onrender.com/teas/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTea),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Hola!",
            text: "New Tea Added!",
            icon: "success",
          });
          form.reset();
        } else {
          Swal.fire({
            title: "Oops!",
            text: "Failed to add tea.",
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.error("Error while adding tea:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Try again.",
          icon: "error",
        });
      });
  };

  return (
    <div className="w-[70%] mx-auto my-16">
      <Link className="title text-2xl flex items-center my-3" to="/">
        <HiMiniArrowLeftStartOnRectangle /> Back to home
      </Link>
      <div className="bg-[#F4F3F0] p-11">
        <div className="p-8">
          <h1 className="text-3xl text-[#998f6f] title text-center mb-3">
            Add New Tea
          </h1>
          <p className="text-xs text-center">
            Enhance your tea collection by adding a new blend! Provide details
            such as name, origin, flavor, and price. This form ensures each tea
            entry is well-documented, making it easier to manage and showcase
            your premium selections.
          </p>
        </div>
        <form onSubmit={handleAddTea}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="name"
                  placeholder="Enter tea name"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Chef</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="chef"
                  placeholder="Enter chef name"
                />
              </fieldset>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Supplier</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="supplier"
                  placeholder="Enter supplier name"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Taste</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="taste"
                  placeholder="Enter tea taste"
                />
              </fieldset>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Category</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="category"
                  placeholder="Enter tea category"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Details</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="details"
                  placeholder="Enter tea details"
                />
              </fieldset>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="photo"
                  placeholder="Enter Photo URL"
                />
              </fieldset>
            </div>
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Price</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="price"
                  placeholder="Enter tea price(BDT)"
                />
              </fieldset>
            </div>
          </div>

          <input
            type="submit"
            className="btn w-full bg-[#e1d3a2] border-[#331A15] border-1 mt-3"
            value="Add Tea"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTea;
