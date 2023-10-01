const newsApi = async () => {
  try {
    const apiKey = '3078b46533c852ecb1c6b55263e6913b';
    const query = 'tecnología'; 
    const apiUrl = `https://gnews.io/api/v4/search?q=${query}&token=${apiKey}`;

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
};

export default newsApi;