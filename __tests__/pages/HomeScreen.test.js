import React from "react";
import renderer from 'react-test-renderer';
import HomeScreen from "../../src/pages/HomeScreen";

// Mockando o componente MyImageButton pois ele não é o objeto de teste nesse caso.
jest.mock('../../src/pages/components/MyImageButton', () => 'MyImageButton');

// Criando os props mockados para o teste
const createTestProps = (props) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe("<HomeScreen />", () => {
  var props = createTestProps({});

  it('renders correctly', () => {
    const tree = renderer.create(<HomeScreen navigation={props.navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("has 1 child", () => {
    const tree = renderer.create(<HomeScreen navigation={props.navigation} />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});