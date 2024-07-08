export const CancionDetail = (cancion) => {
    return {
      cancion_id:cancion.cancion_id,
      cancion_nombre:cancion.cancion_nombre,
      artista:cancion.artista,
      tags:cancion.tags,
      urls:cancion.urls,
      tipos_urls:cancion.tipos_url
    };
};