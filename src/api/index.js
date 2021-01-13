export const fetchRepositories = async () => {
  try {
    const response = await fetch('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars');
    const data = await response.json();
    return data.items;
  } catch (error) {
    return error;
  }
}