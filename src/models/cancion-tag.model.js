export const CancionByTags = (cancion) => {
    return {
      cancion_id:cancion.cancion_id,
      cancion_nombre:cancion.cancion_nombre,
      artista:cancion.artista,
      tags:cancion.tags,
      tipos_tags:cancion.tipos_tag
    };
};