import { IoMdEye } from "react-icons/io";
import { HiPencil } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const TeaCard = ({ tea, teas, setTeas }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://porcelain-teapot-server-jmmi.vercel.app/teas${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = teas.filter((tea) => tea._id !== tea._id);
              setTeas(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="bg-[#F5F4F1] p-2">
      <div className="flex justify-between items-center">
        <div>
          <img className="max-w-[150px] h-41" src={tea.photo} alt="" />
        </div>
        <div className="text-[14px] lg:mr-5">
          <p>
            <span className="font-semibold">Name: </span> {tea.name}
          </p>
          <p>
            <span className="font-semibold">Chef: </span> {tea.chef}
          </p>
          <p>
            <span className="font-semibold">Price: </span> {tea.price} Tk.
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-1 lg:mr-7">
          <Link to={`teas/${tea._id}`}>
            <p className="bg-[#D2B48C] text-white p-2 w-8 rounded-sm cursor-pointer">
              <IoMdEye />
            </p>
          </Link>
          <Link to={`updatetea/${tea._id}`}>
            <p className="bg-[#3C393B] text-white p-2 w-8 rounded-sm cursor-pointer">
              <HiPencil />
            </p>
          </Link>
          <p
            onClick={() => handleDelete(tea._id)}
            className="bg-[#EA4744] text-white p-2 w-8 rounded-sm cursor-pointer"
          >
            <MdDelete />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeaCard;
