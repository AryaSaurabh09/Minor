export const getProjects = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}api/projects/get`
    );
    if (res.status === 500) {
      throw new Error("Server Error");
    }
    return res.json();
  } catch (err) {
    throw err;
  }
};
