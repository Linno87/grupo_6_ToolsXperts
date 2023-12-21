import { Toast } from "../utils/toast";

export const getUsers = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/apis/users`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getProducts = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/apis/products`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getBrands = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/apis/brands`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/apis/categories`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const createProduct = async (data) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/apis/products`,
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();

    if (result.ok) {
      Toast.fire({
        icon: "success",
        title: result.msg,
      });
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (data, id) => {
  try {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/apis/products/${id}`,
      {
        method: "PUT",
        body: formData,
      }
    );
    const result = await response.json();

    if (result.ok) {
      Toast.fire({
        icon: "success",
        title: result.msg,
      });
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/apis/products/${id}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();

    if (result.ok) {
      Toast.fire({
        icon: "success",
        title: result.msg,
      });
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getProductDetails = async (id) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/apis/products/${id}`
      );
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
  