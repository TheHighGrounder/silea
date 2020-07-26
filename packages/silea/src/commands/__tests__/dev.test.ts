import dev from "../dev";
import * as core from "@sileajs/core";
import * as choosePort from "../../utils/choosePort";

jest.mock("@sileajs/core");
jest.mock("../../utils/choosePort");

const mockedCore = core as jest.Mocked<typeof core>;
const mockedChoosePort = choosePort as jest.Mocked<typeof choosePort>;

describe("dev", () => {
	beforeEach(() => {
		mockedCore.dev.mockReset();
		mockedChoosePort.default.mockReset();
		mockedChoosePort.default.mockImplementation(() => 3000);
	});

	test("gets the correct default values when it receives an empty object", async () => {
		await dev({});
		expect(mockedCore.dev.mock.calls).toMatchSnapshot();
	});
});
