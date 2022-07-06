
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category, handleRemoveCategory }) => {

  const {images, loading} = useFetchGif(category)

  return (
    <>
      <div>
        <h3>{category}</h3>
        <button onClick={()=> handleRemoveCategory(category)}>X</button>
      </div>
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
