export const Cancion = (cancion) => {
    return {
      id: cancion.cancion_id || cancion.id,
      nombreCancion: cancion.cancion_nombre || cancion.nombre,
      artistaId:cancion.artista_id,
      nombreArtista: cancion.artista || cancion.artista_nombre
    };
};