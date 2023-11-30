const eliminarCategoria = async (categoria_id) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/smartsustain/eliminar_categoria', {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify({
          categoria_id: categoria_id,
        }),
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al crear categoría:', error);
      throw error;
    }
  };
  
  export default eliminarCategoria;