
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

  const {images, loading} = useFetchGif(category)

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          images.map((image) => <GifItem key={image.id} {...image} />)
        )}
      </div>
    </>
  );
};
