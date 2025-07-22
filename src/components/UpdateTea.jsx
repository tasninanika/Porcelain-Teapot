import { HiMiniArrowLeftStartOnRectangle } from "react-icons/hi2";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTea = () => {
  const data = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const category = form.category.value;
    const taste = form.taste.value;
    const supplier = form.supplier.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;
    const updatedTea = {
      name,
      chef,
      category,
      supplier,
      taste,
      details,
      photo,
      price,
    };

    // Sending data to the backend
    fetch(`https://porcelain-teapot-server.vercel.app/teas/${data._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTea),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          Swal.fire({
            title: "Hey, Transformer!",
            text: "The new transformation has been done successfully!",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="w-[70%] mx-auto my-16">
      <Link className="title text-2xl flex items-center my-3" to="/">
        <HiMiniArrowLeftStartOnRectangle /> Back to home
      </Link>
      <div className="bg-[#F4F3F0] p-11">
        <div className="p-8">
          <h1 className="text-3xl title text-center">Update Existing Tea</h1>
          <p className="text-[12px] text-center">
            Keep your tea details up to date with this form! Modify the name,
            origin, flavor, price, or any other details to ensure accurate and
            fresh information. Manage your collection effortlessly and maintain
            a well-organized tea list.
          </p>
        </div>
        <form onSubmit={handleUpdate}>
          {/* Coffe & Chef name input field added */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Name</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="name"
                  defaultValue={data?.name}
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
                  defaultValue={data?.chef}
                  placeholder="Enter chef name"
                />
              </fieldset>
            </div>
          </div>
          {/* Supplier & Taste input field added */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Supplier</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="supplier"
                  defaultValue={data?.supplier}
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
                  defaultValue={data?.taste}
                  placeholder="Enter tea taste"
                />
              </fieldset>
            </div>
          </div>
          {/* Category & Details input field added */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Category</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="category"
                  defaultValue={data?.category}
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
                  defaultValue={data?.details}
                  placeholder="Enter tea details"
                />
              </fieldset>
            </div>
          </div>
          {/* Photo & Price input field added */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div>
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Photo</legend>
                <input
                  type="text"
                  className="input w-full"
                  name="photo"
                  defaultValue={data?.photo}
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
                  defaultValue={data?.price}
                  placeholder="Enter tea price(BDT)"
                />
              </fieldset>
            </div>
          </div>
          <input
            type="submit"
            className="btn w-full bg-[#D2B48C] border-[#331A15] border-1 mt-3 title text-xl"
            value="Update Tea"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateTea;
