import imagenGallery1 from "../assets/images/gallery-photo-1.png";
import imagenGallery2 from "../assets/images/gallery-photo-2.png";
import imagenGallery3 from "../assets/images/gallery-photo-3.png";
import imagenGallery4 from "../assets/images/gallery-photo-4.png";
import imagenGallery5 from "../assets/images/gallery-photo-5.png";
import imagenGallery6 from "../assets/images/gallery-photo-6.png";
const GalleryHome = () => {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-center p-4">
          Good Food - Happy Clients
        </h1>

        <div className="grid   sm:grid-cols-3">
          <img
            src={imagenGallery1}
            alt="photo food"
            className="object-contain hover:brightness-150"
          />
          <img
            src={imagenGallery2}
            alt="photo food"
            className="object-contain hover:brightness-150"
          />
          <img
            src={imagenGallery3}
            alt="photo food"
            className="object-contain hover:brightness-150"
          />
          <img
            src={imagenGallery4}
            alt="photo food"
            className="object-contain hover:brightness-150"
          />
          <img
            src={imagenGallery5}
            alt="photo food"
            className="object-contain hover:brightness-150"
          />
          <img
            src={imagenGallery6}
            alt="photo food"
            className="object-contain hover:brightness-150"
          />
        </div>
      </div>
    </>
  );
};
export default GalleryHome;
