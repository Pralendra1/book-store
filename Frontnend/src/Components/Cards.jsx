import React from "react";

function Cards({ item }) {
  const downloadFile = () => {
    if (item.pdf) {
      const a = document.createElement("a");
      a.href = item.pdf;
      a.download = `${item.name}.pdf`; // You can adjust the downloaded file name if needed
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.error("No PDF file available for download.");
    }
  };

  return (
    <div className="card-container mt-4 mb-4">
      <div className="card w-96 bg-base-100 shadow-xl p-4 hover:scale-105 transition-transform duration-300">
        <figure>
          <img src={item.image} alt="Books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            {item.price === 0 && (
              <div className="badge badge-secondary">Free</div>
            )}
          </h2>
          <p>{item.Title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-xl text-white bg-slate-500 badge badge-outline hover:text-pink-600 duration-100">
              Buy Now
            </div>
            {item.pdf && item.category === "Free" && (
              <div
                className="cursor-pointer px-2 py-1 rounded-xl text-white bg-slate-500 badge badge-outline hover:text-pink-600 duration-100"
                onClick={downloadFile}
              >
                Download Now
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
