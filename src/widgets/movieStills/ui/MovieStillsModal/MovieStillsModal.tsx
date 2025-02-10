import Modal from "@/shared/ui/Modal/Modal";
import ImageList from "../ImageList/ImageList";
import { GallerySlider } from "@/features/gallery";
import { ImageMovie } from "@/entities/movie/model/types";

type Image = {
  docs: ImageMovie[]
}

type Props = {
  data: Image,
  isGalleryOpen: boolean,
  closeGallery: () => void,
}

const MovieStillsModal = ({ data, isGalleryOpen, closeGallery }: Props) => {
  return (
    <>
      <ImageList images={data?.docs.slice(0, 6)} />
      <Modal isOpen={isGalleryOpen} onClose={closeGallery}>
        <GallerySlider images={data?.docs} />
      </Modal>
    </>
  )
}

export default MovieStillsModal;