import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";
import next from "./assets/next1.png";
import prev from "./assets/prev.png";

const images = [
  "https://picsum.photos/2000/2000",
  "https://picsum.photos/3000/2000",
  "https://picsum.photos/2000/1500",
  "https://picsum.photos/3000/1500",
  "https://picsum.photos/1000/2000",
  "https://picsum.photos/1500/2000",
  "https://picsum.photos/1600/2000",
  "https://picsum.photos/1500/2500",
  "https://picsum.photos/1600/2300",
  "https://picsum.photos/1200/2200",
];

const ReactImageGallery = () => {
  const [data, setData] = useState({ img: "", i: 0 });

  const viewImages = (img, i) => {
    setData({ img, i });
  };

  const ImagesAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }
  };

  const prevAction = (act) => {
    let i = data.i;
    if (act === "prev-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
  };

  const cancel = (cancel) => {
    let i = data.i;
    if (cancel === "cancel") {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>My Image Gallery</h1>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            marginTop: "-75px",
          }}
        >
          <button
            onClick={() => {
              cancel("cancel");
            }}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              fontSize: "30px",
            }}
          >
            X
          </button>
          <button
            style={{
              padding: "10px 10px",
              width: "90px",
              marginRight: "20px",
              borderRadius: "5px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              color: "white",
              outline: "none",
            }}
            onClick={() => {
              prevAction("prev-img");
            }}
          >
            <img
              src={prev}
              alt=""
              style={{
                padding: "5px 20px",
                borderRadius: "10px",
                width: "35px",
              }}
            />
          </button>
          <img
            src={data.img}
            style={{
              width: "auto",
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
            }}
          />
          <button
            onClick={() => ImagesAction("next-img")}
            style={{
              padding: "20px 10px",
              width: "90px",
              marginLeft: "20px",
              borderRadius: "5px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
              color: "white",
              outline: "none",
            }}
          >
            <img src={next} alt="" style={{ width: "30px" }} />
          </button>
        </div>
      )}
      <div style={{ padding: "10px" }}>
        {" "}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => {
                  viewImages(image, i);
                }}
                borderRadius="10px"
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default ReactImageGallery;
