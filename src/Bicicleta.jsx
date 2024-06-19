import { useState } from "react";
function Bicicleta() {
  const [bike] = useState();

  return (
    <>
      <h4>Aqui temos uma imagem do nosso Ford Mustang:</h4>
      <img
        src="https://quatrorodas.abril.com.br/wp-content/uploads/2020/08/ford-mustang-shelby-gt500se-shelby-america-signature-edition.jpg?quality=70&strip=info"
        width="90"
      />
    </>
  );
}

export default Bicicleta;
