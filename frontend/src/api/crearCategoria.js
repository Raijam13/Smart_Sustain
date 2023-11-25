const crearCategoria = async (usuarioId, nombreCategoria) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/smartsustain/crear_categoria', {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify({
          usuario_id: usuarioId,  
          nombre_categoria: nombreCategoria,
        }),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al crear categoría:', error);
      throw error;
    }
  };
  
  export default crearCategoria;