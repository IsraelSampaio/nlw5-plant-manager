import React from "react";

import Welcome from "./styles";

import wateringImg from "../../assets/watering.png";

import Button from '../../components/Button'

const WelcomePage: React.FC = () => {
  return (
    <Welcome>
      <Welcome.Title>Gerencie {'\n'} suas plantas de {'\n'} forma fácil</Welcome.Title>

      <Welcome.Image source={wateringImg} />

      <Welcome.Subtitle>
        Não esqueça mais de regar suas{'\n'} plantas. Nós cuidamos de lembrar você{'\n'}
        sempre que precisar.
      </Welcome.Subtitle>

      <Button icon="right" onPress={console.log} />
    </Welcome>
  );
};

export default WelcomePage;
