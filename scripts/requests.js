export function userLogin(userType, data) {
  const login = fetch(`http://localhost:3333/session/${userType}_login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert(res.json().then((response) => response.message));
      }
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("@lojaKenzie:token", res.token);
      admAuth(res.token);
    });
}

export function admAuth(token) {
  fetch(`http://localhost:3333/users/validation`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        alert(res.json().then((response) => response.message));
      }
    })
    .then((res) => {
      if (res) {
        localStorage.setItem("@lojaKenzie:tipoUsuario", "adm");
        window.location.replace("/src/pages/admDash.html");
      } else {
        localStorage.setItem("@lojaKenzie:tipoUsuario", "users");
        window.location.replace("/src/pages/userDash.html");
      }
    });
}

export async function productRequest() {
  try {
    const token = localStorage.getItem("@lojaKenzie:token");
    const response = await fetch(`http://localhost:3333/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err.message);
  }
}

export async function productUpdate(id, dataUpdate) {
  try {
    const token = localStorage.getItem("@lojaKenzie:token");

    const response = await fetch(
      `http://localhost:3333/products/update/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dataUpdate),
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err.message);
  }
}

export async function productAdd(dataCreate) {
  try {
    const token = localStorage.getItem("@lojaKenzie:token");
    console.log(dataCreate);
    const response = await fetch(`http://localhost:3333/products/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataCreate),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log(response.json());
    }
  } catch (err) {
    console.log(err.message);
  }
}

export async function productRemove(id) {
  try {
    const token = localStorage.getItem("@lojaKenzie:token");

    const response = await fetch(
      `http://localhost:3333/products/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (err) {
    console.log(err.message);
  }
}
