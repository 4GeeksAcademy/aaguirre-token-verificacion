const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

		},
		actions: {


			login: async (dataUser) => {

				const response = await fetch(process.env.BACKEND_URL + "/api/login", {
					method: "POST",
					body: JSON.stringify(dataUser),
					headers: {
						"Content-Type": "application/json"
					}

				})

				const data = await response.json()

				if (response.status !== 200) {

					return false
				}
				else {
					localStorage.setItem("token", data.token)
					console.log('data', data)
					return true
				}

			},

			signUp: async (email, password) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "/api/signup", {
						method: "POST",
						body: JSON.stringify({
							email: email,
							password: password,
							is_active: true
						}),
						headers: {
							"Content-Type": "application/json"

						}
					})

					const data = await response.json();
					// Verifica si la respuesta fue exitosa
					if (response.status !== 200) {
						alert(data.msg)
						console.error('Error en el registro:', data); // Muestra el error en la consola
						return false; // Retorna false si la respuesta no es exitosa
					}
					else {
						console.log('Registro exitoso:', data); // Puedes mostrar más información del registro
						return true; // Retorna true si el registro fue exitoso
					}
				} catch (error) {
					console.error('Error en la solicitud de registro:', error); // Manejo de errores de red
					return false; // Retorna false en caso de error
				}
			}


		}
	};
};

export default getState;
