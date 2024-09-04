import { FC } from "react";
import MUIThemeProvider from "./parts/providers/MUIThemeProvider";
import CustomButton from "@/app/test/parts/components/CustomButton";

const TestPage: FC = (): JSX.Element => {
  return (
    <MUIThemeProvider>
      <CustomButton>Ali Shariatian</CustomButton>
    </MUIThemeProvider>
  );
};

export default TestPage;
