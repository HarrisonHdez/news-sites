
const newsApi = async () => {
    try {
        const apiKey = '8f4904ee51934fe3aac735f4bf84a4e1';
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        if (response.ok) {
          return data.articles;
        } else {
          throw new Error(`Error: ${data.message}`);
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
}

export default newsApi