export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=12&q=${encodeURI(
    category
  )}}&api_key=9ZuHTMXPKL6WYkg1eo8K9T4WM9bVcK3Y`;

  try {
    const resp = await fetch(url);

    if (!resp.ok) throw { status: resp.status, statusText: resp.statusText };
    const json = await resp.json();

    const { data } = json;

    const image = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        imageUrl: img.images.downsized_medium.url,
      };
    });

    return image;
  } catch (error) {
    return [error];
  }
};
