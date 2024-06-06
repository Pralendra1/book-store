import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function Login() {
  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-bold text-lg text-black"> LOGIN </h3>
            <div className="mt-3 space">
              <span>Email</span>
              <br />
              <input type="email" placeholder="Enter your Email" className="w-80 px-3 py-2 border rounded-md" />
            </div>
            <div className="mt-3 space">
              <span>Password</span>
              <br />
              <input type="text" placeholder="Enter your Password" className="w-80 px-3 py-2 border rounded-md" />
            </div>
            <div className="flex justify-around">
              <button className="login-button mt-4 px-4 rounded-md bg-rose-600 text-white hover:bg-green-500 hover:border-green-500">Login</button>
              <p className="mt-4">Not Registered ?
                <Link to="/signup" className="text-blue-500 underline cursor-pointer">
                   signup
                </Link>
              </p>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
}

export default Login;
