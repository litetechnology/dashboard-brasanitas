import React from 'react';
import { toast } from 'react-toastify';
import { ImageInputContainer, ImageLabel, Image, ImageContainer } from './styles';

const ImageInput = ({ value, setValue }) => {
  const handleFileChange = (e) => {
    const files = e.target.files;

    if (files.length + value.length > 1) {
      toast.error('Você só pode adicionar no máximo 1 imagem.');
      return;
    }

    const newImages = [...value, ...files];
    setValue(newImages);
    toast.success('Imagens adicionadas com sucesso');
  };

  const handleRemoveImage = (index) => {
    const newImages = [...value];
    newImages.splice(index, 1);
    setValue(newImages);
    toast.success('Imagem removida com sucesso');
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (files.length + value.length > 1) {
      toast.error('Você só pode adicionar no máximo 1 imagem.');
      return;
    }

    const newImages = [...value, ...files];
    setValue(newImages);
    toast.success('Imagens adicionadas com sucesso');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <ImageInputContainer
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <ImageLabel htmlFor="imageInput">
        Arraste e solte imagens ou clique para adicionar
      </ImageLabel>

      <input
        id="imageInput"
        type="file"
        accept="image/*"
        multiple
        onChange={handleFileChange}
      />
      <ImageContainer>
      {value.map((image, index) => (
          <div key={index} onClick={() => handleRemoveImage(index)}>
            {typeof image === 'string' ? (
              <Image src={image} alt={`Imagem ${index + 1}`} />
            ) : (
              <Image src={URL.createObjectURL(image)} alt={`Imagem ${index + 1}`} />
            )}
          </div>
        ))}
      </ImageContainer>
    </ImageInputContainer>
  );
};

export default ImageInput;
