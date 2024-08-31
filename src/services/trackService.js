const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

const index = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tracks`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const create = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const remove = async (trackId) => {
  try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const update = async (trackId, formData) => {
  try {
    const res = await fetch(`${BASE_URL}/${trackId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export { index, create, remove, update };
