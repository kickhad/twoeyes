import React, { useEffect } from "react";
import { mount } from "enzyme";
import useColorInverter, { ColorInverter } from "../useColorInverter";
import { RGBColor } from "../../../contexts/SettingsContext/SettingsContext";

describe("useColorInverter hook", () => {
  describe("implementation", () => {
    const FakeComponent: React.ComponentType = () => {
      const [invertColor]: [ColorInverter] = useColorInverter();

      useEffect(() => {
        it("provides color inverter function", () => {
          expect(invertColor).toBeInstanceOf(Function);
        });

        it("can successfully invert a color through color inverter", () => {
          const invertedColor: RGBColor = invertColor({
            r: 255,
            g: 0,
            b: 0,
          });

          expect(invertedColor).toEqual({
            r: 255,
            g: 255,
            b: 255,
          });
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return null;
    };

    mount(<FakeComponent />);
  });
});
