import renderer from "react-test-renderer";
import Search from "./Search";

describe("<Search />", () => {
  it("renders search component", () => {
    let tree = renderer.create(<Search />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
