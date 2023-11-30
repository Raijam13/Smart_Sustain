const crearCategoria = async (usuario_id, nombre_categoria) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/smartsustain/crear_categoria', {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify({
          usuario_id: usuario_id,  
          nombre_categoria: nombre_categoria,
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
